
/* ================= ARAYÜZ ================= */
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hsh=t=>[...t].reduce((h,c)=>(h*31+c.charCodeAt(0))|0,7).toString(36).replace('-','m');
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const ST=Object.assign({A:'bil',si:0,year:3,hours:10,second:false,B:'mak',bi:0},store.get('mgi2-state',{}));
if(!BY[ST.A])ST.A='bil';if(!BY[ST.B]||ST.B===ST.A)ST.B=DB.find(d=>d.id!==ST.A).id;
if(ST.si>=BY[ST.A].subs.length)ST.si=0;if(ST.bi>=BY[ST.B].subs.length)ST.bi=0;
let PROG=store.get('mgi2-prog',{})||{};
const YEARS=[[1,'1. sınıf'],[2,'2. sınıf'],[3,'3. sınıf'],[4,'4. sınıf'],[5,'Mezunum']];
const HOURS=[[5,'5 saat'],[10,'10 saat'],[20,'20+ saat']];
const EXAMPLES=[
  {l:'Bilgisayar · Gömülü Sistemler',A:'bil',si:0,second:false,year:3},
  {l:'Metalurji + Makine (SolidWorks, ANSYS)',A:'met',si:0,second:true,B:'mak',bi:0,year:2},
  {l:'Elektrik-Elektronik + Bilgisayar',A:'eem',si:3,second:true,B:'bil',bi:0,year:2},
  {l:'Endüstri + Yazılım',A:'end',si:0,second:true,B:'ysm',bi:0,year:3}
];
const LVCLS=['','lv1','lv2','lv3'];
const PLABEL=p=>p.t==='g'?p.y+'. sınıf · Güz':p.t==='b'?p.y+'. sınıf · Bahar':p.t==='y'?p.y+'. sınıf · Yaz':['Mezuniyet sonrası ilk yıl','İlk 3 ay','3-6 ay','6-12 ay'][p.m];
const PSHORT=p=>p.t==='g'?p.y+'. Güz':p.t==='b'?p.y+'. Bahar':p.t==='y'?p.y+'. Yaz':['Mezuniyet','0-3 ay','3-6 ay','6-12 ay'][p.m];

/* ---- seçiciler ---- */
const sDept=$('#s-dept'),sDept2=$('#s-dept2'),tSecond=$('#t-second');
function fillDept(){
  sDept.innerHTML=DB.map(d=>`<option value="${d.id}"${d.id===ST.A?' selected':''}>${esc(d.ad)}</option>`).join('');
  sDept2.innerHTML=DB.filter(d=>d.id!==ST.A).map(d=>`<option value="${d.id}"${d.id===ST.B?' selected':''}>${esc(d.ad)}</option>`).join('');
  tSecond.checked=ST.second;$('#second').hidden=!ST.second;
}
function segs(){
  $('#seg-year').innerHTML=YEARS.map(([v,l])=>`<button type="button" data-v="${v}" aria-pressed="${ST.year===v}">${l}</button>`).join('');
  $('#seg-hours').innerHTML=HOURS.map(([v,l])=>`<button type="button" data-v="${v}" aria-pressed="${ST.hours===v}">${l}</button>`).join('');
}
function subCards(D,sel,unsure){
  return D.subs.map((s,i)=>`<button type="button" class="subcard" data-i="${i}" aria-pressed="${i===sel}"><b>${esc(s.ad)}</b><span>${esc(s.adv.slice(0,2).join(' · '))}</span></button>`).join('')+(unsure?`<a class="subcard unsure" href="#test" style="text-decoration:none;color:inherit"><b>Emin değilim</b><span>${esc(D.k)} bölümüne özel testi çöz</span></a>`:'');
}
function fillSubs(){
  const A=BY[ST.A];
  $('#subs').innerHTML=subCards(A,ST.si,true);
  $('#sub-n').textContent=A.subs.length+' alan';
  if(ST.second)$('#subs2').innerHTML=subCards(BY[ST.B],ST.bi,false);
}
sDept.addEventListener('change',()=>{ST.A=sDept.value;ST.si=0;if(ST.B===ST.A)ST.B=DB.find(d=>d.id!==ST.A).id;ST.bi=0;resetQuiz();fillDept();update()});
sDept2.addEventListener('change',()=>{ST.B=sDept2.value;ST.bi=0;update()});
tSecond.addEventListener('change',()=>{ST.second=tSecond.checked;$('#second').hidden=!ST.second;update()});
$('#seg-year').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;ST.year=+b.dataset.v;update()});
$('#seg-hours').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;ST.hours=+b.dataset.v;update()});
$('#subs').addEventListener('click',e=>{const b=e.target.closest('button.subcard');if(!b)return;ST.si=+b.dataset.i;update()});
$('#subs2').addEventListener('click',e=>{const b=e.target.closest('button.subcard');if(!b)return;ST.bi=+b.dataset.i;update()});
$('#examples').innerHTML=EXAMPLES.map((x,i)=>`<button type="button" data-i="${i}">${esc(x.l)}</button>`).join('');
$('#examples').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const x=EXAMPLES[+b.dataset.i];Object.assign(ST,{second:false},x);delete ST.l;resetQuiz();fillDept();update();$('#yol').scrollIntoView({behavior:smooth()})});
const smooth=()=>matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';

/* ---- bölüme özel test ---- */
let QZ={step:0,ans:[]};
function resetQuiz(){QZ={step:0,ans:[]}}
function order(n,seed){const a=[...Array(n).keys()];let x=seed;for(let i=n-1;i>0;i--){x=(x*16807+11)%2147483647;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function renderQuiz(){
  const A=BY[ST.A],Q=A.quiz,el=$('#qcard');
  $('#test-intro').textContent=A.ad+' için '+Q.length+' soru. Sorular bölümüne göre değişir; sonuçtaki ilk alanı tek dokunuşla yol haritana uygulayabilirsin.';
  const dots=`<div class="dots" aria-hidden="true">${Q.map((_,i)=>`<i class="${i<QZ.step?'done':i===QZ.step?'on':''}"></i>`).join('')}</div>`;
  if(QZ.step<Q.length){
    const q=Q[QZ.step],ord=order(q.o.length,[...A.id].reduce((a,c)=>a+c.charCodeAt(0),0)*7+QZ.step*13+3);
    el.innerHTML=`${dots}<span class="lbl">${esc(A.k)} · soru ${QZ.step+1} / ${Q.length}</span><p class="qtitle" id="qt">${esc(q.t)}</p>
    <div class="qopts" role="group" aria-labelledby="qt">${ord.map((oi,k)=>`<button type="button" class="qopt" data-o="${oi}" aria-pressed="${QZ.ans[QZ.step]===oi}"><i>${'ABCD'[k]}</i>${esc(q.o[oi])}</button>`).join('')}</div>
    <div class="qnav"><button type="button" class="btn line" id="q-back"${QZ.step?'':' disabled style="opacity:.4"'}>← Geri</button><span class="lbl" style="align-self:center">Seçince otomatik ilerler</span></div>`;
    el.querySelectorAll('.qopt').forEach(b=>b.onclick=()=>{const v=+b.dataset.o;QZ.ans[QZ.step]=v;el.querySelectorAll('.qopt').forEach(x=>x.setAttribute('aria-pressed',x===b));setTimeout(()=>{if(QZ.ans[QZ.step]===v){QZ.step++;renderQuiz()}},260)});
    $('#q-back').onclick=()=>{if(QZ.step){QZ.step--;renderQuiz()}};
    return;
  }
  const R=quizResult(A,QZ.ans),top=R[0];
  el.innerHTML=`${dots}<span class="lbl">Sonuç · ${esc(A.k)}</span><p class="qtitle">Sana en uygun alan: <span class="redtxt">${esc(top.s.ad)}</span></p>
  <div class="bars">${R.map((r,k)=>`<div class="barrow${k===0?' top':''}"><b>${esc(r.s.ad)}</b><span class="v">%${r.p}</span><span class="t"><i style="width:${r.p}%"></i></span></div>`).join('')}</div>
  <p style="color:var(--muted);font-size:14px">İlk odak: ${esc(top.s.adv.slice(0,3).join(', '))}.</p>
  <div class="qnav"><button type="button" class="btn red" id="q-apply">Bu alanla yol haritamı oluştur</button><button type="button" class="btn line" id="q-again">Testi tekrar çöz</button></div>`;
  $('#q-apply').onclick=()=>{ST.si=top.i;update();$('#yol').scrollIntoView({behavior:smooth()})};
  $('#q-again').onclick=()=>{resetQuiz();renderQuiz()};
}

/* ---- yol haritası ---- */
let PLAN=null,KEYS=[];
const kTool=e=>'t|'+e.k+'|'+e.lv, kSkill=x=>'s|'+hsh(x), kProj=x=>'p|'+hsh(x);
function chk(key,title,extra){return`<label class="chk"><input type="checkbox" data-k="${esc(key)}"${PROG[key]?' checked':''}><span class="tx"><b>${title}</b>${extra||''}</span></label>`}
function certChips(k,lv){return`<span class="certs">${certsFor(k,lv).map(c=>`<span class="cert${c.s==='TR'?' tr':''}"><i>${c.s==='TR'?'TR':'GLOBAL'}</i>${esc(c.c)}</span>`).join('')}</span>`}
function ring(p){const r=22,C=2*Math.PI*r;return`<svg class="ring" viewBox="0 0 56 56" aria-label="%${p} tamamlandı"><circle cx="28" cy="28" r="${r}" fill="none" stroke="#EEE9E7" stroke-width="6"/><circle cx="28" cy="28" r="${r}" fill="none" stroke="#E30A17" stroke-width="6" stroke-linecap="round" stroke-dasharray="${(C*p/100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 28 28)"/><text x="28" y="33" text-anchor="middle">%${p}</text></svg>`}
function periodKeys(p){return[...p.skills.map(s=>kSkill(s.x)),...p.tools.map(kTool),...(p.proj?[kProj(p.proj.x)]:[])]}
const pct=keys=>keys.length?Math.round(keys.filter(k=>PROG[k]).length/keys.length*100):0;
const WCOL=['#E30A17','#16161B','#C98F00','#D9D3D0'];
function focusTitle(p){
  if(p.t==='y')return p.proj.t;
  if(p.t==='m')return p.m?'Kariyere geçiş':'Mezuniyet sonrası: uzmanlığını belgele';
  const tools=p.tools.filter(e=>e.k!=='english').slice(0,2).map(e=>TOOLS[e.k].n.split(' (')[0]);
  const pre=p.y===1?'Temelleri kur':p.y===2?'Çekirdek ve ilk uzmanlık':p.y===3?'Uzmanlaşma':'İleri seviye ve bitirme';
  return pre+(tools.length?': '+tools.join(' ve '):p.skills[0]?': '+p.skills[0].x:'');
}
function levelOf(p){return p.t==='m'?3:p.y<=2?1:p.y===3?2:3}
function periodHTML(p,i){
  const pl=PLAN,lv=levelOf(p),B=pl.B;
  const skills=p.skills.map(s=>chk(kSkill(s.x),esc(s.x)+(s.src==='B'?`<span class="srcB">${esc(B.kod)}</span>`:''),`<span><span class="pill ${LVCLS[s.lv]}" style="padding:2px 9px;font-size:11px">${LVN[s.lv]}</span></span>`)).join('');
  const tools=p.tools.map(e=>{const T=TOOLS[e.k];return chk(kTool(e),esc(T.n)+` <span class="pill ${LVCLS[e.lv]}" style="padding:2px 9px;font-size:11px;vertical-align:2px">${LVN[e.lv]}</span>`+(e.src==='B'?`<span class="srcB">${esc(B.kod)}</span>`:''),`<span class="d">${esc(T.d)}</span>${certChips(e.k,e.lv)}`)}).join('');
  const week=p.t==='y'?'':`<div class="blk week"><h5>Haftalık plan · ${ST.hours===20?'20+':ST.hours} saat</h5><div class="bar3">${pl.split.map(([n,h],j)=>`<i style="flex:${h};background:${WCOL[j]}"></i>`).join('')}</div><ul>${pl.split.map(([n,h],j)=>`<li><i style="background:${WCOL[j]}"></i>${esc(n)} ${h} sa</li>`).join('')}</ul></div>`;
  const proj=p.proj?`<div class="projc"><b>${esc(p.proj.t)}</b><p>${esc(p.proj.x)}</p><label class="chk" style="background:transparent;border:0;padding:4px 0 0"><input type="checkbox" data-k="${esc(kProj(p.proj.x))}"${PROG[kProj(p.proj.x)]?' checked':''}><span class="tx"><b style="font-size:13.5px">Tamamladım</b></span></label></div>`:'';
  const usta=p.tip?`<div class="blk"><h5>Ustadan</h5><div class="usta"><p>${esc(p.tip[0])}</p><small>${esc(p.tip[1])}</small></div>${p.acts.length?`<ul class="acts">${p.acts.map(a=>`<li>${esc(a)}</li>`).join('')}</ul>`:''}</div>`:'';
  const ks=periodKeys(p),pc=pct(ks);
  const tags=`<span class="pill dark">${esc(PLABEL(p))}</span><span class="pill ${LVCLS[lv]}">${p.t==='m'?'Profesyonel':LVN[lv]+' seviye'}</span>${p.tools.length?`<span class="pill ghost">${p.tools.reduce((a,e)=>a+certsFor(e.k,e.lv).length,0)} sertifika önerisi</span>`:''}`;
  const left=(skills?`<div class="blk"><h5>Bu dönem öğren</h5>${skills}</div>`:'')+(tools?`<div class="blk"><h5>Uygulamalar ve sertifikalar</h5>${tools}</div>`:'');
  return`<article class="per${p.t==='y'?' yaz':''}" id="p-${i}" data-i="${i}">
    <div class="per-h"><div class="l"><div class="tags">${tags}</div><h4>${esc(focusTitle(p))}</h4></div><span class="pr">${ring(pc)}</span></div>
    <div class="pgrid"><div style="display:flex;flex-direction:column;gap:18px;min-width:0">${left||proj}</div><div style="display:flex;flex-direction:column;gap:18px;min-width:0">${week}${left?proj:''}${usta}</div></div></article>`;
}
function renderPlan(){
  const o={A:ST.A,si:ST.si,year:ST.year,hours:ST.hours,B:ST.second?ST.B:'',bi:ST.bi};
  const pl=PLAN=buildPlan(o),A=pl.A,s=pl.s,B=pl.B;
  const nP=pl.P.length;
  const startTxt=ST.year>=5?'Mezuniyet sonrası 12 ay':ST.year+'. sınıftan başlıyor';
  const missed=(pl.missed.length||pl.missedTools.length)?`<div class="missed"><h5 class="lbl" style="margin:0">Önceki yıllardan kontrol listesi</h5><p>Bu konuları geride bıraktın sayılıyor. Eksik olanı işaretlemeden bırak ve bu dönem tamamla.</p>${pl.missed.map(x=>chk(kSkill(x),esc(x))).join('')}${pl.missedTools.map(k=>chk(kTool({k,lv:1}),esc(TOOLS[k].n),certChips(k,1))).join('')}</div>`:'';
  const hyb=pl.syn?`<div><h5 class="lbl" style="margin:0 0 10px">${esc(A.k)} + ${esc(B.k)} kesişim alanların</h5><div class="hyb">${pl.syn.fields.map(f=>`<div><b>${esc(f.n)}</b><span>${esc(f.d)}</span></div>`).join('')}</div></div>`:'';
  $('#rm-card').innerHTML=`<span class="lbl">${esc(A.ad)}${B?' · İkinci alan: '+esc(B.ad):''}</span>
    <h3>${esc(s.ad)}${B?` <span class="plus">+</span> ${esc(B.k)}: ${esc(pl.sb.ad)}`:''}</h3>
    <div class="chips"><span class="pill dark">${esc(startTxt)}</span><span class="pill ghost">${nP} aşama</span><span class="pill ghost">${pl.certs.length} sertifika önerisi</span><span class="pill ghost">Haftada ${ST.hours===20?'20+':ST.hours} saat</span></div>
    <div><div class="prog-row"><span>Mühendislik yetkinlik ilerlemen</span><b id="prog-n">%0</b></div><div class="track" style="margin-top:8px"><div class="fill" id="prog-f"></div></div></div>${hyb}${missed}`;
  const aq=AQ[A.q];$('#rm-q').textContent=aq[0];$('#rm-qs').textContent=aq[1];
  /* zaman çizelgesi */
  const qorder=uniq([A.q,2,0,4,14,3,5,10].map(String)).map(Number);
  let html='',yi=0,lastY=null;
  pl.P.forEach((p,i)=>{
    if(p.y!==lastY){lastY=p.y;const q=AQ[qorder[yi++%qorder.length]];html+=`<div class="yh"><h3>${p.y>=5?'Mezuniyet sonrası':p.y+'. sınıf'}</h3><q>${esc(q[0])}</q><small>${esc(q[1])}</small></div>`}
    html+=periodHTML(p,i);
  });
  $('#tl').innerHTML=html;
  /* sertifika merdiveni */
  $('#ladder').innerHTML=[1,2,3].map(l=>{const cs=pl.certs.filter(c=>c.l===l);return`<div class="rung"><h4><span class="pill ${LVCLS[l]}">${LVN[l]}</span>${cs.length} sertifika</h4><ul>${cs.map(c=>`<li><b>${esc(c.n)}</b><span>${esc(c.tool)} · ${c.s==='TR'?'Türkiye':'Global'}${c.src==='B'?' · '+esc(B.k):''}</span></li>`).join('')||'<li><span>Bu seviye için öneri yok.</span></li>'}</ul></div>`}).join('');
  KEYS=uniq([...pl.P.flatMap(periodKeys)]);
  renderUstalar();refreshProgress();
}
function refreshProgress(){
  const p=pct(KEYS),done=KEYS.filter(k=>PROG[k]).length;
  $('#prog-n').textContent='%'+p+' · '+done+'/'+KEYS.length;$('#prog-f').style.width=p+'%';
  $('#ovw').innerHTML=PLAN.P.map((pp,i)=>{const v=pct(periodKeys(pp));return`<a href="#p-${i}" class="${v===100?'full':''}"><i>${v}%</i>${esc(PSHORT(pp))}</a>`}).join('');
  PLAN.P.forEach((pp,i)=>{const el=document.querySelector('#p-'+i+' .pr');if(el)el.innerHTML=ring(pct(periodKeys(pp)))});
}
document.addEventListener('change',e=>{
  const k=e.target.dataset&&e.target.dataset.k;if(!k)return;
  if(e.target.checked)PROG[k]=1;else delete PROG[k];
  store.set('mgi2-prog',PROG);
  document.querySelectorAll('input[data-k]').forEach(x=>{if(x!==e.target&&x.dataset.k===k)x.checked=e.target.checked});
  refreshProgress();
});

/* ---- ustalar ---- */
function initials(n){return n.replace(/[()0-9]/g,'').split(/[\s,]+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toLocaleUpperCase('tr')}
function renderUstalar(){
  const A=PLAN.A,B=PLAN.B;
  $('#ust-h').textContent=A.k+(B?' ve '+B.k:'')+' ustaları';
  const exs=[...A.ex.map(x=>[x,A]),...(B?B.ex.slice(0,2).map(x=>[x,B]):[])];
  const box=(t,arr)=>`<div class="box"><h4>${esc(t)}</h4><ul>${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;
  $('#ust').innerHTML=`<div class="ex">${exs.map(([[n,d],D])=>`<div class="exc"><span class="av" aria-hidden="true">${esc(initials(n))}</span><div><b>${esc(n)}</b><p>${esc(d)}</p><span class="pill soft">${esc(D.k)}</span></div></div>`).join('')}</div>
  <div class="side">${box('Çalışma grupları ve topluluklar · '+A.k,A.grp)}${box('Masandaki kaynaklar · '+A.k,A.mat)}${B?box('Kaynaklar · '+B.k,B.mat.slice(0,3)):''}</div>`;
}

/* ---- güncelleme ---- */
function update(){
  segs();fillSubs();renderPlan();renderQuiz();
  store.set('mgi2-state',{A:ST.A,si:ST.si,year:ST.year,hours:ST.hours,second:ST.second,B:ST.B,bi:ST.bi});
}

/* ---- hero, şerit, sözler ---- */
(function(){
  const n=new Date();let y=n.getFullYear()-1923;if(n<new Date(n.getFullYear(),9,29))y--;
  $('#yil').textContent='Cumhuriyetin '+y+'. yılında';
  const items=AQ.map(q=>`<span>${esc(q[0])}</span>`).join('');
  $('#ribbon').innerHTML=items+`<div aria-hidden="true" style="display:contents">${items}</div>`;
  $('#qgrid').innerHTML=AQ.map(q=>`<figure class="qc" style="margin:0"><q>${esc(q[0])}</q><small>${esc(q[1])}</small></figure>`).join('');
  let qi=0;const box=$('#hq'),qt=$('#hq-t'),qs=$('#hq-s');
  setInterval(()=>{if(document.hidden)return;box.classList.add('out');setTimeout(()=>{qi=(qi+1)%AQ.length;qt.textContent=AQ[qi][0];qs.textContent=AQ[qi][1];box.classList.remove('out')},480)},7000);
})();
fillDept();update();
