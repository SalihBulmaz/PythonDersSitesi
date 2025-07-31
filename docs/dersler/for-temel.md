# Python For Döngüleri - Primitif Tipler Rehberi

## Giriş

Bu derste Python'da tekrarlayan işlemleri otomatikleştirmek için kullanılan `for` döngülerini öğreneceğiz. Bu rehberde sadece primitif veri tipleri (int, float, string, boolean) kullanarak örnekler yapacağız.

## For Döngüsünün Temel Yapısı

```python
for değişken in koleksiyon:
    # Yapılacak işlemler
    print(değişken)
```

## 1. String Üzerinde Döngü

### Karakter Karakter Dolaşma
```python
# String'in her karakterini yazdırma
isim = "Python"
for karakter in isim:
    print(karakter)

# Çıktı:
# P
# y
# t
# h
# o
# n
```

### Karakterleri Sayma
```python
# String'deki karakter sayısını bulma
metin = "Merhaba Dünya"
sayac = 0

for karakter in metin:
    sayac += 1

print(f"'{metin}' metninde {sayac} karakter var")
# Çıktı: 'Merhaba Dünya' metninde 13 karakter var
```

### Belirli Karakterleri Sayma
```python
# String'deki sesli harfleri sayma
metin = "Python programlama dili"
sesli_harfler = "aeıioöuüAEIİOÖUÜ"
sayac = 0

for karakter in metin:
    if karakter in sesli_harfler:
        sayac += 1

print(f"'{metin}' metninde {sayac} sesli harf var")
# Çıktı: 'Python programlama dili' metninde 7 sesli harf var
```

### Karakterleri Büyük Harfe Çevirme
```python
# String'deki tüm karakterleri büyük harfe çevirme
metin = "python programlama"
buyuk_metin = ""

for karakter in metin:
    buyuk_metin += karakter.upper()

print(buyuk_metin)
# Çıktı: PYTHON PROGRAMLAMA
```

### Boolean Kullanımı ile Kontrol
```python
# String'de belirli bir karakter var mı kontrol etme
metin = "Python"
aranan_karakter = "t"
bulundu = False

for karakter in metin:
    if karakter == aranan_karakter:
        bulundu = True
        break

if bulundu:
    print(f"'{aranan_karakter}' karakteri bulundu!")
else:
    print(f"'{aranan_karakter}' karakteri bulunamadı!")
```

### Pratik Alıştırmalar

**Alıştırma 1:** Kullanıcıdan bir kelime alın ve bu kelimedeki her karakteri ayrı satırlarda yazdırın.

**Alıştırma 2:** Verilen bir string'deki boşluk karakterlerini sayın.

**Alıştırma 3:** Bir string'deki büyük harf sayısını bulan program yazın.

**Alıştırma 4:** Bir kelimeyi tersten yazdıran program yazın (döngü kullanarak).

**Alıştırma 5:** Verilen bir string'de "a" karakteri var mı yok mu kontrol eden program yazın.

## 2. Range() Fonksiyonu ile Döngü

### Belirli Aralıkta Sayma
```python
# 1'den 10'a kadar sayma
for i in range(1, 11):
    print(i, end=" ")
# Çıktı: 1 2 3 4 5 6 7 8 9 10
```

### 0'dan Başlayarak Sayma
```python
# 0'dan 9'a kadar sayma
for i in range(10):
    print(i, end=" ")
# Çıktı: 0 1 2 3 4 5 6 7 8 9
```

### Belirli Adımlarla Sayma
```python
# 2'şer 2'şer sayma
for i in range(0, 20, 2):
    print(i, end=" ")
# Çıktı: 0 2 4 6 8 10 12 14 16 18

# Geriye doğru sayma
for i in range(10, 0, -1):
    print(i, end=" ")
# Çıktı: 10 9 8 7 6 5 4 3 2 1
```

### Sayılarla Matematik İşlemleri
```python
# 1'den 10'a kadar sayıların toplamını bulma
toplam = 0
for i in range(1, 11):
    toplam += i

print(f"1'den 10'a kadar sayıların toplamı: {toplam}")
# Çıktı: 1'den 10'a kadar sayıların toplamı: 55
```

### Çarpım Tablosu
```python
# 5'lik çarpım tablosu
sayi = 5
for i in range(1, 11):
    sonuc = sayi * i
    print(f"{sayi} x {i} = {sonuc}")

# Çıktı:
# 5 x 1 = 5
# 5 x 2 = 10
# 5 x 3 = 15
# ...
# 5 x 10 = 50
```

### Faktöriyel Hesaplama
```python
# Bir sayının faktöriyelini hesaplama
sayi = 5
faktoriyel = 1

for i in range(1, sayi + 1):
    faktoriyel *= i

print(f"{sayi}! = {faktoriyel}")
# Çıktı: 5! = 120
```

### Float Değerlerle Çalışma
```python
# 0.1'den 1.0'a kadar 0.1'er artırarak
sayi = 0.1
for i in range(10):
    print(f"{sayi:.1f}")
    sayi += 0.1
```

### Pratik Alıştırmalar

**Alıştırma 1:** 1'den 100'e kadar olan sayıların toplamını bulan program yazın.

**Alıştırma 2:** 1'den 20'ye kadar olan çift sayıların çarpımını hesaplayan program yazın.

**Alıştırma 3:** Kullanıcıdan bir sayı alın ve o sayının çarpım tablosunu yazdırın.

**Alıştırma 4:** 50'den 1'e kadar geriye doğru 5'er azaltarak sayan program yazın.

**Alıştırma 5:** 1'den 1000'e kadar olan sayılardan 7'ye tam bölünenleri sayan program yazın.

## 3. İç İçe For Döngüleri

### Dikdörtgen Çizme
```python
# Yıldızlarla dikdörtgen çizme
satir = 5
sutun = 10

for i in range(satir):
    for j in range(sutun):
        print("*", end="")
    print()  # Yeni satır

# Çıktı:
# **********
# **********
# **********
# **********
# **********
```

### Üçgen Çizme
```python
# Yıldızlarla üçgen çizme
yukseklik = 5

for i in range(yukseklik):
    for j in range(i + 1):
        print("*", end="")
    print()

# Çıktı:
# *
# **
# ***
# ****
# *****
```

### Sayı Piramidi
```python
# Sayılarla piramit çizme
yukseklik = 5

for i in range(1, yukseklik + 1):
    for j in range(1, i + 1):
        print(j, end="")
    print()

# Çıktı:
# 1
# 12
# 123
# 1234
# 12345
```

### Çarpım Tablosu Matrixi
```python
# 5x5 çarpım tablosu
boyut = 5

for i in range(1, boyut + 1):
    for j in range(1, boyut + 1):
        carpim = i * j
        print(f"{carpim:3}", end=" ")
    print()

# Çıktı:
#   1   2   3   4   5 
#   2   4   6   8  10 
#   3   6   9  12  15 
#   4   8  12  16  20 
#   5  10  15  20  25
```

### Boolean ile Kontrol
```python
# Asal sayı kontrolü (basit yöntem)
sayi = 17
asal_mi = True

if sayi <= 1:
    asal_mi = False
else:
    for i in range(2, sayi):
        if sayi % i == 0:
            asal_mi = False
            break

if asal_mi:
    print(f"{sayi} asal bir sayıdır")
else:
    print(f"{sayi} asal bir sayı değildir")
```

### Pratik Alıştırmalar

**Alıştırma 1:** 7 satır ve 7 sütunluk bir kare çizen program yazın.

**Alıştırma 2:** Ters üçgen (tepesi aşağıda) çizen program yazın.

**Alıştırma 3:** 1'den 10'a kadar tüm sayıların çarpım tablolarını yazdıran program yazın.

**Alıştırma 4:** Verilen bir sayının mükemmel kare olup olmadığını kontrol eden program yazın.

**Alıştırma 5:** İki sayı arasındaki tüm asal sayıları bulan program yazın.

## 4. String İndeksleme ile Döngü

### Karakterlerin Pozisyonlarını Bulma
```python
# Belirli bir karakterin string'deki pozisyonlarını bulma
metin = "Python programlama"
aranan = "a"

for i in range(len(metin)):
    if metin[i] == aranan:
        print(f"'{aranan}' karakteri {i}. pozisyonda bulundu")

# Çıktı:
# 'a' karakteri 10. pozisyonda bulundu
# 'a' karakteri 14. pozisyonda bulundu
```

### String'i Ters Çevirme
```python
# String'i ters çevirme (indeks kullanarak)
metin = "Python"
ters_metin = ""

for i in range(len(metin) - 1, -1, -1):
    ters_metin += metin[i]

print(f"'{metin}' kelimesinin tersi: '{ters_metin}'")
# Çıktı: 'Python' kelimesinin tersi: 'nohtyP'
```

### Palindrom Kontrolü
```python
# Kelime palindrom mu kontrol etme
kelime = "radar"
palindrom_mu = True

for i in range(len(kelime) // 2):
    if kelime[i] != kelime[len(kelime) - 1 - i]:
        palindrom_mu = False
        break

if palindrom_mu:
    print(f"'{kelime}' bir palindromdur")
else:
    print(f"'{kelime}' bir palindrom değildir")
```

### Pratik Alıştırmalar

**Alıştırma 1:** Bir string'deki her karakterin kaçıncı pozisyonda olduğunu gösteren program yazın.

**Alıştırma 2:** Verilen iki string'in aynı uzunlukta olup olmadığını kontrol eden program yazın.

**Alıştırma 3:** Bir string'de aynı karakterin peş peşe kaç kez tekrarlandığını bulan program yazın.

**Alıştırma 4:** Verilen bir cümledeki kelime sayısını döngü kullanarak bulan program yazın.

**Alıştırma 5:** Bir string'in her karakterini bir satır aşağı kaydırarak yazdıran program yazın.

## 5. Matematiksel Hesaplamalar

### Ortalama Hesaplama
```python
# Belirli sayıda sayının ortalamasını hesaplama
toplam = 0.0
adet = 5

print("5 sayı girin:")
for i in range(adet):
    sayi = float(input(f"{i+1}. sayı: "))
    toplam += sayi

ortalama = toplam / adet
print(f"Girilen sayıların ortalaması: {ortalama:.2f}")
```

### Güç Hesaplama
```python
# Bir sayının kuvvetini hesaplama (** kullanmadan)
taban = 2
us = 8
sonuc = 1

for i in range(us):
    sonuc *= taban

print(f"{taban}^{us} = {sonuc}")
# Çıktı: 2^8 = 256
```

### Fibonacci Serisi
```python
# Fibonacci serisinin ilk n terimini yazdırma
n = 10
a, b = 0, 1

print("Fibonacci serisi:")
for i in range(n):
    print(a, end=" ")
    a, b = b, a + b

# Çıktı: 0 1 1 2 3 5 8 13 21 34
```

### Rakamları Toplama
```python
# Bir sayının rakamlarını toplama
sayi = 12345
rakam_toplami = 0

# Sayıyı string'e çevirerek rakamlarına erişme
for rakam_str in str(sayi):
    rakam = int(rakam_str)
    rakam_toplami += rakam

print(f"{sayi} sayısının rakamları toplamı: {rakam_toplami}")
# Çıktı: 12345 sayısının rakamları toplamı: 15
```

### Pratik Alıştırmalar

**Alıştırma 1:** 1'den 100'e kadar olan sayıların karelerinin toplamını bulan program yazın.

**Alıştırma 2:** Verilen bir sayının basamak sayısını bulan program yazın.

**Alıştırma 3:** Kullanıcıdan aldığı n sayının en büyüğünü bulan program yazın.

**Alıştırma 4:** Bir sayının tersini (rakamları ters sırada) bulan program yazın.

**Alıştırma 5:** Verilen iki sayı arasındaki sayıların ortalamasını hesaplayan program yazın.

## 6. Karakter ve ASCII Kodları

### ASCII Değerleri ile Çalışma
```python
# Alfabenin büyük harflerini yazdırma
print("Büyük harfler:")
for i in range(65, 91):  # A=65, Z=90
    harf = chr(i)
    print(f"{harf} = {i}")
```

### Karakter Şifreleme
```python
# Basit Caesar şifresi (3 karakter kaydırma)
metin = "PYTHON"
sifreli_metin = ""

for karakter in metin:
    if karakter.isalpha():
        ascii_degeri = ord(karakter)
        yeni_ascii = ascii_degeri + 3
        # Z'den sonra A'ya döndür
        if yeni_ascii > 90:
            yeni_ascii = yeni_ascii - 26
        sifreli_karakter = chr(yeni_ascii)
        sifreli_metin += sifreli_karakter
    else:
        sifreli_metin += karakter

print(f"Orijinal: {metin}")
print(f"Şifreli: {sifreli_metin}")
# Çıktı: 
# Orijinal: PYTHON
# Şifreli: SBWKRQ
```

### Pratik Alıştırmalar

**Alıştırma 1:** Küçük harflerin ASCII değerlerini yazdıran program yazın.

**Alıştırma 2:** Verilen bir string'deki her karakterin ASCII değerini gösteren program yazın.

**Alıştırma 3:** Bir string'i 1 karakter ileri kaydıran şifreleme programı yazın.

**Alıştırma 4:** Rakamların ASCII değerlerini (0-9) yazdıran program yazın.

**Alıştırma 5:** Verilen bir karakterin alfabede kaçıncı sırada olduğunu bulan program yazın.

## Genel Pratik Projeleri

### Proje 1: Sayı Tahmin Oyunu Yardımcısı
Kullanıcının 1-100 arasında tuttuğu sayıyı bulmak için sistematik tahminler yapan program yazın.

### Proje 2: Basit Hesap Makinesi
Döngü kullanarak kullanıcıdan sürekli işlem alan ve sonuçları gösteren hesap makinesi yazın.

### Proje 3: Kelime Analizi Programı
Bir metin dosyasından alınan kelimeleri analiz eden (karakter sayısı, sesli harf sayısı, vb.) program yazın.

### Proje 4: Çarpım Tablosu Öğrenme Programı
Öğrencilere çarpım tablosu soruları soran ve skorlarını tutan program yazın.

### Proje 5: Basit Şifreleme/Deşifreleme
Metinleri şifreleyip deşifreleyebilen basit bir program yazın.

---

## Özet

Bu rehberde Python for döngülerini primitif veri tipleri ile nasıl kullanacağınızı öğrendiniz:

- **String döngüleri**: Karakter karakter işleme
- **Range döngüleri**: Sayısal aralıklarla çalışma  
- **İç içe döngüler**: Karmaşık desenler oluşturma
- **İndeksli döngüler**: Pozisyon bazlı işlemler
- **Matematiksel hesaplamalar**: Döngülerle hesaplama
- **ASCII işlemleri**: Karakter kodları ile çalışma

Her bölümdeki pratik alıştırmaları yaparak konuları pekiştirin ve projelerle gerçek uygulamalar geliştirin.