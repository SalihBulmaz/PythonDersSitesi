# Python String İşlemleri - Detaylı Rehber

## Giriş

Bu derste Python'da **string** (metin) veri tipini detaylı olarak öğreneceğiz. Stringler, programlamada en çok kullanılan veri tiplerinden biridir ve Python'da çok güçlü metodlara sahiptir. **Index mantığını** iyice anlayarak, en çok kullanılan string metodlarını öğreneceğiz.

## String Nedir?

String, karakterlerden oluşan sıralı (sequence) bir veri yapısıdır. Python'da stringler **immutable** (değiştirilemez) veri tipleridir.

```python
# String oluşturma yöntemleri
metin1 = "Merhaba Dünya"
metin2 = 'Python Programlama'
metin3 = """Çok satırlı
string örneği"""
metin4 = str(123)  # Sayıyı string'e çevirme

print(f"metin1: {metin1}")
print(f"metin2: {metin2}")
print(f"metin3: {metin3}")
print(f"metin4: {metin4}")
print(f"metin4 tipi: {type(metin4)}")  # <class 'str'>
```

## Index Mantığı - Temel Kavram

### Index Nedir?

Index, string içindeki karakterlerin **pozisyon numarası**dır. Python'da indexleme **0'dan başlar**.

```python
metin = "Python"
# Index:  012345

print(metin[0])  # 'P' (ilk karakter)
print(metin[1])  # 'y'
print(metin[2])  # 't'
print(metin[3])  # 'h'
print(metin[4])  # 'o'
print(metin[5])  # 'n' (son karakter)
```

### Negatif Index

Python'da **negatif index** kullanarak sondan başlayarak karakterlere erişebiliriz:

```python
metin = "Python"
# Pozitif index: 0  1  2  3  4  5
# Negatif index: -6 -5 -4 -3 -2 -1

print(metin[-1])  # 'n' (son karakter)
print(metin[-2])  # 'o'
print(metin[-3])  # 'h'
print(metin[-4])  # 't'
print(metin[-5])  # 'y'
print(metin[-6])  # 'P' (ilk karakter)
```

### Index Hatası

Var olmayan bir indexe erişmeye çalışırsak **IndexError** alırız:

```python
metin = "Python"
# print(metin[6])  # IndexError: string index out of range
# print(metin[-7]) # IndexError: string index out of range

# Güvenli erişim için kontrol
if len(metin) > 6:
    print(metin[6])
else:
    print("Bu index mevcut değil!")
```

### String Uzunluğu

`len()` fonksiyonu ile string'in uzunluğunu öğrenebiliriz:

```python
metin = "Python Programlama"
uzunluk = len(metin)
print(f"'{metin}' string'inin uzunluğu: {uzunluk}")

# Boş string
bos_string = ""
print(f"Boş string uzunluğu: {len(bos_string)}")  # 0
```

## String Slicing (Dilimleme)

Slicing, string'in belirli bir kısmını almamızı sağlar. Format: `string[başlangıç:bitiş:adım]`

### Temel Slicing

```python
metin = "Python Programlama"

# Temel slicing
print(metin[0:6])      # "Python" (0'dan 6'ya kadar, 6 dahil değil)
print(metin[7:18])     # "Programlama"
print(metin[:6])       # "Python" (baştan 6'ya kadar)
print(metin[7:])       # "Programlama" (7'den sona kadar)
print(metin[:])        # "Python Programlama" (tamamı)

# Tek karakter alma
print(metin[0])        # "P"
print(metin[1])        # "y"
```

### Negatif Index ile Slicing

```python
metin = "Python Programlama"

# Negatif index ile slicing
print(metin[-11:])     # "Programlama" (sondan 11 karakter)
print(metin[:-11])     # "Python " (sondan 11 karakter hariç)
print(metin[-18:-12])  # "Python" (sondan 18'den 12'ye kadar)
print(metin[-6:])      # "Python" (sondan 6 karakter)
```

### Adım (Step) Kullanımı

```python
metin = "Python Programlama"

# Adım kullanımı
print(metin[::2])      # "Pto rgamlaa" (2'şer atlayarak)
print(metin[1::2])     # "yhnPorma" (1'den başlayarak 2'şer atlayarak)
print(metin[::3])      # "Ph rgaa" (3'er atlayarak)
print(metin[::4])      # "P rga" (4'er atlayarak)

# Negatif adım (tersten)
print(metin[::-1])     # "amalmargoP nohtyP" (tersten)
print(metin[::-2])     # "aalgro nhP" (tersten 2'şer atlayarak)
```

### Pratik Slicing Örnekleri

```python
metin = "Python Programlama Dili"

# İlk kelimeyi al
ilk_kelime = metin[:6]
print(f"İlk kelime: {ilk_kelime}")  # Python

# Son kelimeyi al
son_kelime = metin[-4:]
print(f"Son kelime: {son_kelime}")  # Dili

# Ortadaki kelimeyi al
orta_kelime = metin[7:18]
print(f"Orta kelime: {orta_kelime}")  # Programlama

# Her kelimenin ilk harfini al
ilk_harfler = metin[0] + metin[7] + metin[19]
print(f"İlk harfler: {ilk_harfler}")  # PPD
```

## En Çok Kullanılan String Metodları

### 1. Büyük/Küçük Harf Dönüşümleri

```python
metin = "Python Programlama"

print(metin.upper())        # "PYTHON PROGRAMLAMA"
print(metin.lower())        # "python programlama"
print(metin.title())        # "Python Programlama"
print(metin.capitalize())   # "Python programlama"
print(metin.swapcase())     # "pYTHON pROGRAMLAMA"

# Pratik örnek
isim = "ali veli"
buyuk_isim = isim.title()
print(buyuk_isim)  # "Ali Veli"
```

### 2. Arama Metodları

#### find() ve index()

```python
metin = "Python programlama dili çok güçlüdür"

# find() - karakter/kelime arama (bulamazsa -1 döner)
print(metin.find("programlama"))    # 7
print(metin.find("Java"))           # -1 (bulunamadı)
print(metin.find("a", 10))          # 10'dan sonra "a" ara
print(metin.find("a", 10, 20))      # 10-20 arasında "a" ara

# index() - karakter/kelime arama (bulamazsa hata verir)
print(metin.index("programlama"))   # 7
# print(metin.index("Java"))        # ValueError

# Güvenli arama
def guvenli_ara(metin, aranan):
    pozisyon = metin.find(aranan)
    if pozisyon != -1:
        return f"'{aranan}' {pozisyon}. pozisyonda bulundu"
    else:
        return f"'{aranan}' bulunamadı"

print(guvenli_ara(metin, "programlama"))
print(guvenli_ara(metin, "Java"))
```

#### count() - Sayma

```python
metin = "Python programlama dili çok güçlüdür"

# count() - kaç kez geçtiğini sayma
print(metin.count("a"))             # 3
print(metin.count("programlama"))   # 1
print(metin.count("o"))             # 4
print(metin.count("x"))             # 0

# Belirli aralıkta sayma
print(metin.count("a", 0, 10))      # 0-10 arasında "a" sayısı
print(metin.count("o", 10, 20))     # 10-20 arasında "o" sayısı
```

### 3. Değiştirme Metodları

#### replace() - Değiştirme

```python
metin = "Python programlama dili çok güçlüdür"

# Basit değiştirme
yeni_metin = metin.replace("Python", "Java")
print(yeni_metin)                   # "Java programlama dili çok güçlüdür"

# Birden fazla değiştirme
metin2 = "Python Python Python"
yeni_metin2 = metin2.replace("Python", "Java", 2)  # Sadece ilk 2'sini değiştir
print(yeni_metin2)                  # "Java Java Python"

# Karakter değiştirme
metin3 = "Python"
yeni_metin3 = metin3.replace("o", "0")
print(yeni_metin3)                  # "Pyth0n"

# Pratik örnek - Şifreleme
def basit_sifrele(metin):
    sifreli = metin.replace("a", "@")
    sifreli = sifreli.replace("e", "3")
    sifreli = sifreli.replace("i", "1")
    sifreli = sifreli.replace("o", "0")
    return sifreli

print(basit_sifrele("merhaba"))     # "m3rh@b@"
```

### 4. Boşluk ve Karakter Temizleme

```python
metin = "  Python Programlama  "

print(f"Orijinal: '{metin}'")
print(f"strip(): '{metin.strip()}'")           # Başından ve sonundan boşlukları temizle
print(f"lstrip(): '{metin.lstrip()}'")         # Sadece başından boşlukları temizle
print(f"rstrip(): '{metin.rstrip()}'")         # Sadece sonundan boşlukları temizle

# Belirli karakterleri temizleme
metin2 = "***Python***"
print(f"Orijinal: '{metin2}'")
print(f"strip('*'): '{metin2.strip('*')}'")    # "*" karakterlerini temizle

metin3 = "...Python..."
print(f"strip('.'): '{metin3.strip('.')}'")    # "." karakterlerini temizle

# Pratik örnek - Kullanıcı girdisi temizleme
def temizle_girdi(girdi):
    return girdi.strip().lower()

kullanici_girdi = "  PYTHON  "
temiz_girdi = temizle_girdi(kullanici_girdi)
print(f"Temizlenmiş: '{temiz_girdi}'")  # 'python'
```

### 5. Bölme ve Birleştirme

#### split() - Bölme

```python
# Boşluklara göre bölme
cumle = "Python programlama dili"
kelimeler = cumle.split()
print(kelimeler)  # ['Python', 'programlama', 'dili']

# Belirli karaktere göre bölme
veriler = "Ali,25,İstanbul"
kisiler = veriler.split(",")
print(kisiler)  # ['Ali', '25', 'İstanbul']

# Maksimum bölme sayısı
metin = "Python:Java:C++:JavaScript"
diller = metin.split(":", 2)  # Sadece ilk 2 ":" karakterine göre böl
print(diller)  # ['Python', 'Java', 'C++:JavaScript']

# Satır sonlarına göre bölme
cok_satirli = """Python
Java
C++"""
satirlar = cok_satirli.splitlines()
print(satirlar)  # ['Python', 'Java', 'C++']
```

#### join() - Birleştirme

```python
# Liste elemanlarını birleştirme
kelimeler = ['Python', 'programlama', 'dili']
cumle = " ".join(kelimeler)
print(cumle)  # "Python programlama dili"

# Farklı ayraçlarla birleştirme
sayilar = ['1', '2', '3', '4', '5']
print("-".join(sayilar))  # "1-2-3-4-5"
print("".join(sayilar))   # "12345"
print(" | ".join(sayilar))  # "1 | 2 | 3 | 4 | 5"

# Karakter listesini birleştirme
karakterler = ['P', 'y', 't', 'h', 'o', 'n']
kelime = "".join(karakterler)
print(kelime)  # "Python"

# Pratik örnek - CSV formatı
def liste_to_csv(liste):
    return ",".join([str(eleman) for eleman in liste])

sayilar = [1, 2, 3, 4, 5]
csv_format = liste_to_csv(sayilar)
print(csv_format)  # "1,2,3,4,5"
```

### 6. Kontrol Metodları

```python
# Temel kontrol metodları
metin1 = "Python123"
metin2 = "PYTHON"
metin3 = "python"
metin4 = "12345"
metin5 = "Python Programlama"
metin6 = ""
metin7 = "   "

print(f"'{metin1}' isalpha(): {metin1.isalpha()}")        # False (rakam var)
print(f"'{metin2}' isalpha(): {metin2.isalpha()}")        # True
print(f"'{metin3}' islower(): {metin3.islower()}")        # True
print(f"'{metin2}' isupper(): {metin2.isupper()}")        # True
print(f"'{metin4}' isdigit(): {metin4.isdigit()}")        # True
print(f"'{metin5}' istitle(): {metin5.istitle()}")        # True
print(f"'{metin6}' isspace(): {metin6.isspace()}")        # False
print(f"'{metin7}' isspace(): {metin7.isspace()}")        # True
print(f"'{metin1}' isalnum(): {metin1.isalnum()}")        # True (harf ve rakam)

# Pratik örnek - Şifre kontrolü
def sifre_kontrol(sifre):
    if len(sifre) < 8:
        return "Şifre en az 8 karakter olmalı"
    elif not any(harf.isupper() for harf in sifre):
        return "Şifre en az bir büyük harf içermeli"
    elif not any(harf.islower() for harf in sifre):
        return "Şifre en az bir küçük harf içermeli"
    elif not any(harf.isdigit() for harf in sifre):
        return "Şifre en az bir rakam içermeli"
    else:
        return "Şifre geçerli"

print(sifre_kontrol("python"))      # Şifre en az 8 karakter olmalı
print(sifre_kontrol("Python123"))   # Şifre geçerli
```

## Pratik String Örnekleri

### 1. Palindrom Kontrolü

```python
def palindrom_mu(kelime):
    # Büyük/küçük harf duyarlılığını kaldır
    kelime = kelime.lower()
    # Sadece harfleri al
    temiz_kelime = ""
    for karakter in kelime:
        if karakter.isalpha():
            temiz_kelime += karakter
    
    # Tersten kontrol et
    return temiz_kelime == temiz_kelime[::-1]

# Test
print(palindrom_mu("radar"))        # True
print(palindrom_mu("Python"))       # False
print(palindrom_mu("A man a plan a canal Panama"))  # True
print(palindrom_mu("12321"))        # True
```

### 2. Kelime Sayma

```python
def kelime_say(cumle):
    # Boşluklara göre böl
    kelimeler = cumle.split()
    return len(kelimeler)

def detayli_kelime_analizi(cumle):
    kelimeler = cumle.split()
    return {
        'toplam_kelime': len(kelimeler),
        'en_uzun_kelime': max(kelimeler, key=len) if kelimeler else "",
        'en_kisa_kelime': min(kelimeler, key=len) if kelimeler else "",
        'ortalama_uzunluk': sum(len(kelime) for kelime in kelimeler) / len(kelimeler) if kelimeler else 0
    }

# Test
cumle = "Python programlama dili çok güçlüdür"
print(f"'{cumle}' cümlesinde {kelime_say(cumle)} kelime var")

analiz = detayli_kelime_analizi(cumle)
for key, value in analiz.items():
    print(f"{key}: {value}")
```

### 3. Karakter Frekans Analizi

```python
def karakter_frekansi(metin):
    frekans = {}
    for karakter in metin.lower():
        if karakter.isalpha():
            if karakter in frekans:
                frekans[karakter] += 1
            else:
                frekans[karakter] = 1
    return frekans

def en_cok_gecen_karakter(metin):
    frekans = karakter_frekansi(metin)
    if frekans:
        en_cok = max(frekans.items(), key=lambda x: x[1])
        return en_cok
    return None

# Test
metin = "Python programlama"
frekans = karakter_frekansi(metin)
print("Karakter frekansları:")
for harf, sayi in sorted(frekans.items()):
    print(f"'{harf}': {sayi}")

en_cok = en_cok_gecen_karakter(metin)
if en_cok:
    print(f"En çok geçen karakter: '{en_cok[0]}' ({en_cok[1]} kez)")
```

### 4. String Şifreleme

```python
def caesar_sifrele(metin, kaydirma):
    sonuc = ""
    for karakter in metin:
        if karakter.isalpha():
            # Büyük harf kontrolü
            if karakter.isupper():
                yeni_ascii = ord('A') + (ord(karakter) - ord('A') + kaydirma) % 26
            else:
                yeni_ascii = ord('a') + (ord(karakter) - ord('a') + kaydirma) % 26
            sonuc += chr(yeni_ascii)
        else:
            sonuc += karakter
    return sonuc

def caesar_coz(metin, kaydirma):
    return caesar_sifrele(metin, -kaydirma)

# Test
orijinal = "Hello World!"
sifreli = caesar_sifrele(orijinal, 3)
cozulmus = caesar_coz(sifreli, 3)

print(f"Orijinal: {orijinal}")
print(f"Şifreli: {sifreli}")
print(f"Çözülmüş: {cozulmus}")
```

### 5. Email Formatı Kontrolü

```python
def email_kontrol(email):
    # Basit email kontrolü
    if '@' not in email or '.' not in email:
        return False
    
    # @ işaretinden önce ve sonra karakter olmalı
    parcalar = email.split('@')
    if len(parcalar) != 2:
        return False
    
    kullanici_adi, domain = parcalar
    
    if len(kullanici_adi) < 1 or len(domain) < 1:
        return False
    
    # Domain'de en az bir nokta olmalı
    if '.' not in domain:
        return False
    
    return True

# Test
emails = ["test@example.com", "invalid-email", "user@domain", "@domain.com", "user@.com"]
for email in emails:
    print(f"'{email}': {'Geçerli' if email_kontrol(email) else 'Geçersiz'}")
```

## Pratik Alıştırmalar

**Alıştırma 1:** Bir string'deki sesli harf sayısını bulan fonksiyon yazın.

```python
def sesli_harf_say(metin):
    sesli_harfler = "aeıioöuüAEIİOÖUÜ"
    sayac = 0
    for karakter in metin:
        if karakter in sesli_harfler:
            sayac += 1
    return sayac

# Test
print(sesli_harf_say("Python programlama"))  # 5
```

**Alıştırma 2:** String'i tersten yazdıran fonksiyon yazın.

```python
def ters_yazdir(metin):
    return metin[::-1]

# Test
print(ters_yazdir("Python"))  # nohtyP
```

**Alıştırma 3:** İki string'in anagram olup olmadığını kontrol eden fonksiyon yazın.

```python
def anagram_mu(str1, str2):
    # Büyük/küçük harf duyarlılığını kaldır ve sırala
    return sorted(str1.lower()) == sorted(str2.lower())

# Test
print(anagram_mu("listen", "silent"))  # True
print(anagram_mu("python", "java"))    # False
```

**Alıştırma 4:** String'den sadece rakamları çıkaran fonksiyon yazın.

```python
def rakamlari_cikar(metin):
    return ''.join(karakter for karakter in metin if karakter.isdigit())

# Test
print(rakamlari_cikar("Python123Programlama456"))  # 123456
```

**Alıştırma 5:** String'deki her kelimenin ilk harfini büyük yapan fonksiyon yazın.

```python
def baslik_formatla(metin):
    return metin.title()

# Test
print(baslik_formatla("python programlama dili"))  # Python Programlama Dili
```

## İleri Seviye String İşlemleri

### Regular Expression (Regex) Temelleri

```python
import re

# Basit regex örnekleri
metin = "Python 3.9 ve Python 2.7"

# Sayıları bul
sayilar = re.findall(r'\d+', metin)
print(sayilar)  # ['3', '9', '2', '7']

# Python versiyonlarını bul
versiyonlar = re.findall(r'Python \d+\.\d+', metin)
print(versiyonlar)  # ['Python 3.9', 'Python 2.7']

# Email kontrolü (regex ile)
def email_kontrol_regex(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# Test
print(email_kontrol_regex("test@example.com"))  # True
print(email_kontrol_regex("invalid-email"))     # False
```

### String Formatlama

```python
# f-string (Python 3.6+)
isim = "Ali"
yas = 25
print(f"{isim} {yas} yaşında")

# format() metodu
print("{} {} yaşında".format(isim, yas))

# % operatörü (eski stil)
print("%s %d yaşında" % (isim, yas))

# Pratik örnek
def kisi_bilgisi(isim, yas, sehir):
    return f"Adı: {isim}, Yaşı: {yas}, Şehri: {sehir}"

print(kisi_bilgisi("Ali", 25, "İstanbul"))
```

## Genel Pratik Projeleri

### Proje 1: Basit Metin Editörü
- Metin girme ve düzenleme
- Kelime/karakter sayma
- Arama ve değiştirme
- Büyük/küçük harf dönüştürme

### Proje 2: Şifreleme Uygulaması
- Caesar şifreleme
- Vigenère şifreleme
- Şifre çözme

### Proje 3: Metin Analiz Aracı
- Kelime frekans analizi
- Karakter istatistikleri
- Okunabilirlik skoru

### Proje 4: Dosya İşleme Sistemi
- Dosya içeriğini okuma
- Metin analizi
- Rapor oluşturma

### Proje 5: Veri Doğrulama Sistemi
- Email format kontrolü
- Telefon numarası kontrolü
- TC kimlik kontrolü

---

## Özet

Bu rehberde Python'da string işlemleri hakkında detaylı bilgi edindiniz:

### Temel Kavramlar:
- **Index mantığı**: 0'dan başlayan pozisyon numaraları
- **Negatif index**: Sondan başlayarak erişim
- **Slicing**: Belirli kısımları alma
- **Immutable**: Stringler değiştirilemez

### En Çok Kullanılan Metodlar:
- **Büyük/küçük harf**: upper(), lower(), title(), capitalize()
- **Arama**: find(), index(), count()
- **Değiştirme**: replace()
- **Temizleme**: strip(), lstrip(), rstrip()
- **Bölme/Birleştirme**: split(), join()
- **Kontrol**: isalpha(), isdigit(), isupper(), islower()

### Pratik Uygulamalar:
- Palindrom kontrolü
- Kelime sayma
- Karakter frekans analizi
- String şifreleme
- Email format kontrolü

**ÖNEMLİ:** Index mantığını iyice anlayın - 0'dan başlar ve negatif indexler sondan başlar!

Her bölümdeki pratik alıştırmaları yaparak konuları pekiştirin ve projelerle gerçek uygulamalar geliştirin. 