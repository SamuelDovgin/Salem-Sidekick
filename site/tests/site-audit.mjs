import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const pack=JSON.parse(readFileSync(new URL('../dist/data/roles.json',import.meta.url)));
const roles=[...pack.roles,...pack.states];
const origin=process.env.SALEM_TEST_URL||'http://127.0.0.1:4173';
const axePath=process.env.AXE_PATH;
const report={reviewedOn:'2026-10-16',roleLayouts:[],accessibility:[],regressions:[],issues:[],externalLinks:[],runtimeErrors:[]};
const links=new Set();
const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'chrome'});
const context=await browser.newContext({viewport:{width:1360,height:1000},permissions:['clipboard-read','clipboard-write']});
const page=await context.newPage();page.setDefaultTimeout(10000);
page.on('pageerror',e=>report.runtimeErrors.push(e.message));
await page.emulateMedia({reducedMotion:'reduce'});
const check=(name,condition)=>{assert.ok(condition,name);report.regressions.push(name);};
async function inspect(label){
 const result=await page.evaluate(()=>{
  const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);
  const duplicateIds=ids.filter((id,i)=>ids.indexOf(id)!==i);
  const missingReferences=[];
  for(const e of document.querySelectorAll('[aria-controls],[aria-labelledby],[aria-describedby]'))for(const attr of ['aria-controls','aria-labelledby','aria-describedby'])for(const id of (e.getAttribute(attr)||'').split(/\s+/).filter(Boolean))if(!document.getElementById(id))missingReferences.push(attr+': '+id);
  const unnamedButtons=[...document.querySelectorAll('button')].filter(e=>!e.getAttribute('aria-label')&&!e.textContent.trim()&&!e.title).map(e=>e.outerHTML);
  const localFragments=[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.getAttribute('href'));
  const shown=e=>e.checkVisibility({checkVisibilityCSS:true})&&!e.closest('dialog:not([open])');
  const visibleButtons=[...document.querySelectorAll('button')].filter(shown);
  return {duplicateIds,missingReferences,unnamedButtons,localFragments,overflow:document.documentElement.scrollWidth>innerWidth,
   height:document.documentElement.scrollHeight,buttons:visibleButtons.length,disclosures:[...document.querySelectorAll('summary')].filter(shown).length,
   hrefs:[...document.querySelectorAll('a[href]')].map(a=>a.href),actions:[...new Set(visibleButtons.map(b=>b.dataset.action||b.id))].sort()};
 });
 for(const url of result.hrefs)if(/^https?:/.test(url)&&!url.startsWith(origin))links.add(url);
 for(const key of ['duplicateIds','missingReferences','unnamedButtons','localFragments'])if(result[key].length)report.issues.push({label,kind:key,details:result[key]});
 if(result.overflow)report.issues.push({label,kind:'horizontal overflow'});
 return result;
}
async function axe(label){
 if(!axePath)return;
 // Use a repeatable viewport rather than testing a partly clipped control under the sticky navigation.
 await page.evaluate(()=>window.scrollTo(0,0));
 await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
 const result=await page.evaluate(()=>window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));
 report.accessibility.push({label,violations:result.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),incomplete:result.incomplete.map(v=>({id:v.id,nodes:v.nodes.length}))});
}
try{
 await page.goto(origin+'/#%E0%A4%A');await page.locator('#role-title').waitFor();
 check('malformed initial URL does not turn valid role data into a loading error',!await page.locator('.load-error').count());
 check('page declares language, title and a useful description',await page.locator('html').getAttribute('lang')==='en'&&(await page.title()).includes('Salem Sidekick')&&Boolean(await page.locator('meta[name="description"]').getAttribute('content')));
 check('viewport allows user zoom',!(await page.locator('meta[name="viewport"]').getAttribute('content')).match(/user-scalable=no|maximum-scale=1/));
 await page.locator('.skip-link').focus();await page.keyboard.press('Enter');
 check('skip link focuses a permanent main landmark',await page.locator('#main').evaluate(e=>e===document.activeElement));
 await page.evaluate(()=>location.hash='jinx');await page.waitForFunction(()=>document.querySelector('#role-title')?.textContent==='Jinx');
 await page.locator('.site-footer [data-action="sources"]').click();
 await page.evaluate(()=>location.hash='cleric');await page.waitForFunction(()=>document.querySelector('#role-title')?.textContent==='Cleric');
 check('an open Sources panel updates to the current role',await page.locator('#reference-area .source-links a').first().innerText()==='Cleric mechanics');
 await page.locator('[data-action="close-reference"]').click();
 check('Sources close returns focus to its original footer control',await page.locator('.site-footer [data-action="sources"]').evaluate(e=>e===document.activeElement));
 await page.evaluate(()=>location.hash='%E0%A4%A');await page.waitForTimeout(30);
 check('malformed later URL preserves the current role',await page.locator('#role-title').innerText()==='Cleric');
 check('normal browser storage has a visible persistence status',await page.locator('#save-state').innerText()==='Choices kept on this browser');
 check('blank format is the emphasized copy action',await page.locator('[data-action="copy-blank"]').evaluate(e=>e.classList.contains('copy-primary'))&&!await page.locator('[data-action="copy-example"]').evaluate(e=>e.classList.contains('copy-primary')));
 check('truthful Town history uses a recording heading',await page.locator('.example-tips>h3').innerText()==='How to record your results');
 check('glossary control describes game terms',await page.locator('.site-footer [data-action="glossary"]').innerText()==='Game terms');
 await page.evaluate(()=>{const original=Element.prototype.scrollIntoView;window.__phaseScroll=[];Element.prototype.scrollIntoView=function(options){window.__phaseScroll.push(options);return original.call(this,options);};});
 await page.locator('[data-action="phase"][data-phase="day"]').click();
 check('phase jumps honor reduced motion',await page.evaluate(()=>window.__phaseScroll.at(-1)?.behavior)==='auto');
 await page.locator('[data-action="phase"][data-phase="n1"]').click();
 await page.evaluate(()=>location.hash='ritualist');await page.waitForFunction(()=>document.querySelector('#role-title')?.textContent==='Ritualist');
 await page.locator('[data-action="study-role"]').click();const excerpt=page.locator('#study-content [data-action="copy-feedback-message"]').first();
 check('partial quotes explicitly say Copy excerpt',await excerpt.innerText()==='Copy excerpt');await excerpt.click();check('excerpt copy does not invent the rest of the sentence',await page.evaluate(()=>navigator.clipboard.readText())==='You guessed correctly');await page.keyboard.press('Escape');
 if(axePath)await page.addScriptTag({path:axePath});
 for(const width of [1360,320])for(const theme of ['dark','light']){
  await page.setViewportSize({width,height:1000});
  if(await page.locator('html').getAttribute('data-theme')!==theme)await page.locator('#theme-toggle').click();
  for(const role of roles){
   await page.evaluate(id=>location.hash=id,role.id);await page.waitForFunction(id=>document.querySelector('#role-title')?.textContent===id,role.name);
   for(const detail of [false,true]){
    if((await page.locator('#detail-toggle').getAttribute('aria-expanded')==='true')!==detail)await page.locator('#detail-toggle').click();
    const label=role.id+' '+width+'px '+theme+' '+(detail?'expanded':'compact');
    const result=await inspect(label);report.roleLayouts.push({role:role.id,width,theme,detail,height:result.height,buttons:result.buttons,disclosures:result.disclosures,actions:result.actions});
    if(['jinx','cleric','arsonist','death'].includes(role.id))await axe(label);
   }
   // Inspect all guide links and verify that its quotes use the shared copy controls.
   if(width===1360&&theme==='dark'){
    await page.locator('[data-action="study-role"]').click();await inspect(role.id+' study');
    const guide=page.locator('#study-content [data-feedback-role="'+role.id+'"]');
    check(role.id+' study has adjacent copies for every documented message',await guide.locator('.message-copy-line [data-action="copy-feedback-message"]').count()===role.feedbackGuide.messages.length);
    if(role.feedbackGuide.messages.length){await guide.locator('[data-action="copy-feedback-message"]').first().click();check(role.id+' study message copies the actual role wording',await page.evaluate(()=>navigator.clipboard.readText())===(role.feedbackGuide.messages[0].copyText||role.feedbackGuide.messages[0].text));}
    if(['jinx','cleric','arsonist','death'].includes(role.id))await axe(role.id+' study');
    await page.keyboard.press('Escape');
   }
  }
  await page.locator('[data-action="choose-group"][data-faction="all"]').click();await inspect('role picker '+width+'px '+theme);await axe('role picker '+width+'px '+theme);
  await page.locator('#role-search').fill('no role can match this');check('empty role search keeps a useful recovery message '+width+'px '+theme,await page.locator('.picker-empty').innerText().then(t=>t.includes('Clear')));
  await page.locator('[data-action="close-picker"]').click();
  await page.locator('[data-action="choose-claim"]').click();await inspect('claim picker '+width+'px '+theme);await axe('claim picker '+width+'px '+theme);await page.keyboard.press('Escape');
  await page.locator('.site-footer [data-action="glossary"]').click();await inspect('terms '+width+'px '+theme);await axe('terms '+width+'px '+theme);await page.locator('[data-action="close-reference"]').click();
  await page.locator('.site-footer [data-action="sources"]').click();await page.locator('#reference-area details').evaluate(e=>e.open=true);await inspect('sources '+width+'px '+theme);await axe('sources '+width+'px '+theme);await page.locator('[data-action="close-reference"]').click();
  await page.locator('#new-match:visible,[data-action="open-reset"]:visible').first().click();await inspect('reset '+width+'px '+theme);await axe('reset '+width+'px '+theme);await page.locator('[data-action="cancel-reset"]').click();
  console.log('PASS all 64 roles in compact/expanded at '+width+'px '+theme);
 }
 const blocked=await browser.newContext();await blocked.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked')};Storage.prototype.setItem=()=>{throw Error('blocked')};});const memory=await blocked.newPage();await memory.goto(origin);await memory.locator('#role-title').waitFor();check('unavailable browser storage is explicitly visible without blocking the app',await memory.locator('#save-state').innerText()==='Choices kept in memory · browser storage unavailable');await blocked.close();
 const broken=await browser.newContext();await broken.route('**/data/roles.json*',r=>r.fulfill({status:503,body:'Unavailable'}));const failed=await broken.newPage();await failed.goto(origin);await failed.locator('#reload-app').waitFor();check('role-data failure exposes a retry control',await failed.locator('.load-error').innerText().then(t=>t.includes('Try again')));check('controls requiring role data stay disabled after loading fails',await failed.locator('[data-library-control]').evaluateAll(xs=>xs.every(e=>e.disabled)));check('skip target still exists when role data fails',await failed.locator('.skip-link').getAttribute('href')==='#main'&&await failed.locator('#main').count()===1);await broken.close();
 check('all layouts have valid controls, references, fragments and bounded width',report.issues.length===0);
 check('automated accessibility sample has no WCAG violations',report.accessibility.every(a=>a.violations.length===0));
 check('no browser runtime errors',report.runtimeErrors.length===0);
}finally{
 report.externalLinks=[...links].sort();report.summary={roleLayoutStates:report.roleLayouts.length,accessibilityStates:report.accessibility.length,regressionChecks:report.regressions.length,issues:report.issues.length,runtimeErrors:report.runtimeErrors.length,externalLinks:links.size};
 mkdirSync(new URL('../qa/',import.meta.url),{recursive:true});writeFileSync(new URL('../qa/site-audit-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify(report.summary));await browser.close();
}
