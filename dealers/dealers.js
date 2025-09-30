
async function loadDealers(){
  const res=await fetch('dealers.json'); const dealers=await res.json();
  const list=document.getElementById('dealerList'); const q=document.getElementById('q'); const st=document.getElementById('state');
  function render(items){
    list.innerHTML='';
    if(!items.length){list.innerHTML='<p style="color:#6b7280">No dealers found.</p>';return}
    for(const d of items){
      const a=document.createElement('a'); a.className='card'; a.style.padding='1rem'; a.href=d.website||'#'; a.target='_blank'; a.rel='noopener';
      a.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;gap:.75rem">
        <div><div style="font-weight:700">${d.name}</div>
          <div style="color:#6b7280;font-size:.95rem">${d.address}, ${d.city}, ${d.state} ${d.zip}</div>
          <div style="color:#6b7280;font-size:.95rem;margin-top:.25rem">Phone: ${d.phone}${d.email?' · '+d.email:''}</div></div>
        <span class="tag">${d.state}</span>
      </div>`;
      list.appendChild(a);
    }
  }
  function filter(){
    const term=q.value.toLowerCase().trim(); const s=st.value;
    render(dealers.filter(d=>{
      const t=(d.name+' '+d.city+' '+d.state+' '+d.zip+' '+d.address).toLowerCase();
      const okText=term? t.includes(term):true; const okState=s? d.state===s:true; return okText&&okState;
    }));
  }
  q.addEventListener('input',filter); st.addEventListener('change',filter); render(dealers);
}
document.addEventListener('DOMContentLoaded',loadDealers);
