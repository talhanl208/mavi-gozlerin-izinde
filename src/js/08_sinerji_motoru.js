
/* ================= SİNERJİ MOTORU ================= */
const vec=t=>TK.map(k=>t[k]||0);
const vadd=(a,b,w=1)=>a.map((x,i)=>x+b[i]*w);
function vcos(a,b){let d=0,na=0,nb=0;for(let i=0;i<a.length;i++){d+=a[i]*b[i];na+=a[i]*a[i];nb+=b[i]*b[i]}return na&&nb?d/Math.sqrt(na*nb):0}
const low=s=>s.toLocaleLowerCase('tr');
function uniq(a){const s=new Set();return a.filter(x=>{if(!x)return false;const k=low(typeof x==='string'?x:(x.n||x.x));if(s.has(k))return false;s.add(k);return true})}
const topTags=(t,n)=>TK.filter(k=>t[k]).sort((x,y)=>t[y]-t[x]||TK.indexOf(x)-TK.indexOf(y)).slice(0,n);

function synScore(A,B){
  const ov=vcos(vec(A.t),vec(B.t));
  let ind=Math.round(100*(0.34+0.66*Math.sin(Math.PI*Math.min(1,ov*1.08))));
  const cur=!!CUR[K(A.id,B.id)];
  if(cur)ind+=6;
  return{ov,kes:Math.round(ov*100),tam:Math.round((1-ov)*100),ind:Math.max(1,Math.min(99,ind)),cur};
}

function synergy(A,B,s){
  const cur=CUR[K(A.id,B.id)];
  const ta=topTags(A.t,3), tb=topTags(B.t,3);
  const F=[];
  if(cur)cur.f.forEach(([n,d])=>F.push({n,d,src:'Özel sentez'}));
  const bridges=[];
  ta.forEach(a=>tb.forEach(b=>{if(a!==b&&BR[a+'+'+b])bridges.push({...BR[a+'+'+b],w:A.t[a]+B.t[b],a,b})}));
  bridges.sort((x,y)=>y.w-x.w);
  bridges.forEach(b=>F.push({n:b.n,d:b.d,src:TAGS[b.a].l+' × '+TAGS[b.b].l,tool:b.tool,p:b.p}));
  const shared=TK.filter(k=>A.t[k]&&B.t[k]).sort((x,y)=>(A.t[y]+B.t[y])-(A.t[x]+B.t[x]));
  shared.forEach(k=>F.push({n:TAGS[k].f[0],d:TAGS[k].f[1],src:'Ortak çekirdek · '+TAGS[k].l,tool:TAGS[k].tool}));
  const bt=tb.find(x=>x!==ta[0])||tb[0];
  F.push({n:TAGS[ta[0]].m+' '+TAGS[bt].n,d:A.k+' disiplininin '+low(TAGS[ta[0]].l)+' yetkinliğini '+B.k+' alanının '+low(TAGS[bt].n)+' problemlerine uygulayan hibrit uzmanlık',src:'Sentez'});
  const fields=uniq(F).slice(0,3);

  const tools=uniq([...(cur?cur.tools:[]),...fields.map(f=>f.tool),...A.tools.slice(0,3),...B.tools.slice(0,3)]).slice(0,9);
  const sb=B.subs[0];
  const proj=uniq([...(cur?cur.proj:[]),...bridges.map(b=>b.p),
    'Bitirme sentezi: "'+s.proj[0]+'" projesini '+B.k+' bakışıyla genişlet; '+TAGS[bt].x+'.']).slice(0,4);
  const certs=uniq([...(cur?cur.certs:[]),s.certs[0],A.certs[0],B.certs[0],sb.certs[0]]).slice(0,5);
  const ca=uniq([...s.comps,...A.comps]), cb=uniq([...B.comps,...B.subs.flatMap(x=>x.comps)]);
  let comps=ca.filter(x=>cb.includes(x));
  comps=uniq([...comps,...ca.slice(0,2),...cb.slice(0,2)]).slice(0,4);
  let firms=A.firms.filter(x=>B.firms.includes(x));
  firms=uniq([...firms,...A.firms.slice(0,3),...B.firms.slice(0,3)]).slice(0,6);

  const phases=[
    {t:'Çift Çekirdek Temeli',s:'1-2. sınıf',why:A.k+' çekirdeğini kurarken '+B.k+' programının giriş derslerini erken al. Ortak matematik ve fizik dersleri çoğu üniversitede iki programda da sayılır; muafiyet listesini bölüm sekreterliğinden iste.',
      items:uniq([...A.core.slice(0,4).map(x=>({x,tag:A.kod})),...B.core.slice(0,3).map(x=>({x,tag:B.kod}))])},
    {t:'Kesişim Uzmanlığı & Ortak Araçlar',s:'3. sınıf',why:'İki disiplinin kesiştiği alanlar ve bu alanlarda iki ekibin de kullandığı araçlar. Her aracı bir kesişim projesinde kullanarak öğren.',
      items:[...fields.map(f=>({x:f.n,tag:'Alan'})),...tools.slice(0,6).map(x=>({x,tag:'Araç'}))]},
    {t:'Hibrit Sertifikasyon',s:'3-4. sınıf',why:'Bir sertifika ana bölümünü, bir diğeri ÇAP alanını belgelesin. İkisini aynı bitirme projesine bağlarsan özgeçmişte tek bir hikâye anlatırsın.',
      items:certs.map(x=>({x,tag:'Sertifika'}))},
    {t:'Sentez Projesi & Kariyer Kapısı',s:'4. sınıf → mezuniyet',why:'İki disiplini birlikte kullanan somut projeler ve yarışmalar. Hedef kurumlar: '+firms.join(', ')+'.',
      items:[...proj.map(x=>({x,tag:'Proje'})),...comps.map(x=>({x,tag:'Yarışma'}))]}
  ];
  return{score:synScore(A,B),fields,tools,proj,certs,comps,firms,phases,cur:!!cur};
}

