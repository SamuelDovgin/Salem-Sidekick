import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {initialState} from '../dist/model.js';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url))),roles=[...pack.roles,...pack.states];
const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'}),ctx=await browser.newContext({permissions:['clipboard-read','clipboard-write']});
await ctx.addInitScript(seed=>localStorage.setItem('salem-sidekick:v1',JSON.stringify(seed)),{...initialState(),actualId:'jinx',claimId:'cleric',deliberateClaim:true,detail:true});
const page=await ctx.newPage(),origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';await page.emulateMedia({reducedMotion:'reduce'});let meanings=0,messages=0;
try{
 for(const width of [1360,320]){
  await page.setViewportSize({width,height:950});
  for(const role of roles){
   await page.goto(origin+'/#'+role.id);await page.locator('#role-title').waitFor();
   const guide=page.locator(`#${role.parentId||role.id}-dawn [data-feedback-role="${role.id}"]`);await guide.waitFor();
   const notes=guide.locator('.feedback-notes');assert.equal(await notes.evaluate(e=>e.open),false,role.id+' notes start condensed');await notes.locator('summary').click();assert.ok((await notes.innerText()).includes(role.feedbackGuide.outcomeNote),role.id+' specific outcome note');
   for(const field of ['youSee','theySee']){const button=guide.locator(`[data-action="copy-feedback-meaning"][data-field="${field}"]`);await button.click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),role.feedbackGuide[field]);assert.ok(await button.locator('..').innerText().then(t=>t.includes(role.feedbackGuide[field])));meanings++;}
   for(const [i,m]of role.feedbackGuide.messages.entries()){
    const card=guide.locator('.game-message').nth(i);assert.equal(await card.locator('.message-audience').innerText(),m.screenLabel);assert.equal(await card.locator('figcaption [data-action="copy-feedback-message"]').count(),0);assert.equal(await card.locator('blockquote + [data-action="copy-feedback-message"]').count(),1);await card.locator('[data-action="copy-feedback-message"]').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),m.copyText||m.text);messages++;
   }
   assert.equal(await guide.locator('.feedback-report').count(),role.alignment.startsWith('Town')?1:0);assert.equal(await guide.locator('[data-action="copy-feedback-scenario"]').count(),0);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),role.id+' '+width+'px');
   assert.equal(await page.locator('#role-title').innerText(),role.name);console.log('PASS '+width+'px '+role.id+': audiences, explanation copies, quiet/failure note, wording copies, bounded layout');
  }
 }
 // Comparison copy remains about the compared Town role and cannot change the claim.
 await page.goto(origin+'/#medusa');await page.locator('#role-title').waitFor();await page.locator('.claim-icon-list [data-role="psychic"]').click();await page.locator('[data-action="compare-claims"]').click();await page.locator('#comparison-claim').selectOption('oracle');const compared=page.locator('#comparison-claim-card');if(!await compared.locator('.claim-details').evaluate(e=>e.open))await compared.locator('.claim-details>summary').click();await compared.locator('[data-action="copy-feedback-meaning"][data-field="youSee"]').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),roles.find(r=>r.id==='oracle').feedbackGuide.youSee);assert.equal(await page.locator('#active-claim-card').getAttribute('data-claim-option'),'psychic');assert.ok((await page.locator('#claim-example').innerText()).startsWith('Psychic'));
 await ctx.close();
 const fallback=await browser.newContext();await fallback.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw Error('denied')}}}));const p=await fallback.newPage();await p.goto(origin+'/#ritualist');await p.locator('#role-title').waitFor();await p.locator('#ritualist-dawn [data-action="detail"]').click();await p.locator('#ritualist-dawn [data-action="copy-feedback-meaning"][data-field="youSee"]').click();assert.equal(await p.evaluate(()=>window.getSelection().toString()),roles.find(r=>r.id==='ritualist').feedbackGuide.youSee);await fallback.close();
 const records=await browser.newPage({viewport:{width:320,height:844}});const keys=[...new Set(roles.flatMap(r=>r.feedbackGuide.messages.map(m=>m.clientEvidence?.key)).filter(Boolean))];
 await records.goto(origin+'/message-sources.html#GAME_307');assert.equal(await records.title(),'Message source records · Salem Sidekick');
 for(const key of keys){await records.evaluate(key=>location.hash=key,key);await records.locator('#'+key).waitFor({state:'visible'});assert.ok(await records.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),key+' source record width');}
 await records.close();
 console.log(`PASS complete: ${meanings} explanation copies, ${messages} documented/adapted message copies, ${keys.length} local source-record anchors, 64 roles at desktop/mobile, comparison isolation and manual-copy fallback`);
}finally{await browser.close();}
