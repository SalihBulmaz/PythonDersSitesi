# Python - Değişkenler ve Operatörler

## 📝 Ders Hedefleri

Bu derste şunları öğreneceksiniz:
- Değişken kavramı ve kullanımı
- Python veri türleri
- Aritmetik, karşılaştırma ve mantıksal operatörler
- Değişken isimlendirme kuralları
- Tip dönüştürme işlemleri

---

## 🔤 Değişkenler Nedir?

Değişkenler, verileri bellekte saklamak için kullanılan isimlendirilmiş alanlardır. Python'da değişken tanımlamak çok basittir.

### Temel Değişken Tanımlama

```python
# Değişken tanımlama
ad = "Ali"
yas = 25
boy = 1.75
ogrenci_mi = True

print(ad)        # Ali
print(yas)       # 25
print(boy)       # 1.75
print(ogrenci_mi) # True
```

### Değişken İsimlendirme Kuralları

#### ✅ Doğru Kullanım
```python
ad = "Mehmet"
yas_bilgisi = 30
ogrenci_no = 12345
toplam_1 = 100
_ozel_deger = 50
```

#### ❌ Yanlış Kullanım
```python
# 2ad = "Ali"          # Sayı ile başlayamaz
# ad-soyad = "Ali"     # Tire kullanılamaz
# for = 25             # Anahtar kelime kullanılamaz
# ad soyad = "Ali"     # Boşluk kullanılamaz
```

---

## 📊 Veri Türleri (Data Types)

### Temel Veri Türleri

```python
# String (metin)
ad = "Ahmet"
mesaj = 'Merhaba Dünya'

# Integer (tam sayı)
yas = 25
sayi = -10

# Float (ondalıklı sayı)
boy = 1.75
fiyat = 99.99

# Boolean (mantıksal)
aktif_mi = True
tamamlandi_mi = False

# Tip kontrolü
print(type(ad))      # <class 'str'>
print(type(yas))     # <class 'int'>
print(type(boy))     # <class 'float'>
print(type(aktif_mi)) # <class 'bool'>
```

### Koleksiyon Türleri

```python
# List (liste)
sayilar = [1, 2, 3, 4, 5]
isimler = ["Ali", "Veli", "Ayşe"]

# Tuple (demet)
koordinat = (10, 20)
renkler = ("kırmızı", "mavi", "yeşil")

# Dictionary (sözlük)
kisi = {"ad": "Ali", "yas": 25, "sehir": "İstanbul"}

# Set (küme)
benzersiz_sayilar = {1, 2, 3, 4, 5}
```

---

## ➕ Aritmetik Operatörler

### Temel İşlemler

```python
a = 10
b = 3

print(a + b)    # 13 (Toplama)
print(a - b)    # 7  (Çıkarma)
print(a * b)    # 30 (Çarpma)
print(a / b)    # 3.333... (Bölme)
print(a // b)   # 3  (Tam bölme)
print(a % b)    # 1  (Mod/Kalan)
print(a ** b)   # 1000 (Üs alma)
```

### Atama Operatörleri

```python
sayac = 10

sayac += 5    # sayac = sayac + 5  -> 15
sayac -= 3    # sayac = sayac - 3  -> 12
sayac *= 2    # sayac = sayac * 2  -> 24
sayac /= 4    # sayac = sayac / 4  -> 6.0
sayac //= 2   # sayac = sayac // 2 -> 3.0
sayac %= 2    # sayac = sayac % 2  -> 1.0
sayac **= 3   # sayac = sayac ** 3 -> 1.0

print(sayac)  # 1.0
```

---

## 🔍 Karşılaştırma Operatörleri

```python
a = 10
b = 5

print(a > b)    # True  (Büyük)
print(a < b)    # False (Küçük)
print(a >= b)   # True  (Büyük eşit)
print(a <= b)   # False (Küçük eşit)
print(a == b)   # False (Eşit)
print(a != b)   # True  (Eşit değil)

# String karşılaştırma
ad1 = "Ali"
ad2 = "Veli"
print(ad1 == ad2)  # False
print(ad1 != ad2)  # True
```

---

## 🧠 Mantıksal Operatörler

```python
# and (ve)
print(True and True)    # True
print(True and False)   # False
print(False and False)  # False

# or (veya)
print(True or False)    # True
print(False or False)   # False

# not (değil)
print(not True)         # False
print(not False)        # True

# Örnek kullanım
yas = 25
ehliyet_var = True

araba_kullanabilir = yas >= 18 and ehliyet_var
print(araba_kullanabilir)  # True
```

---

## 🔄 Tip Dönüştürme (Type Conversion)

### Açık Dönüştürme

```python
# String'e dönüştürme
sayi = 42
sayi_str = str(sayi)
print(sayi_str)     # "42"
print(type(sayi_str)) # <class 'str'>

# Integer'a dönüştürme
metin_sayi = "123"
sayi = int(metin_sayi)
print(sayi)         # 123
print(type(sayi))   # <class 'int'>

# Float'a dönüştürme
tam_sayi = 10
ondalik = float(tam_sayi)
print(ondalik)      # 10.0

# Boolean'a dönüştürme
print(bool(1))      # True
print(bool(0))      # False
print(bool(""))     # False
print(bool("Merhaba")) # True
```

### Örtük Dönüştürme

```python
# Python otomatik dönüştürme yapar
tam_sayi = 10
ondalik = 3.5
sonuc = tam_sayi + ondalik  # int + float = float
print(sonuc)        # 13.5
print(type(sonuc))  # <class 'float'>
```

---

## 🎯 Pratik Örnekler

### Örnek 1: Basit Hesaplama

```python
# Kullanıcıdan veri alma
ad = input("Adınızı girin: ")
yas_str = input("Yaşınızı girin: ")
yas = int(yas_str)

# Hesaplama
dogum_yili = 2024 - yas

# Sonuç
print(f"Merhaba {ad}!")
print(f"Doğum yılınız: {dogum_yili}")
```

### Örnek 2: Matematik İşlemleri

```python
# İki sayının işlemleri
sayi1 = 15
sayi2 = 4

print(f"Sayılar: {sayi1} ve {sayi2}")
print(f"Toplam: {sayi1 + sayi2}")
print(f"Fark: {sayi1 - sayi2}")
print(f"Çarpım: {sayi1 * sayi2}")
print(f"Bölüm: {sayi1 / sayi2}")
print(f"Kalan: {sayi1 % sayi2}")
```

### Örnek 3: Boolean Mantığı

```python
# Öğrenci geçme sistemi
vize_notu = 70
final_notu = 80
devam_yuzde = 85

ortalama = (vize_notu + final_notu) / 2
gecti_mi = ortalama >= 60 and devam_yuzde >= 80

print(f"Ortalama: {ortalama}")
print(f"Devam: %{devam_yuzde}")
print(f"Geçti mi? {gecti_mi}")
```

---

## 📚 String Formatları

### f-string (Önerilen)

```python
ad = "Ali"
yas = 25
boy = 1.75

# Modern format
mesaj = f"Benim adım {ad}, {yas} yaşındayım ve boyum {boy:.2f}m"
print(mesaj)
```

### .format() Metodu

```python
mesaj = "Benim adım {}, {} yaşındayım".format(ad, yas)
print(mesaj)

# İsimli parametreler
mesaj = "Benim adım {isim}, {yas_bilgisi} yaşındayım".format(
    isim=ad, yas_bilgisi=yas)
print(mesaj)
```

### % Formatı (Eski)

```python
mesaj = "Benim adım %s, %d yaşındayım" % (ad, yas)
print(mesaj)
```

---

## 🔬 Değişken Kapsamı (Scope)

### Global ve Local Değişkenler

```python
# Global değişken
global_degisken = "Ben globalim"

def fonksiyon():
    # Local değişken
    local_degisken = "Ben localim"
    print(global_degisken)  # Erişilebilir
    print(local_degisken)   # Erişilebilir

fonksiyon()
print(global_degisken)      # Erişilebilir
# print(local_degisken)     # HATA! Erişilemez
```

---

## ⚡ Performans İpuçları

### Etkili Değişken Kullanımı

```python
# İyi pratik - anlamlı isimler
ogrenci_sayisi = 150
toplam_puan = 1250
ortalama_puan = toplam_puan / ogrenci_sayisi

# Çoklu atama
ad, soyad, yas = "Ali", "Yılmaz", 25

# Değer değiştirme
a, b = 10, 20
a, b = b, a  # Swap işlemi
print(f"a: {a}, b: {b}")  # a: 20, b: 10
```

---

## 🧪 Pratik Egzersizler

### Egzersiz 1: Temel Hesaplama
```python
# Dikdörtgen alanı hesaplama
uzunluk = 10
genislik = 5
alan = uzunluk * genislik
cevre = 2 * (uzunluk + genislik)

print(f"Alan: {alan}")
print(f"Çevre: {cevre}")
```

### Egzersiz 2: Yaş Hesaplama
```python
# Yaş ve yıl hesaplama
dogum_yili = 1990
su_anki_yil = 2024
yas = su_anki_yil - dogum_yili

print(f"Yaşınız: {yas}")
print(f"{yas} yaş büyük mü? {yas >= 18}")
```

### Egzersiz 3: Alışveriş Hesabı
```python
# Basit alışveriş hesabı
urun_fiyat = 25.50
adet = 3
ara_toplam = urun_fiyat * adet
kdv_orani = 0.18
kdv = ara_toplam * kdv_orani
toplam = ara_toplam + kdv

print(f"Ara Toplam: {ara_toplam:.2f} TL")
print(f"KDV: {kdv:.2f} TL")
print(f"Genel Toplam: {toplam:.2f} TL")
```

---

## ✅ Özet ve Kontrol Listesi

### Öğrendikleriniz
- [x] Değişken tanımlama ve kullanma
- [x] Temel veri türleri (str, int, float, bool)
- [x] Aritmetik operatörler (+, -, *, /, //, %, **)
- [x] Karşılaştırma operatörleri (>, <, ==, !=)
- [x] Mantıksal operatörler (and, or, not)
- [x] Tip dönüştürme işlemleri
- [x] String formatting
- [x] Değişken isimlendirme kuralları

### Sırada Ne Var?
- Koşullu ifadeler (if/elif/else)
- Döngüler (for/while)
- Liste ve dictionary işlemleri
- Fonksiyon tanımlama

### Pratik Yapın!
Her gün 15-30 dakika kod yazarak öğrendiklerinizi pekiştirin. Basit hesaplama programları yazın ve farklı veri türleri ile deneyim kazanın.

---

**🎯 Sonraki ders: Koşullu İfadeler ve Karar Yapıları**  