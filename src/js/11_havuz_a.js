
/* ================= BÖLÜM HAVUZLARI =================
   base: 1-2. sınıf uygulamaları · st: her uzmanlık dalının uygulama sırası
   ex: alanın ustaları · grp: topluluk ve çalışma grupları · mat: kaynak kitaplar
   quiz: bölüme özel uzmanlık soruları (seçenek sırası = alt dal sırası) · q: eşleşen Atatürk sözü */
const AQ=[
 ['Bütün ümidim gençliktedir.','Mustafa Kemal Atatürk'],
 ['İstikbal göklerdedir.','Mustafa Kemal Atatürk'],
 ['Dünyada her şey için, medeniyet için, hayat için, muvaffakiyet için en hakiki mürşit ilimdir, fendir.','Samsun · 1924'],
 ['İlim ve fennin yaşadığımız her dakikadaki safhalarının tekâmülünü idrak etmek ve terakkiyatını zamanla takip etmek şarttır.','Samsun · 1924'],
 ['Hiçbir şeye ihtiyacımız yok, yalnız bir şeye ihtiyacımız vardır: çalışkan olmak.','Mustafa Kemal Atatürk'],
 ['Türk milletinin karakteri yüksektir; Türk milleti çalışkandır, Türk milleti zekidir.','Onuncu Yıl Nutku · 1933'],
 ['Ey Türk gençliği! Birinci vazifen, Türk istiklâlini, Türk Cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.','Gençliğe Hitabe · 1927'],
 ['Denizcilik Türk\'ün büyük millî ülküsü olmalıdır.','Mustafa Kemal Atatürk'],
 ['Millî ekonominin temeli ziraattir.','TBMM açış konuşması · 1922'],
 ['Öğretmenler! Cumhuriyet sizden fikri hür, vicdanı hür, irfanı hür nesiller ister.','Mustafa Kemal Atatürk'],
 ['Benim manevi mirasım ilim ve akıldır.','Mustafa Kemal Atatürk'],
 ['Ne mutlu Türküm diyene!','Onuncu Yıl Nutku · 1933'],
 ['Yurtta sulh, cihanda sulh.','Mustafa Kemal Atatürk'],
 ['Ordular! İlk hedefiniz Akdeniz\'dir. İleri!','Büyük Taarruz · 1922'],
 ['Türk milletinin istidadı ve kesin kararı medeniyet yolunda, durmadan, yılmadan ilerlemektir.','Mustafa Kemal Atatürk'],
 ['Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.','Mustafa Kemal Atatürk']
];
function X(id,o){const d=BY[id];d.q=o.q;d.base=L(o.base);d.subs.forEach((s,i)=>s.st=L(o.st[i]));d.ex=L(o.ex).map(x=>x.split('~'));d.grp=L(o.grp);d.mat=L(o.mat);d.quiz=o.quiz.map(([t,op])=>({t,o:L(op)}))}

X('bil',{q:3,base:'c|linux|git|dsa|python|english',
 st:['stm32|rtos|can|fpga|pcb|milstd','net|sec|crypto|cloud','ml|dl|cv|edge','sql|docker|k8s|cloud'],
 ex:'Dennis Ritchie~C programlama dilini geliştirdi; Ken Thompson ile birlikte Unix işletim sisteminin yaratıcısıdır.|Erol Gelenbe~Türk asıllı bilgisayar bilimci; bilgisayar sistemlerinin performans modellemesi ve G-ağları çalışmalarıyla tanınır.|Linus Torvalds~Linux çekirdeğini ve Git sürüm kontrol sistemini yazdı; açık kaynak işbirliğinin simgesidir.',
 grp:'IEEE öğrenci kolu|Google Developer Groups on Campus|TEKNOFEST ve TÜBİTAK proje takımları|BTK Akademi ve Turkcell Geleceği Yazanlar|Açık kaynak projeler (GitHub)',
 mat:'Kernighan & Ritchie: The C Programming Language|Cormen ve ark.: Introduction to Algorithms (CLRS)|Arpaci-Dusseau: Operating Systems: Three Easy Pieces (ücretsiz)|Bryant & O\'Hallaron: Computer Systems: A Programmer\'s Perspective',
 quiz:[['Bir projede en çok hangi kısmı üstlenmek istersin?','Kartın üzerindeki mikrodenetleyiciyi programlamak|Sistemi saldırılara karşı test edip açıkları bulmak|Kameradan gelen görüntüyü yapay zekâyla anlamlandırmak|Binlerce kullanıcıya hizmet veren servisi ayakta tutmak'],
  ['Hangi ders seni daha çok heyecanlandırıyor?','Mikroişlemciler ve sayısal tasarım|Bilgisayar ağları ve kriptografi|Lineer cebir ve olasılık|Veritabanı ve işletim sistemleri'],
  ['Hangi hata ayıklama anı sana daha çekici gelir?','Osiloskopta bozuk sinyalin kaynağını bulmak|Wireshark\'ta şüpheli bir paketi yakalamak|Modelin neden yanlış tahmin ettiğini çözmek|Yavaşlayan servisi loglardan tespit etmek'],
  ['Hayalindeki ilk iş hangisi?','Savunma şirketinde gömülü yazılım mühendisliği|Siber güvenlik operasyon merkezi veya sızma testi ekibi|İHA görüntü işleme ekibi|Büyük bir teknoloji şirketinin altyapı ekibi']]});

X('eem',{q:2,base:'spice|matlab|c|python|english',
 st:['rf|labview|milstd','power|simulink|pcb','grid|plc|energy','pcb|stm32|fpga|milstd'],
 ex:'Erdal Arıkan~Bilkent Üniversitesi; 5G standartlarında kullanılan kutupsal kodların (polar codes) mucidi.|Claude Shannon~Bilgi teorisinin kurucusu; sayısal haberleşmenin matematiksel temelini attı.|Nikola Tesla~Alternatif akım sistemleri ve indüksiyon motoru üzerine öncü çalışmalar yaptı.',
 grp:'IEEE öğrenci kolu|EMO Genç (Elektrik Mühendisleri Odası öğrenci üyeliği)|TEKNOFEST Çip Tasarım ve İKA takımları|Amatör telsiz kulüpleri (TRAC)',
 mat:'Horowitz & Hill: The Art of Electronics|Sedra & Smith: Microelectronic Circuits|Oppenheim: Signals and Systems|Pozar: Microwave Engineering',
 quiz:[['Laboratuvarda en çok ne yapmak istersin?','Anten ölçüp VNA ekranında rezonansı yakalamak|Bir dönüştürücünün verimini ölçmek|Trafo merkezinde koruma rölelerini incelemek|Kendi tasarladığın kartı lehimleyip ilk kez çalıştırmak'],
  ['Hangi konu daha çok ilgini çekiyor?','Elektromanyetik dalgalar ve radar|Motor sürücüler ve elektrikli araçlar|Yenilenebilir enerjinin şebekeye bağlanması|Mikrodenetleyici ve FPGA kartları'],
  ['Hangi araçla çalışmak istersin?','CST, HFSS veya ADS|PLECS ve osiloskop|DIgSILENT veya ETAP|KiCad veya Altium'],
  ['Hangi ürünün mühendisi olmak istersin?','Radar ve haberleşme sistemleri|Elektrikli araç şarj ve güç ünitesi|Ulusal elektrik şebekesi|Aviyonik ve görev bilgisayarı kartları']]});

X('mak',{q:4,base:'solidworks|autocad|matlab|excel|english',
 st:['gdt|ansys|abaqus','cfd|python|ansys','gdt|catia|ansys|syseng|milstd','gdt|fusion|am|lean'],
 ex:'Nuri Demirağ~1930\'larda Türkiye\'de uçak fabrikası kuran sanayici; Nu.D.36 ve Nu.D.38 uçakları burada üretildi.|Stephen Timoshenko~Mukavemet, elastisite ve titreşim alanında bugün hâlâ okutulan klasik kitapları yazdı.',
 grp:'MMO öğrenci üyeliği (Makina Mühendisleri Odası)|Formula Student ve Efficiency Challenge takımları|ASME öğrenci şubeleri|TEKNOFEST İKA ve İHA takımları',
 mat:'Budynas & Nisbett: Shigley\'s Mechanical Engineering Design|Beer & Johnston: Mechanics of Materials|Incropera: Fundamentals of Heat and Mass Transfer|Çengel & Boles: Termodinamik (Türkçe çevirisi de var)',
 quiz:[['Bir parçanın hangi sorusu seni daha çok meraklandırır?','Bu parça nereden ve ne zaman kırılır?|Etrafından akan hava veya su nasıl davranır?|Sahada, zor koşullarda görevini yapabilir mi?|Bu parçayı en ucuz ve hızlı nasıl üretirim?'],
  ['Hangi ders seni daha çok çekiyor?','Mukavemet ve makine elemanları|Akışkanlar mekaniği ve ısı transferi|Makine dinamiği ve mekanizmalar|İmalat yöntemleri ve takım tezgâhları'],
  ['Hangi yazılımda uzmanlaşmak istersin?','ANSYS Mechanical veya ABAQUS|ANSYS Fluent veya OpenFOAM|CATIA ve PLM sistemleri|Fusion 360 CAM ve dilimleme yazılımları'],
  ['Nerede çalışmak istersin?','Havacılık şirketinde yapısal analiz ekibi|Motor, türbin veya HVAC Ar-Ge ekibi|Zırhlı araç veya silah sistemi tasarım ekibi|Üretim hattı ve 3B baskı merkezi']]});

X('met',{q:14,base:'excel|matlab|charac|english',
 st:['thermocalc|abaqus|ndt|milstd','thermocalc|am|ndt|solidworks','corr|lab|iso9001','battery|comsol|python'],
 ex:'William D. Callister~Dünyada malzeme bilimine girişte en yaygın okutulan ders kitabının yazarı.|Henry Clifton Sorby~Çeliğin iç yapısını mikroskopla inceleyerek metalografinin temelini attı.|Stephanie Kwolek~Kevlar\'ı icat etti; balistik koruma malzemelerinin önünü açtı.',
 grp:'TMMOB Metalurji ve Malzeme Mühendisleri Odası öğrenci üyeliği|ASM International ve TMS öğrenci üyeliği|Üniversite malzeme karakterizasyon laboratuvarları|TEKNOFEST takımlarında malzeme alt sistemi',
 mat:'Callister: Materials Science and Engineering: An Introduction|Porter & Easterling: Phase Transformations in Metals and Alloys|Dieter: Mechanical Metallurgy|Ashby: Materials Selection in Mechanical Design',
 quiz:[['Bir malzemede seni en çok ne heyecanlandırır?','Darbeye ve mermiye dayanması|Toz hâlinden lazerle parçaya dönüşmesi|Denizde, tuzlu suda yıllarca dayanması|İçinde enerji depolayabilmesi'],
  ['Hangi laboratuvar deneyini yapmak istersin?','Charpy darbe ve sertlik testleri|3B baskılı numunede porozite ölçümü|Tuz sisi ve polarizasyon testi|Coin hücre üretip kapasite ölçmek'],
  ['Hangi konuyu derinlemesine öğrenmek istersin?','Zırh çelikleri ve seramik kompozitler|Titanyum ve süper alaşımlar|Kaplama ve yüzey teknolojileri|Elektrokimya ve Li-iyon kimyası'],
  ['Hangi kurumda çalışmak istersin?','Zırh ve mühimmat üreten savunma şirketi|Havacılık motor parçası üreticisi|Tersane veya boru hattı şirketi|Batarya hücresi üreticisi']]});

X('hav',{q:1,base:'matlab|solidworks|python|english',
 st:['aero|cfd|catia','simulink|control|px4|c|do178','rocket|cfd|ansys|milstd','stk|c|pcb|as9100'],
 ex:'Vecihi Hürkuş~İlk Türk tasarımı uçak olan Vecihi K-VI\'yı 1925\'te yapıp uçurdu.|Özdemir Bayraktar~Baykar\'ın kurucusu; yerli insansız hava aracı çalışmalarının öncülerinden.|Theodore von Kármán~Modern aerodinamik ve süpersonik uçuşun kuramsal temellerini atan bilim insanı.',
 grp:'TEKNOFEST Savaşan İHA, Roket ve Model Uydu takımları|AIAA öğrenci şubeleri|Türk Hava Kurumu eğitimleri|Model uçak ve roket kulüpleri',
 mat:'Anderson: Introduction to Flight|Anderson: Fundamentals of Aerodynamics|Raymer: Aircraft Design: A Conceptual Approach|Sutton & Biblarz: Rocket Propulsion Elements',
 quiz:[['Bir hava aracında hangi soruyu çözmek istersin?','Kanat daha az sürüklemeyle nasıl daha çok taşır?|Araç kendi kendine nasıl dengede uçar?|Roketi istenen irtifaya nasıl çıkarırım?|Uydu yörüngede nasıl görev yapar?'],
  ['Hangi ders sana daha yakın?','Aerodinamik|Uçuş mekaniği ve kontrol|Termodinamik ve itki|Yörünge mekaniği'],
  ['Hangi araçla vakit geçirmek istersin?','XFLR5, OpenVSP ve CFD|Simulink ve PX4|OpenRocket ve test tezgâhı|STK veya GMAT'],
  ['Hangi TEKNOFEST kategorisinde yer almak istersin?','Savaşan İHA (gövde ve aerodinamik)|Savaşan İHA (otopilot ve yazılım)|Roket Yarışması|Model Uydu']]});
