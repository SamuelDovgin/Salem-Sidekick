import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url))),roles=[...pack.roles,...pack.states];
const origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';
const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'});const errors=[];let states=0,a11y=0;
try{for(const width of [1360,320]){
 const context=await browser.newContext({viewport:{width,height:1000}}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(origin+'/#hex-master');await page.locator('#role-title').waitFor();
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const r of roles){await page.evaluate(id=>location.hash=id,r.id);await page.waitForFunction(name=>document.querySelector('#role-title')?.textContent===name,r.name);
  const core=page.locator('.hero .role-essentials');assert.equal(await core.count(),0);assert.equal(await page.locator('.hero .role-description>p').innerText(),r.coreGuide.action);
  const detail=page.locator('.hero .role-description [data-action="detail"]');await detail.click();assert.equal(await core.getAttribute('data-core-role'),r.id);assert.deepEqual(await core.locator('dd').allTextContents(),[r.coreGuide.action,r.coreGuide.keyRule,r.coreGuide.win,r.coreGuide.example]);assert.ok(await core.isVisible());await detail.click();assert.equal(await core.count(),0);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('[data-action="study-role"]').click();const summary=page.locator('#study-content .study-summary');assert.deepEqual(await summary.locator('dd').allTextContents(),[r.coreGuide.action,r.coreGuide.keyRule,r.coreGuide.win,r.coreGuide.example]);assert.equal(await summary.locator('details').count(),0);if(r.studyGuide.facts)assert.ok((await summary.boundingBox()).y<(await page.locator('#study-content .study-facts').boundingBox()).y);assert.doesNotMatch(await page.locator('.study-facts').allTextContents().then(xs=>xs.join(' ')),/7AA2E6|A331EF|;">/);assert.ok(await page.locator('#role-study').evaluate(e=>e.scrollWidth<=e.clientWidth));
  if(['hex-master','jester','death','baker','cursed-soul'].includes(r.id)&&process.env.AXE_PATH){await page.addScriptTag({path:process.env.AXE_PATH});const a=await page.evaluate(()=>axe.run('#role-study',{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));assert.deepEqual(a.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[]);a11y++;}
  if(r.id==='hex-master'){
   mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});await page.screenshot({path:fileURLToPath(new URL(`../qa/core-hex-guide-${width}.png`,import.meta.url))});
   assert.ok(await summary.innerText().then(t=>t.includes('automatically')&&t.includes('No Bomb button')));
  }
  await page.locator('[data-action="close-study"]').click();states++;
 }
 await page.evaluate(()=>location.hash='hex-master');await page.waitForFunction(()=>document.querySelector('#role-title')?.textContent==='Hex Master');await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:fileURLToPath(new URL(`../qa/core-hex-main-${width}.png`,import.meta.url))});await context.close();console.log('PASS',width,'px: 64 concise headers with rules/wins available in Details and Role guide; no overflow or leaked markup');
}
assert.deepEqual(errors,[]);writeFileSync(new URL('../qa/core-browser-report.json',import.meta.url),JSON.stringify({roleWidthStates:states,accessibilityStates:a11y,runtimeErrors:errors},null,2)+'\n');console.log('PASS',JSON.stringify({states,a11y,runtimeErrors:errors.length}));
}finally{await browser.close()}
