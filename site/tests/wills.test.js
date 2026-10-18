import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const roles=[...pack.roles,...pack.states],byId=new Map(roles.map(r=>[r.id,r]));
test('all 64 wills have a role heading, seven nights, and an independent unfilled skeleton',()=>{
 assert.equal(roles.length,64);
 for(const r of roles){const w=r.willGuide;for(const field of ['example','blank']){assert.equal(w[field].split('\n')[0],r.name);assert.deepEqual([...w[field].matchAll(/^N([1-7])(?: (?:Good|Evil))?:/gm)].map(m=>m[1]),['1','2','3','4','5','6','7'],r.id+' '+field);assert.doesNotMatch(w[field],/[—–_]|@@/,r.id);}assert.ok(w.blank.split('\n').slice(1).every(line=>/^[ND][1-7]:$/.test(line)),r.id+' contains only empty day/night slots');assert.notEqual(w.blank,w.example);assert.doesNotMatch(w.blank,/@\d/,'no illustrative targets in blank '+r.id);assert.equal(r.claimProfile.example,w.example);assert.equal(r.claimProfile.blank,w.blank);assert.equal(r.studyGuide.sections.filter(s=>s.kind==='will-formats').length,1);assert.ok(w.sourceUrls.length);}
});
test('Town claims and private actual-role histories keep their scope through transitions',()=>{
 assert.equal(roles.filter(r=>r.willGuide.scope==='public-claim').length,29);
 assert.equal(roles.filter(r=>r.willGuide.scope==='private-actual').length,35);
 for(const r of roles)assert.equal(r.willGuide.scope,r.faction==='Town'?'public-claim':'private-actual');
 assert.match(byId.get('amnesiac').willGuide.example,/D2: Remembered Sheriff\nN2: Sheriff - Search/);
 assert.match(byId.get('cursed-soul').willGuide.example,/acquired Sheriff; faction unchanged\nN4: Sheriff/);
 assert.match(byId.get('war').willGuide.example,/D5: Became War\nN5: Rampages/);
 const death=byId.get('death').willGuide.example;assert.match(death,/N6: Not reached - game ended D6\nN7: Not reached/);assert.doesNotMatch(death,/N[67]:.*Reap/);
});
test('mixed examples preserve protective prerequisites, charge limits and ability loss',()=>{
 const ex=id=>byId.get(id).willGuide.example;
 for(const id of ['cleric','bodyguard','crusader','oracle'])assert.match(ex(id),/N1: No \w+ - Grace Period/);
 assert.equal((ex('cleric').match(/N\d: Self Barrier/g)||[]).length,1);
 assert.equal((ex('bodyguard').match(/N\d: Self Protect/g)||[]).length,2);
 assert.equal((ex('veteran').match(/N\d: Alert -/g)||[]).length,3);
 assert.equal((ex('vigilante').match(/N\d: Load - loaded/g)||[]).length,3);
 assert.match(ex('vigilante'),/Town reveal; gun lost\nN7: No shot - gun lost/);
 assert.match(ex('trickster'),/N3: Mirror @7 - absorbed.*\nN4: Held stored.*\nN5: Unleash/);
 assert.match(ex('trapper'),/N3: Trap.*triggered.*\nN4: Build.*\nN5: Place/);
 assert.match(ex('jailor'),/Town reveal; abilities lost\nN7: No jail/);
 for(const id of ['retributionist','socialite','tavern-keeper','necromancer','poisoner','witch','serial-killer','war','pestilence'])assert.doesNotMatch(ex(id),/- roleblocked/,id+' is roleblock immune');
});
test('day-only examples keep abilities on D entries and nights explicitly inactive',()=>{
 for(const id of ['marshal','mayor','prosecutor','deputy','pilgrim']){
  const w=byId.get(id).willGuide;
  for(const field of ['example'])for(const line of w[field].split('\n').filter(s=>/^N\d:/.test(s)))assert.match(line,/^N\d: No night ability$/);
  assert.match(w.example,/^D[2-7]:/m);
 }

});
