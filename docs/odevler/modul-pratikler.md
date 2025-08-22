# Python Modül Alıştırmaları - Detaylı Çözümler

---

## 📚 Standart Modül Alıştırmaları

### Alıştırma 1: Tarih ve Zaman Hesaplayıcısı (datetime)

#### 🎯 Görev
datetime modülünü kullanarak tarih ve zaman hesaplamaları yapın.

#### 💻 Kod
```python
import datetime

# 1. Bugünün tarihini yazdırın
bugun = datetime.date.today()
print(f"Bugünün tarihi: {bugun}")

# 2. 100 gün sonrasını hesaplayın
yuz_gun_sonra = bugun + datetime.timedelta(days=100)
print(f"100 gün sonra: {yuz_gun_sonra}")

# 3. Doğum tarihinizden bugüne kaç gün geçtiğini bulun
dogum_tarihi = datetime.date(1995, 5, 15)  # Örnek doğum tarihi
gecen_gun = (bugun - dogum_tarihi).days
print(f"Doğumunuzdan bu yana {gecen_gun} gün geçti")

# 4. Haftanın hangi günü olduğunu öğrenin
gun_isimleri = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
bugunku_gun = gun_isimleri[bugun.weekday()]
print(f"Bugün {bugunku_gun}")

# 5. Tarih formatını "15 Ocak 2024" şeklinde gösterin
ay_isimleri = ['', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
               'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
formatli_tarih = f"{bugun.day} {ay_isimleri[bugun.month]} {bugun.year}"
print(f"Formatlanmış tarih: {formatli_tarih}")

# Bonus: Şu anki saat
simdi = datetime.datetime.now()
print(f"Şu anki saat: {simdi.strftime('%H:%M:%S')}")
```

#### 🖥️ Örnek Çıktı
```
Bugünün tarihi: 2024-08-22
100 gün sonra: 2024-11-30
Doğumunuzdan bu yana 10,691 gün geçti
Bugün Perşembe
Formatlanmış tarih: 22 Ağustos 2024
Şu anki saat: 14:30:25
```

---

### Alıştırma 2: Dosya ve Klasör Keşifçisi (os)

#### 🎯 Görev
os modülünü kullanarak dosya ve klasör işlemleri yapın.

#### 💻 Kod
```python
import os

print("=== DOSYA VE KLASÖR KEŞİFÇİSİ ===\n")

# 1. Mevcut klasördeki tüm dosyaları listeleyin
print("1. Mevcut klasördeki tüm dosyalar:")
mevcut_klasor = os.getcwd()
print(f"Mevcut klasör: {mevcut_klasor}")

tum_dosyalar = os.listdir('.')
for dosya in tum_dosyalar:
    if os.path.isfile(dosya):
        print(f"  📄 {dosya}")
    else:
        print(f"  📁 {dosya}/")

# 2. Sadece .py uzantılı dosyaları bulun
print("\n2. Python dosyaları (.py):")
python_dosyalari = [f for f in tum_dosyalar if f.endswith('.py')]
for py_dosya in python_dosyalari:
    print(f"  🐍 {py_dosya}")

if not python_dosyalari:
    print("  Hiç Python dosyası bulunamadı.")

# 3. "test_klasor" adında bir klasör oluşturun
print("\n3. Test klasörü oluşturuluyor...")
test_klasor = "test_klasor"
if not os.path.exists(test_klasor):
    os.mkdir(test_klasor)
    print(f"  ✅ '{test_klasor}' klasörü oluşturuldu.")
else:
    print(f"  ⚠️ '{test_klasor}' klasörü zaten mevcut.")

# 4. Bu klasörde "deneme.txt" dosyası oluşturun
print("\n4. Test dosyası oluşturuluyor...")
test_dosya_yolu = os.path.join(test_klasor, "deneme.txt")
with open(test_dosya_yolu, 'w', encoding='utf-8') as dosya:
    dosya.write("Bu bir test dosyasıdır.\nPython os modülü ile oluşturuldu.")
print(f"  ✅ '{test_dosya_yolu}' dosyası oluşturuldu.")

# 5. Dosya boyutlarını gösterin
print("\n5. Dosya boyutları:")
for dosya in tum_dosyalar:
    if os.path.isfile(dosya):
        boyut = os.path.getsize(dosya)
        if boyut < 1024:
            boyut_str = f"{boyut} B"
        elif boyut < 1024 * 1024:
            boyut_str = f"{boyut/1024:.1f} KB"
        else:
            boyut_str = f"{boyut/(1024*1024):.1f} MB"
        print(f"  📄 {dosya}: {boyut_str}")

# Bonus: Sistem bilgileri
print(f"\n📊 Sistem Bilgileri:")
print(f"  İşletim Sistemi: {os.name}")
print(f"  Kullanıcı: {os.environ.get('USERNAME', 'Bilinmiyor')}")
```

#### 🖥️ Örnek Çıktı
```
=== DOSYA VE KLASÖR KEŞİFÇİSİ ===

1. Mevcut klasördeki tüm dosyalar:
Mevcut klasör: C:\Users\Python\Projects
  📄 main.py
  📄 test.txt
  📁 __pycache__/
  📁 docs/

2. Python dosyaları (.py):
  🐍 main.py

3. Test klasörü oluşturuluyor...
  ✅ 'test_klasor' klasörü oluşturuldu.

4. Test dosyası oluşturuluyor...
  ✅ 'test_klasor\deneme.txt' dosyası oluşturuldu.

5. Dosya boyutları:
  📄 main.py: 1.2 KB
  📄 test.txt: 45 B

📊 Sistem Bilgileri:
  İşletim Sistemi: nt
  Kullanıcı: PythonUser
```

---

### Alıştırma 3: Rastgele Şifre Üreticisi (random + string)

#### 🎯 Görev
random ve string modüllerini kullanarak güvenli şifre üreticisi yapın.

#### 💻 Kod
```python
import random
import string

def sifre_uret(uzunluk=8, buyuk_harf=True, kucuk_harf=True, rakam=True, ozel_karakter=False):
    """Rastgele şifre üretir"""
    karakterler = ""
    
    if buyuk_harf:
        karakterler += string.ascii_uppercase
    if kucuk_harf:
        karakterler += string.ascii_lowercase
    if rakam:
        karakterler += string.digits
    if ozel_karakter:
        karakterler += "!@#$%^&*"
    
    if not karakterler:
        return "Hata: En az bir karakter tipi seçilmeli!"
    
    sifre = ''.join(random.choice(karakterler) for _ in range(uzunluk))
    return sifre

def sifre_gucunu_kontrol_et(sifre):
    """Şifre gücünü kontrol eder"""
    puan = 0
    kriterler = []
    
    if len(sifre) >= 8:
        puan += 1
        kriterler.append("✅ 8+ karakter")
    else:
        kriterler.append("❌ 8+ karakter")
    
    if any(c.isupper() for c in sifre):
        puan += 1
        kriterler.append("✅ Büyük harf")
    else:
        kriterler.append("❌ Büyük harf")
    
    if any(c.islower() for c in sifre):
        puan += 1
        kriterler.append("✅ Küçük harf")
    else:
        kriterler.append("❌ Küçük harf")
    
    if any(c.isdigit() for c in sifre):
        puan += 1
        kriterler.append("✅ Rakam")
    else:
        kriterler.append("❌ Rakam")
    
    if any(c in "!@#$%^&*" for c in sifre):
        puan += 1
        kriterler.append("✅ Özel karakter")
    else:
        kriterler.append("❌ Özel karakter")
    
    if puan >= 4:
        guc = "🔒 Güçlü"
    elif puan >= 3:
        guc = "🔐 Orta"
    else:
        guc = "🔓 Zayıf"
    
    return guc, kriterler

print("=== RASTGELE ŞİFRE ÜRETİCİSİ ===\n")

# 1. 8 haneli rastgele şifre üretin
print("1. Basit 8 haneli şifre:")
basit_sifre = sifre_uret(8)
print(f"   Şifre: {basit_sifre}")

# 2. Şifreyi büyük harf, küçük harf ve rakam içerecek şekilde yapın
print("\n2. Karışık 12 haneli şifre:")
karısık_sifre = sifre_uret(12, buyuk_harf=True, kucuk_harf=True, rakam=True)
print(f"   Şifre: {karısık_sifre}")

# 3. 5 farklı şifre üretip listeleyin
print("\n3. 5 farklı şifre:")
for i in range(1, 6):
    sifre = sifre_uret(10, ozel_karakter=True)
    print(f"   {i}. {sifre}")

# 4. Kullanıcıdan şifre uzunluğu alın
print("\n4. Özel uzunluk şifresi:")
try:
    uzunluk = int(input("Şifre uzunluğu (6-20): "))
    if 6 <= uzunluk <= 20:
        ozel_sifre = sifre_uret(uzunluk, ozel_karakter=True)
        print(f"   Özel şifreniz: {ozel_sifre}")
    else:
        print("   Geçersiz uzunluk! 6-20 arası olmalı.")
except ValueError:
    print("   Sayı girmelisiniz!")
    uzunluk = 10  # Varsayılan
    ozel_sifre = sifre_uret(uzunluk)
    print(f"   Varsayılan şifre: {ozel_sifre}")

# 5. Şifre güvenlik seviyesini kontrol edin
print("\n5. Şifre güvenlik analizi:")
test_sifreler = [
    "12345678",           # Zayıf
    "Password123",        # Orta  
    "MyP@ssw0rd2024!",   # Güçlü
    basit_sifre,         # Test şifresi
]

for sifre in test_sifreler:
    guc, kriterler = sifre_gucunu_kontrol_et(sifre)
    print(f"\n   Şifre: {sifre}")
    print(f"   Güç: {guc}")
    for kriter in kriterler:
        print(f"     {kriter}")
```

#### 🖥️ Örnek Çıktı
```
=== RASTGELE ŞİFRE ÜRETİCİSİ ===

1. Basit 8 haneli şifre:
   Şifre: K8mPq3Rx

2. Karışık 12 haneli şifre:
   Şifre: Np7KmQ2vBx9L

3. 5 farklı şifre:
   1. M@k7P$nR2x
   2. Q!9vBz3K#t
   3. X$7mNp@2Lq
   4. R&5kTy!9Bw
   5. Z#3qMx@8Hj

4. Özel uzunluk şifresi:
Şifre uzunluğu (6-20): 15
   Özel şifreniz: K#9mBx@7PqR$3Nz

5. Şifre güvenlik analizi:

   Şifre: 12345678
   Güç: 🔓 Zayıf
     ✅ 8+ karakter
     ❌ Büyük harf
     ❌ Küçük harf
     ✅ Rakam
     ❌ Özel karakter

   Şifre: Password123
   Güç: 🔐 Orta
     ✅ 8+ karakter
     ✅ Büyük harf
     ✅ Küçük harf
     ✅ Rakam
     ❌ Özel karakter

   Şifre: MyP@ssw0rd2024!
   Güç: 🔒 Güçlü
     ✅ 8+ karakter
     ✅ Büyük harf
     ✅ Küçük harf
     ✅ Rakam
     ✅ Özel karakter

   Şifre: K8mPq3Rx
   Güç: 🔒 Güçlü
     ✅ 8+ karakter
     ✅ Büyük harf
     ✅ Küçük harf
     ✅ Rakam
     ❌ Özel karakter
```

---

### Alıştırma 4: JSON Veri İşleyicisi (json)

#### 🎯 Görev
json modülünü kullanarak öğrenci verilerini yönetin.

#### 💻 Kod
```python
import json
import os

# Öğrenci verilerini tanımla
ogrenciler = [
    {"ad": "Ali Yılmaz", "yas": 20, "notlar": [85, 92, 78, 90, 88]},
    {"ad": "Ayşe Kaya", "yas": 19, "notlar": [95, 89, 92, 87, 94]},
    {"ad": "Mehmet Özkan", "yas": 21, "notlar": [72, 85, 80, 77, 82]},
    {"ad": "Fatma Demir", "yas": 20, "notlar": [88, 91, 85, 93, 89]},
    {"ad": "Ahmet Şen", "yas": 22, "notlar": [79, 83, 86, 81, 84]}
]

dosya_adi = "ogrenci_verileri.json"

print("=== JSON VERİ İŞLEYİCİSİ ===\n")

# 1. Öğrenci bilgilerini JSON formatında kaydedin
print("1. Öğrenci verileri JSON dosyasına kaydediliyor...")
try:
    with open(dosya_adi, 'w', encoding='utf-8') as dosya:
        json.dump(ogrenciler, dosya, ensure_ascii=False, indent=2)
    print(f"   ✅ Veriler '{dosya_adi}' dosyasına kaydedildi.")
except Exception as e:
    print(f"   ❌ Hata: {e}")

# 2. JSON dosyasından verileri okuyun
print("\n2. JSON dosyasından veriler okunuyor...")
try:
    with open(dosya_adi, 'r', encoding='utf-8') as dosya:
        okunan_ogrenciler = json.load(dosya)
    print(f"   ✅ {len(okunan_ogrenciler)} öğrenci verisi okundu.")
    
    print("\n   Okunan öğrenciler:")
    for i, ogrenci in enumerate(okunan_ogrenciler, 1):
        ortalama = sum(ogrenci['notlar']) / len(ogrenci['notlar'])
        print(f"   {i}. {ogrenci['ad']} (Yaş: {ogrenci['yas']}, Ortalama: {ortalama:.1f})")

except FileNotFoundError:
    print("   ❌ Dosya bulunamadı!")
    okunan_ogrenciler = ogrenciler
except Exception as e:
    print(f"   ❌ Hata: {e}")
    okunan_ogrenciler = ogrenciler

# 3. En yüksek notu bulan öğrenciyi gösterin
print("\n3. En yüksek not analizi:")
en_yuksek_not = 0
en_basarili_ogrenci = None

for ogrenci in okunan_ogrenciler:
    max_not = max(ogrenci['notlar'])
    if max_not > en_yuksek_not:
        en_yuksek_not = max_not
        en_basarili_ogrenci = ogrenci

if en_basarili_ogrenci:
    print(f"   🏆 En yüksek not: {en_yuksek_not}")
    print(f"   👨‍🎓 Öğrenci: {en_basarili_ogrenci['ad']}")
    print(f"   📊 Tüm notları: {en_basarili_ogrenci['notlar']}")

# 4. Tüm öğrencilerin not ortalamasını hesaplayın
print("\n4. Genel ortalama analizi:")
tum_notlar = []
ogrenci_ortalamalari = []

for ogrenci in okunan_ogrenciler:
    ogrenci_ortalama = sum(ogrenci['notlar']) / len(ogrenci['notlar'])
    ogrenci_ortalamalari.append(ogrenci_ortalama)
    tum_notlar.extend(ogrenci['notlar'])

genel_ortalama = sum(tum_notlar) / len(tum_notlar)
en_yuksek_ortalama = max(ogrenci_ortalamalari)
en_dusuk_ortalama = min(ogrenci_ortalamalari)

print(f"   📈 Genel sınıf ortalaması: {genel_ortalama:.2f}")
print(f"   ⬆️ En yüksek öğrenci ortalaması: {en_yuksek_ortalama:.2f}")
print(f"   ⬇️ En düşük öğrenci ortalaması: {en_dusuk_ortalama:.2f}")
print(f"   📊 Toplam not sayısı: {len(tum_notlar)}")

# 5. Yeni öğrenci ekleyip dosyayı güncelleyin
print("\n5. Yeni öğrenci ekleniyor...")
yeni_ogrenci = {
    "ad": "Zeynep Arslan", 
    "yas": 19, 
    "notlar": [90, 87, 92, 89, 91]
}

okunan_ogrenciler.append(yeni_ogrenci)

try:
    with open(dosya_adi, 'w', encoding='utf-8') as dosya:
        json.dump(okunan_ogrenciler, dosya, ensure_ascii=False, indent=2)
    
    yeni_ortalama = sum(yeni_ogrenci['notlar']) / len(yeni_ogrenci['notlar'])
    print(f"   ✅ Yeni öğrenci eklendi: {yeni_ogrenci['ad']}")
    print(f"   📊 Ortalaması: {yeni_ortalama:.1f}")
    print(f"   👥 Toplam öğrenci sayısı: {len(okunan_ogrenciler)}")

except Exception as e:
    print(f"   ❌ Güncelleme hatası: {e}")

# Bonus: JSON dosyasının boyutunu göster
if os.path.exists(dosya_adi):
    dosya_boyutu = os.path.getsize(dosya_adi)
    print(f"\n💾 JSON dosya boyutu: {dosya_boyutu} byte")
```

#### 🖥️ Örnek Çıktı
```
=== JSON VERİ İŞLEYİCİSİ ===

1. Öğrenci verileri JSON dosyasına kaydediliyor...
   ✅ Veriler 'ogrenci_verileri.json' dosyasına kaydedildi.

2. JSON dosyasından veriler okunuyor...
   ✅ 5 öğrenci verisi okundu.

   Okunan öğrenciler:
   1. Ali Yılmaz (Yaş: 20, Ortalama: 86.6)
   2. Ayşe Kaya (Yaş: 19, Ortalama: 91.4)
   3. Mehmet Özkan (Yaş: 21, Ortalama: 79.2)
   4. Fatma Demir (Yaş: 20, Ortalama: 89.2)
   5. Ahmet Şen (Yaş: 22, Ortalama: 82.6)

3. En yüksek not analizi:
   🏆 En yüksek not: 95
   👨‍🎓 Öğrenci: Ayşe Kaya
   📊 Tüm notları: [95, 89, 92, 87, 94]

4. Genel ortalama analizi:
   📈 Genel sınıf ortalaması: 85.80
   ⬆️ En yüksek öğrenci ortalaması: 91.40
   ⬇️ En düşük öğrenci ortalaması: 79.20
   📊 Toplam not sayısı: 25

5. Yeni öğrenci ekleniyor...
   ✅ Yeni öğrenci eklendi: Zeynep Arslan
   📊 Ortalaması: 89.8
   👥 Toplam öğrenci sayısı: 6

💾 JSON dosya boyutu: 587 byte
```

---

### Alıştırma 5: Metin Analiz Aracı (re - regex)

#### 🎯 Görev
re (regex) modülünü kullanarak metin analizi yapın.

#### 💻 Kod
```python
import re

# Test metni
test_metni = """
Şirket İletişim Bilgileri:
Email adresleri: info@sirket.com, destek@yardim.org, ceo@firma.net
İkinci email: test.email@example.co.uk, admin@sub.domain.com

Telefon numaraları: 
Mobil: 0532-123-4567, 0555 987 6543
Sabit: (0212) 555-1234, 0312.444.5678

Web siteleri:
https://www.sirket.com
http://yardim.org
https://secure.firma.net/login

Fiyat bilgileri: 1500 TL, 250 EURO, $100, 75.50 TL

ÖNEMLI NOTLAR: Bu bilgiler GİZLİDİR!
ACELE: Projeyi BUGÜN bitiriniz!
UYARI: LÜTFEN dikkat ediniz.

Koordinatlar: 41.0082, 28.9784 (İstanbul)
Saat: 14:30, 09:45, 23:59
"""

print("=== METİN ANALİZ ARACI ===\n")
print(f"Analiz edilen metin uzunluğu: {len(test_metni)} karakter\n")

# 1. Bir metinde e-mail adreslerini bulun
print("1. 📧 E-mail adresleri:")
email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
emailler = re.findall(email_pattern, test_metni)

if emailler:
    for i, email in enumerate(emailler, 1):
        print(f"   {i}. {email}")
    print(f"   📊 Toplam {len(emailler)} e-mail adresi bulundu.")
else:
    print("   ❌ Hiç e-mail adresi bulunamadı.")

# 2. Telefon numaralarını tespit edin
print("\n2. 📞 Telefon numaraları:")
telefon_patterns = [
    r'\b0\d{3}[-.\s]\d{3}[-.\s]\d{4}\b',  # 0532-123-4567 formatı
    r'\b0\d{3}\s\d{3}\s\d{4}\b',          # 0555 987 6543 formatı
    r'\(\d{4}\)\s\d{3}-\d{4}',            # (0212) 555-1234 formatı
]

tum_telefonlar = []
for pattern in telefon_patterns:
    telefonlar = re.findall(pattern, test_metni)
    tum_telefonlar.extend(telefonlar)

if tum_telefonlar:
    for i, telefon in enumerate(tum_telefonlar, 1):
        print(f"   {i}. {telefon}")
    print(f"   📊 Toplam {len(tum_telefonlar)} telefon numarası bulundu.")
else:
    print("   ❌ Hiç telefon numarası bulunamadı.")

# 3. Metin içindeki sayıları sayın
print("\n3. 🔢 Sayılar:")
sayi_pattern = r'\b\d+(?:\.\d+)?\b'
sayilar = re.findall(sayi_pattern, test_metni)

if sayilar:
    print("   Bulunan sayılar:")
    for i, sayi in enumerate(sayilar, 1):
        if '.' in sayi:
            tip = "(ondalık)"
        else:
            tip = "(tam sayı)"
        print(f"   {i}. {sayi} {tip}")
    
    # Sayısal analiz
    tam_sayilar = [int(s) for s in sayilar if '.' not in s]
    ondalik_sayilar = [float(s) for s in sayilar if '.' in s]
    
    print(f"\n   📊 İstatistikler:")
    print(f"   • Toplam sayı: {len(sayilar)}")
    print(f"   • Tam sayı: {len(tam_sayilar)}")
    print(f"   • Ondalık sayı: {len(ondalik_sayilar)}")
    
    if tam_sayilar:
        print(f"   • En büyük tam sayı: {max(tam_sayilar)}")
        print(f"   • En küçük tam sayı: {min(tam_sayilar)}")

# 4. Büyük harfle yazılmış kelimeleri bulun
print("\n4. 🔤 Büyük harfle yazılmış kelimeler:")
buyuk_harf_pattern = r'\b[A-ZÇĞıÖŞÜ]{2,}\b'
buyuk_kelimeler = re.findall(buyuk_harf_pattern, test_metni)

if buyuk_kelimeler:
    # Tekrarları kaldır
    benzersiz_kelimeler = list(set(buyuk_kelimeler))
    for i, kelime in enumerate(benzersiz_kelimeler, 1):
        tekrar_sayisi = buyuk_kelimeler.count(kelime)
        print(f"   {i}. {kelime} ({tekrar_sayisi}x)")
    print(f"   📊 {len(benzersiz_kelimeler)} farklı büyük harf kelime bulundu.")
else:
    print("   ❌ Hiç büyük harfle yazılmış kelime bulunamadı.")

# 5. URL adreslerini çıkarın
print("\n5. 🌐 URL adresleri:")
url_pattern = r'https?://[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:/[A-Za-z0-9._~:/?#[\]@!$&\'()*+,;=-]*)?'