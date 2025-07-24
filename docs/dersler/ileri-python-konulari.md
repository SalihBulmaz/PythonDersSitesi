# Python - İleri Seviye Konular

## 📝 Ders Hedefleri

Bu derste şunları öğreneceksiniz:
- Decorator'lar (Süsleyiciler)
- Generator'lar ve Iterator'lar
- Context Manager'lar
- Lambda fonksiyonları
- Map, Filter, Reduce fonksiyonları
- List/Dict/Set Comprehension
- Property ve Descriptor'lar
- Metaclass'lar
- Async/Await (Asenkron programlama)

---

## 🎨 Decorator'lar (Süsleyiciler)

Decorator'lar, fonksiyonları veya sınıfları değiştirmek veya genişletmek için kullanılan bir tasarım desenidir.

### Temel Decorator

```python
def zamanlayici(func):
    """Fonksiyonun çalışma süresini ölçen decorator"""
    import time
    
    def wrapper(*args, **kwargs):
        baslangic = time.time()
        sonuc = func(*args, **kwargs)
        bitis = time.time()
        print(f"{func.__name__} fonksiyonu {bitis - baslangic:.4f} saniyede çalıştı.")
        return sonuc
    
    return wrapper

# Decorator kullanımı
@zamanlayici
def yavas_fonksiyon():
    import time
    time.sleep(1)
    return "Tamamlandı!"

# Test
sonuc = yavas_fonksiyon()
print(sonuc)
```

### Parametreli Decorator

```python
def tekrar_et(sayi):
    """Fonksiyonu belirtilen sayıda tekrarlayan decorator"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            for i in range(sayi):
                print(f"Çalıştırma {i+1}:")
                sonuc = func(*args, **kwargs)
            return sonuc
        return wrapper
    return decorator

@tekrar_et(3)
def selamla(isim):
    print(f"Merhaba {isim}!")

# Test
selamla("Ali")
```

### Sınıf Decorator'ı

```python
class Cache:
    """Fonksiyon sonuçlarını önbelleğe alan decorator"""
    
    def __init__(self, func):
        self.func = func
        self.cache = {}
    
    def __call__(self, *args, **kwargs):
        # Argümanları anahtar olarak kullan
        anahtar = str(args) + str(sorted(kwargs.items()))
        
        if anahtar in self.cache:
            print("Önbellekten alındı!")
            return self.cache[anahtar]
        
        sonuc = self.func(*args, **kwargs)
        self.cache[anahtar] = sonuc
        print("Hesaplandı ve önbelleğe alındı!")
        return sonuc

@Cache
def fibonacci(n):
    """Fibonacci sayısı hesaplama"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test
print(fibonacci(10))  # İlk çalıştırma
print(fibonacci(10))  # Önbellekten alınır
```

---

## 🔄 Generator'lar ve Iterator'lar

### Generator Fonksiyonları

```python
def fibonacci_generator():
    """Fibonacci sayılarını üreten generator"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Kullanım
fib = fibonacci_generator()
for i in range(10):
    print(next(fib), end=" ")
print()

# Generator expression
kareler = (x**2 for x in range(10))
print(list(kareler))
```

### Özel Iterator Sınıfı

```python
class SayiIterator:
    """Sayıları belirli aralıkta üreten iterator"""
    
    def __init__(self, baslangic, bitis, artis=1):
        self.baslangic = baslangic
        self.bitis = bitis
        self.artis = artis
        self.su_anki = baslangic
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.su_anki >= self.bitis:
            raise StopIteration
        
        sonuc = self.su_anki
        self.su_anki += self.artis
        return sonuc

# Kullanım
sayilar = SayiIterator(0, 10, 2)
for sayi in sayilar:
    print(sayi, end=" ")
print()
```

### Generator Örnekleri

```python
def dosya_okuyucu(dosya_adi):
    """Dosyayı satır satır okuyan generator"""
    try:
        with open(dosya_adi, 'r', encoding='utf-8') as dosya:
            for satir in dosya:
                yield satir.strip()
    except FileNotFoundError:
        yield "Dosya bulunamadı!"

def filtrele(generator, kosul):
    """Generator'ı filtreleyen fonksiyon"""
    for item in generator:
        if kosul(item):
            yield item

# Kullanım örneği
# satirlar = dosya_okuyucu("ornek.txt")
# uzun_satirlar = filtrele(satirlar, lambda x: len(x) > 10)
```

---

## 🔧 Context Manager'lar

### with Statement ile Context Manager

```python
class DosyaYoneticisi:
    """Güvenli dosya işlemleri için context manager"""
    
    def __init__(self, dosya_adi, mod="r"):
        self.dosya_adi = dosya_adi
        self.mod = mod
        self.dosya = None
    
    def __enter__(self):
        self.dosya = open(self.dosya_adi, self.mod, encoding="utf-8")
        return self.dosya
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.dosya:
            self.dosya.close()
        if exc_type:
            print(f"Hata oluştu: {exc_val}")
        return False  # Hatayı yeniden yükselt

# Kullanım
with DosyaYoneticisi("test.txt", "w") as dosya:
    dosya.write("Merhaba Context Manager!")

with DosyaYoneticisi("test.txt", "r") as dosya:
    icerik = dosya.read()
    print(icerik)
```

### contextlib ile Context Manager

```python
from contextlib import contextmanager
import time

@contextmanager
def zamanlayici():
    """Zamanlayıcı context manager"""
    baslangic = time.time()
    yield
    bitis = time.time()
    print(f"Geçen süre: {bitis - baslangic:.4f} saniye")

# Kullanım
with zamanlayici():
    import time
    time.sleep(1)
    print("İşlem tamamlandı!")
```

---

## 🐑 Lambda Fonksiyonları

### Temel Lambda Kullanımı

```python
# Normal fonksiyon
def kare_al(x):
    return x ** 2

# Lambda fonksiyonu
kare_al_lambda = lambda x: x ** 2

print(kare_al(5))        # 25
print(kare_al_lambda(5)) # 25

# Çoklu parametre
topla = lambda x, y: x + y
print(topla(3, 4))       # 7

# Koşullu lambda
mutlak = lambda x: x if x >= 0 else -x
print(mutlak(-5))        # 5
```

### Lambda ile Sıralama

```python
# Öğrenci listesi
ogrenciler = [
    {"ad": "Ali", "yas": 20, "not": 85},
    {"ad": "Ayşe", "yas": 19, "not": 92},
    {"ad": "Mehmet", "yas": 21, "not": 78}
]

# Yaşa göre sıralama
yas_sirali = sorted(ogrenciler, key=lambda x: x["yas"])
print("Yaşa göre:", yas_sirali)

# Nota göre sıralama (azalan)
not_sirali = sorted(ogrenciler, key=lambda x: x["not"], reverse=True)
print("Nota göre:", not_sirali)

# Çoklu kriter sıralama
karma_sirali = sorted(ogrenciler, key=lambda x: (x["yas"], x["not"]))
print("Karma sıralama:", karma_sirali)
```

---

## 🗺️ Map, Filter, Reduce

### Map Fonksiyonu

```python
# Sayıları iki katına çıkarma
sayilar = [1, 2, 3, 4, 5]
iki_kat = list(map(lambda x: x * 2, sayilar))
print(iki_kat)  # [2, 4, 6, 8, 10]

# String'leri büyük harfe çevirme
isimler = ["ali", "ayşe", "mehmet"]
buyuk_isimler = list(map(str.upper, isimler))
print(buyuk_isimler)  # ['ALI', 'AYŞE', 'MEHMET']

# Çoklu liste ile map
sayilar1 = [1, 2, 3]
sayilar2 = [10, 20, 30]
toplamlar = list(map(lambda x, y: x + y, sayilar1, sayilar2))
print(toplamlar)  # [11, 22, 33]
```

### Filter Fonksiyonu

```python
# Çift sayıları filtreleme
sayilar = range(1, 11)
cift_sayilar = list(filter(lambda x: x % 2 == 0, sayilar))
print(cift_sayilar)  # [2, 4, 6, 8, 10]

# Boş olmayan string'leri filtreleme
metinler = ["", "merhaba", "", "dünya", ""]
dolu_metinler = list(filter(None, metinler))
print(dolu_metinler)  # ['merhaba', 'dünya']

# Karmaşık filtreleme
ogrenciler = [
    {"ad": "Ali", "not": 85},
    {"ad": "Ayşe", "not": 92},
    {"ad": "Mehmet", "not": 78}
]

yuksek_notlar = list(filter(lambda x: x["not"] >= 80, ogrenciler))
print(yuksek_notlar)
```

### Reduce Fonksiyonu

```python
from functools import reduce

# Sayıları toplama
sayilar = [1, 2, 3, 4, 5]
toplam = reduce(lambda x, y: x + y, sayilar)
print(toplam)  # 15

# En büyük sayıyı bulma
en_buyuk = reduce(lambda x, y: x if x > y else y, sayilar)
print(en_buyuk)  # 5

# String'leri birleştirme
kelimeler = ["Python", " ", "programlama", " ", "dili"]
cumle = reduce(lambda x, y: x + y, kelimeler)
print(cumle)  # "Python programlama dili"
```

---

## 📝 Comprehension'lar

### List Comprehension

```python
# Temel list comprehension
kareler = [x**2 for x in range(10)]
print(kareler)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Koşullu list comprehension
cift_kareler = [x**2 for x in range(10) if x % 2 == 0]
print(cift_kareler)  # [0, 4, 16, 36, 64]

# İç içe list comprehension
matris = [[i+j for j in range(3)] for i in range(3)]
print(matris)  # [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

# String işlemleri
isimler = ["ali", "ayşe", "mehmet"]
buyuk_isimler = [isim.upper() for isim in isimler]
print(buyuk_isimler)  # ['ALI', 'AYŞE', 'MEHMET']
```

### Dict Comprehension

```python
# Sayı-kare eşleştirmesi
kare_sozlugu = {x: x**2 for x in range(5)}
print(kare_sozlugu)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Koşullu dict comprehension
cift_kareler = {x: x**2 for x in range(10) if x % 2 == 0}
print(cift_kareler)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# String işlemleri
isimler = ["ali", "ayşe", "mehmet"]
uzunluk_sozlugu = {isim: len(isim) for isim in isimler}
print(uzunluk_sozlugu)  # {'ali': 3, 'ayşe': 4, 'mehmet': 6}
```

### Set Comprehension

```python
# Benzersiz kareler
kareler_set = {x**2 for x in range(10)}
print(kareler_set)  # {0, 1, 64, 4, 36, 9, 16, 49, 81, 25}

# Koşullu set comprehension
cift_kareler_set = {x**2 for x in range(10) if x % 2 == 0}
print(cift_kareler_set)  # {0, 4, 16, 36, 64}

# String karakterleri
kelime = "programlama"
benzersiz_harfler = {harf for harf in kelime}
print(benzersiz_harfler)  # {'a', 'g', 'l', 'm', 'o', 'p', 'r'}
```

---

## 🏠 Property ve Descriptor'lar

### Property Kullanımı

```python
class Dikdortgen:
    def __init__(self, genislik, yukseklik):
        self._genislik = genislik
        self._yukseklik = yukseklik
    
    @property
    def genislik(self):
        return self._genislik
    
    @genislik.setter
    def genislik(self, deger):
        if deger > 0:
            self._genislik = deger
        else:
            raise ValueError("Genişlik pozitif olmalıdır!")
    
    @property
    def alan(self):
        return self._genislik * self._yukseklik
    
    @property
    def cevre(self):
        return 2 * (self._genislik + self._yukseklik)

# Kullanım
dikdortgen = Dikdortgen(5, 3)
print(f"Genişlik: {dikdortgen.genislik}")
print(f"Alan: {dikdortgen.alan}")
print(f"Çevre: {dikdortgen.cevre}")

dikdortgen.genislik = 6  # Setter kullanımı
print(f"Yeni alan: {dikdortgen.alan}")
```

### Descriptor Örneği

```python
class PozitifSayi:
    """Pozitif sayı descriptor'ı"""
    
    def __init__(self, name=None):
        self.name = name
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get(self.name)
    
    def __set__(self, instance, value):
        if value <= 0:
            raise ValueError("Değer pozitif olmalıdır!")
        instance.__dict__[self.name] = value
    
    def __delete__(self, instance):
        del instance.__dict__[self.name]

class Urun:
    fiyat = PozitifSayi('fiyat')
    stok = PozitifSayi('stok')
    
    def __init__(self, ad, fiyat, stok):
        self.ad = ad
        self.fiyat = fiyat
        self.stok = stok

# Kullanım
try:
    urun = Urun("Laptop", 5000, 10)
    print(f"Ürün: {urun.ad}, Fiyat: {urun.fiyat}")
    
    urun.fiyat = -100  # Hata!
except ValueError as e:
    print(f"Hata: {e}")
```

---

## 🔮 Metaclass'lar

### Basit Metaclass

```python
class Singleton(type):
    """Singleton pattern için metaclass"""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Veritabani(metaclass=Singleton):
    def __init__(self):
        self.baglanti = "Aktif"
    
    def sorgu(self, sql):
        return f"Sorgu çalıştırıldı: {sql}"

# Test
db1 = Veritabani()
db2 = Veritabani()

print(db1 is db2)  # True - Aynı instance
print(db1.sorgu("SELECT * FROM users"))
```

### Metaclass ile Sınıf Özelleştirme

```python
class Validator(type):
    """Sınıf özelliklerini doğrulayan metaclass"""
    
    def __new__(cls, name, bases, attrs):
        # Zorunlu metodları kontrol et
        zorunlu_metodlar = ['validate', 'save']
        for metod in zorunlu_metodlar:
            if metod not in attrs:
                raise TypeError(f"{name} sınıfında {metod} metodu eksik!")
        
        return super().__new__(cls, name, bases, attrs)

class Kullanici(metaclass=Validator):
    def __init__(self, ad, email):
        self.ad = ad
        self.email = email
    
    def validate(self):
        return len(self.ad) > 0 and '@' in self.email
    
    def save(self):
        if self.validate():
            return f"{self.ad} kaydedildi."
        return "Geçersiz veri!"

# Kullanım
kullanici = Kullanici("Ali", "ali@example.com")
print(kullanici.save())
```

---

## ⚡ Async/Await (Asenkron Programlama)

### Temel Async/Await

```python
import asyncio
import aiohttp
import time

async def web_sitesi_kontrol(url):
    """Web sitesi yanıt süresini ölçen async fonksiyon"""
    async with aiohttp.ClientSession() as session:
        baslangic = time.time()
        try:
            async with session.get(url) as response:
                bitis = time.time()
                return {
                    'url': url,
                    'durum': response.status,
                    'sure': bitis - baslangic
                }
        except Exception as e:
            return {
                'url': url,
                'durum': 'Hata',
                'sure': 0,
                'hata': str(e)
            }

async def coklu_site_kontrol(urls):
    """Birden fazla siteyi paralel kontrol eden fonksiyon"""
    gorevler = [web_sitesi_kontrol(url) for url in urls]
    sonuclar = await asyncio.gather(*gorevler)
    return sonuclar

# Kullanım örneği (aiohttp kurulu olmalı)
# urls = ['https://google.com', 'https://github.com', 'https://python.org']
# sonuclar = asyncio.run(coklu_site_kontrol(urls))
# for sonuc in sonuclar:
#     print(f"{sonuc['url']}: {sonuc['durum']} ({sonuc['sure']:.2f}s)")
```

### Async Context Manager

```python
import asyncio

class AsyncDosyaYoneticisi:
    """Asenkron dosya işlemleri için context manager"""
    
    def __init__(self, dosya_adi, mod="r"):
        self.dosya_adi = dosya_adi
        self.mod = mod
        self.dosya = None
    
    async def __aenter__(self):
        # Simüle edilmiş asenkron dosya açma
        await asyncio.sleep(0.1)
        self.dosya = open(self.dosya_adi, self.mod, encoding="utf-8")
        return self.dosya
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.dosya:
            self.dosya.close()
        return False

async def dosya_isle():
    """Asenkron dosya işleme örneği"""
    async with AsyncDosyaYoneticisi("test.txt", "w") as dosya:
        dosya.write("Asenkron dosya işlemi!")
    
    async with AsyncDosyaYoneticisi("test.txt", "r") as dosya:
        icerik = dosya.read()
        print(icerik)

# Kullanım
# asyncio.run(dosya_isle())
```

---

## 🎯 Pratik Örnekler

### Örnek 1: Decorator ile Logging

```python
import functools
import logging

def log_function(func):
    """Fonksiyon çağrılarını loglayan decorator"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        logging.info(f"{func.__name__} çağrıldı - args: {args}, kwargs: {kwargs}")
        try:
            sonuc = func(*args, **kwargs)
            logging.info(f"{func.__name__} başarıyla tamamlandı - sonuç: {sonuc}")
            return sonuc
        except Exception as e:
            logging.error(f"{func.__name__} hatası: {e}")
            raise
    return wrapper

# Logging ayarları
logging.basicConfig(level=logging.INFO)

@log_function
def topla(a, b):
    return a + b

@log_function
def bol(a, b):
    return a / b

# Test
print(topla(5, 3))
try:
    print(bol(10, 0))
except:
    pass
```

### Örnek 2: Generator ile Veri İşleme

```python
def veri_okuyucu(dosya_adi):
    """Büyük dosyaları satır satır okuyan generator"""
    with open(dosya_adi, 'r', encoding='utf-8') as dosya:
        for satir in dosya:
            # Satırı işle ve yield et
            islenmis_satir = satir.strip().lower()
            if islenmis_satir:  # Boş satırları atla
                yield islenmis_satir

def kelime_sayaci(generator):
    """Generator'dan gelen metinlerde kelime sayısını hesaplayan generator"""
    for satir in generator:
        kelimeler = satir.split()
        yield len(kelimeler)

def istatistik_hesapla(generator):
    """Generator'dan gelen sayıların istatistiğini hesaplar"""
    sayilar = list(generator)
    if sayilar:
        return {
            'toplam': sum(sayilar),
            'ortalama': sum(sayilar) / len(sayilar),
            'min': min(sayilar),
            'max': max(sayilar),
            'sayi': len(sayilar)
        }
    return {}

# Kullanım örneği
# veri_gen = veri_okuyucu("buyuk_dosya.txt")
# kelime_sayilari = kelime_sayaci(veri_gen)
# istatistik = istatistik_hesapla(kelime_sayilari)
# print(istatistik)
```

### Örnek 3: Property ile Validasyon

```python
class Kullanici:
    def __init__(self, ad, yas, email):
        self.ad = ad
        self.yas = yas
        self.email = email
    
    @property
    def ad(self):
        return self._ad
    
    @ad.setter
    def ad(self, deger):
        if not deger or len(deger.strip()) < 2:
            raise ValueError("Ad en az 2 karakter olmalıdır!")
        self._ad = deger.strip()
    
    @property
    def yas(self):
        return self._yas
    
    @yas.setter
    def yas(self, deger):
        if not isinstance(deger, int) or deger < 0 or deger > 150:
            raise ValueError("Yaş 0-150 arasında bir tam sayı olmalıdır!")
        self._yas = deger
    
    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, deger):
        if '@' not in deger or '.' not in deger:
            raise ValueError("Geçerli bir email adresi giriniz!")
        self._email = deger.lower()
    
    def bilgileri_goster(self):
        return f"Ad: {self.ad}, Yaş: {self.yas}, Email: {self.email}"

# Kullanım
try:
    kullanici = Kullanici("Ali", 25, "ali@example.com")
    print(kullanici.bilgileri_goster())
    
    kullanici.yas = 30
    print(kullanici.bilgileri_goster())
    
except ValueError as e:
    print(f"Hata: {e}")
```

---

## ✅ Özet ve Kontrol Listesi

### Öğrendikleriniz
- [x] Decorator'lar ve kullanım alanları
- [x] Generator'lar ve iterator'lar
- [x] Context manager'lar
- [x] Lambda fonksiyonları
- [x] Map, Filter, Reduce fonksiyonları
- [x] List/Dict/Set Comprehension
- [x] Property ve Descriptor'lar
- [x] Metaclass'lar
- [x] Async/Await temelleri

### Sırada Ne Var?
- Web scraping ve API kullanımı
- Veritabanı işlemleri
- GUI programlama
- Test yazma
- Proje geliştirme

### Pratik Yapın!
İleri seviye konuları pekiştirmek için:
1. Kendi decorator'larınızı yazın
2. Generator'lar ile büyük veri işleyin
3. Property'ler ile validasyon yapın
4. Comprehension'ları etkin kullanın
5. Async programlama ile performans artırın

---

**🎯 Sonraki ders: Web Scraping ve API Kullanımı** 