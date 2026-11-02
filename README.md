# Mavi Gözlerin İzinde

Türkiye'deki mühendislik öğrencileri için dönem dönem kariyer yol haritası. Bölümünü, sınıfını ve uzmanlaşmak istediğin alanı seçiyorsun; site her güz, bahar ve yaz için öğrenilecek becerileri, uygulamaları, o seviyeye uygun sertifikaları (Global / Türkiye), projeleri ve sahadan tavsiyeleri çıkarıyor.

## Özellikler

- **25 mühendislik bölümü, 87 uzmanlık alanı**
- **Dönem dönem yol haritası:** 1. sınıftan mezuniyet sonrasına kadar; haftalık ayrılan saate göre yoğunluk ayarlanıyor
- **Uygulama → seviye → sertifika:** her araç için Temel / Orta / İleri sertifika önerileri (ör. SolidWorks: CSWA → CSWP → CSWE)
- **İkinci alan (ÇAP / yandal):** iki bölümü birleştirince ikinci bölümün araçları ve sertifikaları da plana yerleşiyor, kesişim alanları gösteriliyor
- **Bölüme özel uzmanlık testi:** her bölümün kendi soru havuzu
- **Alanın ustaları:** önemli isimler, topluluklar ve temel kaynak kitaplar
- **Atatürk'ün sözleri** her bölümde ön planda
- İşaretlemeler tarayıcıda (localStorage) saklanır

## Çalıştırma

`index.html` tek başına çalışır; tarayıcıda açman yeterli. GitHub Pages ile yayınlamak için: **Settings → Pages → Branch: main / root**.

## Geliştirme

Kaynak dosyalar `src/` altında:

| Klasör | İçerik |
|---|---|
| `src/html/` | Stil ve sayfa iskeleti |
| `src/js/01-05` | Bölüm ve uzmanlık alanı verileri |
| `src/js/06-08` | ÇAP sinerji motoru |
| `src/js/09-10` | Uygulama ve sertifika veritabanı |
| `src/js/11-14` | Bölüme özel soru havuzları, ustalar, kaynaklar |
| `src/js/15` | Dönem dönem yol haritası motoru |
| `src/js/16` | Arayüz |
| `src/img/` | Fotoğraflar |

Değişiklikten sonra `python3 build.py` çalıştır; `index.html` yeniden üretilir.

## Not

Saha tavsiyeleri sektör deneyiminden derlenmiş temsili seslerdir. Sertifika, sınav ve yarışma koşulları değişebilir; başvurmadan önce resmî sayfaları kontrol edin.
