export const STORAGE_KEY = 'salem-sidekick:v1';
export const uid = () => globalThis.crypto?.randomUUID?.() || `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`;
export function initialState() { return {schemaVersion:1,actualId:'sheriff',claimId:'sheriff',deliberateClaim:false,detail:false,expanded:[],theme:'dark',phase:'n1',routeChoices:{},routeGoals:{},recent:['sheriff'],goals:{},drafts:{public:{},private:{}},timeline:[],willOpen:false,namespace:'public',privateViewId:null}; }
export function selectedRoute(state,role) {
  return role.routes?.find(r=>r.id===state.routeChoices?.[role.id]) || role.routes?.[0] || {id:'default',label:'Recommended start',headline:role.playbook.headline,action:role.playbook.firstNight,reason:role.playbook.reason,targetRule:role.playbook.targetRule,pivot:role.playbook.pivot,laterPriorities:role.playbook.laterPriorities,when:'Start here with limited information.',risk:role.playbook.expanded,goals:role.opening?.goals||role.playbook.laterPriorities,sourceUrls:role.playbook.sourceUrls};
}
export const isTownClaim = role => Boolean(role?.alignment?.startsWith('Town'));
export function openingClaimRisk(actual,claim) {
  if(!actual||!claim||actual.parentId||actual.id===claim.id)return null;
  return claim.claimProfile?.openingConstraint || null;
}
export function ensureTownClaim(state,library) {
  if(isTownClaim(library.find(r=>r.id===state.claimId)))return;
  const actual=library.find(r=>r.id===state.actualId);
  const preferred=library.find(r=>r.id===actual?.preferredClaimId);
  state.claimId=(isTownClaim(preferred)?preferred:isTownClaim(actual)?actual:library.find(isTownClaim))?.id || 'sheriff';
  state.deliberateClaim=false;
}
export function restoreState(raw, library) {
  const fresh=initialState(); if(!raw)return fresh;
  const value=JSON.parse(raw); if(!value || value.schemaVersion!==1 || !value.drafts || typeof value.drafts!=='object')throw new Error('Saved format is not supported');
  const valid=new Set(library.map(r=>r.id));
  const state={...fresh,...value};
  state.actualId=valid.has(value.actualId)?value.actualId:fresh.actualId;
  state.claimId=valid.has(value.claimId)?value.claimId:fresh.claimId;
  state.namespace=value.namespace==='private'?'private':'public';
  state.privateViewId=valid.has(value.privateViewId)?value.privateViewId:null;
  state.phase=['n1','day','later'].includes(value.phase)?value.phase:'n1';
  state.theme=value.theme==='light'?'light':'dark';
  state.detail=Boolean(value.detail);
  state.deliberateClaim=Boolean(value.deliberateClaim);
  state.recent=Array.isArray(value.recent)?value.recent.filter(x=>valid.has(x)).slice(0,5):[];
  state.expanded=Array.isArray(value.expanded)?value.expanded.filter(x=>typeof x==='string'):[];
  state.goals={};
  for(const [id,goals] of Object.entries(value.goals && typeof value.goals==='object'?value.goals:{})){if(valid.has(id)&&Array.isArray(goals))state.goals[id]=goals.filter(x=>Number.isInteger(x)&&x>=0&&x<3);}
  state.routeChoices={};state.routeGoals={};
  for(const role of library){
    const choice=value.routeChoices?.[role.id];
    if(role.routes?.some(r=>r.id===choice))state.routeChoices[role.id]=choice;
    for(const route of role.routes||[]){
      const checked=value.routeGoals?.[role.id]?.[route.id];
      if(Array.isArray(checked)){state.routeGoals[role.id]||={};state.routeGoals[role.id][route.id]=checked.filter(i=>Number.isInteger(i)&&i>=0&&i<3);}
    }
  }
  state.willOpen=Boolean(value.willOpen);
  state.timeline=Array.isArray(value.timeline)?value.timeline:[];
  state.drafts={public:{},private:{}};
  for(const ns of ['public','private'])for(const [id,draft]of Object.entries(value.drafts[ns]||{})){
    if(!valid.has(id) || !draft || typeof draft!=='object')continue;
    state.drafts[ns][id]={title:typeof draft.title==='string'?draft.title:'',format:draft.format==='detailed'?'detailed':'short',entries:[]};
    if(Array.isArray(draft.entries))state.drafts[ns][id].entries=draft.entries.filter(e=>e&&typeof e==='object').map(e=>({id:typeof e.id==='string'&&/^[a-zA-Z0-9-]+$/.test(e.id)?e.id:uid(),phase:e.phase==='D'?'D':'N',cycle:Math.max(1,Number(e.cycle)||1),action:String(e.action||''),target:String(e.target||''),via:String(e.via||''),result:String(e.result||''),feedback:String(e.feedback||''),notes:String(e.notes||''),guesses:Array.isArray(e.guesses)?e.guesses.slice(0,3).map(g=>({player:String(g?.player||''),role:String(g?.role||'')})):[]}));
  }
  ensureTownClaim(state,library);
  return state;
}
export function getDraft(state,namespace,roleId) {
  state.drafts[namespace] ||= {};
  return state.drafts[namespace][roleId] ||= {title:'',format:'short',entries:[]};
}
export function targetType(role,entry) {
  if(role.id==='doomsayer'&&entry.action==='Three guesses')return 'guesses';
  if(role.id==='coroner'&&entry.action==='Autopsy')return 'dead';
  return role.template.actionTargets?.[entry.action] || role.template.targetType || 'none';
}
export function newEntry(draft,role,phase='N',same=false) {
  const highest=Math.max(0,...draft.entries.filter(e=>e.phase===phase).map(e=>Number(e.cycle)||1));
  let action=role.template.actions.find(a=>role.template.actionPhases?.[a]===phase) || role.template.actions[0] || 'Manual entry';
  // A night entry must not silently turn a day ability into an N1 action.
  if(role.template.actionPhases?.[action] && role.template.actionPhases[action]!==phase)action='Hold / no action';
  const e={id:uid(),phase,cycle:same?Math.max(1,highest):highest+1,action,target:'',via:'',result:'',feedback:'',notes:'',guesses:[{player:'',role:''},{player:'',role:''},{player:'',role:''}]};
  draft.entries.push(e); return e;
}
export function nextDayCycle(draft) { return Math.max(2,...draft.entries.filter(e=>e.phase==='D').map(e=>(Number(e.cycle)||1)+1),...draft.entries.filter(e=>e.phase==='N').map(e=>(Number(e.cycle)||1)+1)); }
export function rowText(entry,role,detailed=false) {
  const type=targetType(role,entry), failed=entry.result==='Failed / no result';
  let target=entry.target.trim();
  if(type==='guesses'){
    const guesses=(entry.guesses||[]).filter(g=>g.player.trim()&&g.role.trim());
    if(guesses.length!==3&&!failed)return '';
    target=guesses.map(g=>`${g.player.trim()}=${g.role.trim()}`).join('; ');
  }
  if(['player','pair','roles','dead'].includes(type)&&!target&&!failed)return '';
  if(type==='corpse'){
    if(!entry.via.trim()&&!failed)return '';
    target=entry.via.trim()+(target?` -> ${target}`:'');
  }
  if(entry.action==='Manual entry'&&!entry.feedback.trim()&&!entry.notes.trim()&&!target&&!entry.result)return '';
  const action=entry.action==='Manual entry'?'':entry.action;
  const result=entry.result && !['Manual feedback','Actual block feedback (enter exact text)'].includes(entry.result)?entry.result:'';
  const outcome=[result,entry.feedback.trim()].filter(Boolean).join('; ');
  const body=[action,target].filter(Boolean).join(' ');
  const includeNotes=detailed||entry.action==='Manual entry';
  return `${entry.phase}${Math.max(1,Number(entry.cycle)||1)}: ${body}${outcome?` — ${outcome}`:''}${includeNotes&&entry.notes.trim()?`${body||outcome?' | ':''}${entry.notes.trim()}`:''}`.trim();
}
export function exportDraft(state,namespace,role,options={}) {
  const draft=getDraft(state,namespace,role.id), detailed=draft.format==='detailed';
  const entries=draft.entries.map((e,i)=>({e,i})).sort((a,b)=>Number(a.e.cycle)-Number(b.e.cycle)||(a.e.phase===b.e.phase?a.i-b.i:a.e.phase==='D'?-1:1));
  const rows=entries.filter(x=>!options.entryId||x.e.id===options.entryId).map(x=>rowText(x.e,role,detailed)).filter(Boolean);
  const heading=[role.name,draft.title.trim()].filter(Boolean).join(' — ');
  return {text:[heading,...rows].join('\n'),included:rows.length,omitted:entries.filter(x=>!options.entryId||x.e.id===options.entryId).length-rows.length};
}
export function selectActual(state,role,library) {
  const changingRole=state.actualId!==role.id;
  state.actualId=role.id;
  state.privateViewId=null;
  state.timeline.push({roleId:role.id,at:new Date().toISOString()});
  state.recent=[role.id,...state.recent.filter(x=>x!==role.id)].slice(0,5);
  if(changingRole){
    // Start each different role with its recommendation. Saved drafts stay intact.
    const suggested=role.claim_candidates?.[0]?.role;
    state.claimId=library.find(r=>r.id===role.preferredClaimId&&isTownClaim(r))?.id || library.find(r=>r.name===suggested&&isTownClaim(r))?.id || role.id;
    state.deliberateClaim=false;
  }
  ensureTownClaim(state,library);
}
