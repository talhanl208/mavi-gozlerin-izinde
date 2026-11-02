"""src/ altındaki parçaları tek dosyalık index.html olarak birleştirir.
Kullanım: python3 build.py"""
import base64, glob, os
K = os.path.dirname(os.path.abspath(__file__))
head = open(os.path.join(K, 'src/html/01_head.html'), encoding='utf-8').read()
body = open(os.path.join(K, 'src/html/02_body.html'), encoding='utf-8').read()
for f in glob.glob(os.path.join(K, 'src/img/*.jpg')):
    ad = os.path.splitext(os.path.basename(f))[0]
    veri = base64.b64encode(open(f, 'rb').read()).decode()
    body = body.replace(f'__IMG_{ad}__', 'data:image/jpeg;base64,' + veri)
js = ''.join(open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(K, 'src/js/*.js'))))
sayfa = ('<!doctype html><html lang="tr"><head><meta charset="utf-8">'
         '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
         '<style>body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>'
         + head + '</head><body>' + body + '<script>' + js + '</script></body></html>')
open(os.path.join(K, 'index.html'), 'w', encoding='utf-8').write(sayfa)
print('index.html oluşturuldu:', len(sayfa.encode()) // 1024, 'KB')
