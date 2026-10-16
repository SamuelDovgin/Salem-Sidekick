import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const library=[...pack.roles,...pack.states],byId=new Map(library.map(r=>[r.id,r]));
test('all 64 current roles have distinct sourced visibility priorities, including transformed feedback',()=>{
 const authored=JSON.parse(readFileSync(new URL('../content/role-priorities.json',import.meta.url)));
 assert.deepEqual(Object.keys(authored).sort(),library.map(r=>r.id).sort());
 for(const r of library){
  const p=r.priorityGuide;
  for(const key of ['mustKnow','goodToKnow']){
   assert.deepEqual(p[key],authored[r.id][key],r.name);
   assert.ok(p[key].title.trim()&&p[key].body.trim(),r.name);
   assert.ok(p[key].body.split(/\s+/).length<=65,r.name+': keep quick guidance scannable');
  }
  assert.deepEqual(p.sourceUrls,r.studyGuide.sourceUrls,r.name);
  if(r.parentId){assert.ok(p.dawn?.trim(),r.name);assert.notDeepEqual(p.mustKnow,byId.get(r.parentId).priorityGuide.mustKnow,r.name);}
 }
 assert.equal(new Set(library.map(r=>r.priorityGuide.mustKnow.title)).size,64);
 assert.match(byId.get('cleric').priorityGuide.mustKnow.body,/Grace Period/);
 assert.match(byId.get('arsonist').priorityGuide.mustKnow.body,/self-doused/);
 assert.match(byId.get('death').priorityGuide.dawn,/Surviving this day/);
});
test('every base role and state has an opinion, targeting fallback, pivot and ranked priorities',()=>{
 assert.equal(library.length,64);assert.equal(new Set(library.map(r=>r.playbook.headline)).size,64);
 for(const r of library){for(const f of ['headline','firstNight','reason','targetRule','pivot','expanded'])assert.ok(r.playbook[f]?.trim(),`${r.name}: ${f}`);assert.equal(r.playbook.laterPriorities.length,3,r.name);assert.ok(r.playbook.sourceUrls.length,r.name);}
});
test('every selectable claim has its own example, blank format and maintenance obligations',()=>{
 for(const r of library){const p=r.claimProfile;assert.ok(p.example.split('\n')[0].startsWith(r.name),r.name);assert.ok(p.blank.startsWith(r.name+'\n'),r.name);assert.ok(p.posting&&p.payoff&&p.exposure&&p.effort,r.name);assert.ok(p.willGuidance.length>=3,r.name);}
});
test('all opposing-role claim audits reference complete profiles and explain real overlap plus exposure',()=>{
 const opponents=pack.roles.filter(r=>!r.alignment.startsWith('Town'));assert.equal(opponents.length,31);let count=0;
 for(const r of opponents){assert.ok(r.claimAudit.summary);assert.ok(r.claimOptions.length>=4);assert.equal(r.preferredClaimId,r.claimOptions[0].roleId);for(const c of r.claimOptions){assert.ok(byId.has(c.roleId));assert.equal(c.alignment,byId.get(c.roleId).alignment);assert.ok(c.why&&c.exposure&&c.tag);count++;}}
 assert.ok(count>=150);
});
test('Voodoo policy and cover costs resolve the beginner ambiguity',()=>{
 const vm=byId.get('voodoo-master');assert.equal(vm.preferredClaimId,'cleric');assert.match(vm.playbook.firstNight,/Silence/);assert.match(vm.playbook.firstNight,/Blind/);assert.match(vm.playbook.laterPriorities[0],/Blind/);assert.match(vm.playbook.laterPriorities[2],/Deafen/);
 assert.equal(byId.get('cleric').claimProfile.effort,'Low upkeep');assert.equal(byId.get('psychic').claimProfile.effort,'High upkeep');assert.match(vm.claimAudit.summary,/no invented vision/);
});
test('Medusa N1 advice checks the TP cover before recommending an observable Stone visit',()=>{
 const r=byId.get('medusa');
 assert.match(r.playbook.firstNight,/Grace Period.*stay home and do not Stone/i);
 assert.match(r.routes[0].goals[0],/N1 notice/);
 assert.match(r.routes.find(x=>x.id==='coordinated-mark').when,/Grace Period must be confirmed off/);
 const cover=r.claimOptions.find(x=>x.roleId==='cleric');
 assert.match(cover.strategy[0],/stay home and do not Stone/);
 assert.match(cover.exposure,/observed N1 Stone visit/);
 for(const id of ['cleric','bodyguard','crusader','oracle']){
  const p=byId.get(id).claimProfile;
  assert.doesNotMatch(p.example,/\nN1:/,id);
  assert.ok(p.openingConstraint.sourceUrls.length,id);
 }
});
test('protective examples do not manufacture saves and tips keep death exceptions',()=>{
 const cleric=byId.get('cleric').claimProfile;assert.equal(cleric.example,'Cleric\nN2: Barrier @4\nN3: Barrier @7');assert.match(cleric.willGuidance.join(' '),/Unstoppable/);assert.match(cleric.willGuidance.join(' '),/observed visit/);assert.doesNotMatch(cleric.example,/saved/i);
});
test('Oracle advice foregrounds astral observation and Arsonist movement modes',()=>{
 const oracle=byId.get('oracle'),arsonist=byId.get('arsonist'),cover=arsonist.claimOptions.find(c=>c.roleId==='oracle');
 assert.match(oracle.claimProfile.movementNote,/Tracker.*Lookout/);
 assert.match(oracle.claimProfile.movementNote,/Other players.*visits remain visible/);
 assert.match(oracle.priorityGuide.goodToKnow.body,/astral/);
 assert.match(cover.why,/Clean.*Ignite.*direct Douse cannot/);
 assert.match(cover.bestWhen,/Prioritize Oracle over Cleric.*Clean.*Ignite/);
 assert.match(cover.exposure,/observed direct Douse/);
 assert.match(oracle.claimProfile.openingConstraint.body,/real Douse or direct book attack can still be observed/);
 assert.doesNotMatch(oracle.claimProfile.expanded,/assumes N1 Aegis is enabled/);
});
test('higher-payoff role information does not erase movement or demonstration risks',()=>{
 assert.match(byId.get('potion-master').claimOptions.find(c=>c.roleId==='seer').exposure,/two|both/);
 assert.match(byId.get('wildling').claimOptions[0].tag,/information/);
 assert.match(byId.get('deputy').claimProfile.exposure,/shot/);
 assert.match(byId.get('psychic').claimProfile.example,/N1 Good: @4, @9/);assert.match(byId.get('psychic').claimProfile.example,/N2 Evil: @2, @7, @11/);
});
test('inactive and preparation roles retain legal opening recommendations',()=>{
 assert.match(byId.get('deputy').playbook.firstNight,/no night|No night|no N1|No N1/i);assert.match(byId.get('trapper').playbook.firstNight,/Build|build/);assert.match(byId.get('vigilante').playbook.firstNight,/Load|load/);assert.match(byId.get('berserker').playbook.firstNight,/cannot/);
});

test('every selected claim explains its ability; Town claims include a plain-language promise and example',()=>{
 for(const r of library){const p=r.claimProfile;assert.ok(p.plainAbility?.trim()&&p.claimMeaning?.trim(),r.name);if(r.faction==='Town')assert.ok(p.simpleExample?.trim(),r.name);}
 const crus=byId.get('crusader').claimProfile;assert.match(crus.plainAbility,/one random direct visitor/);assert.match(crus.claimMeaning,/BOTH protection/);assert.match(crus.simpleExample,/does not mean you attacked player 4/);
 const psy=byId.get('psychic').claimProfile;assert.match(psy.plainAbility,/two names/);assert.match(psy.plainAbility,/three names/);assert.match(psy.simpleExample,/Either or both/);
});

test('every role has distinct ranked conditional routes with matching checkpoints and sources',()=>{
 let count=0;for(const r of library){assert.equal(r.routes[0].id,'default');assert.equal(r.routes[0].headline,r.playbook.headline);assert.ok(r.routes.length>=2,r.name);const ids=new Set();for(const [i,route] of r.routes.entries()){assert.ok(!ids.has(route.id),r.name);ids.add(route.id);assert.equal(route.rank,i+1);for(const f of ['label','headline','when','action','reason','targetRule','pivot','risk'])assert.ok(route[f]?.trim(),r.name+': '+f);assert.equal(route.goals.length,3);assert.equal(route.laterPriorities.length,3);assert.ok(route.sourceUrls.length);count++;}}assert.ok(count>=128);
});
test('ranked claims explain the pairing in multiple bullets rather than only shared movement',()=>{
 for(const r of library){assert.ok(r.claimOptions.length,r.name);for(const [i,o]of r.claimOptions.entries()){assert.ok(byId.get(o.roleId).alignment.startsWith('Town'));assert.equal(o.rank,i+1);assert.ok(o.strategy.length>=4,r.name+': '+o.roleId);assert.ok(o.bestWhen&&o.sourceUrls.length);assert.equal(new Set(o.strategy).size,o.strategy.length);}}
 const j=byId.get('jester');assert.deepEqual(j.claimOptions.slice(0,2).map(o=>o.roleId),['deputy','sheriff']);assert.ok(j.claimOptions.length>=5);
});
test('route and claim sources use source pages and the cover library retains official ability names',()=>{
 for(const r of library){for(const x of [...r.routes,...r.claimOptions])for(const u of x.sourceUrls)assert.match(u,/^https:\/\//,r.name);}
 assert.match(byId.get('oracle').claimProfile.example,/Aegis Sheriff/);assert.doesNotMatch(byId.get('jinx').playbook.reason,/friendly fire/);assert.match(byId.get('jinx').playbook.reason,/Coven allies.*excluded/);
});

test('study guides cover every role and state with source-linked mechanics and summarized detail',()=>{
 for(const r of library){const g=r.studyGuide;assert.ok(g.summary&&g.reviewedOn,r.name);assert.ok(g.sections.length>=4,r.name);assert.ok(g.details.length>=4,r.name);assert.equal(g.sourceUrls.length,2);for(const section of [...g.sections,...g.details]){assert.ok(section.title&&section.markdown,r.name);assert.doesNotMatch(section.markdown,/\]\((?!https?:)/);}}
 for(const r of pack.states){assert.match(r.studyGuide.details[0].title,/before transformation/);assert.ok(r.studyGuide.summary.includes(r.name==='Death'?'Survive':'Defense')||r.id==='pestilence');}
});
test('Town Power has truthful defaults plus role-specific temporary concealment options',()=>{
 const powers=pack.roles.filter(r=>r.alignment==='Town Power');assert.equal(powers.length,5);
 for(const r of powers){assert.equal(r.preferredClaimId,r.id);assert.equal(r.claimOptions[0].roleId,r.id);assert.equal(r.claimOptions.length,3);assert.match(r.claimAudit.summary,/temporary cover/);for(const o of r.claimOptions.slice(1)){assert.match(o.tag,/Optional concealment/);assert.ok(o.exposure&&o.strategy.length>=4);assert.ok(o.sourceUrls.includes(r.source_url));}}
});

test('base-role study references include readable stats, phase and charge limits from reviewed role records',()=>{
 for(const r of pack.roles){const f=r.studyGuide.facts;assert.ok(f.attack&&f.defense&&f.sourceRevision,r.name);assert.equal(f.sourceUrl,r.source_revision_url);assert.doesNotMatch(JSON.stringify(f),/\{\{|\[\[|<span|File:/);for(const a of f.abilities)assert.ok(a.name&&a.phase&&a.uses,r.name);}
 assert.equal(byId.get('jailor').studyGuide.facts.abilities.find(a=>a.name==='Execute').uses,'3');assert.match(byId.get('monarch').studyGuide.facts.defense,/Knight/);assert.equal(byId.get('pilgrim').studyGuide.facts.abilities.length,0);
});

test('Town Power recommendations explain a distinct truthful opening, reveal condition and cover exception',()=>{
 const powers=pack.roles.filter(r=>r.alignment==='Town Power');
 for(const field of ['opening','reason','revealWhen','coverWhen'])assert.equal(new Set(powers.map(r=>r.claimRecommendation[field])).size,5);
 for(const r of powers){const p=r.claimRecommendation;assert.match(p.opening,/TPow/);assert.equal(r.claimOptions[0].why,p.reason);assert.equal(r.claimOptions[0].exposure,p.revealWhen);assert.deepEqual(r.claimOptions[0].strategy,p.strategy);assert.equal(r.preferredClaimId,r.id);assert.match(r.claimAudit.summary,/not the recommended start/);}
 assert.match(byId.get('jailor').claimRecommendation.revealWhen,/protection/);assert.match(byId.get('mayor').claimRecommendation.revealWhen,/vote/);assert.match(byId.get('marshal').claimRecommendation.revealWhen,/Tribunal/);assert.match(byId.get('prosecutor').claimRecommendation.revealWhen,/ordinary voting/);assert.match(byId.get('monarch').claimRecommendation.revealWhen,/knighting/);
});
