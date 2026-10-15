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
 for(const r of opponents){assert.ok(r.claimAudit.summary);assert.ok(r.claimOptions.length>=4);assert.equal(r.preferredClaimId,r.claimOptions[0].roleId);for(const c of r.claimOptions){assert.ok(byId.has(c.roleId));assert.equal(c.alignment,byId.get(c.roleId).alignment);assert.ok(c.why&&c.exposure&&c.tag);count++;}}
 assert.ok(count>=150);
});
test('Voodoo policy and cover costs resolve the beginner ambiguity',()=>{
 const vm=byId.get('voodoo-master');assert.equal(vm.preferredClaimId,'cleric');assert.match(vm.playbook.firstNight,/Silence/);assert.match(vm.playbook.firstNight,/Blind/);assert.match(vm.playbook.laterPriorities[0],/Blind/);assert.match(vm.playbook.laterPriorities[2],/Deafen/);
 assert.equal(byId.get('cleric').claimProfile.effort,'Low upkeep');assert.equal(byId.get('psychic').claimProfile.effort,'High upkeep');assert.match(vm.claimAudit.summary,/no invented vision/);
});
test('protective examples do not manufacture saves and tips keep death exceptions',()=>{
 const cleric=byId.get('cleric').claimProfile;assert.equal(cleric.example,'Cleric\nN1: Barrier 4\nN2: Barrier 7');assert.match(cleric.willGuidance.join(' '),/Unstoppable/);assert.match(cleric.willGuidance.join(' '),/observed visit/);assert.doesNotMatch(cleric.example,/saved/i);
});
test('higher-payoff role information does not erase movement or demonstration risks',()=>{
 assert.match(byId.get('potion-master').claimOptions.find(c=>c.roleId==='seer').exposure,/two|both/);
 assert.match(byId.get('wildling').claimOptions[0].tag,/information/);
 assert.match(byId.get('deputy').claimProfile.exposure,/shot/);
 assert.match(byId.get('psychic').claimProfile.example,/N1 Good: 4, 9/);assert.match(byId.get('psychic').claimProfile.example,/N2 Evil: 2, 7, 11/);
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
