
/* ================= SİNERJİ MOTORU · ÖZEL SENTEZLER =================
   Sık seçilen ÇAP eşleşmeleri için elle derlenmiş kesişim alanları.
   Diğer tüm eşleşmeler etiket köprüleriyle (BR) üretilir; hiçbir kombinasyon boş dönmez. */
const K=(a,b)=>[a,b].sort().join('+');
const CUR={};
function C(a,b,f,tools,proj,certs){CUR[K(a,b)]={f:L(f).map(x=>x.split('~')),tools:L(tools),proj:L(proj),certs:L(certs)}}

C('met','mak','Savunma Sanayii Zırh Teknolojileri~Zırh çeliği, seramik ve kompozit katmanların seçimi, şekillendirilmesi ve darbe altında yapısal doğrulaması|Eklemeli İmalat (Metal 3B Baskı)~Topoloji optimizasyonuyla tasarlanan parçanın SLM prosesi, ısıl işlemi ve muayenesi|Termal-Mekanik Yorulma Analizi~Türbin, motor ve namlu gibi sıcak bölge parçalarında ömür tahmini',
 'ANSYS Mechanical|Thermo-Calc|SolidWorks|ABAQUS|LS-DYNA|SEM / EDS',
 'Zırh plakası için malzeme seçimi, sertlik testi ve LS-DYNA darbe simülasyonu zinciri|SLM ile basılmış, topoloji optimizasyonlu braketin yorulma testi|Bir türbin diski için termal-mekanik yorulma ömrü tahmini',
 'ASNT NDT Seviye II|SolidWorks CSWP|Ansys Innovation Courses');
C('bil','eem','Gömülü Sistemler & SoC Tasarımı~İşlemci, FPGA ve çevre birimlerini tek kartta birleştiren donanım-yazılım ortak tasarımı|Aviyonik & Görev Bilgisayarları~Gerçek zamanlı, sertifikalanabilir uçuş ve görev elektroniği|FPGA Tabanlı Sinyal İşleme~Radar, haberleşme ve görüntü için donanımda hızlandırılmış algoritmalar',
 'STM32CubeIDE|AMD Vivado|KiCad / Altium|FreeRTOS|MATLAB HDL Coder|Osiloskop ve lojik analizör',
 'Zynq SoC üzerinde FPGA hızlandırmalı görüntü işleme|Kendi tasarladığın PCB üzerinde FreeRTOS çalışan görev bilgisayarı|FPGA ile FFT tabanlı spektrum analizörü',
 'Arm Accredited Engineer (AAE)|AMD Vivado eğitimleri|IPC CID');
C('hav','mak','Uçak Yapıları & Aeroelastisite~Hafif gövdelerde yük, titreşim ve çırpınma (flutter) analizi|Gaz Türbinli Motorlar~Kompresör, yanma odası ve türbin bileşenlerinin termo-mekanik tasarımı|İHA Gövde ve Kompozit Yapılar~Kompozit kanat, gövde ve iniş takımı tasarımı ile test',
 'CATIA|ANSYS Mechanical|ANSYS Fluent|MSC Nastran|MATLAB|XFLR5',
 'Kompozit İHA kanadının yapısal ve aeroelastik analizi|Mikro gaz türbini çevrim analizi ve bileşen tasarımı|İniş takımı tasarımı ve düşme testi',
 'SolidWorks CSWP|Ansys Innovation Courses|AS9100 İç Denetçi eğitimi');
C('kim','met','Korozyon & Kaplama Teknolojileri~Elektrokimyasal süreçlerle koruyucu kaplama tasarımı ve ömür testi|Batarya Malzemeleri~Katot, anot ve elektrolit malzemelerinin sentezi ve hücre performansı|Polimer ve Seramik Kompozitler~Yüksek sıcaklık ve aşınma koşulları için hibrit malzeme sistemleri',
 'Thermo-Calc|Aspen Plus|Potansiyostat|SEM / EDS|XRD|DSC / TGA',
 'Elektrokimyasal kaplama banyosu optimizasyonu ve tuz sisi testi|Katot malzemesi sentezi ve coin hücre testi|Seramik kaplamanın termal şok dayanımı',
 'AMPP Coating Inspector Program|ASM International kursları');
C('end','ysm','ERP & MES Yazılımları~Üretim ve kaynak planlamasını yöneten kurumsal yazılımların tasarımı|Tedarik Zinciri Optimizasyon Yazılımı~Optimizasyon modellerini kullanıcıların kullanabileceği servislere dönüştürme|Süreç Madenciliği & Dijital İkiz~Olay loglarından gerçek süreci çıkarıp simülasyonla iyileştirme',
 'Python + OR-Tools|SAP|PostgreSQL|Power BI|PM4Py|Docker',
 'Atölye çizelgeleme modelini bir web servisi olarak sun|Gerçek olay loglarıyla süreç madenciliği analizi|Depo için stok optimizasyon paneli',
 'ASCM CSCP|ISTQB CTFL|SAP sertifikaları');
C('bil','mkt','Robot Yazılımı (ROS 2)~Algılama, planlama ve kontrolü modüler düğümlerle bağlayan yazılım mimarisi|Otonom Navigasyon & SLAM~Harita çıkarma, konumlanma ve yol planlama|Gömülü Hareket Kontrolü~Motor sürücülerden gerçek zamanlı kontrol döngülerine kadar düşük seviye yazılım',
 'ROS 2|C++|Gazebo|OpenCV|STM32|PyTorch',
 'ROS 2 ile otonom navigasyon yapan İKA|Lidar + kamera füzyonuyla engel tespiti|STM32 üzerinde CAN ile haberleşen motor kontrol düğümleri',
 'Coursera: Modern Robotics|The Construct ROS 2 kursları');
C('bme','eem','Tıbbi Cihaz Elektroniği~IEC 60601 güvenliğine uygun ölçüm ve tedavi cihazları|Biyosinyal İşleme~EKG, EEG ve EMG sinyallerinin filtrelenmesi ve yorumlanması|Giyilebilir Sağlık Teknolojileri~Düşük güçlü, kablosuz ve sürekli izleme cihazları',
 'LTspice|KiCad|MATLAB|nRF52 (BLE)|LabVIEW|Python',
 'BLE ile telefona veri gönderen giyilebilir EKG|EMG tabanlı protez kontrol kartı|IEC 60601 kontrol listesiyle ön güvenlik değerlendirmesi',
 'ISO 13485 İç Denetçi eğitimi|IPC CID');
C('har','ins','BIM-CBS Entegrasyonu~Bina bilgi modelini şehir ölçeğinde coğrafi veriyle birleştirme|Akıllı Şehir Altyapısı~Ulaşım, su ve enerji ağlarının mekânsal planlaması|Deformasyon İzleme~Köprü, baraj ve binalarda GNSS ve sensörle hareket takibi',
 'Revit|ArcGIS Pro / QGIS|AutoCAD Civil 3D|GNSS alıcıları|Python|PostGIS',
 'Bir mahalle için BIM + CBS entegre modeli|GNSS ile köprü deformasyon izleme kampanyası|Deprem sonrası hasar haritası',
 'Autodesk Certified Professional: Revit|Esri MOOC kursları');
C('eem','ens','Akıllı Şebekeler~Yenilenebilir üretimin şebekeye güvenli ve verimli entegrasyonu|Güç Elektroniği & Yenilenebilir Entegrasyon~İnverter, MPPT ve şebeke bağlantı elektroniği|Batarya Enerji Depolama Sistemleri~BMS, güç dönüşümü ve şebeke hizmetleri',
 'DIgSILENT PowerFactory|PLECS|PVsyst|HOMER Pro|MATLAB / Simulink|Python',
 'GES + batarya mikro şebekesinin simülasyonu ve kontrolü|MPPT şarj kontrolcüsü prototipi|Batarya depolama ile frekans desteği analizi',
 'AEE Certified Energy Manager|NABCEP PV Associate');
C('bil','otm','Otonom Sürüş Yazılımı~Algılama, tahmin ve planlama yazılımlarının araç ölçeğinde entegrasyonu|AUTOSAR & Araç İçi Ağlar~ECU yazılım mimarisi, CAN ve otomotiv Ethernet|Araç Siber Güvenliği~ISO/SAE 21434 ile bağlantılı araçların korunması',
 'ROS 2 / Autoware|CARLA|Vector CANoe|C++|AUTOSAR araçları|PyTorch',
 'CARLA\'da şerit takibi ve adaptif hız kontrolü|CAN ağında saldırı tespit sistemi|AUTOSAR yapısında gösterge ECU\'su prototipi',
 'ISO 26262 Functional Safety Engineer|Coursera: Self-Driving Cars Specialization');
C('gem','mak','Gemi Makineleri & Sevk Sistemleri~Dizel, elektrikli ve hibrit sevk sistemlerinin tasarımı|Deniz Yapıları Dayanımı~Gövde, güverte ve açık deniz yapılarında yük ve yorulma|Hidrodinamik Tasarım~Gövde formu ve pervane optimizasyonu',
 'Maxsurf|ANSYS Mechanical|ANSYS Fluent|Rhino|AVEVA Marine|MATLAB',
 'Hibrit sevk sistemli bir tekne için ön tasarım|Gövde kesitinde dalga yükü ve yorulma analizi|Pervane verim analizi',
 'DNV Academy kursları|SolidWorks CSWP');
C('cev','kim','Atıksu Arıtma Prosesleri~Biyolojik ve kimyasal arıtmanın proses tasarımı|Karbon Yakalama ve Kullanımı~Baca gazından CO₂ ayırma ve değerlendirme|Yeşil Kimya~Daha az atık ve enerjiyle çalışan kimyasal süreçler',
 'Aspen Plus|BioWin|openLCA|MATLAB|Laboratuvar analizleri|Python',
 'Bir sanayi atıksuyu için arıtma prosesi tasarımı|Karbon yakalama prosesinin Aspen simülasyonu|Bir ürünün yaşam döngüsü analizi',
 'ISO 14001 Baş Denetçi eğitimi|NEBOSH International General Certificate');
C('bme','yzv','Tıbbi Görüntü Analizi~Röntgen, BT ve MR görüntülerinde segmentasyon ve sınıflandırma|Klinik Karar Destek~Hasta verisinden risk tahmini ve açıklanabilir öneri|Biyosinyal Yapay Zekâsı~EKG ve EEG verisinde otomatik anomali tespiti',
 'PyTorch|MONAI|3D Slicer|Python|DICOM araçları|SHAP',
 'Akciğer görüntüsünde segmentasyon ve açıklanabilirlik|EKG verisinde aritmi sınıflandırma|Klinik veri setinde risk tahmin modeli',
 'Coursera: AI for Medicine Specialization|ISO 13485 İç Denetçi eğitimi');
C('eem','fiz','Fotonik & Elektro-Optik~Lazer, kızılötesi kamera ve optik sensör sistemleri|Yarı İletken Aygıtlar~Transistör, dedektör ve güç yarı iletkenlerinin fiziği ve tasarımı|Kuantum Sensörler~Kuantum etkilerle çalışan ölçüm sistemleri',
 'COMSOL|Ansys Zemax OpticStudio|LTspice|MATLAB|LabVIEW|Python',
 'Fotodiyot tabanlı lazer mesafe ölçer prototipi|Termal kamera sinyal zinciri tasarımı|nanoHUB ile aygıt simülasyonu',
 'Optica ve SPIE kısa kursları|MIT OCW 6.012');
C('bil','mtm','Kriptografi & Güvenli Sistemler~Şifreleme algoritmalarının matematiği ve güvenli uygulaması|Kuantum Algoritmaları~Kuantum bilgisayarlar için algoritma ve kuantum sonrası güvenlik|Yüksek Başarımlı Hesaplama~Paralel ve GPU tabanlı bilimsel hesaplama',
 'Python|C++|SageMath|Qiskit|CUDA|MPI',
 'RSA ve eliptik eğri şifrelemenin sıfırdan uygulaması|Qiskit ile Grover algoritması|GPU ile hızlandırılmış Monte Carlo',
 'Coursera: Cryptography I (Stanford)|IBM Quantum Learning');
C('end','yzv','Talep Tahmini & Planlama~Makine öğrenmesi tahminlerini üretim ve stok kararlarına bağlama|Operasyonel Analitik~Süreç verisinden darboğaz ve verimlilik analizi|Akıllı Fabrika~Kalite ve bakımda tahmine dayalı sistemler',
 'Python|scikit-learn|OR-Tools|Power BI|SQL|MLflow',
 'Satış verisiyle talep tahmini + stok optimizasyonu|Makine sensör verisiyle kestirimci bakım modeli|Üretim KPI panosu',
 'Lean Six Sigma Green Belt|Google Cloud Professional Machine Learning Engineer');
C('eem','hav','Aviyonik & Radar~Uçan platformların sensör, radar ve görev elektroniği|Uçuş Kontrol Elektroniği~Otopilot donanımı ve sensör füzyonu|Uydu Haberleşme~Bağ bütçesi, anten ve RF alt sistemleri',
 'Altium Designer|MATLAB / Simulink|Keysight ADS|PX4|STK|Python',
 'İHA uçuş kontrol kartı tasarımı|Model uydu haberleşme alt sistemi|Basit FMCW radar ile irtifa ölçümü',
 'DO-178C ve DO-254 eğitimleri|MathWorks Certified MATLAB Associate');
C('jeo','mad','Maden Arama & Kaynak Modelleme~Sondaj verisinden 3B cevher modeline|Kaya Mekaniği & Şev Stabilitesi~Açık ocak ve yeraltı kazılarının güvenliği|Sürdürülebilir Madencilik~Rehabilitasyon ve çevresel etki yönetimi',
 'Leapfrog Geo|Datamine|Surpac|Rocscience|QGIS|Python',
 'Açık sondaj verisiyle 3B cevher modeli ve pit tasarımı|Açık ocak şevinin stabilite analizi|Maden sahası rehabilitasyon planı',
 'Seequent Leapfrog eğitimleri|İSG Uzmanlığı');
C('bil','yzv','MLOps & Ölçekli Yapay Zekâ~Modellerin canlıya alınması, izlenmesi ve sürümlenmesi|Uç Yapay Zekâ~Modelleri gömülü ve mobil donanımda çalıştırma|Yapay Zekâ Güvenliği~Saldırgan örnekler ve model güvenliği',
 'PyTorch|Docker|Kubernetes|ONNX / TensorRT|MLflow|Jetson',
 'Jetson\'da çalışan, izlenen ve otomatik güncellenen tespit modeli|Bir modele saldırgan örnek testi|Canlı modelde veri kayması tespiti',
 'AWS Certified Machine Learning Engineer – Associate|NVIDIA Deep Learning Institute kursları');
C('mak','mkt','Robot Mekaniği & Tasarım~Kinematik, dinamik ve aktüatör seçimiyle robot gövdesi|Hareket Kontrol Sistemleri~Servo, redüktör ve kontrol döngüsünün birlikte tasarımı|Endüstriyel Otomasyon Makineleri~Özel makine tasarımı ve devreye alma',
 'SolidWorks|MATLAB / Simulink|ROS 2|ANSYS|Siemens TIA Portal|STM32',
 '6 eksenli robot kolunun tasarımı ve ters kinematiği|Servo eksen için kontrol ve titreşim analizi|Özel montaj makinesi prototipi',
 'SolidWorks CSWP|Siemens Mechatronic Systems Certification Program');
