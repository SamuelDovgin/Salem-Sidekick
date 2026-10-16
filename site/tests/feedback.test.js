import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const authored=JSON.parse(readFileSync(new URL('../content/role-feedback.json',import.meta.url)));
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url))),roles=[...pack.roles,...pack.states],byId=new Map(roles.map(r=>[r.id,r]));
test('all 64 roles/states have distinct audience-aware feedback and complete provenance',()=>{
 assert.deepEqual(Object.keys(authored).sort(),roles.map(r=>r.id).sort());
 for(const role of roles){const f=role.feedbackGuide;for(const key of ['glance','youSee','theySee','claimCheck','outcomeNote'])assert.equal(f[key],authored[role.id][key],role.id+': '+key);assert.ok(f.sourceUrls.length>=2);assert.equal(f.liveClientVerified,false);assert.match(f.basis,/paraphrased/);assert.equal(role.studyGuide.sections.filter(s=>s.title==='What you and others see').length,1);}
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
 assert.equal(count,24);for(const [source,words]of budgets)assert.ok(words<=25,source+': '+words);
});
test('Jinx witness wording names the Jinx and destination without granting a visitor list',()=>{
 const f=byId.get('jinx').feedbackGuide;assert.equal(f.messages[0].text,'You saw the Jinx [Jinx name] visit [target name]!');assert.match(f.messages[0].audience,/co-visitor/);assert.match(f.youSee,/does not give you every visitor/);assert.match(f.theySee,/attacked visitor is not a safe exception/);assert.match(f.claimCheck,/Crusader.*witness/);
});
test('shared Barrier feedback does not identify its source or turn quiet nights into saves',()=>{
 const cleric=byId.get('cleric').feedbackGuide;assert.equal(cleric.messages[1].text,'You were attacked, but a Barrier protected you!');assert.match(cleric.messages[1].audience,/recipient/);assert.match(cleric.theySee,/quiet target is not evidence/);assert.match(cleric.claimCheck,/Other Barrier abilities/);assert.match(byId.get('oracle').feedbackGuide.theySee,/astral.*Tracker.*Lookout/);
});
test('current feedback excludes stale Pirate/Admirer mechanics and disputed Blind notice',()=>{
 assert.deepEqual(byId.get('pirate').feedbackGuide.messages,[]);assert.doesNotMatch(byId.get('admirer').feedbackGuide.reportTemplate,/propos|accept|reject/i);assert.ok(byId.get('voodoo-master').feedbackGuide.messages.every(m=>!m.text.includes('Blinded')));assert.match(byId.get('voodoo-master').feedbackGuide.claimCheck,/inconsistent/);assert.deepEqual(byId.get('psychic').feedbackGuide.messages,[]);
});

test('Cleric marks whose screen and explains Self Barrier without inventing another quote',()=>{
 const f=byId.get('cleric').feedbackGuide;assert.equal(f.compactFeedback,true);assert.equal(f.messages[0].viewpoint,'self');assert.equal(f.messages[0].screenLabel,'YOU · As Cleric');assert.equal(f.messages[1].viewpoint,'other');assert.equal(f.messages[1].screenLabel,'THEM · Protected player');assert.match(f.messages[0].when,/normal save/);assert.match(f.messages[1].selfNote,/YOUR screen.*attacked and protected.*Once per game.*stay home/);
 assert.equal(f.messages[0].text,'[player name] was attacked last night!');assert.equal(f.messages[0].copyText,'@[player number] was attacked last night!');assert.match(f.messages[0].copyHint,/@4/);assert.match(f.reportTemplate,/@\[player number\]/);assert.match(byId.get('cleric').claimProfile.blank,/@\[player number\]/);assert.equal(f.messages.length,2);assert.ok(byId.get('cleric').studyGuide.sections.find(s=>s.title==='What you and others see').markdown.includes(f.messages[1].selfNote));
});

test('each role and transformed state has a separate source-linked feedback audit resolution',()=>{
 const audit=JSON.parse(readFileSync(new URL('../content/feedback-audit.json',import.meta.url)));assert.equal(audit.roles.length,64);assert.equal(new Set(audit.roles.map(r=>r.id)).size,64);assert.equal(new Set(roles.map(r=>r.feedbackGuide.outcomeNote)).size,64);
 for(const row of audit.roles){const f=byId.get(row.id).feedbackGuide;assert.equal(row.resolution,f.outcomeNote);assert.equal(row.sourceSha256,f.feedbackAudit.sourceSha256);assert.match(row.sourceSha256,/^[a-f0-9]{64}$/);assert.equal(row.sourceUrl,f.feedbackAudit.sourceUrl);assert.equal(row.exactMessageCount,f.messages.length);assert.equal(f.feedbackAudit.reviewedOn,'2026-10-16');assert.ok(byId.get(row.id).studyGuide.sections.find(s=>s.title==='What you and others see').markdown.includes(f.outcomeNote));}
});
test('every quoted message has an explicit acting-player, recipient or public audience',()=>{
 for(const r of roles)for(const m of r.feedbackGuide.messages){assert.ok(['self','other','public'].includes(m.viewpoint));assert.match(m.screenLabel,/^(YOU|THEM|EVERYONE) · /);if(m.copyText?.includes('@[')){assert.ok(m.copyHint.includes('@4'));assert.doesNotMatch(m.copyText,/(?<!@)\[(?:Player|player name|Jinx name|target name)\]/);}}
 assert.equal(byId.get('deputy').feedbackGuide.messages[0].viewpoint,'public');assert.equal(byId.get('voodoo-master').feedbackGuide.messages[0].viewpoint,'other');assert.equal(byId.get('retributionist').feedbackGuide.messages[0].legacyWording,true);
});
test('quiet/failure notes preserve role-specific visibility and immunity distinctions',()=>{
 const f=id=>byId.get(id).feedbackGuide;assert.match(f('ritualist').outcomeNote,/wrong role guess.*no failure message/i);assert.match(f('deputy').outcomeNote,/miss is private.*spends/i);assert.match(f('bodyguard').outcomeNote,/Self Protect.*two uses.*Basic Defense/);assert.match(f('oracle').outcomeNote,/target roles, not player numbers/);assert.match(f('trickster').outcomeNote,/stored before Unleash/);assert.match(f('veteran').outcomeNote,/how many.*not a complete named/);assert.match(f('plaguebearer').outcomeNote,/prevented direct Infect/);assert.match(f('war').outcomeNote,/roleblock\/obstacle-immune/);assert.match(f('pestilence').outcomeNote,/not ordinary attacks/);assert.match(f('death').outcomeNote,/no normal night action/);
});
test('all authored player-target claim formats use mention placeholders without changing role targeting',()=>{
 for(const r of roles.filter(r=>r.alignment.startsWith('Town'))){for(const text of [r.feedbackGuide.reportTemplate,r.claimProfile.blank,r.claimProfile.example]){assert.doesNotMatch(text,/[—–]|@@/);assert.doesNotMatch(text,/(?<!@)\[(?:player|house|selected|other|tracked player|eligible player|corpse|living target)\]/);}}
 assert.doesNotMatch(byId.get('oracle').feedbackGuide.reportTemplate,/@/);assert.match(byId.get('psychic').claimProfile.blank,/@\[selected player number\]/);assert.match(byId.get('retributionist').claimProfile.blank,/@\[corpse player number\].*-> @\[living target number\]/);assert.match(byId.get('veteran').claimProfile.example,/No Alert/);
});
