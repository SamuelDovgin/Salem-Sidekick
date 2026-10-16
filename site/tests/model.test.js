import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {initialState,restoreState,getDraft,newEntry,nextDayCycle,exportDraft,selectActual,selectedRoute,openingClaimRisk} from '../dist/model.js';
import {markdown} from '../dist/markdown.js';
const data=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const library=[...data.roles,...data.states];const role=id=>library.find(r=>r.id===id);
test('Medusa protective covers flag the N1 visit conflict without banning every role action',()=>{
 for(const id of ['cleric','bodyguard','crusader']){
  const warning=openingClaimRisk(role('medusa'),role(id));
  assert.equal(warning.condition,'grace-period');
  assert.match(warning.body,/If Grace Period is active/);
  assert.match(warning.body,/stay home/);
  assert.match(warning.body,/nonvisiting/);
  assert.match(warning.body,/If Grace Period is off/);
 }
 assert.equal(openingClaimRisk(role('medusa'),role('psychic')),null);
 assert.equal(openingClaimRisk(role('cleric'),role('cleric')),null);
 assert.equal(openingClaimRisk(role('death'),role('cleric')),null);
 assert.equal(openingClaimRisk(role('medusa'),role('trapper')).condition,'build-before-place');
 assert.equal(openingClaimRisk(role('medusa'),role('oracle')).condition,'normal-visible-visit');
 assert.equal(openingClaimRisk(role('arsonist'),role('cleric')).condition,'grace-period');
});
test('a Tracker public export cannot include actual Wildling intelligence',()=>{
 const s=initialState();s.actualId='wildling';s.claimId='tracker';
 const d=getDraft(s,'public','tracker'),e=newEntry(d,role('tracker'));e.target='4';e.feedback='visited 9';
 const secret=newEntry(getDraft(s,'private','wildling'),role('wildling'));secret.target='4';secret.feedback='visited by 7; whispered Coven plan';secret.notes='book holder';
 const out=exportDraft(s,'public',role('tracker')).text;
 assert.match(out,/Tracker\nN1: Track 4/);assert.match(out,/visited 9/);assert.doesNotMatch(out,/Wildling|whispered|Coven|book holder|visited by 7/);
});
test('switching claims preserves independently edited drafts',()=>{
 const s=initialState();getDraft(s,'public','tracker').title='My tracker draft';getDraft(s,'public','lookout').title='My lookout draft';
 s.claimId='lookout';s.claimId='tracker';assert.equal(getDraft(s,'public',s.claimId).title,'My tracker draft');
});
test('actual-role changes reset the cover while preserving saved drafts and role history',()=>{
 const s=initialState();s.deliberateClaim=true;newEntry(getDraft(s,'public','sheriff'),role('sheriff')).target='4';selectActual(s,role('baker'),library);
 assert.equal(s.actualId,'baker');assert.equal(s.claimId,role('baker').preferredClaimId);assert.equal(s.deliberateClaim,false);assert.equal(s.timeline[0].roleId,'baker');assert.equal(s.drafts.public.sheriff.entries[0].target,'4');
});
test('every different role and transformed state resets even a deliberate cover with saved notes',()=>{
 for(const r of library){
  const s=initialState();s.actualId=r.id==='sheriff'?'wildling':'sheriff';s.claimId='trapper';s.deliberateClaim=true;
  getDraft(s,'public','trapper').title='Keep this earlier public history';getDraft(s,'private',s.actualId).title='Keep private history';
  const before=JSON.stringify(s.drafts);
  selectActual(s,r,library);
  assert.equal(s.claimId,r.preferredClaimId,r.name);assert.equal(s.deliberateClaim,false,r.name);assert.equal(JSON.stringify(s.drafts),before,r.name);
 }
});
test('an untouched evil-role selection starts with its explained cover',()=>{
 const s=initialState();selectActual(s,role('poisoner'),library);assert.equal(s.claimId,'tavern-keeper');
});
test('next-night numbering ignores later day entries and permits same-night actions',()=>{
 const d={entries:[]};newEntry(d,role('sheriff'),'N');const day=newEntry(d,role('sheriff'),'D');day.cycle=7;
 assert.equal(newEntry(d,role('sheriff'),'N').cycle,2);assert.equal(newEntry(d,role('sheriff'),'N',true).cycle,2);assert.equal(nextDayCycle(d),8);
});
test('chronology is N1, D2, N2 with stable same-night entries',()=>{
 const s=initialState(),r=role('sheriff'),d=getDraft(s,'public',r.id);
 for(const [phase,cycle,target]of [['N',2,'7'],['D',2,'6'],['N',1,'4'],['N',2,'9']])Object.assign(newEntry(d,r,phase),{phase,cycle,target});
 const rows=exportDraft(s,'public',r).text.split('\n').slice(1);assert.match(rows[0],/^N1/);assert.match(rows[1],/^D2/);assert.match(rows[2],/^N2.*7/);assert.match(rows[3],/^N2.*9/);
});
test('a missing result never becomes Innocent; failure stays distinct',()=>{
 const s=initialState(),r=role('sheriff'),d=getDraft(s,'public',r.id),e=newEntry(d,r);e.target='4';assert.doesNotMatch(exportDraft(s,'public',r).text,/Innocent|Suspicious/);
 e.result='Failed / no result';e.feedback='Roleblocked';assert.match(exportDraft(s,'public',r).text,/Failed \/ no result; Roleblocked/);
});
test('incomplete target rows are omitted but explicit failure is preserved',()=>{
 const s=initialState(),r=role('sheriff'),e=newEntry(getDraft(s,'public',r.id),r);assert.equal(exportDraft(s,'public',r).omitted,1);e.result='Failed / no result';assert.equal(exportDraft(s,'public',r).included,1);
});
test('corpse/destination, role targets, and day-only actions use distinct fields',()=>{
 const s=initialState(),r=role('retributionist'),e=newEntry(getDraft(s,'public',r.id),r);e.via='Dead Sheriff 6';e.target='9';e.result='Innocent';assert.match(exportDraft(s,'public',r).text,/Dead Sheriff 6 -> 9/);
 const oracle=role('oracle'),a=newEntry(getDraft(s,'public','oracle'),oracle);a.target='Sheriff';assert.match(exportDraft(s,'public',oracle).text,/Aegis Sheriff/);
 const deputy=role('deputy'),n=newEntry(getDraft(s,'public','deputy'),deputy,'N');assert.equal(n.action,'Hold / no action');
});
test('Doomsayer requires all three player/guess pairs',()=>{
 const s=initialState(),r=role('doomsayer'),e=newEntry(getDraft(s,'private',r.id),r);e.cycle=2;e.guesses=[{player:'4',role:'Deputy'},{player:'7',role:'Cleric'},{player:'',role:''}];assert.equal(exportDraft(s,'private',r).included,0);
 e.guesses[2]={player:'9',role:'Vigilante'};assert.match(exportDraft(s,'private',r).text,/4=Deputy; 7=Cleric; 9=Vigilante/);
});
test('transformation history stays separate from cover drafts',()=>{
 const s=initialState();getDraft(s,'private','baker').title='Bread count';s.actualId='famine';getDraft(s,'private','famine').title='Starve plan';
 const restored=restoreState(JSON.stringify(s),library);assert.equal(restored.drafts.private.baker.title,'Bread count');assert.equal(restored.drafts.private.famine.title,'Starve plan');
});
test('manual-only text and unusual feedback survive export and storage',()=>{
 const s=initialState(),r=role('sheriff'),d=getDraft(s,'public',r.id),e=newEntry(d,r);e.action='Manual entry';e.notes='Unexpected combined feedback';assert.match(exportDraft(s,'public',r).text,/Unexpected combined feedback/);
 const restored=restoreState(JSON.stringify(s),library);assert.equal(restored.drafts.public.sheriff.entries[0].notes,e.notes);
});
test('corrupt records are rejected and unknown role IDs are recovered safely',()=>{
 assert.throws(()=>restoreState('{bad',library));assert.throws(()=>restoreState('{"schemaVersion":99}',library));
 const s=initialState();s.actualId='unknown';s.recent=['unknown','sheriff'];const r=restoreState(JSON.stringify(s),library);assert.equal(r.actualId,'sheriff');assert.deepEqual(r.recent,['sheriff']);
});
test('Markdown escapes HTML and cannot create javascript links',()=>{
 const out=markdown('<img src=x onerror=alert(1)> **Safe** [bad](javascript:alert(1)) [role](https://example.com/Role_(ToS2))');assert.doesNotMatch(out,/<img|href="javascript:/);assert.match(out,/<strong>Safe<\/strong>/);assert.match(out,/href="https:\/\/example.com\/Role_\(ToS2\)"/);
});

test('saved Coven and Neutral public claims migrate to a Town cover without losing notes',()=>{
 for(const claimId of ['witch','conjurer','jester','death']){
  const s=initialState();s.actualId='jinx';s.claimId=claimId;s.deliberateClaim=true;getDraft(s,'public',claimId).title='Saved history';getDraft(s,'private','jinx').title='Private history';
  const restored=restoreState(JSON.stringify(s),library);assert.equal(restored.actualId,'jinx');assert.equal(restored.claimId,role('jinx').preferredClaimId);assert.equal(restored.deliberateClaim,false);assert.equal(restored.drafts.public[claimId].title,'Saved history');assert.equal(restored.drafts.private.jinx.title,'Private history');
 }
 const town=initialState();town.actualId='witch';town.claimId='oracle';town.deliberateClaim=true;assert.equal(restoreState(JSON.stringify(town),library).claimId,'oracle');
});
test('every actual role and state starts with a Town claim',()=>{
 for(const r of library){const s=initialState();selectActual(s,r,library);assert.ok(role(s.claimId).alignment.startsWith('Town'),r.name);}
});

test('route selection and checkpoints persist per actual role without changing the public claim',()=>{
 const s=initialState();selectActual(s,role('jester'),library);const cover=s.claimId,alternate=role('jester').routes[1];s.routeChoices.jester=alternate.id;s.routeGoals.jester={[alternate.id]:[1]};s.goals.jester=[0];
 const restored=restoreState(JSON.stringify(s),library);assert.equal(selectedRoute(restored,role('jester')).id,alternate.id);assert.equal(restored.claimId,cover);assert.deepEqual(restored.routeGoals.jester[alternate.id],[1]);assert.deepEqual(restored.goals.jester,[0]);
 selectActual(restored,role('oracle'),library);assert.equal(selectedRoute(restored,role('oracle')).id,'default');selectActual(restored,role('jester'),library);assert.equal(selectedRoute(restored,role('jester')).id,alternate.id);
});
test('unknown route selections and invalid route checkpoint indexes are discarded',()=>{
 const s=initialState(),alt=role('jester').routes[1];s.routeChoices={jester:'not-a-route',unknown:alt.id};s.routeGoals={jester:{[alt.id]:[-1,0,3,'1'],unknown:[0]}};const restored=restoreState(JSON.stringify(s),library);assert.equal(selectedRoute(restored,role('jester')).id,'default');assert.deepEqual(restored.routeGoals.jester[alt.id],[0]);assert.equal(restored.routeGoals.jester.unknown,undefined);assert.equal(restored.routeChoices.unknown,undefined);
});

test('switching into each Town Power uses its recommendation instead of inheriting another role cover',()=>{
 for(const r of library.filter(r=>r.alignment==='Town Power')){const s=initialState();selectActual(s,role('voodoo-master'),library);s.claimId='psychic';s.deliberateClaim=true;getDraft(s,'public','psychic').title='Keep this history';selectActual(s,r,library);assert.equal(s.claimId,r.id);assert.equal(s.deliberateClaim,false);assert.equal(s.drafts.public.psychic.title,'Keep this history');}
});
test('a Town Power cover deliberately selected for that same role survives restore and same-role navigation',()=>{
 for(const r of library.filter(r=>r.alignment==='Town Power')){const s=initialState();selectActual(s,r,library);s.claimId=r.claimOptions[1].roleId;s.deliberateClaim=true;const restored=restoreState(JSON.stringify(s),library);selectActual(restored,r,library);assert.equal(restored.claimId,s.claimId);assert.equal(restored.deliberateClaim,true);}
});
