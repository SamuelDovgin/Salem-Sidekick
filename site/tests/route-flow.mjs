import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const roles=[...pack.roles,...pack.states];
const origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';
const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'});
const report={roleLayouts:0,routeTransitions:0,maximumRouteDrift:0,runtimeErrors:[],regressions:[]};
const settle=page=>page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
try{
 const context=await browser.newContext();
 // Keep the content/interaction checks independent of external artwork hosts.
 await context.route('https://**/*',route=>route.abort());
 const page=await context.newPage();page.setDefaultTimeout(10000);
 page.on('pageerror',error=>report.runtimeErrors.push(error.message));
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto(origin+'/#sheriff');await page.locator('#role-title').waitFor();
 for(const width of [1360,390,320]){
  await page.setViewportSize({width,height:844});
  for(const role of roles){
   await page.evaluate(id=>{location.hash=id;},role.id);
   await page.waitForFunction(name=>document.querySelector('#role-title')?.textContent===name,role.name);
   if(await page.locator('#detail-toggle').getAttribute('aria-expanded')==='true')await page.locator('#detail-toggle').click();
   const originalClaim=await page.locator('#active-claim-card').getAttribute('data-claim-option');
   assert.deepEqual(await page.locator('.route-name').allTextContents(),role.routes.map((route,i)=>(i===0?'Recommended':'')+route.label));
   for(const detail of [false,true]){
    if((await page.locator('#detail-toggle').getAttribute('aria-expanded')==='true')!==detail)await page.locator('#detail-toggle').click();
    for(const route of role.routes){
     const choice=page.locator(`[data-action="select-route"][data-route="${route.id}"]`);
     await choice.evaluate(el=>el.scrollIntoView({block:'center',behavior:'instant'}));await settle(page);
     const before=await choice.boundingBox();await choice.click();await settle(page);const after=await choice.boundingBox();
     const drift=Math.abs(after.y-before.y);report.maximumRouteDrift=Math.max(report.maximumRouteDrift,drift);
     // Native scroll positions round to pixels; allow two pixels across a rerender.
     assert.ok(drift<=2,`${role.id}/${route.id} at ${width}px: route button drift ${drift}px`);
     assert.ok(await choice.evaluate(el=>el===document.activeElement),'route selection keeps keyboard focus');
     assert.equal(await choice.getAttribute('aria-pressed'),'true');
     assert.equal(await page.locator('.route-options [aria-pressed="true"]').count(),1);
     assert.equal(await page.locator('.recommendation-title').innerText(),route.headline);
     assert.equal(await page.locator('.recommended-action').innerText(),route.action);
     assert.deepEqual(await page.locator('.plan-targeting p').allTextContents(),['Who to choose: '+route.targetRule,'Change the plan when: '+route.pivot]);
     assert.equal(await page.locator('.plan-tradeoff').textContent(),'Tradeoff: '+route.risk);
     if(route.id!=='default')assert.equal(await page.locator('.route-condition').textContent(),'Use this route when: '+route.when);
     assert.equal(await page.locator('.must-know h4').innerText(),role.priorityGuide.mustKnow.title);
     assert.equal(await page.locator('.must-know>p').innerText(),role.priorityGuide.mustKnow.body);
     const cover=roles.find(r=>r.id===originalClaim);
     const constraint=!role.parentId&&role.id!==cover.id?cover.claimProfile.openingConstraint:null;
     assert.equal(await page.locator('.recommended-play>.opening-cover-warning').count(),constraint?1:0);
     if(constraint){
      assert.equal(await page.locator('.recommended-play>.opening-cover-warning h3').innerText(),constraint.title);
      assert.equal(await page.locator('.recommended-play>.opening-cover-warning>p').innerText(),constraint.body);
      assert.ok(await page.locator('.recommended-play>.opening-cover-warning').evaluate(el=>el.compareDocumentPosition(document.querySelector('.route-heading'))&Node.DOCUMENT_POSITION_FOLLOWING));
     }
     if(detail){
      assert.ok(await page.locator('.plan-reasoning').innerText().then(t=>t.includes(route.reason)));
      const expectedWhen=route.id==='default'?'Best when: '+route.when:'Use this route when: '+route.when;
      assert.ok(await page.locator('.recommended-play').innerText().then(t=>t.includes(expectedWhen)));
      const sources=await page.locator('.plan-reasoning a').evaluateAll(links=>links.map(a=>a.getAttribute('href')));
      for(const url of route.sourceUrls)assert.ok(sources.includes(url),'expanded plan retains route provenance');
      assert.ok(await page.locator('.route-heading').evaluate(el=>el.compareDocumentPosition(document.querySelector('.plan-reasoning'))&Node.DOCUMENT_POSITION_FOLLOWING));
     }
     assert.deepEqual(await page.locator('.goals-list label span').allTextContents(),route.goals);
     assert.deepEqual((await page.locator('.ranked-priorities ol').first().locator(':scope > li').allTextContents()).map(t=>t.trim()),route.laterPriorities);
     assert.equal(await page.locator('#active-claim-card').getAttribute('data-claim-option'),originalClaim);
     const order=await page.evaluate(()=>{
      const selectors=['.recommendation-title','.recommended-action','.must-know','.plan-targeting','.plan-tradeoff','.route-heading'];
      const elements=selectors.map(s=>document.querySelector(s));
      return elements.every((el,i)=>i===0||Boolean(elements[i-1].compareDocumentPosition(el)&Node.DOCUMENT_POSITION_FOLLOWING));
     });
     assert.ok(order,'reading order follows action, constraints, targeting, tradeoff, routes');
     assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
     report.routeTransitions++;
    }
    // View plan works from below the action without losing the selected route.
    await page.locator('.route-heading-label button').click();await settle(page);
    const heading=page.locator('.recommendation-title');
    assert.ok(await heading.evaluate(el=>el===document.activeElement));
    const headingBox=await heading.boundingBox(),navBox=await page.locator('.page-nav').boundingBox();
    assert.ok(headingBox.y>=navBox.y+navBox.height,'returned action is not covered by sticky navigation');
    assert.ok(headingBox.y<844,'returned action is in the viewport');
    for(const theme of ['light','dark']){
     if(await page.locator('html').getAttribute('data-theme')!==theme)await page.locator('#theme-toggle').click();
     assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
     const brokenTargets=await page.locator('.recommended-play [data-target]').evaluateAll(buttons=>buttons.filter(button=>!document.getElementById(button.dataset.target)).map(button=>button.dataset.target));
     assert.deepEqual(brokenTargets,[],'plan navigation points to existing targets');
     const route=role.routes.at(-1);
     if(route.id!=='default')assert.equal(await page.locator('.plan-reasoning').allTextContents().then(xs=>xs.join('').includes('Best when:')),false);
    }
    report.roleLayouts++;
   }
   await page.locator('#detail-toggle').click();
  }
  console.log(`PASS ${width}px: every role/route in compact and expanded views preserves conditions, claim, focus and button position; View plan returns above sticky navigation`);
 }
 // Keyboard-only route activation, plus progress and reload after a route change.
 await page.evaluate(()=>{location.hash='jester';});await page.waitForFunction(()=>document.querySelector('#role-title')?.textContent==='Jester');
 const role=roles.find(r=>r.id==='jester'),alternative=role.routes[1];
 const button=page.locator(`[data-action="select-route"][data-route="${alternative.id}"]`);
 await button.focus();await button.press('Enter');
 assert.equal(await page.locator('.recommendation-title').innerText(),alternative.headline);
 await page.locator('.goals-list input').first().check();await page.reload();await page.locator('#role-title').waitFor();
 assert.equal(await page.locator('.recommendation-title').innerText(),alternative.headline);
 assert.ok(await page.locator('.goals-list input').first().isChecked());
 await page.locator('.route-heading-label button').focus();await page.keyboard.press('Enter');
 assert.ok(await page.locator('.recommendation-title').evaluate(el=>el===document.activeElement));
 report.regressions.push('Keyboard route selection, route goals and reload; keyboard View plan');
 // Text enlargement must wrap naturally rather than clipping controls or conditions.
 await page.setViewportSize({width:1360,height:1000});
 await page.addStyleTag({content:'body{zoom:2}'});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 report.regressions.push('1360px layout with 200% CSS zoom has no horizontal document overflow');
 assert.deepEqual(report.runtimeErrors,[]);
 mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});
 writeFileSync(new URL('../qa/route-flow-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
 console.log('PASS',JSON.stringify(report));
}finally{await browser.close();}
