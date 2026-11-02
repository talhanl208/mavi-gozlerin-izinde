
/* ================= DÖNEM DÖNEM YOL HARİTASI MOTORU ================= */
const LVN=['','Temel','Orta','İleri'];
function certsFor(k,lv){const t=TOOLS[k];if(!t)return[];let c=t.lv.filter(x=>x.l===lv);if(!c.length)c=t.lv.filter(x=>x.l<lv).slice(-1);if(!c.length)c=t.lv.slice(0,1);return c}
const maxLv=k=>Math.max(...TOOLS[k].lv.map(x=>x.l));
const H_CAP={5:2,10:3,20:4};
const H_SPLIT={5:[['Ders pekiştirme',2],['Uygulama ve araç',2],['Proje',1]],10:[['Ders pekiştirme',3],['Uygulama ve araç',4],['Proje',2],['İngilizce ve okuma',1]],20:[['Ders pekiştirme',5],['Uygulama ve araç',8],['Proje',5],['İngilizce ve okuma',2]]};

/* dönem iskeleti: y = sınıf, t = 'g' güz, 'b' bahar, 'y' yaz, 'm' mezuniyet sonrası (m = 1..3) */
function periodsFrom(year){
  const out=[];
  if(year>=5)return[{y:5,t:'m',m:1},{y:5,t:'m',m:2},{y:5,t:'m',m:3}];
  for(let y=year;y<=4;y++){out.push({y,t:'g'},{y,t:'b'});if(y<4)out.push({y,t:'y'})}
  out.push({y:5,t:'m',m:0});
  return out;
}

function buildPlan(o){
  const A=BY[o.A],s=A.subs[o.si],B=o.B?BY[o.B]:null,sb=B?B.subs[o.bi]:null;
  const cap=H_CAP[o.hours]||3,start=o.year,grad=start>=5;
  const base=A.base.filter(k=>TOOLS[k]&&k!=='english');
  const spec=s.st.filter(k=>TOOLS[k]&&!base.includes(k));
  const sec=B?uniq([...B.base,...sb.st]).filter(k=>TOOLS[k]&&k!=='english'&&!base.includes(k)&&!spec.includes(k)):[];
  /* öğrenme olayları: her uygulama seviye seviye ilerler */
  const ev=[];
  const push=(k,lv,src)=>{if(lv<=maxLv(k))ev.push({k,lv,src})};
  if(start<=2)base.forEach(k=>push(k,1,'A'));
  const mix=[];for(let i=0;i<Math.max(spec.length,sec.length);i++){if(spec[i])mix.push([spec[i],'S']);if(sec[i])mix.push([sec[i],'B'])}
  mix.forEach(([k,src])=>push(k,1,src));
  base.slice(0,2).forEach(k=>push(k,2,'A'));
  mix.forEach(([k,src])=>push(k,2,src));
  mix.forEach(([k,src])=>push(k,3,src));
  base.slice(0,1).forEach(k=>push(k,3,'A'));

  const P=periodsFrom(start).map(p=>({...p,tools:[],skills:[],proj:null,tip:null,acts:[]}));
  const last=P.length-1;
  const capOf=(p,i)=>i===last?99:p.t==='y'?1:p.t==='m'?cap+1:cap;
  const placed={};
  ev.forEach(e=>{
    const need=grad?0:e.lv===1?(e.src==='A'?1:2):e.lv===2?3:4;
    for(let i=0;i<P.length;i++){
      const p=P[i];
      if(i!==last){
        if(p.y<need)continue;
        if(p.t==='y'&&e.lv>2)continue;
        if(p.tools.length>=capOf(p,i))continue;
        if(placed[e.k]!=null&&i-placed[e.k]<(grad?1:2))continue;
      }else if(placed[e.k]!=null&&placed[e.k]>=i)continue;
      p.tools.push(e);placed[e.k]=i;return;
    }
  });
  /* İngilizce: her aşamada bir kademe */
  if(!grad){
    if(start<=2){const p=P.find(p=>p.t==='b');if(p)p.tools.push({k:'english',lv:1,src:'A'})}
    const e2=P.find(p=>p.y>=3&&p.t==='g');if(e2)e2.tools.push({k:'english',lv:2,src:'A'});
  }
  P[last].tools.push({k:'english',lv:grad?2:3,src:'A'});

  /* beceriler */
  const core=A.core,adv=s.adv;
  const slot=(y,t)=>P.find(p=>p.y===y&&p.t===t);
  const put=(p,arr,lv,src)=>{if(p)arr.forEach(x=>x&&p.skills.push({x,lv,src}))};
  if(grad){put(P[0],adv.slice(0,2),2,'S');put(P[1],adv.slice(2,4),3,'S');put(P[2],adv.slice(4,6),3,'S')}
  else{
    put(slot(1,'g'),core.slice(0,2),1,'A');put(slot(1,'b'),core.slice(2,4),1,'A');put(slot(2,'g'),core.slice(4,6),1,'A');
    put(slot(2,'b'),adv.slice(0,1),2,'S');put(slot(3,'g'),adv.slice(1,3),2,'S');put(slot(3,'b'),adv.slice(3,4),2,'S');
    put(slot(4,'g'),adv.slice(4,5),3,'S');put(slot(4,'b'),adv.slice(5,6),3,'S');
    if(start===4){put(slot(4,'g'),adv.slice(1,3),2,'S')}
  }
  if(sb){
    const bs=[...B.core.slice(0,2).map(x=>[x,1]),...sb.adv.slice(0,4).map((x,i)=>[x,i<2?2:3])];
    const slots=P.filter(p=>grad||((p.t==='g'||p.t==='b')&&p.y>=2));
    bs.forEach(([x,lv],i)=>{const p=slots[Math.min(slots.length-1,Math.floor(i*slots.length/bs.length))];if(p)p.skills.push({x,lv,src:'B'})});
  }
  const missed=start>1?[...core.slice(0,start>=3?6:2),...(start>=4?adv.slice(0,1):[])]:[];
  const missedTools=start>2?base:[];

  /* projeler, staj, kariyer */
  const syn=B?synergy(A,B,s):null;
  const sp=s.proj, comps=uniq([...s.comps,...A.comps]);
  const firms=uniq([...A.firms,...(B?B.firms.slice(0,3):[])]);
  const tn=k=>TOOLS[k].n;
  const big=syn?syn.proj[0]:sp[0];
  P.forEach(p=>{
    const first=p.tools[0];
    if(p.t==='m'){
      if(p.m===1)p.proj={t:'Portfolyo',x:'En güçlü projeni yeniden ele al: '+big+'. README, test sonuçları ve kısa bir demo videosuyla yayınla.'};
      else if(p.m===2)p.proj={t:'Başvuru ve mülakat',x:'Hedef kurumlara başvur: '+firms.join(', ')+'. Her başvurudan önce o kurumun ürünlerine uygun bir mini çalışma hazırla.'};
      else p.proj={t:'İş ve yüksek lisans',x:'Portfolyondaki en güçlü iki projeyi öne çıkararak başvur. Hedef kurumlar: '+firms.join(', ')+'. Yüksek lisans düşünüyorsan bitirme projeni makaleye dönüştür.'};
    }
    else if(p.t==='y'&&p.y===1)p.proj={t:'Yaz projesi',x:(first?tn(first.k)+' ile ':'')+'kendi seçtiğin küçük bir proje yap ve portfolyona ekle. Bu yaz '+A.grp[0]+' içinde aktif rol al.'};
    else if(p.t==='y'&&p.y===2)p.proj={t:'1. staj',x:'Üretim, atölye ya da yazılım ekibinde ilk stajını yap. Amaç işin sahada nasıl yürüdüğünü görmek; her gün kısa bir staj notu tut.'};
    else if(p.t==='y'&&p.y===3)p.proj={t:'2. staj · sektör',x:'Uzmanlık alanında Ar-Ge stajı. Başvuru listesi: '+firms.slice(0,5).join(', ')+'. Başvuruları Ocak-Mart arasında yap.'};
    else if(p.y===1)p.proj={t:'Mini proje',x:(first?tn(first.k)+' ile ':'')+'derste gördüğün bir konuyu uygulayan küçük bir çalışma yap ve nasıl yaptığını yaz.'};
    else if(p.y===2&&p.t==='g')p.proj={t:'Takım',x:'Bir yarışma ya da proje takımına katıl: '+(comps[0]||'TÜBİTAK 2209-A')+'. İlk dönem destek rolü bile yeterli.'};
    else if(p.y===2&&p.t==='b')p.proj={t:'İlk alan projesi',x:sp[sp.length-1]};
    else if(p.y===3&&p.t==='g')p.proj={t:'Alan projesi',x:sp[Math.min(1,sp.length-1)]};
    else if(p.y===3&&p.t==='b')p.proj={t:'Yarışma + TÜBİTAK 2209-A',x:(comps[0]||'TÜBİTAK 2209-A')+' başvurusu yap. Önerini şu fikir üzerine kur: '+big};
    else if(p.y===4&&p.t==='g')p.proj={t:'Bitirme projesi başlangıcı',x:big};
    else if(p.y===4&&p.t==='b')p.proj={t:'Bitirme + yarışma finali',x:'Bitirme projesini test verisiyle tamamla, raporunu yaz ve '+(comps[1]||comps[0]||'yarışma')+' için sun.'};
  });

  /* usta tavsiyeleri + yapılacaklar */
  const tips=uniq([s.tip,...A.tips,...(sb&&sb.tip?[sb.tip]:[]),...(B?B.tips:[]),...A.subs.filter(x=>x!==s).map(x=>x.tip)].filter(Boolean).map(t=>({n:t[0],t}))).map(x=>x.t);
  const G1=['İlk yıl not ortalamasından çok çalışma alışkanlığı kazandırır. Her hafta küçük ama düzenli ilerle, laboratuvarları ciddiye al.','Mühendislik fakültesi öğretim üyesi'];
  const G5=['İlk işinde senden her şeyi bilmen beklenmez. Beklenen; öğrenme hızın, sorumluluk alman ve yaptığını açıkça raporlaman.','İşe alım yöneticisi, savunma sanayii'];
  let ti=0;
  P.forEach((p,i)=>{
    if(p.t==='y')return;
    if(p.y===1&&p.t==='g')p.tip=G1;
    else if(p.t==='m'&&(p.m===0||p.m===3))p.tip=G5;
    else if(ti<tips.length)p.tip=tips[ti++];
    else p.tip=G5;
    if(p.y<=2)p.acts.push('Topluluk: '+A.grp[i%A.grp.length]);
    p.acts.push('Kaynak: '+A.mat[i%A.mat.length]);
    if(B&&p.skills.some(x=>x.src==='B'))p.acts.push(B.k+' kaynağı: '+B.mat[i%B.mat.length]);
    if(p.t==='m'||p.y>=3)p.acts.push('Topluluk: '+A.grp[(i+1)%A.grp.length]);
  });
  const allCerts=[];
  P.forEach(p=>p.tools.forEach(e=>certsFor(e.k,e.lv).forEach(c=>allCerts.push({n:c.c,s:c.s,l:e.lv,tool:TOOLS[e.k].n,src:e.src}))));
  return{A,s,B,sb,P,missed,missedTools,syn,firms,certs:uniq(allCerts),split:H_SPLIT[o.hours]||H_SPLIT[10]};
}

/* bölüme özel test puanlama */
function quizResult(A,ans){
  const n=A.subs.length,sc=Array(n).fill(0);
  ans.forEach(a=>{if(a!=null&&a<n)sc[a]++});
  const tot=ans.filter(a=>a!=null).length;
  return A.subs.map((s,i)=>({i,s,p:Math.round((sc[i]+.25)/(tot+.25*n)*100)})).sort((a,b)=>b.p-a.p);
}
