
/* ---------- 21. Ziraat & Biyosistem ---------- */
P({id:'zir',ad:'Ziraat ve Biyosistem Mühendisliği',k:'Biyosistem',kod:'BSM',t:{bio:2,yer:2,oto:1,cev:2,mek:1},
core:'Biyoloji ve bitki bilimi|Toprak bilimi|Mekanik ve makine elemanları|Hidrolik ve sulama temelleri|Elektrik ve elektroniğe giriş|İstatistik',
tools:'QGIS|SolidWorks|Arduino veya ESP32|DJI Terra veya Pix4Dfields|Python|CROPWAT',
certs:'FAO e-öğrenme akademisi kursları|SHGM İHA Pilot Lisansı|Esri MOOC kursları',
comps:'TEKNOFEST Tarım Teknolojileri|TEKNOFEST Çevre ve Enerji Teknolojileri|TÜBİTAK 2209-A Araştırma Projeleri',
firms:'Türk Traktör|Tarım makineleri üreticileri|DSİ|Tarım Kredi|Hassas tarım girişimleri|Seracılık işletmeleri',
tips:'Tarımda teknoloji çiftçinin kullanabileceği kadar değerlidir. Sahada üreticiyle konuşmadan tasarım yapma.~Kıdemli Tarım Teknolojileri Mühendisi|Su kıtlığı döneminde sulama verimliliği bilen mühendis her bölgede iş bulur.~Su Kaynakları Planlama Uzmanı',
subs:[
 S('Hassas Tarım & Tarım Robotiği',{bio:2,yer:2,oto:3,veri:1},'Multispektral görüntüleme ve NDVI|Değişken oranlı uygulama|Tarım İHA\'ları|Toprak sensörleri ve IoT|Otonom tarım araçları|Verim haritalama','SHGM İHA Pilot Lisansı|FAO e-öğrenme kursları|Coursera: Modern Robotics','İHA ile NDVI haritası çıkarıp gübreleme önerisi üreten sistem|LoRa tabanlı toprak nem sensör ağı','TEKNOFEST Tarım Teknolojileri','Verinin değeri karara dönüşmesiyle ölçülür. Haritayı çiftçinin uygulayacağı bir öneriye çevir.~Hassas Tarım Uzmanı'),
 S('Tarım Makineleri & Otomasyon',{mek:3,oto:2,bio:1},'Traktör ve iş makinası tasarımı|Hidrolik sistemler|ISOBUS|Hasat mekanizasyonu|Sera otomasyonu|Ergonomi ve güvenlik','SolidWorks CSWA|ISOBUS eğitim kaynakları','Küçük ölçekli fide dikim mekanizması prototipi|Sera iklim kontrol sistemi','TEKNOFEST Tarım Teknolojileri','Tarlada çamur, toz ve titreşim var. Masa başında dayanıklı görünen mekanizmayı sahada sına.~Tarım Makineleri Tasarım Mühendisi'),
 S('Sulama & Su Kaynakları',{yer:2,cev:3,akis:2},'Damla ve yağmurlama sulama tasarımı|Bitki su ihtiyacı (CROPWAT)|Havza hidrolojisi|Akıllı sulama kontrolü|Su hakları ve mevzuat|Drenaj','FAO e-öğrenme kursları|CROPWAT eğitimleri','Bir bahçe için damla sulama tasarımı ve su tasarrufu hesabı|Hava durumu verisiyle çalışan akıllı sulama kontrolcüsü','TEKNOFEST Çevre ve Enerji Teknolojileri','Suyu verimli kullanmak sadece mühendislik değil, kamu yararıdır. Hesabını litre ve lira olarak sun.~Sulama Proje Mühendisi')
]});

/* ---------- 22. Gemi İnşaatı ve Gemi Makineleri ---------- */
P({id:'gem',ad:'Gemi İnşaatı ve Gemi Makineleri Mühendisliği',k:'Gemi İnşaatı',kod:'GEM',t:{den:3,mek:2,akis:2,yap:1,sav:2},
core:'Statik, dinamik ve mukavemet|Gemi geometrisi ve hidrostatik|Akışkanlar mekaniği|Termodinamik|Gemi yapıları|Teknik resim',
tools:'Maxsurf|Rhino|AVEVA Marine veya ShipConstructor|NAPA|ANSYS|MATLAB',
certs:'DNV Academy kursları|MIT OCW 2.20 Marine Hydrodynamics|Türk Loydu eğitimleri',
comps:'TEKNOFEST İnsansız Deniz Aracı|TEKNOFEST İnsansız Su Altı Sistemleri|RoboBoat / RoboSub',
firms:'STM|ASFAT|Türk Loydu|Ares Tersanesi|Yonca-Onuk|Dearsan',
tips:'Gemi bir yüzen şehirdir. Sistemlerin birbirini nasıl etkilediğini görmeyen tasarım, denizde sorun çıkarır.~Kıdemli Gemi Tasarım Mühendisi|Tersanede bir yaz geçir. Kaynak sırasını, blok montajını görmeden çizimin üretimdeki karşılığını anlayamazsın.~Üretim Planlama Müdürü, tersane',
subs:[
 S('Gemi Tasarımı & Hidrodinamik',{den:3,akis:3,mat:1},'Direnç ve sevk|Denizcilik ve dalga davranışı|Pervane tasarımı|CFD ile gövde optimizasyonu|Stabilite ve IMO kuralları|Model deney havuzu testleri','DNV Academy kursları|MIT OCW 2.20 Marine Hydrodynamics','Bir hücumbot gövdesinin Maxsurf + CFD ile direnç analizi|Stabilite kitapçığı hazırlama çalışması','TEKNOFEST İnsansız Deniz Aracı','Havuz testi sonucuyla CFD arasında fark varsa, önce kendi modelini sorgula.~Hidrodinamik Uzmanı'),
 S('Gemi Makineleri & Sevk Sistemleri',{den:3,mek:2,ene:2},'Dizel ve gaz türbinli sevk|Elektrikli ve hibrit sevk|Şaft ve yatak sistemleri|Yardımcı makineler|Gemi emisyon kuralları (IMO)|Titreşim ve gürültü','DNV Academy kursları|Türk Loydu eğitimleri','Bir yolcu teknesi için hibrit sevk sistemi ön tasarımı|Şaft hattı titreşim analizi','TEKNOFEST İnsansız Deniz Aracı','Makine dairesinde her kilogram ve her desibel önemlidir. Bakım erişimini tasarımın ilk gününde düşün.~Gemi Makineleri Başmühendisi'),
 S('İnsansız Deniz & Su Altı Araçları',{den:3,oto:3,don:1,sav:2},'Su altı haberleşmesi ve sonar|Basınç gövdesi tasarımı|Su altı navigasyonu (DVL, INS)|ROS 2 ile otonomi|Sızdırmazlık|Saha testi planlama','DNV Academy kursları|Coursera: Modern Robotics','TEKNOFEST için otonom insansız deniz aracı|Basınç gövdesi FEA analizi ve havuz testi','TEKNOFEST İnsansız Deniz Aracı|TEKNOFEST İnsansız Su Altı Sistemleri|RoboSub','Denizde her şey ıslanır, aşınır ve kaybolur. Kurtarma planı olmadan aracı suya indirme.~İnsansız Deniz Sistemleri Mühendisi')
]});

/* ---------- 23. Tekstil ---------- */
P({id:'tks',ad:'Tekstil Mühendisliği',k:'Tekstil',kod:'TKS',t:{mal:2,kim:2,sis:2,mek:1},
core:'Lif ve iplik teknolojisi|Dokuma ve örme|Tekstil kimyası ve terbiye|Polimer bilimine giriş|Tekstil malzemelerinde test|Üretim planlama',
tools:'Datacolor|Lectra veya Gerber CAD|Minitab|ERP|Laboratuvar test cihazları|Python',
certs:'OEKO-TEX ve GOTS eğitimleri|Lean Six Sigma Green Belt|ISO 9001 İç Denetçi eğitimi',
comps:'TEKNOFEST Engelsiz Yaşam Teknolojileri|TÜBİTAK 2209-B Sanayiye Yönelik Araştırma|Teknik tekstil tasarım yarışmaları',
firms:'Kordsa|Zorlu Tekstil|Sanko Tekstil|Bossa|LC Waikiki|Teknik tekstil üreticileri',
tips:'Klasik tekstil fiyatla, teknik tekstil teknolojiyle rekabet eder. Kariyerini teknik tarafa yaslamak uzun vadede kazandırır.~Kıdemli Teknik Tekstil Mühendisi|Mülakatta kumaşı elle tutup yapısını, lifini ve terbiye işlemini tahmin etmeni isteyebiliriz. Laboratuvarda vakit geçir.~Kalite Müdürü, tekstil',
subs:[
 S('Teknik & Akıllı Tekstiller',{mal:3,don:2,bio:1},'İletken lifler ve giyilebilir elektronik|Nanolif üretimi (elektroeğirme)|Medikal tekstiller|Filtrasyon tekstilleri|Kaplama ve laminasyon|Fonksiyonel test yöntemleri','Coursera ve edX giyilebilir teknoloji kursları|OEKO-TEX eğitimleri','Kalp atışı ölçen iletken iplikli tişört prototipi|Elektroeğirme ile filtre membranı','TEKNOFEST Engelsiz Yaşam Teknolojileri','Akıllı tekstilde asıl zorluk yıkamaya dayanmaktır. Prototipini makinede yıka, sonra konuş.~Akıllı Tekstil Ar-Ge Uzmanı'),
 S('Balistik & Koruyucu Tekstiller',{mal:3,sav:3,kim:1},'Aramid ve UHMWPE lifler|Çok katmanlı kumaş tasarımı|Balistik koruma standartları (NIJ)|Kesilme ve delinme dayanımı|Alev geciktirici tekstiller|Ergonomi ve ağırlık','ASTM ve NIJ standart eğitimleri|Kompozit test eğitimleri','Farklı dokuma yapılarının delinme dayanımı karşılaştırması|Alev geciktirici kaplama denemesi','TÜBİTAK 2209-B Sanayiye Yönelik Araştırma','Koruyucu tekstilde gramaj her şeydir. Aynı korumayı daha hafif sağlayan tasarım, askerin gününü değiştirir.~Koruyucu Tekstiller Proje Mühendisi'),
 S('Üretim Planlama & Dijital Tekstil',{sis:3,veri:2,yaz:1},'Üretim planlama ve kapasite|Endüstri 4.0 ve makine verisi|Görüntü işleme ile kumaş hata tespiti|Tedarik zinciri ve hızlı moda|Sürdürülebilirlik ve izlenebilirlik|ERP','Lean Six Sigma Green Belt|Google Data Analytics Professional Certificate','Kamerayla kumaş hata tespit prototipi|Bir örme atölyesi için kapasite planlama modeli','TÜBİTAK 2209-B Sanayiye Yönelik Araştırma','Tekstilde marj düşük, termin acımasız. Planlama hatasını gün ve para olarak görebilen mühendis değerlidir.~Üretim Planlama Müdürü')
]});

/* ---------- 24. Fizik ---------- */
P({id:'fiz',ad:'Fizik Mühendisliği',k:'Fizik',kod:'FİZ',t:{mat:2,don:2,ene:1,mal:2,sav:1},
core:'Klasik mekanik|Elektromanyetizma|Kuantum fiziği|İstatistiksel fizik|Optik|Matematiksel fizik',
tools:'COMSOL Multiphysics|Python (NumPy, SciPy)|MATLAB|Ansys Zemax OpticStudio|LabVIEW|Qiskit',
certs:'MIT OCW 8.04 Quantum Physics I|IBM Quantum Learning / Qiskit eğitimleri|Optica ve SPIE kısa kursları',
comps:'CERN Summer Student Programme|Qiskit Global Summer School|TÜBİTAK 2209-A Araştırma Projeleri',
firms:'ASELSAN (elektro-optik)|TÜBİTAK UME|TÜBİTAK BİLGEM|TENMAK|Yarı iletken ve optik girişimleri|Medikal fizik birimleri',
tips:'Fizik mühendisinin süper gücü sistemi ilk ilkelerden modelleyebilmesidir. Bunu bir ürün problemine uyguladığını göster.~Kıdemli Elektro-Optik Mühendisi|Laboratuvarda deney düzeneğini kendi kurup hata bütçesini çıkarabilen aday hemen fark edilir.~Ar-Ge Grup Lideri, ölçüm bilimi',
subs:[
 S('Fotonik & Elektro-Optik',{don:3,mat:2,sav:3},'Lazer fiziği|Optik tasarım (Zemax)|Kızılötesi ve termal görüntüleme|Fiber optik|Dedektörler|Lazer mesafe ölçer sistemleri','Optica ve SPIE kısa kursları|Ansys Zemax eğitimleri','Zemax\'ta basit bir termal kamera objektifi tasarımı|Fiber optik sıcaklık sensörü deneyi','TÜBİTAK 2209-A Araştırma Projeleri','Optik tasarımda tolerans analizi yapmadıysan tasarımın sadece bilgisayarda çalışıyordur.~Optik Tasarım Mühendisi'),
 S('Kuantum Teknolojileri',{mat:3,yaz:2,don:1},'Kuantum mekaniği ve bilgi teorisi|Kübit fiziği|Kuantum algoritmaları|Qiskit ile programlama|Kuantum sensörler|Kuantum kriptografi','IBM Quantum Learning|Qiskit Global Summer School|MIT OCW 8.370 Quantum Computation','Qiskit ile Grover algoritması ve gürültü analizi|Basit bir kuantum anahtar dağıtımı simülasyonu','Qiskit Global Summer School','Kuantum alanında moda kelime çok, sağlam lineer cebir az. Temeli kuvvetli olan ayakta kalır.~Kuantum Hesaplama Araştırmacısı'),
 S('Yarı İletken & Nanoteknoloji',{mal:3,don:2,kim:1},'Katıhal fiziği|Yarı iletken aygıt fiziği|Temiz oda ve litografi|İnce film kaplama|Nanokarakterizasyon (AFM, SEM)|Aygıt simülasyonu','MIT OCW 6.012 Microelectronic Devices and Circuits|nanoHUB kursları','İnce film güneş hücresi üretimi ve verim ölçümü|nanoHUB ile MOSFET simülasyonu','TEKNOFEST Çip Tasarım','Temiz odada sabır ve titizlik zekâdan önce gelir. Prosedüre uymayan numune çöpe gider.~Mikrofabrikasyon Mühendisi')
]});

/* ---------- 25. Matematik ---------- */
P({id:'mtm',ad:'Matematik Mühendisliği',k:'Matematik',kod:'MTM',t:{mat:3,yaz:2,veri:2,sav:1},
core:'Analiz ve lineer cebir|Diferansiyel denklemler|Olasılık ve istatistik|Sayısal analiz|Soyut cebir ve sayılar teorisi|Programlama (Python, C++)',
tools:'Python|MATLAB|R|Julia|SageMath|LaTeX',
certs:'MIT OCW 18.06 Linear Algebra|MIT OCW 18.330 Introduction to Numerical Analysis|CFA Level I (finans yönelimi için)',
comps:'ICPC|Kaggle|TÜBİTAK 2209-A Araştırma Projeleri',
firms:'TÜBİTAK BİLGEM|ASELSAN|Bankalar (risk ve modelleme birimleri)|Sigorta şirketleri (aktüerya)|Peak Games|HAVELSAN',
tips:'Matematik mühendisinin değeri problemi doğru formüle etmesidir. Gerisini bilgisayar çözer.~Kıdemli Modelleme Uzmanı|Kod yazmayan matematikçiye bugün kapılar dar. Her ispatın yanına bir uygulama ekle.~Kantitatif Analiz Takım Lideri',
subs:[
 S('Kriptografi & Bilgi Güvenliği',{mat:3,yaz:3,sav:3},'Sayılar teorisi ve sonlu cisimler|Simetrik ve açık anahtarlı şifreleme|Eliptik eğri kriptografisi|Kuantum sonrası kriptografi|Yan kanal saldırıları|Güvenli uygulama geliştirme','Coursera: Cryptography I (Stanford)|CompTIA Security+','RSA ve eliptik eğri şifrelemenin sıfırdan uygulaması ve performans karşılaştırması|Kuantum sonrası bir algoritmanın incelemesi','ICPC|picoCTF','Kriptografide kendi algoritmanı icat etme, mevcut olanı doğru uygula. Hataların çoğu matematikte değil uygulamada çıkar.~Kriptoloji Uzmanı'),
 S('Sayısal Hesaplama & Bilimsel Simülasyon',{mat:3,yaz:2,akis:1},'Sonlu farklar ve sonlu elemanlar|Seyrek lineer sistemler|Paralel hesaplama (MPI, GPU)|Belirsizlik nicelleştirme|Optimizasyon algoritmaları|C++ ve Julia ile yüksek başarımlı kod','MIT OCW 18.330|MIT OCW 18.085 Computational Science and Engineering I','Isı denklemi için sonlu fark çözücü ve hata analizi|GPU ile hızlandırılmış Monte Carlo simülasyonu','Kaggle','Sayısal yöntemde yakınsama ve kararlılığı kanıtlamadan sonucu yayınlama.~Hesaplamalı Bilim Uzmanı'),
 S('Finansal Mühendislik & Risk',{mat:3,veri:3,sis:1},'Stokastik süreçler|Opsiyon fiyatlama|Risk ölçüleri (VaR)|Zaman serisi analizi|Algoritmik işlem temelleri|Aktüeryal modeller','CFA Level I|FRM Part I|Coursera: Financial Engineering and Risk Management (Columbia)','Black-Scholes ve Monte Carlo opsiyon fiyatlama karşılaştırması|Gerçek fiyat verisiyle VaR geriye dönük testi','Kaggle','Finansal modelde en tehlikeli varsayım, geçmişin geleceğe benzeyeceğidir. Stres senaryosu yazmayı öğren.~Risk Modelleme Müdürü')
]});
