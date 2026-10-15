import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const library=[...pack.roles,...pack.states],byId=new Map(library.map(r=>[r.id,r]));
test('every base role and state has an opinion, targeting fallback, pivot and ranked priorities',()=>{
 assert.equal(library.length,64);assert.equal(new Set(library.map(r=>r.playbook.headline)).size,64);
 for(const r of library){for(const f of ['headline','firstNight','reason','targetRule','pivot','expanded'])assert.ok(r.playbook[f]?.trim(),`${r.name}: ${f}`);assert.equal(r.playbook.laterPriorities.length,3,r.name);assert.ok(r.playbook.sourceUrls.length,r.name);}
});
test('every selectable claim has its own example, blank format and maintenance obligations',()=>{
 for(const r of library){const p=r.claimProfile;assert.ok(p.example.split('\n')[0].startsWith(r.name),r.name);assert.ok(p.blank.startsWith(r.name+'\n'),r.name);assert.ok(p.posting&&p.payoff&&p.exposure&&p.effort,r.name);assert.ok(p.willGuidance.length>=3,r.name);}
});
test('all opposing-role claim audits reference complete profiles and explain real overlap plus exposure',()=>{
 const opponents=pack.roles.filter(r=>!r.alignment.startsWith('Town'));assert.equal(opponents.length,31);let count=0;
 for(const r of opponents){assert.ok(r.claimAudit.summary);assert.ok(r.claimOptions.length>=2);assert.equal(r.preferredClaimId,r.claimOptions[0].roleId);for(const c of r.claimOptions){assert.ok(byId.has(c.roleId));assert.equal(c.alignment,byId.get(c.roleId).alignment);assert.ok(c.why&&c.exposure&&c.tag);count++;}}
 assert.equal(count,71);
});
test('Voodoo policy and cover costs resolve the beginner ambiguity',()=>{
 const vm=byId.get('voodoo-master');assert.equal(vm.preferredClaimId,'cleric');assert.match(vm.playbook.firstNight,/Silence/);assert.match(vm.playbook.firstNight,/Blind/);assert.match(vm.playbook.laterPriorities[0],/Blind/);assert.match(vm.playbook.laterPriorities[2],/Deafen/);
 assert.equal(byId.get('cleric').claimProfile.effort,'Low upkeep');assert.equal(byId.get('psychic').claimProfile.effort,'High upkeep');assert.match(vm.claimAudit.summary,/no invented vision/);
});
test('protective examples do not manufacture saves and tips keep death exceptions',()=>{
 const cleric=byId.get('cleric').claimProfile;assert.equal(cleric.example,'Cleric\nN1: Barrier 4\nN2: Barrier 7');assert.match(cleric.willGuidance.join(' '),/Unstoppable/);assert.match(cleric.willGuidance.join(' '),/observed visit/);assert.doesNotMatch(cleric.example,/saved/i);
});
test('higher-payoff role information does not erase movement or demonstration risks',()=>{
 assert.match(byId.get('potion-master').claimOptions.find(c=>c.roleId==='seer').exposure,/two/);
 assert.match(byId.get('wildling').claimOptions[0].tag,/Real information/);
 assert.match(byId.get('deputy').claimProfile.exposure,/shot/);
 assert.match(byId.get('psychic').claimProfile.example,/N1 Good: 4, 9/);assert.match(byId.get('psychic').claimProfile.example,/N2 Evil: 2, 7, 11/);
});
test('inactive and preparation roles retain legal opening recommendations',()=>{
 assert.match(byId.get('deputy').playbook.firstNight,/no night|No night|no N1|No N1/i);assert.match(byId.get('trapper').playbook.firstNight,/Build|build/);assert.match(byId.get('vigilante').playbook.firstNight,/Load|load/);assert.match(byId.get('berserker').playbook.firstNight,/cannot/);
});
