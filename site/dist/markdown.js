export function escapeHTML(value=''){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function inline(text){
  const token=/\[([^\]]+)\]\((https?:\/\/[^\s]+|\.\/message-sources\.html#[A-Z0-9_]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
  let out='',last=0;
  for(const m of text.matchAll(token)){
    out+=escapeHTML(text.slice(last,m.index));
    if(m[1])out+=`<a href="${escapeHTML(m[2])}" target="_blank" rel="noopener noreferrer">${escapeHTML(m[1])}</a>`;
    else if(m[3])out+=`<strong>${escapeHTML(m[3])}</strong>`;
    else out+=`<code>${escapeHTML(m[4])}</code>`;
    last=m.index+m[0].length;
  }
  return out+escapeHTML(text.slice(last));
}
export function markdown(text=''){
  const lines=String(text).split('\n');let out='',p=[],list='',code=null;
  const flush=()=>{if(p.length){out+=`<p>${inline(p.join(' '))}</p>`;p=[];}};
  const close=()=>{if(list){out+=`</${list}>`;list='';}};
  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    if(line.startsWith('```')){flush();close();if(code!==null){out+=`<pre><code>${escapeHTML(code.join('\n'))}</code></pre>`;code=null;}else code=[];continue;}
    if(code!==null){code.push(line);continue;}
    if(line.startsWith('|')&&lines[i+1]?.match(/^\|[\s:|\-]+\|$/)){
      flush();close();const cells=s=>s.trim().replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
      out+='<div class="table-wrap"><table><thead><tr>'+cells(line).map(c=>`<th>${inline(c)}</th>`).join('')+'</tr></thead><tbody>';i++;
      while(lines[i+1]?.startsWith('|'))out+='<tr>'+cells(lines[++i]).map(c=>`<td>${inline(c)}</td>`).join('')+'</tr>';
      out+='</tbody></table></div>';continue;
    }
    const h=line.match(/^#{1,6}\s+(.+)$/);if(h){flush();close();out+=`<h4>${inline(h[1])}</h4>`;continue;}
    const li=line.match(/^\s*(?:([-*])|\d+\.)\s+(.+)$/);if(li){flush();const type=li[1]?'ul':'ol';if(list!==type){close();out+=`<${type}>`;list=type;}out+=`<li>${inline(li[2])}</li>`;continue;}
    if(!line.trim()){flush();close();continue;}
    close();p.push(line);
  }
  flush();close();if(code!==null)out+=`<pre><code>${escapeHTML(code.join('\n'))}</code></pre>`;return out;
}
