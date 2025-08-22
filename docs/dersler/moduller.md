# Python - Modüller ve Paketler

## 🎯 Ders Hedefleri

Bu derste şunları öğreneceksiniz:
- Modül nedir ve nasıl kullanılır
- Import yöntemleri (import, from...import, as)
- Kendi modüllerinizi oluşturma
- Paket (package) yapısı
- Python standart kütüphanesi
- Modül arama yolu (sys.path)
- __name__ ve __main__ kullanımı
- En çok kullanılan standart modüller

---

## 📦 Modül Nedir?

Modül, Python kodlarını organize etmek için kullanılan bir dosyadır. Bir `.py` dosyası aslında bir modüldür. Modüller kod tekrarını önler ve kodunuzu daha düzenli hale getirir.

### Modül Avantajları

```python
# Modüller şu avantajları sağlar:
# 1. Kod tekrarını önler
# 2. Kodun organizasyonunu sağlar
# 3. Namespace (isim alanı) yönetimi
# 4. Kodun yeniden kullanılabilirliği
# 5. Bakım ve güncelleme kolaylığı
```

---

## 📥 Import Yöntemleri

### Temel Import Yöntemleri

```python
# 1. Modülün tamamını import etme
import math
print(math.pi)  # 3.141592653589793
print(math.sqrt(16))  # 4.0

# 2. Belirli fonksiyonları import etme
from math import pi, sqrt, sin
print(pi)  # 3.141592653589793
print(sqrt(25))  # 5.0
print(sin(pi/2))  # 1.0

# 3. Modüle takma ad verme
import math as matematik
print(matematik.pi)  # 3.141592653589793

# 4. Fonksiyona takma ad verme
from math import sqrt as karekök
print(karekök(9))  # 3.0

# 5. Tüm içeriği import etme (dikkatli kullanın!)
from math import *
print(pi)  # 3.141592653589793
print(cos(0))  # 1.0

# 6. Çoklu import
import os, sys, datetime
from collections import defaultdict, Counter
```

### Import Best Practices

```python
# ✅ İyi pratikler
import os
import sys
from collections import Counter
from datetime import datetime

# ❌ Kötü pratikler
from math import *  # Namespace kirliliği
import os, sys, datetime  # Okunabilirlik sorunu

# ✅ Önerilen import sırası:
# 1. Standart kütüphane modülleri
import os
import sys
import datetime

# 2. Üçüncü parti modüller
# import requests
# import numpy

# 3. Kendi modülleriniz
# import my_module
```

---

## 🛠️ Kendi Modülünüzü Oluşturma

### Basit Modül Örneği

```python
# matematik_islemleri.py dosyası oluşturun
"""
Matematik işlemleri modülü
Bu modül temel matematik işlemlerini içerir.
"""

# Sabitler
PI = 3.14159
E = 2.71828

# Fonksiyonlar
def toplama(a, b):
    """İki sayıyı toplar"""
    return a + b

def cikarma(a, b):
    """İki sayıyı çıkarır"""
    return a - b

def carpma(a, b):
    """İki sayıyı çarpar"""
    return a * b

def bolme(a, b):
    """İki sayıyı böler"""
    if b == 0:
        raise ValueError("Sıfıra bölme hatası!")
    return a / b

def kare_alma(sayi):
    """Sayının karesini alır"""
    return sayi ** 2

def kup_alma(sayi):
    """Sayının küpünü alır"""
    return sayi ** 3

def faktoriyel(n):
    """Faktöriyel hesaplama"""
    if n < 0:
        raise ValueError("Negatif sayıların faktöriyeli hesaplanamaz!")
    if n == 0 or n == 1:
        return 1
    
    sonuc = 1
    for i in range(2, n + 1):
        sonuc *= i
    return sonuc

def asalmi(sayi):
    """Sayının asal olup olmadığını kontrol eder"""
    if sayi < 2:
        return False
    
    for i in range(2, int(sayi ** 0.5) + 1):
        if sayi % i == 0:
            return False
    return True

# Test fonksiyonu
def test_fonksiyonlari():
    """Modüldeki fonksiyonları test eder"""
    print("=== Matematik İşlemleri Testi ===")
    print(f"5 + 3 = {toplama(5, 3)}")
    print(f"10 - 4 = {cikarma(10, 4)}")
    print(f"6 * 7 = {carpma(6, 7)}")
    print(f"15 / 3 = {bolme(15, 3)}")
    print(f"4^2 = {kare_alma(4)}")
    print(f"3^3 = {kup_alma(3)}")
    print(f"5! = {faktoriyel(5)}")
    print(f"17 asal mı? {asalmi(17)}")

# Modül bilgileri
__version__ = "1.0.0"
__author__ = "Python Öğrencisi"

if __name__ == "__main__":
    # Bu kod sadece modül doğrudan çalıştırıldığında çalışır
    test_fonksiyonlari()
```

### Modülü Kullanma

```python
# ana_program.py dosyası
import matematik_islemleri

# Modül fonksiyonlarını kullanma
print("=== Matematik İşlemleri ===")
print(f"Toplama: {matematik_islemleri.toplama(10, 5)}")
print(f"Çarpma: {matematik_islemleri.carpma(4, 6)}")
print(f"Faktöriyel: {matematik_islemleri.faktoriyel(6)}")

# Modül sabitlerini kullanma
print(f"PI değeri: {matematik_islemleri.PI}")

# Modül bilgileri
print(f"Modül versiyonu: {matematik_islemleri.__version__}")
print(f"Yazar: {matematik_islemleri.__author__}")

# Belirli fonksiyonları import etme
from matematik_islemleri import asalmi, kare_alma

print(f"25 asal mı? {asalmi(25)}")
print(f"8'in karesi: {kare_alma(8)}")

# Takma ad ile kullanma
import matematik_islemleri as mat

hesap_makinesi = {
    'toplam': mat.toplama(100, 50),
    'çarpım': mat.carpma(12, 8),
    'kare': mat.kare_alma(15)
}

print("Hesap Makinesi Sonuçları:")
for islem, sonuc in hesap_makinesi.items():
    print(f"{islem}: {sonuc}")
```

---

## 🔧 __name__ ve __main__ Kullanımı

### __name__ Değişkeni

```python
# test_modulu.py
print(f"Bu modülün adı: {__name__}")

def selamla():
    print("Merhaba!")

def test_et():
    print("Test fonksiyonu çalışıyor...")
    selamla()

# Bu blok sadece modül doğrudan çalıştırıldığında çalışır
if __name__ == "__main__":
    print("Bu modül doğrudan çalıştırılıyor!")
    test_et()
else:
    print("Bu modül import edildi!")

# Kullanım:
# 1. Doğrudan çalıştırma: python test_modulu.py
#    Çıktı: Bu modülün adı: __main__
#           Bu modül doğrudan çalıştırılıyor!
#           Test fonksiyonu çalışıyor...
#           Merhaba!

# 2. Import etme: import test_modulu
#    Çıktı: Bu modülün adı: test_modulu
#           Bu modül import edildi!
```

### Gelişmiş __main__ Kullanımı

```python
# gelismis_modül.py
import sys
import argparse

def ana_fonksiyon():
    """Ana program fonksiyonu"""
    print("Ana program çalışıyor...")

def komut_satiri_arayuzu():
    """Komut satırı argümanlarını işler"""
    parser = argparse.ArgumentParser(description='Gelişmiş modül örneği')
    parser.add_argument('--verbose', '-v', action='store_true', 
                       help='Detaylı çıktı')
    parser.add_argument('--dosya', '-f', type=str, 
                       help='İşlenecek dosya adı')
    
    args = parser.parse_args()
    
    if args.verbose:
        print("Detaylı mod aktif")
    
    if args.dosya:
        print(f"İşlenecek dosya: {args.dosya}")
    
    return args

if __name__ == "__main__":
    print("Program başlatılıyor...")
    
    try:
        args = komut_satiri_arayuzu()
        ana_fonksiyon()
        print("Program başarıyla tamamlandı!")
    except KeyboardInterrupt:
        print("\nProgram kullanıcı tarafından durduruldu.")
        sys.exit(1)
    except Exception as e:
        print(f"Hata oluştu: {e}")
        sys.exit(1)
```

---

## 📚 Python Standart Kütüphanesi

### Sık Kullanılan Standart Modüller

```python
# 1. os - İşletim sistemi arayüzü
import os

print(f"Mevcut dizin: {os.getcwd()}")
print(f"İşletim sistemi: {os.name}")
print(f"Çevre değişkenleri: {os.environ.get('PATH', 'Bulunamadı')}")

# Dizin işlemleri
if not os.path.exists("test_klasor"):
    os.mkdir("test_klasor")
    print("Test klasörü oluşturuldu")

# 2. sys - Sistem parametreleri ve fonksiyonları
import sys

print(f"Python versiyonu: {sys.version}")
print(f"Platform: {sys.platform}")
print(f"Modül arama yolları: {sys.path[:3]}...")  # İlk 3 yol

# 3. datetime - Tarih ve zaman işlemleri
import datetime

simdi = datetime.datetime.now()
print(f"Şu anki zaman: {simdi}")
print(f"Formatlanmış: {simdi.strftime('%d/%m/%Y %H:%M:%S')}")

# Tarih hesaplamaları
yarın = simdi + datetime.timedelta(days=1)
print(f"Yarın: {yarın.strftime('%d/%m/%Y')}")

# 4. random - Rastgele sayı üretimi
import random

print(f"Rastgele sayı (0-1): {random.random()}")
print(f"Rastgele tamsayı (1-100): {random.randint(1, 100)}")

liste = ['elma', 'armut', 'muz', 'çilek']
print(f"Rastgele seçim: {random.choice(liste)}")

# Listeyi karıştır
random.shuffle(liste)
print(f"Karıştırılmış liste: {liste}")

# 5. collections - Özel veri yapıları
from collections import Counter, defaultdict, namedtuple

# Counter - Sayma işlemleri
metin = "merhaba dünya"
harf_sayaci = Counter(metin)
print(f"Harf frekansları: {harf_sayaci}")

# defaultdict - Varsayılan değerli sözlük
sayılar = defaultdict(list)
sayılar['çift'].extend([2, 4, 6, 8])
sayılar['tek'].extend([1, 3, 5, 7])
print(f"Sayılar: {dict(sayılar)}")

# namedtuple - İsimli tuple
Kişi = namedtuple('Kişi', ['ad', 'yaş', 'şehir'])
kişi1 = Kişi('Ali', 25, 'İstanbul')
print(f"Kişi bilgileri: {kişi1.ad}, {kişi1.yaş}, {kişi1.şehir}")
```

### JSON Modülü Detaylı

```python
import json

# JSON işlemleri
veri = {
    'ad': 'Python Kursu',
    'süre': 40,
    'konular': ['değişkenler', 'fonksiyonlar', 'modüller'],
    'aktif': True,
    'fiyat': None
}

# JSON string'e çevirme
json_string = json.dumps(veri, ensure_ascii=False, indent=2)
print("JSON formatı:")
print(json_string)

# JSON string'den Python objesine çevirme
geri_çevrilen = json.loads(json_string)
print(f"\nGeri çevrilen tip: {type(geri_çevrilen)}")
print(f"Kurs adı: {geri_çevrilen['ad']}")

# Dosyaya JSON yazma
with open('kurs_bilgileri.json', 'w', encoding='utf-8') as dosya:
    json.dump(veri, dosya, ensure_ascii=False, indent=2)

# Dosyadan JSON okuma
with open('kurs_bilgileri.json', 'r', encoding='utf-8') as dosya:
    okunan_veri = json.load(dosya)
    print(f"Dosyadan okunan: {okunan_veri}")
```

### Re Modülü (Regular Expressions)

```python
import re

# Temel regex işlemleri
metin = "Telefon: 0532-123-4567, Email: test@example.com"

# Telefon numarası bulma
telefon_pattern = r'\d{4}-\d{3}-\d{4}'
telefon = re.search(telefon_pattern, metin)
if telefon:
    print(f"Bulunan telefon: {telefon.group()}")

# Email bulma
email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
email = re.search(email_pattern, metin)
if email:
    print(f"Bulunan email: {email.group()}")

# Tüm sayıları bulma
sayılar = re.findall(r'\d+', metin)
print(f"Bulunan sayılar: {sayılar}")

# Metin değiştirme
yeni_metin = re.sub(r'\d{4}-\d{3}-\d{4}', '***-***-****', metin)
print(f"Gizlenmiş telefon: {yeni_metin}")
```

---

## 🔍 Modül Arama Yolu

### sys.path Yönetimi

```python
import sys
import os

def modul_arama_yollarini_goster():
    """Modül arama yollarını gösterir"""
    print("Python modül arama yolları:")
    for i, yol in enumerate(sys.path, 1):
        print(f"{i}. {yol}")

def yeni_yol_ekle(yol):
    """Yeni modül arama yolu ekler"""
    if yol not in sys.path:
        sys.path.append(yol)
        print(f"Yeni yol eklendi: {yol}")
    else:
        print("Bu yol zaten mevcut!")

def yol_kaldir(yol):
    """Modül arama yolundan bir yolu kaldırır"""
    if yol in sys.path:
        sys.path.remove(yol)
        print(f"Yol kaldırıldı: {yol}")
    else:
        print("Bu yol mevcut değil!")

# Kullanım
print("=== Modül Arama Yolu Yönetimi ===")
modul_arama_yollarini_goster()

# Yeni yol ekleme (örnek)
yeni_klasor = os.path.join(os.getcwd(), "my_modules")
if os.path.exists(yeni_klasor):
    yeni_yol_ekle(yeni_klasor)
```

### Modül Yeniden Yükleme

```python
import importlib

# Modül yeniden yükleme (geliştirme sırasında kullanışlı)
def modul_yeniden_yukle(modul_adi):
    """Bir modülü yeniden yükler"""
    try:
        if modul_adi in sys.modules:
            importlib.reload(sys.modules[modul_adi])
            print(f"{modul_adi} modülü yeniden yüklendi")
        else:
            print(f"{modul_adi} modülü henüz yüklenmemiş")
    except Exception as e:
        print(f"Yeniden yükleme hatası: {e}")

# Örnek kullanım
import matematik_islemleri
modul_yeniden_yukle('matematik_islemleri')
```

---

## ✅ Özet ve Kontrol Listesi

### Öğrendikleriniz
- [x] Modül kavramı ve kullanımı
- [x] Import yöntemleri (import, from...import, as)
- [x] Kendi modüllerinizi oluşturma
- [x] Paket (package) yapısı ve __init__.py
- [x] __name__ ve __main__ kullanımı
- [x] Python standart kütüphanesi
- [x] Modül arama yolu (sys.path)
- [x] Best practices ve optimizasyon
- [x] Pratik örnek: Araç yönetim sistemi

### Sırada Ne Var?
- Web scraping ve HTTP istekleri
- API geliştirme ve tüketme
- Veritabanı işlemleri
- GUI programlama
- Test yazma ve debugging

### Pratik Yapın!
Modülleri pekiştirmek için:
1. Kendi matematik modülünüzü oluşturun
2. Bir paket yapısı kurun
3. Standart kütüphane modüllerini keşfedin
4. Import performansını test edin
5. Gerçek bir proje için modül yapısı tasarlayın

### Key Takeaways
- Modüller kodunuzu organize eder ve yeniden kullanılabilir kılar
- Import yöntemlerini doğru kullanmak namespace kirliliğini önler
- __name__ == "__main__" ile test kodlarınızı ayrıştırın
- Paket yapısı büyük projelerde çok önemlidir
- Standart kütüphane çok güçlüdür, önce onu keşfedin

---

**🎯 Sonraki ders: Web Scraping ve HTTP İstekleri**