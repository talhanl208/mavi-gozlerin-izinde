
/* ---------- 15. Nükleer Enerji ---------- */
P({id:'nuk',ad:'Nükleer Enerji Mühendisliği',k:'Nükleer Enerji',kod:'NÜK',t:{ene:3,mat:2,akis:2,mal:1,sav:1},
core:'Modern fizik ve atom fiziği|Diferansiyel denklemler|Termodinamik ve ısı transferi|Nükleer fiziğe giriş|Radyasyonun madde ile etkileşimi|Programlama (Python, Fortran)',
tools:'OpenMC|Serpent|RELAP5 veya TRACE (lisanslı)|Python|MATLAB|Geant4',
certs:'IAEA e-öğrenme kursları|MIT OCW 22.01 Introduction to Nuclear Engineering and Ionizing Radiation|Radyasyondan Korunma Sorumlusu eğitimi',
comps:'TÜBİTAK 2209-A Araştırma Projeleri|IAEA öğrenci ve genç profesyonel programları',
firms:'Akkuyu Nükleer A.Ş.|TENMAK|Nükleer Düzenleme Kurumu (NDK)|EÜAŞ|Üniversite araştırma reaktörleri|Nükleer tıp ve medikal fizik birimleri',
tips:'Nükleerde güvenlik kültürü bir ders değil, karakter özelliğidir. Sorgulayan tutum mülakatta doğrudan ölçülür.~Kıdemli Reaktör Güvenliği Mühendisi|Akkuyu ile birlikte Türkiye\'de saha deneyimi olan nükleer mühendis ihtiyacı büyüyor. Rusça veya İngilizce teknik doküman okuyabilmek fark yaratır.~İnsan Kaynakları Müdürü, enerji',
subs:[
 S('Reaktör Fiziği & Nötronik',{ene:3,mat:3,yaz:1},'Nötron transport ve difüzyon teorisi|Kritiklik hesapları|Monte Carlo yöntemleri|Yakıt tükenmesi|OpenMC ve Serpent|Reaktör kinetiği','MIT OCW 22.05 Neutron Science and Reactor Physics|OpenMC dokümantasyonu ve eğitimleri','OpenMC ile basit bir PWR yakıt hücresinde kritiklik analizi|Yakıt zenginliğinin çoğaltma katsayısına etkisi','TÜBİTAK 2209-A Araştırma Projeleri','Kodu çalıştırmak kolay. Girdi kartındaki her varsayımı savunabilmek nükleer mühendisliğin kendisidir.~Nötronik Analiz Uzmanı'),
 S('Termal Hidrolik',{akis:3,ene:2,mat:2},'İki fazlı akış|Kritik ısı akısı|Sistem kodları (RELAP5, TRACE)|Alt kanal analizi|Kaza senaryoları|CFD uygulamaları','MIT OCW 22.06 Engineering of Nuclear Systems|Ansys Innovation Courses','Basitleştirilmiş soğutma devresinde soğutucu kaybı senaryosu|Yakıt çubuğu sıcaklık dağılımı hesabı','TÜBİTAK 2209-A Araştırma Projeleri','Termal hidrolikte muhafazakâr kabul ile gerçekçi kabul arasındaki farkı anlatabilmek seni ayırır.~Termal Hidrolik Mühendisi'),
 S('Radyasyon Koruma & Nükleer Güvenlik',{ene:2,bio:2,sis:2},'Dozimetri|Zırhlama hesapları|Güvenlik analizi ve olasılıksal risk|Acil durum planlama|Lisanslama süreçleri|Radyoaktif atık yönetimi','IAEA e-öğrenme kursları|Radyasyondan Korunma Sorumlusu eğitimi','Bir medikal ışınlama odası için zırhlama hesabı|Geant4 ile basit doz hesabı','TÜBİTAK 2209-A Araştırma Projeleri','Düzenleyiciyle konuşan mühendis teknik doğruluğu belgeyle kanıtlar. Yazma becerin hesap becerin kadar önemli.~Lisanslama Uzmanı')
]});

/* ---------- 16. Harita (Jeodezi ve Fotogrametri) ---------- */
P({id:'har',ad:'Harita Mühendisliği (Jeodezi ve Fotogrametri)',k:'Harita',kod:'HRT',t:{yer:3,veri:2,mat:2,yaz:1,sav:1},
core:'Ölçme bilgisi|Dengeleme hesabı|Jeodezi|Fotogrametri|Kartografya|Coğrafi bilgi sistemlerine giriş',
tools:'QGIS|ArcGIS Pro|Netcad|Agisoft Metashape veya Pix4D|GNSS alıcıları ve total station|Python (GDAL, GeoPandas)',
certs:'Esri MOOC kursları (Spatial Data Science vb.)|SHGM İHA Pilot Lisansı|Pix4D sertifikasyonu',
comps:'TEKNOFEST Akıllı Ulaşım|TEKNOFEST Tarım Teknolojileri|NASA Space Apps Challenge',
firms:'Harita Genel Müdürlüğü|Tapu ve Kadastro Genel Müdürlüğü|AFAD|Belediyeler (CBS birimleri)|Baykar|Netcad',
tips:'Haritacı koordinat sisteminin dilini konuşur. Datum dönüşümünü yanlış yapan, kusursuz veriyi metrelerce kaydırır.~Kıdemli Jeodezi Mühendisi|İHA ile veri toplamak artık herkesin işi, veriyi doğru işleyip doğruluğunu raporlamak ise mühendisin işi.~Fotogrametri Takım Lideri',
subs:[
 S('Fotogrametri & İHA Haritacılığı',{yer:3,veri:2,uzay:1},'Uçuş planlama ve yer kontrol noktaları|Yapıdan hareketle 3B modelleme (SfM)|Nokta bulutu işleme|Ortofoto ve sayısal yüzey modeli|Lidar|Doğruluk analizi','SHGM İHA Pilot Lisansı|Pix4D sertifikasyonu|Agisoft Metashape eğitimleri','Kampüsün İHA ile ortofotosu ve 3B modeli + doğruluk raporu|Tarihî bir yapının fotogrametrik belgelenmesi','TEKNOFEST Tarım Teknolojileri','Güzel bir 3B model herkesi etkiler, mühendisi ise kontrol noktalarındaki hata etkiler.~Fotogrametri Uzmanı'),
 S('CBS & Uzaktan Algılama',{yer:3,veri:3,yaz:2},'Uydu görüntüsü işleme (Sentinel, Landsat)|Görüntü sınıflandırma|Google Earth Engine|Mekânsal veritabanı (PostGIS)|Mekânsal istatistik|Derin öğrenme ile değişim tespiti','Esri MOOC kursları|Google Earth Engine eğitimleri|Copernicus RUS eğitimleri','Sentinel-2 ile deprem sonrası hasar veya arazi değişimi analizi|PostGIS + web harita uygulaması','NASA Space Apps Challenge|TEKNOFEST Akıllı Ulaşım','Uzaktan algılamada model kadar yer gerçeği verisi de önemlidir. Sahaya çıkmayı ihmal etme.~Uzaktan Algılama Uzmanı'),
 S('Jeodezi & GNSS',{yer:3,mat:3,yaz:1},'GNSS konumlama ve RTK|Jeoit ve yükseklik sistemleri|Deformasyon izleme|Dengeleme ve hata teorisi|CORS-TR ağı|Kalman filtresi','IGS ve UNAVCO eğitim kaynakları|MIT OCW 12.540 Principles of the Global Positioning System','GNSS ile bir yapıda deformasyon izleme kampanyası|RTK doğruluk karşılaştırma çalışması','TÜBİTAK 2209-A Araştırma Projeleri','Milimetre doğruluk sabır ister. Ölçü planı yapmadan sahaya çıkan ekip iki kez çıkar.~GNSS ve Deformasyon Uzmanı')
]});

/* ---------- 17. Jeoloji ---------- */
P({id:'jeo',ad:'Jeoloji Mühendisliği',k:'Jeoloji',kod:'JEO',t:{yer:3,kim:1,cev:1,yap:1,ene:1},
core:'Genel jeoloji|Mineraloji ve petrografi|Yapısal jeoloji|Stratigrafi ve sedimantoloji|Jeokimya|Arazi jeolojisi ve harita okuma',
tools:'QGIS veya ArcGIS|Leapfrog Geo|Petrel (lisanslı)|Stereonet|RockWorks|Python',
certs:'Seequent Leapfrog eğitimleri|SLB Petrel eğitimleri|Esri MOOC kursları',
comps:'AAPG Imperial Barrel Award|TÜBİTAK 2209-A Araştırma Projeleri|NASA Space Apps Challenge',
firms:'MTA|AFAD|TPAO|Eti Maden|Jeotermal şirketleri|Mühendislik müşavirlik firmaları',
tips:'Jeoloğun laboratuvarı arazidir. Kayayı elinde tutmadan yazılımda modellemeye kalkma.~Kıdemli Arama Jeoloğu|Arazi defterin senin imzandır. Düzenli, ölçekli ve tekrar okunabilir not tutmayı alışkanlık yap.~Saha Operasyon Müdürü',
subs:[
 S('Deprem Jeolojisi & Aktif Tektonik',{yer:3,yap:2,mat:1},'Aktif fay haritalama|Paleosismoloji ve hendek çalışmaları|Sismik tehlike analizi|InSAR temelleri|Zemin büyütmesi|Afet risk yönetimi','USGS ve EERI eğitim kaynakları|Esri MOOC kursları','Bir fay zonunun uydu görüntüsü + arazi verisiyle haritalanması|InSAR verisiyle deprem sonrası yer değiştirme analizi','TÜBİTAK 2209-A Araştırma Projeleri','Türkiye\'de deprem jeolojisi bir akademik merak değil, kamusal sorumluluktur. Raporunu bir belediye başkanının anlayacağı dille yaz.~Aktif Tektonik Uzmanı'),
 S('Maden Yatakları & Arama',{yer:3,kim:2,veri:1},'Cevher oluşum modelleri|Jeokimyasal arama|Jeofizik yöntemler|Sondaj loglama|3B jeolojik modelleme (Leapfrog)|Kaynak tahmini temelleri','Seequent Leapfrog eğitimleri|JORC ve NI 43-101 raporlama kodu eğitimleri','Açık sondaj verisiyle Leapfrog\'ta 3B cevher modeli|Jeokimyasal anomali haritası','AAPG Imperial Barrel Award','Arama jeolojisinde başarı oranı düşüktür. Negatif sonucu da titizlikle raporlayan jeolog güven kazanır.~Arama Projesi Yöneticisi'),
 S('Mühendislik Jeolojisi & Jeotermal',{yer:3,yap:2,ene:2},'Kaya kütlesi sınıflamaları|Heyelan analizi|Baraj ve tünel jeolojisi|Hidrojeoloji|Jeotermal rezervuar temelleri|Zemin etüdü raporlama','Rocscience eğitimleri|IGA (International Geothermal Association) kaynakları','Bir yol yarmasında şev stabilitesi ve kaya sınıflaması|Jeotermal saha kavramsal modeli','TÜBİTAK 2209-A Araştırma Projeleri','İnşaat mühendisiyle aynı dili konuşan jeolog projenin en değerli insanıdır. Geoteknik temelleri öğren.~Mühendislik Jeolojisi Uzmanı')
]});

/* ---------- 18. Maden ---------- */
P({id:'mad',ad:'Maden Mühendisliği',k:'Maden',kod:'MAD',t:{yer:3,mek:1,sis:2,cev:1,kim:1},
core:'Genel jeoloji|Madencilik yöntemlerine giriş|Kaya mekaniği|Maden ölçmeciliği|Cevher hazırlamaya giriş|İş sağlığı ve güvenliği',
tools:'Datamine|GEOVIA Surpac|Deswik|AutoCAD|Rocscience (RS2, Dips)|Python',
certs:'İSG Uzmanlığı (A, B, C sınıfı)|Datamine veya Surpac eğitimleri|SME (Society for Mining) kaynakları',
comps:'SME Student Design Competition|TÜBİTAK 2209-B Sanayiye Yönelik Araştırma',
firms:'Eti Maden|Türkiye Kömür İşletmeleri|Eti Bakır|MAPEG|Tünelcilik firmaları|Çimento sanayii',
tips:'Madende ilk değer hayattır. Üretimi güvenlikten önce koyan planı imzalama.~Kıdemli Maden İşletme Mühendisi|Mülakatta bir açık ocak için kabaca dekapaj oranı ve maliyet hesabı sorarız. Rakamlarla düşünebilen ayrışır.~Maden Planlama Müdürü',
subs:[
 S('Maden Planlama & Dijital Madencilik',{yer:3,sis:3,yaz:1},'Kaynak ve rezerv modelleme|Açık ocak optimizasyonu (Lerchs-Grossmann)|Üretim çizelgeleme|Datamine, Surpac, Deswik|Ekipman seçimi ve filo yönetimi|Madencilikte otonom sistemler','Datamine ve GEOVIA Surpac eğitimleri|SME kaynakları','Açık veriyle bir açık ocak pit optimizasyonu|Kamyon-ekskavatör filosu için benzetim modeli','SME Student Design Competition','Planlamacı jeolog ile operasyon arasında köprüdür. İkisinin dilini de bilmelisin.~Maden Planlama Mühendisi'),
 S('Cevher Hazırlama & Zenginleştirme',{kim:2,sis:2,yer:2},'Kırma ve öğütme|Flotasyon|Gravite ve manyetik ayırma|Bor ve endüstriyel mineraller|Atık barajları|Kütle denkliği','SME kaynakları|JKMRC kısa kursları','Laboratuvar ölçeğinde flotasyon deneyi ve verim analizi|Öğütme devresi için kütle denkliği tablosu','TÜBİTAK 2209-B Sanayiye Yönelik Araştırma','Tesiste yüzde bir verim artışı bir yıllık maaşından fazlasını kazandırır. Kazancı hesaplamayı bil.~Cevher Hazırlama Tesis Müdürü'),
 S('Kaya Mekaniği & Tünelcilik',{yer:2,yap:2,mek:2},'Kaya kütlesi sınıflamaları (RMR, Q)|Tahkimat tasarımı|NATM ve TBM|Sayısal modelleme (RS2, FLAC)|Patlatma tasarımının güvenlik ilkeleri|Yeraltı havalandırması','Rocscience eğitimleri|ITA-AITES eğitim kaynakları','RS2 ile tünel kesitinde tahkimat analizi|Bir yeraltı ocağı için havalandırma ağı hesabı','TÜBİTAK 2209-A Araştırma Projeleri','Tünelde model ile ayna farklı konuşur. Aynayı okuyup tasarımı güncellemeyi bilen mühendis aranır.~Tünel Proje Mühendisi')
]});

/* ---------- 19. Çevre ---------- */
P({id:'cev',ad:'Çevre Mühendisliği',k:'Çevre',kod:'ÇEV',t:{cev:3,kim:2,bio:1,akis:1,yer:1},
core:'Genel kimya ve mikrobiyoloji|Akışkanlar mekaniği ve hidrolik|Çevre kimyası|Su ve atıksu temelleri|Hava kirliliğine giriş|Çevre mevzuatı',
tools:'GPS-X veya BioWin|AERMOD|QGIS|openLCA veya SimaPro|Python|Laboratuvar analizleri (BOİ, KOİ)',
certs:'ISO 14001 Baş Denetçi eğitimi|LEED Green Associate|Çevre Görevlisi Belgesi',
comps:'TEKNOFEST Çevre ve Enerji Teknolojileri|TÜBİTAK 2209-A Araştırma Projeleri|Solar Decathlon',
firms:'Büyükşehir su ve kanalizasyon idareleri|Tüpraş|Çevre danışmanlık firmaları|Yeşil dönüşüm projeleri yürüten sanayi kuruluşları|Arıtma tesisi işletmecileri|Sürdürülebilirlik danışmanlıkları',
tips:'Avrupa\'nın Sınırda Karbon Düzenlemesi ile birlikte karbon hesabı yapabilen çevre mühendisi sanayinin en çok aradığı profillerden biri oldu.~Kıdemli Sürdürülebilirlik Danışmanı|Arıtma tesisi bir canlı gibidir. Laboratuvar verisini okuyup tesisi ayarlayabilen mühendis vazgeçilmezdir.~Arıtma Tesisi İşletme Müdürü',
subs:[
 S('Su & Atıksu Arıtma',{cev:3,kim:2,bio:2},'Aktif çamur ve biyolojik arıtma|Membran prosesleri|Çamur yönetimi|Tesis modelleme (BioWin, GPS-X)|İçme suyu arıtımı|Su kalitesi analizleri','MIT OCW 1.85 Water and Wastewater Treatment Engineering|IWA eğitim kaynakları','Bir ilçe için atıksu arıtma tesisi ön tasarımı|Gri suyun geri kazanımı pilot deneyi','TEKNOFEST Çevre ve Enerji Teknolojileri','Tasarım kapasitesi değil işletme gerçekliği önemlidir. Tesisin kışın nasıl çalıştığını sor.~Arıtma Proses Uzmanı'),
 S('Hava Kalitesi & Karbon Yönetimi',{cev:3,veri:2,ene:1},'Emisyon envanteri|Hava kalitesi modelleme (AERMOD)|Sera gazı hesaplama (GHG Protocol, ISO 14064)|Yaşam döngüsü analizi|AB Sınırda Karbon Düzenlemesi (SKDM / CBAM)|Sürdürülebilirlik raporlama','GHG Protocol eğitimleri|ISO 14064 doğrulayıcı eğitimleri|LEED Green Associate','Bir fabrika için Kapsam 1-2 sera gazı envanteri|Sensör verisiyle şehir hava kalitesi panosu','TEKNOFEST Çevre ve Enerji Teknolojileri','Karbon hesabında şeffaflık her şeydir. Varsayımlarını açıkça yazmayan rapor ilk denetimde çöker.~Karbon Yönetimi Uzmanı'),
 S('Katı Atık & Döngüsel Ekonomi',{cev:3,sis:2,kim:1},'Atık yönetim hiyerarşisi|Geri dönüşüm teknolojileri|Kompost ve biyogaz|Düzenli depolama|Endüstriyel simbiyoz|Atık yönetim mevzuatı','ISO 14001 Baş Denetçi eğitimi|Ellen MacArthur Foundation kursları','Kampüs için sıfır atık planı ve ölçülmüş sonuçlar|Organik atıktan biyogaz potansiyel analizi','TEKNOFEST Çevre ve Enerji Teknolojileri','Döngüsel ekonomi bir ekonomi problemidir. Geri dönüşüm fikrinin iş modelini kurabilen mühendis projeyi hayata geçirir.~Döngüsel Ekonomi Danışmanı')
]});

/* ---------- 20. Gıda ---------- */
P({id:'gid',ad:'Gıda Mühendisliği',k:'Gıda',kod:'GDA',t:{bio:2,kim:2,sis:1,akis:1,cev:1},
core:'Genel ve organik kimya|Gıda mikrobiyolojisi|Gıda kimyası ve biyokimyası|Kütle ve enerji denklikleri|Isı ve kütle transferi|Gıda analizleri',
tools:'Minitab|Laboratuvar cihazları (HPLC, GC)|SuperPro Designer|Python veya R|HACCP planlama şablonları|ERP',
certs:'HACCP eğitimi|FSSC 22000 / ISO 22000 Baş Denetçi eğitimi|BRCGS eğitimleri',
comps:'TEKNOFEST Tarım Teknolojileri|TEKNOFEST Biyoteknoloji İnovasyon|TÜBİTAK 2209-B Sanayiye Yönelik Araştırma',
firms:'Ülker|Sütaş|Eti Gıda|Tat Gıda|Pınar|Torku',
tips:'Gıdada kalite laboratuvarda değil hatta başlar. Üretimde vardiya tutmayan gıda mühendisi süreci anlamaz.~Kıdemli Üretim Müdürü, gıda|Bir ürünün raf ömrünü neden kısa olduğunu mikrobiyoloji ve ambalajla birlikte açıklayabilen aday hemen öne çıkar.~Ar-Ge Müdürü, gıda',
subs:[
 S('Gıda Güvenliği & Kalite',{bio:2,sis:3,kim:1},'HACCP ve risk analizi|ISO 22000, FSSC 22000, BRCGS, IFS|İzlenebilirlik|Alerjen yönetimi|İstatistiksel kalite kontrol|Denetim teknikleri','HACCP eğitimi|FSSC 22000 Baş Denetçi eğitimi|BRCGS eğitimleri','Bir üretim hattı için HACCP planı|Kontrol grafikleriyle dolum ağırlığı kalite analizi','TÜBİTAK 2209-B Sanayiye Yönelik Araştırma','Denetimden geçmek için değil, ürünü güvenli yapmak için sistem kur. Denetçi farkı hemen görür.~Gıda Güvenliği Müdürü'),
 S('Gıda Prosesleri & Mühendisliği',{kim:2,akis:2,sis:2},'Isıl işlem ve sterilizasyon|Kurutma ve dondurma|Ekstrüzyon|Ambalaj teknolojisi|Proses tasarımı ve ölçek büyütme|Enerji verimliliği','SuperPro Designer eğitimleri|Wageningen edX gıda teknolojisi kursları','Pastörizasyon prosesinin ısı transferi modeli|Kurutma kinetiği deneyi ve ölçek büyütme','TEKNOFEST Tarım Teknolojileri','Laboratuvarda çalışan reçete fabrikada çalışmayabilir. Ölçek büyütmeyi erken düşün.~Proses Geliştirme Mühendisi'),
 S('Fonksiyonel Gıda & Gıda Biyoteknolojisi',{bio:3,kim:2},'Probiyotikler ve fermantasyon|Biyoaktif bileşenler|Alternatif proteinler|Enkapsülasyon|Duyusal analiz|Gıda mevzuatı','Wageningen edX kursları|Coursera gıda bilimi kursları','Bitkisel bazlı protein ürünü geliştirme ve duyusal analiz|Fermente ürünün raf ömrü çalışması','TEKNOFEST Biyoteknoloji İnovasyon','Yenilikçi ürün tüketici sevmezse rafta kalır. Duyusal analizi hafife alma.~Ürün Geliştirme Uzmanı')
]});
