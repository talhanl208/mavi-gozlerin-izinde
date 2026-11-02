
/* ================= UYGULAMA → SEVİYE → SERTİFİKA VERİTABANI =================
   Her uygulama/araç için: ne öğrenileceği + seviyeye göre sertifikalar.
   Seviye: 1 Temel · 2 Orta · 3 İleri.  Kapsam: G = global, TR = Türkiye. */
const TOOLS={};
function T(k,n,d,lv){TOOLS[k]={k,n,d,lv:L(lv).map(x=>{const[a,b]=x.split('~');const i=a.indexOf(':');return{l:+a.slice(0,i),c:a.slice(i+1),s:b||'G'}})}}
/* ortak */
T('english','Teknik İngilizce','Datasheet, standart ve makale okuyup İngilizce teknik rapor yazabilecek seviyeye gelmek','1:YDS veya YÖKDİL (60+ puan)~TR|2:IELTS Academic 6.5 veya TOEFL iBT 90~G|3:IELTS Academic 7.5+ (yurt dışı yüksek lisans için)~G');
T('python','Python','Söz dizimi, veri yapıları, fonksiyonlar, dosya işlemleri; ardından NumPy, pandas ve Matplotlib','1:BTK Akademi Python kursu~TR|1:Python Institute PCEP~G|2:Python Institute PCAP~G|3:Python Institute PCPP1~G');
T('git','Git & GitHub','Commit, branch, merge, pull request, çakışma çözme ve ekip içinde kod inceleme','1:GitHub Foundations~G|2:GitHub Actions~G|3:GitHub Advanced Security~G');
T('linux','Linux','Komut satırı, dosya izinleri, süreçler, Bash betikleri, paket yönetimi ve SSH','1:Linux Foundation LFS101 Introduction to Linux (ücretsiz)~G|2:Linux Foundation LFCS~G|3:Red Hat RHCSA~G');
T('excel','Excel & veri tabloları','Formüller, pivot tablolar, grafikler, Power Query ile veri temizleme','1:Microsoft Office Specialist: Excel Associate~G|2:Microsoft Office Specialist: Excel Expert~G|3:Microsoft PL-300 Power BI Data Analyst~G');
T('matlab','MATLAB','Matris işlemleri, grafik, sayısal yöntemler, fonksiyon yazma ve veri analizi','1:MATLAB Onramp (ücretsiz)~G|2:MathWorks Certified MATLAB Associate~G|3:MathWorks Certified MATLAB Professional~G');
T('simulink','Simulink','Blok diyagramla sistem modelleme, kontrolcü tasarımı ve otomatik kod üretimi','1:Simulink Onramp (ücretsiz)~G|2:Control Design Onramp with Simulink~G|3:MathWorks Model-Based Design eğitimleri~G');
T('pm','Proje yönetimi','Kapsam, iş programı, risk, kaynak planlama ve paydaş yönetimi','1:Google Project Management Certificate~G|2:PMI CAPM~G|3:PMI PMP (deneyim şartlı)~G');
T('isg','İş sağlığı ve güvenliği','Risk değerlendirmesi, mevzuat ve saha denetimi','1:İSG Uzmanlığı C sınıfı~TR|2:NEBOSH International General Certificate~G|3:İSG Uzmanlığı A sınıfı (deneyim şartlı)~TR');
T('iso9001','Kalite yönetimi (ISO 9001)','Süreç yaklaşımı, iç tetkik ve düzeltici faaliyet','1:TSE ISO 9001 İç Tetkikçi eğitimi~TR|2:ISO 9001 Baş Denetçi (IRCA onaylı)~G');
T('lean','Yalın üretim & Altı Sigma','DMAIC, değer akışı haritası, kök neden analizi ve istatistiksel süreç kontrolü','1:Lean Six Sigma Yellow Belt~G|1:KalDer kalite eğitimleri~TR|2:ASQ CSSGB (Green Belt)~G|3:ASQ CSSBB (Black Belt)~G');
T('minitab','İstatistik & deney tasarımı','Hipotez testi, regresyon, deney tasarımı (DOE) ve kontrol grafikleri','1:Minitab Essentials eğitimi~G|2:ASQ CQE (Certified Quality Engineer)~G');
T('syseng','Sistem mühendisliği','Gereksinim yönetimi, V-modeli, SysML, doğrulama ve geçerleme','1:INCOSE ASEP~G|3:INCOSE CSEP~G');
T('milstd','Savunma standartları (MIL-STD)','MIL-STD-810 çevresel testler, MIL-STD-461 EMC ve yapılandırma yönetimi','1:Savunma Sanayii Akademi eğitimleri~TR|2:MIL-STD-810 test eğitimleri~G');
/* bilgisayar & yazılım */
T('c','C / C++','Pointer, bellek yönetimi, struct, derleme süreci; ardından modern C++ (STL, RAII, sınıflar)','1:C++ Institute CLA (C Programming Language Certified Associate)~G|1:BTK Akademi C ve C++ kursları~TR|2:C++ Institute CPA~G|3:C++ Institute CPP~G');
T('dsa','Veri yapıları & algoritmalar','Bağlı liste, ağaç, graf, sıralama, dinamik programlama ve karmaşıklık analizi','1:Coursera: Algorithms, Part I (Princeton, ücretsiz)~G|2:Coursera: Algorithms Specialization (Stanford)~G|3:ICPC bölgesel yarışma derecesi~G');
T('stm32','STM32 / ARM Cortex-M','GPIO, timer, kesme, DMA ve ADC; önce HAL ile, sonra doğrudan register seviyesinde','1:ST STM32 MOOC eğitimleri (ücretsiz)~G|2:Coursera: Introduction to Embedded Systems Software (CU Boulder)~G|3:Arm Accredited Engineer (AAE)~G');
T('rtos','FreeRTOS','Görev, kuyruk, semafor, mutex, zamanlama ve öncelik terslemesi','1:Mastering the FreeRTOS Kernel (resmî, ücretsiz)~G|2:Coursera: Real-Time Embedded Systems Specialization (CU Boulder)~G');
T('can','Haberleşme protokolleri (UART / SPI / I²C / CAN)','Çerçeve yapıları, hata yönetimi ve lojik analizörle paket çözme','1:Vector E-Learning: CAN modülü (ücretsiz)~G|2:Vector CANoe eğitimleri~G');
T('fpga','FPGA & Verilog / VHDL','Ardışıl devre, durum makinesi, zamanlama kısıtları ve Vivado ile sentez','1:Coursera: FPGA Design for Embedded Systems (CU Boulder)~G|2:AMD Vivado eğitimleri~G|3:TEKNOFEST Çip Tasarım Yarışması finali~TR');
T('net','Bilgisayar ağları','OSI ve TCP/IP, alt ağ, yönlendirme, VLAN ve Wireshark ile paket analizi','1:Cisco Networking Academy: Introduction to Networks~G|1:Huawei HCIA-Datacom (Huawei ICT Academy)~G|2:Cisco CCNA~G|2:CompTIA Network+~G|3:Cisco CCNP Enterprise~G');
T('sec','Siber güvenlik & sızma testi','Keşif, zafiyet tarama, istismar mantığı ve raporlama; Nmap, Burp Suite, Metasploit','1:BTK Akademi siber güvenlik eğitimleri~TR|1:CompTIA Security+~G|2:INE eJPT~G|2:PortSwigger Burp Suite Certified Practitioner~G|3:OffSec OSCP~G');
T('docker','Docker','İmaj, container, Dockerfile, docker compose, ağ ve volume yönetimi','1:Docker resmî Getting Started eğitimi~G|2:Docker Certified Associate (Mirantis)~G');
T('k8s','Kubernetes','Pod, deployment, service, ingress ve Helm ile uygulama dağıtımı','1:CNCF KCNA~G|2:CNCF CKAD~G|3:CNCF CKA~G');
T('cloud','Bulut (AWS / Azure)','Sanal sunucu, depolama, IAM, ağ ve sunucusuz fonksiyonlar','1:AWS Certified Cloud Practitioner~G|1:Microsoft AZ-900~G|2:AWS Solutions Architect – Associate~G|3:AWS Solutions Architect – Professional~G');
T('sql','SQL & veritabanları','Sorgular, JOIN, indeks, normalizasyon ve transaction','1:Microsoft DP-900 Azure Data Fundamentals~G|2:Oracle Database SQL Certified Associate~G');
T('java','Java & Spring Boot','OOP, koleksiyonlar, istisnalar ve Spring Boot ile REST API','1:BTK Akademi Java kursu~TR|2:Oracle Certified Professional: Java SE 17 Developer~G|3:Spring Certified Professional~G');
T('test','Yazılım testi','Test tasarım teknikleri, birim ve entegrasyon testi, Playwright veya Selenium ile otomasyon','1:ISTQB CTFL (Türkiye\'de Turkish Testing Board)~G|2:ISTQB CTAL Test Analyst~G|3:ISTQB CTAL Test Automation Engineering~G');
T('agile','Çevik yöntemler (Scrum)','Sprint, backlog, retrospektif ve kullanıcı hikâyeleri','1:Scrum.org PSM I~G|2:Scrum.org PSPO I~G|3:Scrum.org PSM II~G');
T('web','Web geliştirme','HTML, CSS, JavaScript ve React; erişilebilirlik ve performans','1:freeCodeCamp Responsive Web Design~G|1:Turkcell Geleceği Yazanlar eğitimleri~TR|2:Meta Front-End Developer (Coursera)~G');
T('mobile','Mobil geliştirme','Kotlin, Swift veya Flutter; durum yönetimi, API bağlantısı ve mağazaya yayın','1:Meta Android Developer veya iOS Developer (Coursera)~G|2:Mağazada yayınlanmış uygulama (portfolyo)~G');
T('ml','Makine öğrenmesi','Regresyon, sınıflandırma, model değerlendirme ve scikit-learn','1:Coursera: Machine Learning Specialization (Andrew Ng)~G|1:BTK Akademi yapay zekâ eğitimleri~TR|2:Huawei HCIA-AI~G|3:Google Cloud Professional Machine Learning Engineer~G');
T('dl','Derin öğrenme (PyTorch)','Sinir ağları, CNN, Transformer, eğitim döngüsü ve GPU kullanımı','1:NVIDIA DLI: Fundamentals of Deep Learning~G|2:DeepLearning.AI Deep Learning Specialization~G|3:AWS Certified Machine Learning Engineer – Associate~G');
T('cv','Görüntü işleme (OpenCV)','Filtreler, kenar bulma, kamera kalibrasyonu, nesne tespiti ve takip','1:OpenCV University ücretsiz OpenCV Bootcamp~G|2:NVIDIA DLI bilgisayarlı görü kursları~G');
T('edge','Uç yapay zekâ (Jetson)','Modeli ONNX ve TensorRT ile hızlandırma, gömülü cihazda gerçek zamanlı çıkarım','1:NVIDIA DLI: Getting Started with AI on Jetson Nano~G|2:NVIDIA Jetson AI Specialist sertifikası~G');
T('nlp','Doğal dil işleme','Tokenizasyon, Transformer, ince ayar, RAG ve model değerlendirme','1:Hugging Face NLP / LLM Course (ücretsiz)~G|2:DeepLearning.AI NLP Specialization~G');
T('data','Veri mühendisliği','ETL, Spark, Airflow, veri ambarı ve veri kalitesi kontrolleri','1:Databricks Lakehouse Fundamentals~G|2:Databricks Certified Data Engineer Associate~G|3:Google Cloud Professional Data Engineer~G');
T('powerbi','Power BI & panolar','Veri modeli, DAX ve etkileşimli panolar','1:Microsoft PL-900 Power Platform Fundamentals~G|2:Microsoft PL-300 Power BI Data Analyst~G');
T('qt','Qt & görev ekranları','Qt Widgets / QML ile arayüz, sinyal-slot ve C++ entegrasyonu','1:Qt Academy çevrim içi kursları~G');
T('do178','DO-178C / DO-254','Havacılık yazılım ve donanım sertifikasyonu, izlenebilirlik, doğrulama','2:DO-178C temel eğitimi~G|3:DO-178C / DO-254 ileri eğitimleri~G');
T('crypto','Kriptografi','Sayılar teorisi, simetrik ve açık anahtarlı şifreleme, kuantum sonrası yöntemler','1:Coursera: Cryptography I (Stanford)~G|2:CompTIA Security+~G');
T('hpc','Yüksek başarımlı hesaplama','MPI, OpenMP ve CUDA ile paralel programlama, küme kullanımı','1:TRUBA (TÜBİTAK ULAKBİM) kullanıcı eğitimleri~TR|2:NVIDIA DLI: Fundamentals of Accelerated Computing with CUDA~G');
T('r','R & istatistiksel analiz','Veri analizi, görselleştirme ve istatistiksel modelleme','1:Coursera: Data Science Specialization (Johns Hopkins)~G');
T('fin','Finansal modelleme','Stokastik süreçler, opsiyon fiyatlama ve risk ölçüleri','1:SPK Lisanslama Sınavı Düzey 1~TR|2:CFA Level I~G|2:FRM Part I~G|3:CFA Level II ve III~G');
T('qiskit','Kuantum programlama (Qiskit)','Kübit, kuantum devreleri, Grover ve Shor algoritmaları','1:IBM Quantum Learning kursları~G|2:IBM Qiskit Developer sertifikası~G');
/* elektrik-elektronik */
T('spice','Devre simülasyonu (LTspice)','DC, AC ve geçici rejim analizi, op-amp devreleri, filtre tasarımı','1:edX MITx 6.002x Circuits and Electronics~G|2:Coursera: Introduction to Electronics (Georgia Tech)~G');
T('pcb','PCB tasarımı (KiCad / Altium)','Şematik, footprint, çok katmanlı yerleşim, topraklama ve Gerber üretim dosyaları','1:KiCad resmî dokümantasyon ve eğitimleri~G|2:IPC CID (Certified Interconnect Designer)~G|2:IPC-A-610 CIS~G|3:IPC CID+ (Advanced)~G');
T('labview','LabVIEW & ölçüm otomasyonu','Veri toplama (DAQ), cihaz kontrolü ve otomatik test istasyonu','1:NI CLAD~G|2:NI CLD~G|3:NI CLA~G');
T('rf','RF tasarım (ADS / CST / HFSS)','Empedans uydurma, anten ve filtre simülasyonu, VNA ile ölçüm','1:Keysight ADS öğrenci eğitimleri~G|2:Ansys HFSS veya CST Studio eğitimleri~G|3:IEEE AP-S ve MTT-S kısa kursları~G');
T('power','Güç elektroniği','Buck ve boost dönüştürücü, inverter, MOSFET sürme ve termal tasarım','1:Coursera: Introduction to Power Electronics (CU Boulder)~G|2:Coursera: Power Electronics Specialization (CU Boulder)~G|3:TI Precision Labs: Power~G');
T('grid','Güç sistemleri (ETAP / DIgSILENT)','Yük akışı, kısa devre ve koruma koordinasyonu','1:Coursera: Electric Power Systems (University at Buffalo)~G|2:ETAP veya DIgSILENT PowerFactory eğitimleri~G|3:EMO meslek içi eğitimleri ve SMM belgesi~TR');
T('plc','PLC & endüstriyel otomasyon','Ladder, TIA Portal, HMI, Profinet ve emniyet devreleri','1:Siemens SITRAIN TIA Portal temel eğitimi~G|2:Siemens SMSCP Level 1~G|3:Siemens SMSCP Level 2~G');
T('ros','ROS 2','Node, topic, servis, launch, TF, Nav2 ile navigasyon ve Gazebo simülasyonu','1:The Construct: ROS 2 Basics (sertifikalı)~G|2:Coursera: Modern Robotics (Northwestern)~G|3:Coursera: Self-Driving Cars Specialization (Toronto)~G');
T('control','Kontrol sistemleri','Transfer fonksiyonu, PID ayarı, kök yer eğrisi, Bode; durum uzayı ve LQR','1:MathWorks Control Design Onramp~G|2:Coursera: Control of Mobile Robots (Georgia Tech)~G');
T('robotind','Endüstriyel robotlar (ABB / KUKA)','Robot programlama, koordinat sistemleri, al-yerleştir ve hücre güvenliği','1:ABB Robotics çevrim içi eğitimleri~G|2:KUKA College robot programlama~G');
T('iot','IoT (ESP32 / LoRa)','Sensör okuma, kablosuz haberleşme ve bulut panosu','1:Coursera: An Introduction to Programming the Internet of Things (UC Irvine)~G');
