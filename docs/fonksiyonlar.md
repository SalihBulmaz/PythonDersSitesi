# Python Fonksiyonlar

## Giriş

Fonksiyonlar, kodun yeniden kullanılabilir parçalarını oluşturmamızı sağlar. Python'da fonksiyonlar `def` anahtar kelimesi ile tanımlanır ve programlarımızı daha modüler hale getirir.

## Temel Fonksiyon Tanımlama

### Basit Fonksiyon
```python
def selamla():
    print("Merhaba!")

# Fonksiyonu çağırma
selamla()  # Merhaba!
```

### Parametreli Fonksiyon
```python
def selamla(isim):
    print(f"Merhaba {isim}!")

selamla("Ali")  # Merhaba Ali!
```

### Birden Fazla Parametre
```python
def toplam(a, b):
    return a + b

sonuç = toplam(5, 3)
print(sonuç)  # 8
```

### Varsayılan Parametreler
```python
def selamla(isim, selam="Merhaba"):
    print(f"{selam} {isim}!")

selamla("Ali")           # Merhaba Ali!
selamla("Ayşe", "Selam") # Selam Ayşe!
```

## Parametre Türleri

### Pozisyonel Parametreler
```python
def bilgi_yazdır(ad, yaş, şehir):
    print(f"Ad: {ad}, Yaş: {yaş}, Şehir: {şehir}")

bilgi_yazdır("Ali", 25, "İstanbul")
```

### Anahtar Kelime Parametreleri
```python
def bilgi_yazdır(ad, yaş, şehir):
    print(f"Ad: {ad}, Yaş: {yaş}, Şehir: {şehir}")

# Anahtar kelime ile çağırma
bilgi_yazdır(ad="Ali", yaş=25, şehir="İstanbul")
bilgi_yazdır(yaş=25, ad="Ali", şehir="İstanbul")  # Sıra önemli değil
```

### Karışık Kullanım
```python
def bilgi_yazdır(ad, yaş, şehir="İstanbul", meslek="Öğrenci"):
    print(f"Ad: {ad}, Yaş: {yaş}, Şehir: {şehir}, Meslek: {meslek}")

bilgi_yazdır("Ali", 25)  # Varsayılan değerler kullanılır
bilgi_yazdır("Ayşe", 30, "Ankara", "Mühendis")
```

### *args (Değişken Sayıda Parametre)
```python
def toplam(*sayılar):
    return sum(sayılar)

print(toplam(1, 2, 3))      # 6
print(toplam(1, 2, 3, 4, 5)) # 15

def bilgi_yazdır(*bilgiler):
    for bilgi in bilgiler:
        print(bilgi)

bilgi_yazdır("Ali", 25, "İstanbul", "Mühendis")
```

### **kwargs (Anahtar Kelime Parametreleri)
```python
def kişi_bilgileri(**bilgiler):
    for anahtar, değer in bilgiler.items():
        print(f"{anahtar}: {değer}")

kişi_bilgileri(ad="Ali", yaş=25, şehir="İstanbul", meslek="Mühendis")
```

### Karışık Parametre Türleri
```python
def karmaşık_fonksiyon(ad, yaş, *hobiler, **ek_bilgiler):
    print(f"Ad: {ad}, Yaş: {yaş}")
    if hobiler:
        print("Hobiler:", hobiler)
    if ek_bilgiler:
        print("Ek bilgiler:", ek_bilgiler)

karmaşık_fonksiyon("Ali", 25, "spor", "müzik", şehir="İstanbul", meslek="Mühendis")
```

## Return Değerleri

### Tek Değer Döndürme
```python
def kare_al(sayı):
    return sayı ** 2

sonuç = kare_al(5)
print(sonuç)  # 25
```

### Çoklu Değer Döndürme
```python
def bölme_işlemi(bölünen, bölen):
    bölüm = bölünen // bölen
    kalan = bölünen % bölen
    return bölüm, kalan

bölüm, kalan = bölme_işlemi(17, 5)
print(f"Bölüm: {bölüm}, Kalan: {kalan}")  # Bölüm: 3, Kalan: 2
```

### Koşullu Return
```python
def mutlak_değer(sayı):
    if sayı >= 0:
        return sayı
    else:
        return -sayı

print(mutlak_değer(-5))  # 5
print(mutlak_değer(3))   # 3
```

## Lambda Fonksiyonları

### Temel Lambda
```python
# Normal fonksiyon
def kare_al(x):
    return x ** 2

# Lambda fonksiyonu
kare_al_lambda = lambda x: x ** 2

print(kare_al(5))        # 25
print(kare_al_lambda(5)) # 25
```

### Lambda ile Parametreler
```python
toplam = lambda a, b: a + b
çarpım = lambda a, b, c: a * b * c

print(toplam(3, 5))      # 8
print(çarpım(2, 3, 4))   # 24
```

### Lambda ile Koşullar
```python
kontrol = lambda x: "Pozitif" if x > 0 else "Negatif veya sıfır"

print(kontrol(5))   # Pozitif
print(kontrol(-3))  # Negatif veya sıfır
```

## Fonksiyon Kapsamı (Scope)

### Yerel Değişkenler
```python
def test_fonksiyon():
    x = 10  # Yerel değişken
    print(f"Fonksiyon içinde x: {x}")

test_fonksiyon()
# print(x)  # Hata! x fonksiyon dışında tanımlı değil
```

### Global Değişkenler
```python
global_x = 100  # Global değişken

def test_fonksiyon():
    print(f"Global x: {global_x}")

test_fonksiyon()
print(f"Fonksiyon dışında x: {global_x}")
```

### Global Anahtar Kelimesi
```python
sayı = 10

def değiştir():
    global sayı
    sayı = 20
    print(f"Fonksiyon içinde sayı: {sayı}")

print(f"Önce: {sayı}")  # 10
değiştir()              # 20
print(f"Sonra: {sayı}") # 20
```

## İç İçe Fonksiyonlar

```python
def dış_fonksiyon(x):
    def iç_fonksiyon(y):
        return x + y  # x dış fonksiyondan gelir
    return iç_fonksiyon

# Closure oluşturma
topla_5 = dış_fonksiyon(5)
sonuç = topla_5(3)
print(sonuç)  # 8
```

## Decorator'lar

### Basit Decorator
```python
def zamanlayıcı(func):
    def wrapper():
        import time
        başlangıç = time.time()
        func()
        bitiş = time.time()
        print(f"Fonksiyon {bitiş - başlangıç:.4f} saniyede çalıştı")
    return wrapper

@zamanlayıcı
def yavaş_fonksiyon():
    import time
    time.sleep(1)
    print("Fonksiyon tamamlandı")

yavaş_fonksiyon()
```

### Parametreli Decorator
```python
def tekrar_çalıştır(sayı):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(sayı):
                func(*args, **kwargs)
        return wrapper
    return decorator

@tekrar_çalıştır(3)
def selamla(isim):
    print(f"Merhaba {isim}!")

selamla("Ali")
```

## Pratik Örnekler

### Hesap Makinesi Fonksiyonları
```python
def toplama(a, b):
    return a + b

def çıkarma(a, b):
    return a - b

def çarpma(a, b):
    return a * b

def bölme(a, b):
    if b == 0:
        return "Sıfıra bölme hatası!"
    return a / b

def hesap_makinesi():
    print("1. Toplama")
    print("2. Çıkarma")
    print("3. Çarpma")
    print("4. Bölme")
    
    seçim = input("İşlem seçin (1-4): ")
    sayı1 = float(input("Birinci sayı: "))
    sayı2 = float(input("İkinci sayı: "))
    
    if seçim == "1":
        sonuç = toplama(sayı1, sayı2)
    elif seçim == "2":
        sonuç = çıkarma(sayı1, sayı2)
    elif seçim == "3":
        sonuç = çarpma(sayı1, sayı2)
    elif seçim == "4":
        sonuç = bölme(sayı1, sayı2)
    else:
        sonuç = "Geçersiz seçim"
    
    print(f"Sonuç: {sonuç}")
```

### Faktöriyel Hesaplama
```python
def faktöriyel(n):
    if n < 0:
        return "Negatif sayıların faktöriyeli hesaplanamaz"
    elif n == 0 or n == 1:
        return 1
    else:
        return n * faktöriyel(n - 1)

# Test
for i in range(6):
    print(f"{i}! = {faktöriyel(i)}")
```

### Fibonacci Dizisi
```python
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        dizi = [0, 1]
        for i in range(2, n):
            dizi.append(dizi[i-1] + dizi[i-2])
        return dizi

print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Liste İşlemleri
```python
def liste_istatistikleri(liste):
    if not liste:
        return "Liste boş"
    
    return {
        "uzunluk": len(liste),
        "toplam": sum(liste),
        "ortalama": sum(liste) / len(liste),
        "minimum": min(liste),
        "maksimum": max(liste)
    }

sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
istatistikler = liste_istatistikleri(sayılar)
print(istatistikler)
```

### Şifre Güvenlik Kontrolü
```python
def şifre_kontrol(şifre):
    kriterler = {
        "uzunluk": len(şifre) >= 8,
        "büyük_harf": any(c.isupper() for c in şifre),
        "küçük_harf": any(c.islower() for c in şifre),
        "rakam": any(c.isdigit() for c in şifre),
        "özel_karakter": any(c in "!@#$%^&*" for c in şifre)
    }
    
    geçerli_kriterler = sum(kriterler.values())
    
    if geçerli_kriterler == 5:
        return "Çok güçlü"
    elif geçerli_kriterler >= 3:
        return "Güçlü"
    elif geçerli_kriterler >= 2:
        return "Orta"
    else:
        return "Zayıf"

test_şifreleri = ["abc", "abc123", "Abc123!", "GüçlüŞifre123!"]
for şifre in test_şifreleri:
    print(f"'{şifre}': {şifre_kontrol(şifre)}")
```

## Özet

### Fonksiyon Tanımlama
- `def` anahtar kelimesi ile fonksiyon tanımlanır
- Parametreler parantez içinde belirtilir
- `return` ile değer döndürülür

### Parametre Türleri
- **Pozisyonel**: Sırayla verilen parametreler
- **Anahtar kelime**: İsimle belirtilen parametreler
- **Varsayılan**: Önceden tanımlı değerler
- **\*args**: Değişken sayıda parametre
- **\*\*kwargs**: Anahtar kelime parametreleri

### Özel Fonksiyonlar
- **Lambda**: Tek satırlık anonim fonksiyonlar
- **İç içe**: Fonksiyon içinde fonksiyon
- **Decorator**: Fonksiyonları saran yapılar

### Kapsam
- **Yerel**: Fonksiyon içinde tanımlı değişkenler
- **Global**: Tüm programda erişilebilir değişkenler

Fonksiyonlar, kodun yeniden kullanılabilirliğini artırır ve programları daha modüler hale getirir. 