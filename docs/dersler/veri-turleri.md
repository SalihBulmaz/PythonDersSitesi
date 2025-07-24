# Python Veri Türleri

## Giriş

Python'da her değer belirli bir veri türüne sahiptir. Veri türleri, değerlerin nasıl saklanacağını ve hangi işlemlerin yapılabileceğini belirler.

## Temel Veri Türleri

### 1. Sayılar (Numbers)

#### Integer (Tam Sayılar)
```python
# Pozitif ve negatif tam sayılar
yas = 25
sıcaklık = -5
nüfus = 85000000

print(type(yas))  # <class 'int'>
```

#### Float (Ondalıklı Sayılar)
```python
# Ondalıklı sayılar
boy = 1.75
pi = 3.14159
sıcaklık = 23.5

print(type(boy))  # <class 'float'>
```

#### Complex (Karmaşık Sayılar)
```python
# Karmaşık sayılar
z = 3 + 4j
w = complex(2, -3)

print(z.real)  # 3.0
print(z.imag)  # 4.0
```

### 2. String (Metin)

```python
# Tek tırnak veya çift tırnak kullanılabilir
isim = 'Ahmet'
soyisim = "Yılmaz"
mesaj = "Python'u öğreniyorum"

# Çok satırlı string
uzun_mesaj = """
Bu çok satırlı
bir metindir.
"""

print(len(isim))  # 5
```

#### String İşlemleri
```python
metin = "Python Programlama"

# Büyük/küçük harf
print(metin.upper())      # PYTHON PROGRAMLAMA
print(metin.lower())      # python programlama
print(metin.title())      # Python Programlama

# Arama ve değiştirme
print(metin.find("gram"))  # 8
print(metin.replace("Python", "Java"))  # Java Programlama

# Bölme ve birleştirme
kelimeler = metin.split()  # ['Python', 'Programlama']
yeni_metin = "-".join(kelimeler)  # Python-Programlama
```

### 3. Boolean (Mantıksal)

```python
# True ve False değerleri
evli_mi = True
çalışıyor_mu = False

# Karşılaştırma sonuçları
yas = 18
reşit_mi = yas >= 18  # True

print(type(evli_mi))  # <class 'bool'>
```

## Karmaşık Veri Türleri

### 1. List (Liste)

```python
# Farklı veri türlerini içerebilir
meyveler = ["elma", "armut", "muz"]
sayılar = [1, 2, 3, 4, 5]
karışık = [1, "iki", 3.0, True]

# Liste işlemleri
meyveler.append("portakal")  # Sona ekleme
meyveler.insert(1, "kiraz")  # Belirli konuma ekleme
meyveler.remove("armut")     # Silme

print(len(meyveler))  # Liste uzunluğu
print(meyveler[0])    # İlk eleman
```

#### Liste Slicing
```python
sayılar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(sayılar[2:5])    # [2, 3, 4]
print(sayılar[:3])     # [0, 1, 2]
print(sayılar[7:])     # [7, 8, 9]
print(sayılar[::2])    # [0, 2, 4, 6, 8] (2'şer atlayarak)
print(sayılar[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (ters)
```

### 2. Tuple (Demet)

```python
# Değiştirilemez listeler
koordinat = (10, 20)
renk = (255, 128, 0)
kişi = ("Ali", 25, "İstanbul")

# Tuple işlemleri
print(len(koordinat))  # 2
print(koordinat[0])    # 10

# Tek elemanlı tuple
tek_eleman = (42,)
```

### 3. Dictionary (Sözlük)

```python
# Anahtar-değer çiftleri
öğrenci = {
    "ad": "Ayşe",
    "yaş": 20,
    "bölüm": "Bilgisayar Mühendisliği",
    "notlar": [85, 90, 78]
}

# Erişim
print(öğrenci["ad"])           # Ayşe
print(öğrenci.get("yaş"))      # 20
print(öğrenci.get("telefon", "Yok"))  # Yok (varsayılan değer)

# Değiştirme ve ekleme
öğrenci["yaş"] = 21
öğrenci["telefon"] = "555-1234"

# Anahtarlar ve değerler
print(öğrenci.keys())    # dict_keys(['ad', 'yaş', 'bölüm', 'notlar', 'telefon'])
print(öğrenci.values())  # dict_values(['Ayşe', 21, 'Bilgisayar Mühendisliği', [85, 90, 78], '555-1234'])
```

### 4. Set (Küme)

```python
# Benzersiz elemanlar
meyveler = {"elma", "armut", "muz", "elma"}  # Tekrarlanan elma silinir
sayılar = set([1, 2, 3, 2, 4, 1])  # {1, 2, 3, 4}

# Set işlemleri
meyveler.add("portakal")     # Ekleme
meyveler.remove("armut")     # Silme
meyveler.discard("kiraz")    # Güvenli silme (hata vermez)

# Küme işlemleri
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)  # Birleşim: {1, 2, 3, 4, 5, 6}
print(a & b)  # Kesişim: {3, 4}
print(a - b)  # Fark: {1, 2}
```

## Veri Türü Dönüşümleri

```python
# String'den sayıya
sayı_str = "123"
sayı = int(sayı_str)
ondalık = float("3.14")

# Sayıdan string'e
sayı = 42
sayı_str = str(sayı)

# Liste dönüşümleri
metin = "Python"
karakterler = list(metin)  # ['P', 'y', 't', 'h', 'o', 'n']

sayılar = [1, 2, 3, 4, 5]
sayılar_tuple = tuple(sayılar)  # (1, 2, 3, 4, 5)
sayılar_set = set(sayılar)      # {1, 2, 3, 4, 5}
```

## Veri Türü Kontrolü

```python
değer = 42

print(type(değer))           # <class 'int'>
print(isinstance(değer, int))  # True
print(isinstance(değer, str))  # False

# Çoklu kontrol
if isinstance(değer, (int, float)):
    print("Sayısal değer")
```

## Pratik Örnekler

### Öğrenci Not Sistemi
```python
öğrenciler = {
    "Ali": {"matematik": [85, 90, 78], "fizik": [92, 88]},
    "Ayşe": {"matematik": [95, 87, 91], "fizik": [89, 94]},
    "Mehmet": {"matematik": [76, 82, 85], "fizik": [91, 87]}
}

def ortalama_hesapla(notlar):
    return sum(notlar) / len(notlar)

for öğrenci, dersler in öğrenciler.items():
    print(f"\n{öğrenci}:")
    for ders, notlar in dersler.items():
        ort = ortalama_hesapla(notlar)
        print(f"  {ders}: {ort:.1f}")
```

### Alışveriş Listesi
```python
alışveriş_listesi = []

def ürün_ekle(ürün, miktar, fiyat):
    alışveriş_listesi.append({
        "ürün": ürün,
        "miktar": miktar,
        "fiyat": fiyat,
        "toplam": miktar * fiyat
    })

def toplam_tutar():
    return sum(item["toplam"] for item in alışveriş_listesi)

# Ürün ekleme
ürün_ekle("elma", 2, 5.0)
ürün_ekle("süt", 1, 12.0)
ürün_ekle("ekmek", 3, 2.5)

print(f"Toplam tutar: {toplam_tutar()} TL")
```

## Özet

- **Sayılar**: int, float, complex
- **Metin**: str
- **Mantıksal**: bool
- **Koleksiyonlar**: list, tuple, dict, set
- **Dönüşümler**: int(), float(), str(), list(), tuple(), set()
- **Kontrol**: type(), isinstance()

Bu veri türleri Python programlamanın temelini oluşturur ve her birinin kendine özgü özellikleri ve kullanım alanları vardır. 