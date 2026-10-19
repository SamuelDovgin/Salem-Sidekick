import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const roles=[...pack.roles,...pack.states],byId=new Map(roles.map(r=>[r.id,r]));
const core=JSON.parse(readFileSync(new URL('../content/role-essentials.json',import.meta.url)));
const receipt=JSON.parse(readFileSync(new URL('../../docs/research/CORE_MECHANICS_EVIDENCE.json',import.meta.url)));
test('all 64 profiles explain actions, activation and actual faction wins before advanced detail',()=>{
 assert.deepEqual(Object.keys(core).sort(),roles.map(r=>r.id).sort());
 for(const r of roles){const c=r.coreGuide;assert.deepEqual(c,core[r.id]);for(const field of ['action','keyRule','win','example']){assert.ok(c[field].split(/\s+/).length<=58,r.id+' '+field);assert.doesNotMatch(c[field],/under its conditions|has its own trigger|toward a Hex Bomb/);}
  assert.ok(c.sourceUrls.every(u=>u.startsWith('https://')));for(const key of c.clientKeys)assert.match(receipt.entries[key],/^[a-f0-9]{64}$/);
  const ability=r.studyGuide.sections.find(s=>['Role and ability','Current ability and objective'].includes(s.title));assert.ok(ability.markdown.includes(c.action)&&ability.markdown.includes(c.keyRule)&&ability.markdown.includes(c.example));
  assert.ok(r.studyGuide.sections.find(s=>s.title==='Win condition').markdown.includes(c.win));
  if(r.faction==='Town'||r.faction==='Coven')assert.match(c.win,/even if dead/);
 }
 assert.equal(receipt.clientVersion,'R1.5.14');assert.equal(Object.keys(receipt.entries).length,189);
});
test('Hex Bomb explains coverage, automatic activation, survival and book independence',()=>{
 const c=core['hex-master'];assert.match(c.keyRule,/automatically.*every living non-Coven.*Hexed.*alive/);assert.match(c.keyRule,/No Bomb button or Necronomicon/);assert.match(c.example,/Hex 9, or have 9 eliminated/);
 assert.match(byId.get('hex-master').priorityGuide.mustKnow.body,/Dead players no longer count/);
 const deep=byId.get('hex-master').studyGuide.sections.find(s=>s.title==='Interactions and limits').markdown;assert.match(deep,/Necromancer.*reanimate/);assert.match(deep,/Bomb ignores defense/);
});
test('progression roles name thresholds and separate stronger forms from the win',()=>{
 assert.match(core.baker.action,/three other living/);assert.match(core.baker.keyRule,/own starting Bread is not/);
 assert.match(core.berserker.keyRule,/First kill.*Second.*Third.*War/);
 assert.match(core['plaguebearer'].action,/every other living/);assert.match(core['soul-collector'].keyRule,/seven actual souls/);
 assert.match(core.death.win,/Survive.*sundown/);assert.match(core.death.keyRule,/no further ordinary Reap/);
 assert.match(core.pestilence.keyRule,/Three stacks kill/);assert.match(core.famine.keyRule,/each morning.*die/);
 for(const r of pack.states)assert.notEqual(core[r.id].action,core[r.parentId].action);
});
test('personal objectives are specific and do not become generic last-survivor advice',()=>{
 assert.match(core.jester.win,/hanged.*Chatterbox quota/);assert.match(core.jester.keyRule,/prevents your win.*boredom/);
 assert.doesNotMatch(byId.get('jester').willGuide.example,/Chatterbox incomplete/);
 assert.match(core.executioner.win,/assigned target.*hanged while you are alive/);
 assert.match(core.pirate.win,/Stay alive.*all three assigned Landlubbers/);
 assert.match(core.doomsayer.win,/all three players in one set/);
 assert.match(core['cursed-soul'].win,/every Cursed Soul role.*member survives/);assert.match(core.vampire.keyRule,/Three Convert charges/);
});
test('borrowed powers and comparisons keep prerequisites and directions explicit',()=>{
 assert.match(core.trickster.keyRule,/cannot place another Mirror while storing/);
 assert.match(core.trapper.action,/Build.*then place/);assert.match(core.coroner.keyRule,/need an Autopsy/);
 assert.match(core.retributionist.keyRule,/visit the corpse.*zombie visits/);
 assert.match(core.lookout.keyRule,/came to the watched house/);assert.match(core.tracker.keyRule,/outgoing movement/);
 assert.match(core.oracle.action,/Town role, not a player number/);assert.match(core.admirer.keyRule,/unavailable before discovery/);
});
test('ability labels contain no leaked wiki color markup in any profile',()=>{
 for(const r of roles){const f=r.studyGuide.facts;if(f)for(const a of f.abilities){assert.doesNotMatch(a.name,/[<>;"#]|^[0-9A-F]{6}/,r.id+' '+a.name);assert.ok(a.name.trim());}}
 const facts=byId.get('hex-master').studyGuide.facts;assert.equal(facts.abilities[1].name,'Necronomicon');
});
