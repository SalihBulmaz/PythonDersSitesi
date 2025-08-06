# Python String Ödevleri - Kolay Seviye

## STRING (METİN) ÖDEVLERİ - KOLAY SEVİYE

### 1. İsim Analiz Sistemi 👤

**Açıklama:** Kullanıcının adını alıp çeşitli analizler yapan bir sistem yazacaksın.

**Görevin:**
- Tam adı al (ad soyad)
- Ad ve soyadı ayır
- Her ikisini de büyük harfle göster
- Toplam karakter sayısını hesapla
- Başharflerini oluştur

**Başlangıç Kodu:**
```python
print("=== İSİM ANALİZ SİSTEMİ ===")
tam_ad = input("Adınızı ve soyadınızı girin: ")

# İsim analizi buraya...
```

**Örnek Çıktı:**
```
=== İSİM ANALİZ SİSTEMİ ===
Adınızı ve soyadınızı girin: ahmet yılmaz

İSİM ANALİZİ:
Tam ad: ahmet yılmaz
Ad: Ahmet
Soyad: Yılmaz
Büyük harflerle: AHMET YILMAZ
Toplam karakter: 12 (boşluklar dahil)
Başharfler: A.Y.
```

**İpucu:** `.split()` ile ayır, `.upper()`, `.title()` metodlarını kullan.

---

### 2. Şifre Güvenlik Kontrol 🔐

**Açıklama:** Kullanıcının girdiği şifrenin güvenli olup olmadığını kontrol eden bir sistem yapacaksın.

**Görevin:**
- Şifre uzunluğunu kontrol et (en az 8 karakter)
- Büyük harf, küçük harf, rakam içeriyor mu kontrol et
- Güvenlik seviyesi belirle
- Öneriler sun

**Başlangıç Kodu:**
```python
print("=== ŞİFRE GÜVENLİK KONTROL ===")
sifre = input("Şifrenizi girin: ")

uzunluk = len(sifre)
buyuk_harf = False
kucuk_harf = False
rakam = False

# Şifre analizi buraya...
for karakter in sifre:
    # Her karakteri kontrol et...
```

**Örnek Çıktı:**
```
=== ŞİFRE GÜVENLİK KONTROL ===
Şifrenizi girin: MyPass123

ŞİFRE ANALİZİ:
Uzunluk: 9 karakter ✅
Büyük harf: Var ✅
Küçük harf: Var ✅
Rakam: Var ✅

Güvenlik Seviyesi: ⭐⭐⭐ GÜÇLÜ
Şifreniz güvenli!
```

**İpucu:** `.isupper()`, `.islower()`, `.isdigit()` metodlarını kullan.

---

### 3. E-mail Adresi İşleyici 📧

**Açıklama:** E-mail adreslerini işleyen ve analiz eden bir program yazacaksın.

**Görevin:**
- E-mail adresini kontrol et (@ ve . içermeli)
- Kullanıcı adı ve domain ayrı
- Domain uzantısını bul
- E-mail tipini belirle (gmail, hotmail, vs.)

**Başlangıç Kodu:**
```python
print("=== E-MAIL ADRESİ İŞLEYİCİ ===")
email = input("E-mail adresinizi girin: ").lower()

# E-mail kontrolü
if "@" in email and "." in email:
    # E-mail analizi buraya...
    pass
else:
    print("❌ Geçersiz e-mail formatı!")
```

**Örnek Çıktı:**
```
=== E-MAIL ADRESİ İŞLEYİCİ ===
E-mail adresinizi girin: ahmet.yilmaz@gmail.com

E-MAIL ANALİZİ:
✅ Geçerli e-mail formatı
Kullanıcı adı: ahmet.yilmaz
Domain: gmail.com
Uzantı: .com
Tip: Gmail Hesabı 📮

Domain analizi:
- Popüler e-mail sağlayıcısı
- Google servislerini destekler
```

**İpucu:** `.split('@')` ile kullanıcı adı ve domain'i ayır, `.endswith()` ile uzantı kontrol et.

---

### 4. Metin Temizleyici 🧹

**Açıklama:** Kullanıcının girdiği metni temizleyen ve düzenleyen bir program yazacaksın.

**Görevin:**
- Başta ve sonda boşlukları temizle
- Birden fazla boşluğu teke düşür
- Kelime sayısını hesapla
- İlk harfi büyük yap

**Başlangıç Kodu:**
```python
print("=== METİN TEMİZLEYİCİ ===")
metin = input("Metninizi girin: ")

print("ORJİNAL METİN:")
print(f"'{metin}'")

# Metin temizleme işlemleri buraya...
```

**Örnek Çıktı:**
```
=== METİN TEMİZLEYİCİ ===
Metninizi girin:    merhaba  dünya   nasıl    gidiyor     

ORJİNAL METİN:
'    merhaba  dünya   nasıl    gidiyor     '

TEMİZLENMİŞ METİN:
'Merhaba dünya nasıl gidiyor'

ANALİZ:
Kelime sayısı: 4
Karakter sayısı: 27 (temizlenmeden önce)
Karakter sayısı: 27 (temizlendikten sonra)
İlk kelime: Merhaba
Son kelime: gidiyor
```

**İpucu:** `.strip()`, `.split()`, `.join()` metodlarını kullan.

---

### 5. Kelime Oyunu Yapıcı 🎯

**Açıklama:** Kelimelerle oyun oynatan bir program yazacaksın.

**Görevin:**
- Kullanıcıdan kelime al
- Kelimeyi ters çevir
- Sesli harfleri say
- Kelimeyi şifrele (her harfi 1 kaydır)

**Başlangıç Kodu:**
```python
print("=== KELİME OYUNU YAPICI ===")
kelime = input("Bir kelime girin: ").lower()

sesli_harfler = "aeiouäöü"
sesli_sayisi = 0

# Kelime oyunları buraya...
```

**Örnek Çıktı:**
```
=== KELİME OYUNU YAPICI ===
Bir kelime girin: Python

KELİME OYUNLARI:
Orijinal kelime: Python
Ters çevrilmiş: nohtyP
Sesli harf sayısı: 1 (y, o)
Şifrelenmiş: Qzuipo (her harf 1 kaydırıldı)

EKSTRA OYUNLAR:
Palindrom mu?: Hayır
Kelime uzunluğu: 6 karakter
İlk ve son harf: P-n
```

**İpucu:** `ord()` ve `chr()` fonksiyonları ile ASCII değerleri kullan.

---

### 6. Telefon Numarası Formatlayıcı 📞

**Açıklama:** Telefon numaralarını düzenleyen ve formatlayan bir sistem yapacaksın.

**Görevin:**
- Telefon numarasını al ve temizle
- Sadece rakamları bırak
- Türkiye formatına çevir
- Geçerlilik kontrol et

**Başlangıç Kodu:**
```python
print("=== TELEFON NUMARASI FORMATLAYICI ===")
telefon = input("Telefon numaranızı girin: ")

# Sadece rakamları al
temiz_telefon = ""
for karakter in telefon:
    if karakter.isdigit():
        temiz_telefon += karakter

# Formatla...
```

**Örnek Çıktı:**
```
=== TELEFON NUMARASI FORMATLAYICI ===
Telefon numaranızı girin: +90 (532) 123-45-67

ORIJINAL: +90 (532) 123-45-67
TEMIZLENMIŞ: 905321234567

FORMATLAR:
🇹🇷 Türkiye: +90 532 123 45 67
📱 Kısa format: 0532 123 45 67  
📞 Standart: (0532) 123-45-67

KONTROL:
✅ Geçerli Türkiye numarası
📱 Vodafone operatörü
```

**İpucu:** `.isdigit()` ile rakam kontrolü yap, string slicing ile parçala.

---

### 7. Metin İstatistik Hesaplayıcı 📊

**Açıklama:** Verilen metnin detaylı istatistiklerini hesaplayan bir program yazacaksın.

**Görevin:**
- Kelime, cümle, paragraf sayısını hesapla
- En uzun ve en kısa kelimeyi bul
- Harf dağılımını göster
- Okuma süresini tahmin et

**Başlangıç Kodu:**
```python
print("=== METİN İSTATİSTİK HESAPLAYICI ===")
metin = input("Metninizi girin: ")

kelimeler = metin.split()
kelime_sayisi = len(kelimeler)

# İstatistik hesaplamaları buraya...
```

**Örnek Çıktı:**
```
=== METİN İSTATİSTİK HESAPLAYICI ===
Metninizi girin: Merhaba! Nasıl gidiyor? Ben iyiyim. Sen nasılsın?

METİN İSTATİSTİKLERİ:
📝 Toplam karakter: 48
📝 Boşluksuz karakter: 40
📝 Kelime sayısı: 7
📝 Cümle sayısı: 4
📝 Ortalama kelime uzunluğu: 5.7

KELİME ANALİZİ:
📏 En uzun kelime: "nasılsın" (8 harf)
📏 En kısa kelime: "Ben" (3 harf)

⏱️ Tahmini okuma süresi: 2.1 saniye
```

**İpucu:** `.count('.')` ile cümle sayısını hesapla, ortalama okuma hızını 200 kelime/dakika kabul et.

---

### 8. Kullanıcı Adı Oluşturucu 🎲

**Açıklama:** Ad ve soyaddan otomatik kullanıcı adı önerileri oluşturan bir program yazacaksın.

**Görevin:**
- Ad ve soyadı al
- Farklı kombinasyonlar oluştur
- Rastgele sayılar ekle
- Kullanılabilirlik kontrol simülasyonu yap

**Başlangıç Kodu:**
```python
import random

print("=== KULLANICI ADI OLUŞTURUCU ===")
ad = input("Adınızı girin: ").lower()
soyad = input("Soyadınızı girin: ").lower()

# Kullanıcı adı önerileri
oneriler = []

# Farklı kombinasyonlar oluştur...
```

**Örnek Çıktı:**
```
=== KULLANICI ADI OLUŞTURUCU ===
Adınızı girin: Ahmet
Soyadınızı girin: Yılmaz

KULLANICI ADI ÖNERİLERİ:
1. ahmetyilmaz ✅ Kullanılabilir
2. a.yilmaz ✅ Kullanılabilir  
3. ahmet_yilmaz ❌ Alınmış
4. yilmaz.ahmet ✅ Kullanılabilir
5. ahmet123 ✅ Kullanılabilir
6. ayilmaz87 ✅ Kullanılabilir

EN POPÜLER ÖNERİ: ahmet_yilmaz_2023
```

**İpucu:** String birleştirme ve `random.randint()` kullan, simülasyon için rastgele "alınmış" durumu oluştur.

---

### 9. Sosyal Medya Hashtag Analiz 📱

**Açıklama:** Sosyal medya gönderilerindeki hashtag'leri analiz eden bir program yazacaksın.

**Görevin:**
- Metinden hashtag'leri çıkar (#kelime)
- Hashtag sayısını hesapla
- En uzun hashtag'i bul
- Hashtag'leri alfabetik sırala

**Başlangıç Kodu:**
```python
print("=== SOSYAL MEDYA HASHTAG ANALİZ ===")
gonderi = input("Sosyal medya gönderinizi yazın: ")

kelimeler = gonderi.split()
hashtagler = []

# Hashtag'leri bul
for kelime in kelimeler:
    if kelime.startswith('#'):
        # Hashtag işleme...
```

**Örnek Çıktı:**
```
=== SOSYAL MEDYA HASHTAG ANALİZ ===
Sosyal medya gönderinizi yazın: Bugün harika bir gün! #mutlu #güneşli #istanbul #kahve #kitap

GÖNDERİ ANALİZİ:
📝 Toplam kelime: 9
📝 Hashtag sayısı: 5
📝 Hashtag oranı: %55.6

BULUNAN HASHTAG'LER:
#mutlu
#güneşli  
#istanbul
#kahve
#kitap

ANALİZ:
📏 En uzun hashtag: #güneşli (9 karakter)
📏 En kısa hashtag: #kahve (6 karakter)
🔤 Alfabetik sıra: #güneşli, #istanbul, #kahve, #kitap, #mutlu
```

**İpucu:** `.startswith('#')` ile hashtag kontrolü yap, `.sort()` ile sırala.

---

### 10. Basit Çevirmen 🌍

**Açıklama:** Basit kelime çevirisi yapan bir program yazacaksın.

**Görevin:**
- Türkçe-İngilizce kelime sözlüğü oluştur
- Kullanıcıdan kelime al
- Çeviriyi göster
- Kelime bulunamazsa benzer kelime öner

**Başlangıç Kodu:**
```python
print("=== BASİT ÇEVİRMEN (TR-EN) ===")

# Sözlük oluştur
sozluk = {
    "merhaba": "hello",
    "dünya": "world", 
    "kitap": "book",
    "ev": "house",
    "araba": "car",
    "su": "water",
    "yemek": "food",
    "okul": "school"
}

kelime = input("Çevirmek istediğiniz kelimeyi girin: ").lower()

# Çeviri işlemi...
```

**Örnek Çıktı:**
```
=== BASİT ÇEVİRMEN (TR-EN) ===
Çevirmek istediğiniz kelimeyi girin: kitap

ÇEVİRİ SONUCU:
🇹🇷 Türkçe: kitap
🇺🇸 İngilizce: book

SÖZLÜK BİLGİSİ:
📚 Toplam kelime: 8
🔍 Kelime bulundu: ✅
📖 Örnek cümle: "I have a book" (Bir kitabım var)
```

**Böyle bir çeviri bulunamadığında:**
```
❌ "bilgisayar" kelimesi sözlükte bulunamadı.

BENZER KELİMELER:
- kitap (book)
- araba (car)  
- okul (school)
```

**İpucu:** Dictionary kullan, `.keys()` ile benzer kelime arama simülasyonu yap.

---