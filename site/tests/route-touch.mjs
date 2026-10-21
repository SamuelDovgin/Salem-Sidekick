import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const playwright=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const roles=[...pack.roles,...pack.states].filter(role=>['sheriff','medusa','mayor','cleric','hex-master','famine'].includes(role.id));
const origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';
const engines=(process.env.PLAYWRIGHT_ENGINES||'chromium').split(',');
const report={engines:[],routeTransitions:0,viewPlanReturns:0,runtimeErrors:[]};
try{
 for(const engine of engines){
  assert.ok(['chromium','webkit'].includes(engine),'supported route-touch engine');
  const browser=await playwright[engine].launch({headless:true,...(engine==='chromium'?{channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'}:{})});
  try{
   const context=await browser.newContext({hasTouch:true,isMobile:true,viewport:{width:390,height:844},reducedMotion:'no-preference'});
   await context.route('https://**/*',route=>route.abort());
   await context.addInitScript(()=>{
    const scrollIntoView=Element.prototype.scrollIntoView;window.__planJumps=[];
    Element.prototype.scrollIntoView=function(options){if(this.matches('.recommendation-title'))window.__planJumps.push(options);return scrollIntoView.call(this,options);};
   });
   const page=await context.newPage();page.setDefaultTimeout(10000);
   page.on('pageerror',error=>report.runtimeErrors.push({engine,error:error.message}));
   await page.goto(origin+'/#sheriff');await page.locator('#role-title').waitFor();
   for(const [width,height] of [[390,844],[320,568],[844,390]]){
    await page.setViewportSize({width,height});
    for(const role of roles){
     await page.evaluate(id=>{location.hash=id;},role.id);
     await page.waitForFunction(name=>document.querySelector('#role-title')?.textContent===name,role.name);
     for(const detail of [false,true]){
      if((await page.locator('#detail-toggle').getAttribute('aria-expanded')==='true')!==detail)await page.locator('#detail-toggle').tap();
      const route=role.routes[1];
      await page.locator(`[data-action="select-route"][data-route="${route.id}"]`).tap();report.routeTransitions++;
      assert.equal(await page.locator('.recommendation-title').innerText(),route.headline);
      assert.equal(await page.locator('[data-action="view-plan"]').getAttribute('aria-label'),'View plan for '+role.name);
      await page.locator('[data-action="view-plan"]').tap();
      await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
      const landing=await page.locator('.recommendation-title').evaluate(heading=>{
       const box=heading.getBoundingClientRect(),nav=document.querySelector('.page-nav').getBoundingClientRect();
       return {focused:document.activeElement===heading,visible:box.top>=nav.bottom-1&&box.top<innerHeight,jump:window.__planJumps.at(-1)?.behavior};
      });
      assert.deepEqual(landing,{focused:true,visible:true,jump:'instant'},`${engine}: ${role.id}, ${width}×${height}, ${detail?'expanded':'compact'} return landing`);
      report.viewPlanReturns++;
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      const structure=await page.evaluate(()=>{
       const ids=[...document.querySelectorAll('[id]')].map(el=>el.id);
       return {duplicateIds:ids.filter((id,i)=>ids.indexOf(id)!==i),missingTargets:[...document.querySelectorAll('[data-target]')].filter(el=>!document.getElementById(el.dataset.target)).map(el=>el.dataset.target)};
      });assert.deepEqual(structure,{duplicateIds:[],missingTargets:[]});
     }
     await page.locator('#detail-toggle').tap();
    }
   }
   report.engines.push({engine,version:browser.version()});
   console.log(`PASS ${engine}: touch, ordinary motion preference, portrait/narrow/landscape, compact/expanded and unobstructed View plan`);
  }finally{await browser.close();}
 }
 assert.deepEqual(report.runtimeErrors,[]);
 console.log('PASS',JSON.stringify(report));
}finally{
 mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});
 writeFileSync(new URL('../qa/route-touch-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
}
