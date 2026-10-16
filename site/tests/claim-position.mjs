import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdirSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {initialState} from '../dist/model.js';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';
const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'});
const measurements=[];
const settle=page=>page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
try{
 for(const width of [1360,768,390,320]){
  const context=await browser.newContext({viewport:{width,height:844}});
  await context.addInitScript(seed=>localStorage.setItem('salem-sidekick:v1',JSON.stringify(seed)),{...initialState(),actualId:'medusa',claimId:'cleric',deliberateClaim:true});
  const page=await context.newPage();await page.goto(origin+'/#medusa');await page.locator('#active-claim-card').waitFor();await page.evaluate(()=>document.fonts.ready);
  for(const detail of [false,true]){
   if(detail){await page.locator('#detail-toggle').click();await settle(page);}
   // Native scrolling to the tray represents reaching the choices during a match.
   await page.locator('.claim-choice-bar').evaluate(e=>e.scrollIntoView({block:'center',behavior:'instant'}));await settle(page);
   for(const claim of ['psychic','cleric','psychic','cleric']){
    const choice=page.locator(`.claim-icon-list [data-role="${claim}"]`);
    const before=await choice.boundingBox();await choice.click();await settle(page);const after=await choice.boundingBox();
    const drift=Math.abs(after.y-before.y);measurements.push({width,detail,claim,drift});
    assert.ok(drift<=1,`${width}px ${detail?'expanded':'compact'} → ${claim}: choice moved ${drift}px`);
    assert.equal(await page.locator('.recommended-play>.opening-cover-warning').count(),claim==='cleric'?1:0,'the claim-dependent N1 warning still updates');
    assert.equal(await page.locator('#active-claim-card').getAttribute('data-claim-option'),claim);
    assert.ok(await choice.evaluate(e=>e===document.activeElement),'selected choice retains focus');
   }
  }
  // The full Town picker must preserve its opening control too.
  for(const claim of ['psychic','cleric']){
   const opener=page.locator('[data-action="choose-claim"]');await opener.evaluate(e=>e.scrollIntoView({block:'center',behavior:'instant'}));await settle(page);const before=await opener.boundingBox();
   await opener.click();await page.locator('#role-search').fill(claim);await page.locator(`#picker-results [data-role="${claim}"]`).click();await settle(page);const after=await opener.boundingBox();
   const drift=Math.abs(after.y-before.y);measurements.push({width,picker:true,claim,drift});assert.ok(drift<=1,`${width}px picker → ${claim}: opener moved ${drift}px`);
  }
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  if(width===390){await page.locator('.page-nav [data-target="strategy"]').click();await settle(page);mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});await page.screenshot({path:fileURLToPath(new URL('../qa/stable-claim-warning-mobile.png',import.meta.url))});}
  await context.close();console.log(`PASS ${width}px: stable claim controls in both directions, compact/expanded and full picker; N1 warning preserved`);
 }
 mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});writeFileSync(new URL('../qa/claim-position-report.json',import.meta.url),JSON.stringify(measurements,null,2)+'\n');console.log(`PASS ${measurements.length} claim-position transitions; maximum drift ${Math.max(...measurements.map(m=>m.drift))}px`);
}finally{await browser.close();}
