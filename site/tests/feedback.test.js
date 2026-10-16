import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const authored=JSON.parse(readFileSync(new URL('../content/role-feedback.json',import.meta.url)));
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url))),roles=[...pack.roles,...pack.states],byId=new Map(roles.map(r=>[r.id,r]));
test('all 64 roles/states have distinct audience-aware feedback and complete provenance',()=>{
 assert.deepEqual(Object.keys(authored).sort(),roles.map(r=>r.id).sort());
 for(const role of roles){const f=role.feedbackGuide;for(const key of ['glance','youSee','theySee','claimCheck'])assert.equal(f[key],authored[role.id][key],role.id+': '+key);assert.ok(f.sourceUrls.length>=2);assert.equal(f.liveClientVerified,false);assert.match(f.basis,/paraphrased/);assert.equal(role.studyGuide.sections.filter(s=>s.title==='What you and others see').length,1);}
 assert.equal(new Set(roles.map(r=>r.feedbackGuide.glance)).size,64);
 for(const state of pack.states)assert.notEqual(state.feedbackGuide.youSee,byId.get(state.parentId).feedbackGuide.youSee);
});
test('only the 29 Town profiles have authored chat formats, with explicit placeholders',()=>{
 assert.equal(roles.filter(r=>r.feedbackGuide.reportTemplate).length,29);
 for(const role of roles){const template=role.feedbackGuide.reportTemplate;assert.equal(Boolean(template),role.alignment.startsWith('Town'));if(template){assert.ok(template.startsWith(role.name));assert.match(template,/\[[^\]]+\]/);}}
 assert.match(byId.get('investigator').feedbackGuide.reportTemplate,/Murder.*Trespassing.*No Crime/);
 assert.match(byId.get('admirer').feedbackGuide.reportTemplate,/Obsession.*Bestow/);
 assert.match(byId.get('trapper').feedbackGuide.reportTemplate,/Build.*Place.*trigger/);
});
test('documented message excerpts have recipients, triggers and bounded per-source quotations',()=>{
 const budgets=new Map();let count=0;
 for(const role of roles)for(const m of role.feedbackGuide.messages){count++;assert.equal(m.kind,'documented');assert.ok(m.audience&&m.when);assert.match(m.sourceUrl,/^https:\/\//);assert.equal(m.namesNormalized,m.text.includes('['));assert.doesNotMatch(m.text,/%(?:name|Player)|\{\{|<[^>]+>/);const url=new URL(m.sourceUrl);url.hash='';const source=url.toString();budgets.set(source,(budgets.get(source)||0)+m.text.split(/\s+/).length);}
 assert.equal(count,20);for(const [source,words]of budgets)assert.ok(words<=25,source+': '+words);
});
test('Jinx witness wording names the Jinx and destination without granting a visitor list',()=>{
 const f=byId.get('jinx').feedbackGuide;assert.equal(f.messages[0].text,'You saw the Jinx [Jinx name] visit [target name]!');assert.match(f.messages[0].audience,/co-visitor/);assert.match(f.youSee,/does not give you every visitor/);assert.match(f.theySee,/attacked visitor is not a safe exception/);assert.match(f.claimCheck,/Crusader.*witness/);
});
test('shared Barrier feedback does not identify its source or turn quiet nights into saves',()=>{
 const cleric=byId.get('cleric').feedbackGuide;assert.equal(cleric.messages[0].text,'You were attacked, but a Barrier protected you!');assert.match(cleric.messages[0].audience,/recipient/);assert.match(cleric.theySee,/quiet target is not evidence/);assert.match(cleric.claimCheck,/other Barrier abilities/);assert.match(byId.get('oracle').feedbackGuide.theySee,/astral.*Tracker.*Lookout/);
});
test('current feedback excludes stale Pirate/Admirer mechanics and disputed Blind notice',()=>{
 assert.deepEqual(byId.get('pirate').feedbackGuide.messages,[]);assert.doesNotMatch(byId.get('admirer').feedbackGuide.reportTemplate,/propos|accept|reject/i);assert.ok(byId.get('voodoo-master').feedbackGuide.messages.every(m=>!m.text.includes('Blinded')));assert.match(byId.get('voodoo-master').feedbackGuide.claimCheck,/inconsistent/);assert.deepEqual(byId.get('psychic').feedbackGuide.messages,[]);
});
