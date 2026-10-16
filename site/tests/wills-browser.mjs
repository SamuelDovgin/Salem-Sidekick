import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url))),roles=[...pack.roles,...pack.states];
const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'});
let copies=0,scopes=0,layouts=0,axeStates=0;const errors=[];
async function copy(page,block,role,blank){await block.locator(`[data-action="${blank?'copy-blank':'copy-example'}"]`).click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),role.willGuide[blank?'blank':'example']);copies++;}
async function chooseClaim(page,id){await page.locator('[data-action="choose-claim"]').click();await page.locator('#role-search').fill(id.replaceAll('-',' '));await page.locator(`#picker-results [data-role="${id}"]`).click();}
try {
 for(const width of [1360,320]){
  const context=await browser.newContext({viewport:{width,height:900},permissions:['clipboard-read','clipboard-write']});const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto(origin+'/#sheriff');await page.locator('#role-title').waitFor();
  for(const role of roles){
   await page.evaluate(id=>{location.hash=id},role.id);await page.locator('#role-title').filter({hasText:new RegExp('^'+role.name+'$')}).waitFor();
   const publicClaim=await page.locator('#active-claim-card').getAttribute('data-claim-option');
   await page.locator('[data-action="study-role"]').click();
   const block=page.locator('#study-content .will-formats');
   assert.equal(await block.getAttribute('data-will-role'),role.id);assert.equal(await block.getAttribute('data-will-scope'),role.willGuide.scope);
   assert.equal(await block.locator('[data-will-text="example"]').innerText(),role.willGuide.example);
   assert.equal(await block.locator('[data-will-text="blank"]').textContent(),role.willGuide.blank);
   assert.equal(await block.locator('.private-will-note').count(),role.faction==='Town'?0:1);
   await copy(page,block,role,false);await copy(page,block,role,true);
   assert.equal(await page.locator('#active-claim-card').getAttribute('data-claim-option'),publicClaim);scopes++;
   await block.locator('.blank-will>summary').click();
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   assert.ok(await page.locator('#role-study').evaluate(e=>e.scrollWidth<=e.clientWidth));layouts++;
   if(process.env.AXE_PATH&&['cleric','deputy','famine','death'].includes(role.id)){
    await page.addScriptTag({path:process.env.AXE_PATH});const result=await page.evaluate(()=>axe.run('#role-study',{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));assert.deepEqual(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[]);axeStates++;
   }
   if(role.id==='medusa'){
    mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});await block.screenshot({path:fileURLToPath(new URL(`../qa/private-will-${width}.png`,import.meta.url))});
   }
   await page.locator('[data-action="close-study"]').click();
  }
  await page.evaluate(()=>{location.hash='medusa'});await page.locator('#role-title').filter({hasText:'Medusa'}).waitFor();
  for(const role of roles.filter(r=>r.faction==='Town')){
   await chooseClaim(page,role.id);const block=page.locator('#will-examples .will-formats');
   assert.equal(await block.getAttribute('data-will-role'),role.id);assert.equal(await page.locator('#claim-example').innerText(),role.willGuide.example);
   await copy(page,block,role,false);await copy(page,block,role,true);assert.equal(await page.locator('#role-title').innerText(),'Medusa');scopes++;
  }
  await chooseClaim(page,'cleric');await page.locator('#will-examples').screenshot({path:fileURLToPath(new URL(`../qa/full-will-${width}.png`,import.meta.url))});
  await chooseClaim(page,'psychic');await page.locator('[data-action="compare-claims"]').click();await page.locator('#comparison-claim').selectOption('oracle');
  await copy(page,page.locator('#will-examples .will-formats'),roles.find(r=>r.id==='psychic'),true);assert.equal(await page.locator('#active-claim-card').getAttribute('data-claim-option'),'psychic');assert.equal(await page.locator('#comparison-claim-card').getAttribute('data-claim-option'),'oracle');
  await context.close();console.log(`PASS ${width}px: all 64 guide wills, all 29 public claim wills, exact example/blank copies, scope isolation and bounded layouts`);
 }
 const context=await browser.newContext({viewport:{width:320,height:900}});await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw Error('denied')}}}));const page=await context.newPage();await page.goto(origin+'/#medusa');await page.locator('#role-title').waitFor();
 const cleric=roles.find(r=>r.id==='cleric');const block=page.locator('#will-examples .will-formats');
 await block.locator('[data-action="copy-blank"]').click();assert.equal(await page.evaluate(()=>getSelection().toString()),cleric.willGuide.blank);assert.ok(await block.locator('.blank-will').evaluate(e=>e.open));assert.equal(await page.locator('#claim-example').innerText(),cleric.willGuide.example);
 await block.locator('[data-action="copy-example"]').click();assert.equal(await page.evaluate(()=>getSelection().toString()),cleric.willGuide.example);
 await page.locator('[data-action="study-role"]').click();const privateBlock=page.locator('#study-content .will-formats');await privateBlock.locator('[data-action="copy-blank"]').click();assert.equal(await page.evaluate(()=>getSelection().toString()),roles.find(r=>r.id==='medusa').willGuide.blank);assert.equal(await page.locator('#active-claim-card').getAttribute('data-claim-option'),'cleric');await context.close();
 assert.deepEqual(errors,[]);const report={copies,scopeChecks:scopes,guideLayouts:layouts,accessibilityStates:axeStates,manualCopyFallbacks:3,runtimeErrors:errors.length};writeFileSync(new URL('../qa/wills-browser-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log('PASS',JSON.stringify(report));
} finally {await browser.close();}
