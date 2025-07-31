# Python Sözlükler (Dictionaries)

## Giriş

Sözlükler, Python'da anahtar-değer (key-value) çiftlerini saklamak için kullanılan veri yapılarıdır. Değiştirilebilir (mutable) ve sıralı (Python 3.7+) koleksiyonlardır.

## Sözlük Oluşturma

### Temel Sözlük Oluşturma
```python
# Boş sözlük
bos_sozluk = {}
bos_sozluk2 = dict()

# Elemanlı sözlük
ogrenci = {
    "ad": "Ahmet",
    "yas": 20,
    "bolum": "Bilgisayar Mühendisliği",
    "notlar": [85, 90, 78]
}

print(ogrenci)  # {'ad': 'Ahmet', 'yas': 20, 'bolum': 'Bilgisayar Mühendisliği', 'notlar': [85, 90, 78]}
print(type(ogrenci))  # <class 'dict'>
```

### dict() Fonksiyonu ile Oluşturma
```python
# Liste çiftlerinden sözlük
ciftler = [("a", 1), ("b", 2), ("c", 3)]
sozluk = dict(ciftler)
print(sozluk)  # {'a': 1, 'b': 2, 'c': 3}

# zip() ile sözlük
anahtarlar = ["ad", "yas", "sehir"]
degerler = ["Ali", 25, "İstanbul"]
kisi = dict(zip(anahtarlar, degerler))
print(kisi)  # {'ad': 'Ali', 'yas': 25, 'sehir': 'İstanbul'}
```

### Dict Comprehension ile Oluşturma
```python
# Sayıların kareleri
kareler = {x: x**2 for x in range(1, 6)}
print(kareler)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Çift sayıların yarısı
yarimlar = {x: x//2 for x in range(2, 11, 2)}
print(yarimlar)  # {2: 1, 4: 2, 6: 3, 8: 4, 10: 5}

# Koşullu sözlük
durumlar = {x: "çift" if x % 2 == 0 else "tek" for x in range(1, 6)}
print(durumlar)  # {1: 'tek', 2: 'çift', 3: 'tek', 4: 'çift', 5: 'tek'}
```

## Sözlük Elemanlarına Erişim

### Anahtar ile Erişim
```python
ogrenci = {
    "ad": "Ayşe",
    "yas": 22,
    "bolum": "Matematik",
    "notlar": [90, 85, 92]
}

# Doğrudan erişim
print(ogrenci["ad"])  # Ayşe
print(ogrenci["yas"])  # 22

# get() metodu ile güvenli erişim
print(ogrenci.get("ad"))  # Ayşe
print(ogrenci.get("telefon", "Yok"))  # Yok (varsayılan değer)
```

### Anahtarlar ve Değerler
```python
ogrenci = {"ad": "Mehmet", "yas": 24, "sehir": "Ankara"}

# Tüm anahtarlar
print(ogrenci.keys())  # dict_keys(['ad', 'yas', 'sehir'])

# Tüm değerler
print(ogrenci.values())  # dict_values(['Mehmet', 24, 'Ankara'])

# Anahtar-değer çiftleri
print(ogrenci.items())  # dict_items([('ad', 'Mehmet'), ('yas', 24), ('sehir', 'Ankara')])
```

## Sözlük İşlemleri

### Eleman Ekleme ve Değiştirme
```python
ogrenci = {"ad": "Fatma", "yas": 21}

# Yeni eleman ekleme
ogrenci["bolum"] = "Fizik"
print(ogrenci)  # {'ad': 'Fatma', 'yas': 21, 'bolum': 'Fizik'}

# Mevcut elemanı değiştirme
ogrenci["yas"] = 22
print(ogrenci)  # {'ad': 'Fatma', 'yas': 22, 'bolum': 'Fizik'}

# update() metodu ile toplu güncelleme
ogrenci.update({"sehir": "İzmir", "telefon": "555-1234"})
print(ogrenci)  # {'ad': 'Fatma', 'yas': 22, 'bolum': 'Fizik', 'sehir': 'İzmir', 'telefon': '555-1234'}
```

### Eleman Silme
```python
ogrenci = {"ad": "Ali", "yas": 23, "bolum": "Kimya", "sehir": "Bursa"}

# pop() ile silme ve değer döndürme
yas = ogrenci.pop("yas")
print(yas)  # 23
print(ogrenci)  # {'ad': 'Ali', 'bolum': 'Kimya', 'sehir': 'Bursa'}

# popitem() ile son elemanı silme
son_eleman = ogrenci.popitem()
print(son_eleman)  # ('sehir', 'Bursa')
print(ogrenci)  # {'ad': 'Ali', 'bolum': 'Kimya'}

# del ile silme
del ogrenci["bolum"]
print(ogrenci)  # {'ad': 'Ali'}

# clear() ile tüm elemanları silme
ogrenci.clear()
print(ogrenci)  # {}
```

## Sözlük Metodları

### Arama ve Kontrol
```python
ogrenci = {"ad": "Zeynep", "yas": 20, "bolum": "Biyoloji"}

# Anahtar var mı?
print("ad" in ogrenci)  # True
print("telefon" in ogrenci)  # False

# Eleman sayısı
print(len(ogrenci))  # 3

# Anahtar var mı? (get ile kontrol)
if ogrenci.get("yas"):
    print("Yaş bilgisi var")
else:
    print("Yaş bilgisi yok")
```

### Kopyalama
```python
orijinal = {"a": 1, "b": 2, "c": 3}

# Sığ kopya (shallow copy)
kopya = orijinal.copy()
print(kopya)  # {'a': 1, 'b': 2, 'c': 3}

# Derin kopya (deep copy)
import copy
derin_kopya = copy.deepcopy(orijinal)
print(derin_kopya)  # {'a': 1, 'b': 2, 'c': 3}
```

## İç İçe Sözlükler

### Basit İç İçe Sözlük
```python
ogrenci = {
    "ad": "Ahmet",
    "yas": 21,
    "adres": {
        "sehir": "İstanbul",
        "ilce": "Kadıköy",
        "mahalle": "Fenerbahçe"
    },
    "notlar": {
        "matematik": 85,
        "fizik": 90,
        "kimya": 78
    }
}

# İç sözlüğe erişim
print(ogrenci["adres"]["sehir"])  # İstanbul
print(ogrenci["notlar"]["matematik"])  # 85
```

### Karmaşık İç İçe Yapı
```python
okul = {
    "ad": "Atatürk Lisesi",
    "ogrenciler": {
        "10A": [
            {"ad": "Ali", "yas": 16, "notlar": [85, 90, 78]},
            {"ad": "Ayşe", "yas": 15, "notlar": [92, 88, 95]}
        ],
        "10B": [
            {"ad": "Mehmet", "yas": 16, "notlar": [75, 82, 88]},
            {"ad": "Fatma", "yas": 15, "notlar": [90, 85, 92]}
        ]
    }
}

# Karmaşık erişim
print(okul["ogrenciler"]["10A"][0]["ad"])  # Ali
print(okul["ogrenciler"]["10B"][1]["notlar"][0])  # 90
```

## Sözlük ile Döngüler

### Anahtarlar ile Döngü
```python
ogrenci = {"ad": "Elif", "yas": 19, "bolum": "Psikoloji"}

# Anahtarlar ile döngü
for anahtar in ogrenci:
    print(f"{anahtar}: {ogrenci[anahtar]}")

# keys() ile döngü
for anahtar in ogrenci.keys():
    print(anahtar)
```

### Değerler ile Döngü
```python
ogrenci = {"ad": "Can", "yas": 20, "sehir": "Antalya"}

# Değerler ile döngü
for deger in ogrenci.values():
    print(deger)
```

### Anahtar-Değer Çiftleri ile Döngü
```python
ogrenci = {"ad": "Deniz", "yas": 18, "bolum": "Müzik"}

# items() ile döngü
for anahtar, deger in ogrenci.items():
    print(f"{anahtar}: {deger}")

# enumerate ile indeks
for i, (anahtar, deger) in enumerate(ogrenci.items()):
    print(f"{i+1}. {anahtar}: {deger}")
```

## Pratik Örnekler

### Örnek 1: Öğrenci Not Sistemi
```python
ogrenciler = {
    "Ahmet": {"matematik": 85, "fizik": 90, "kimya": 78},
    "Ayşe": {"matematik": 92, "fizik": 88, "kimya": 95},
    "Mehmet": {"matematik": 75, "fizik": 82, "kimya": 88}
}

# Ortalama hesaplama
for ogrenci, notlar in ogrenciler.items():
    ortalama = sum(notlar.values()) / len(notlar)
    print(f"{ogrenci}: {ortalama:.2f}")
```

### Örnek 2: Kelime Sayacı
```python
metin = "python programlama dili çok güzel python öğrenmesi kolay"
kelimeler = metin.split()

kelime_sayaci = {}
for kelime in kelimeler:
    if kelime in kelime_sayaci:
        kelime_sayaci[kelime] += 1
    else:
        kelime_sayaci[kelime] = 1

print(kelime_sayaci)
# {'python': 2, 'programlama': 1, 'dili': 1, 'çok': 1, 'güzel': 1, 'öğrenmesi': 1, 'kolay': 1}
```

### Örnek 3: Telefon Rehberi
```python
rehber = {
    "Ahmet": "555-1234",
    "Ayşe": "555-5678",
    "Mehmet": "555-9012"
}

# Arama fonksiyonu
def telefon_ara(isim):
    return rehber.get(isim, "Kişi bulunamadı")

print(telefon_ara("Ahmet"))  # 555-1234
print(telefon_ara("Ali"))    # Kişi bulunamadı
```

## Önemli Notlar

1. **Anahtarlar Benzersiz Olmalı**: Aynı anahtar birden fazla kez kullanılamaz.

2. **Anahtarlar Değiştirilemez**: Anahtarlar immutable (değiştirilemez) olmalıdır.

3. **Sıralı**: Python 3.7'den itibaren sözlükler ekleme sırasını korur.

4. **Hızlı Erişim**: Anahtar ile erişim O(1) karmaşıklığındadır.

5. **Bellek**: Sözlükler dinamik olarak büyür ve küçülür.

## Alıştırmalar

1. Bir öğrenci sözlüğü oluşturun ve bilgilerini güncelleyin.
2. İki sözlüğü birleştirin.
3. Bir sözlüğün en büyük ve en küçük değerlerini bulun.
4. Sözlüğü anahtarlara göre sıralayın.
5. İç içe sözlük yapısı oluşturun.

```python
# Çözüm
# 1. Öğrenci sözlüğü
ogrenci = {"ad": "Ali", "yas": 20, "bolum": "Bilgisayar"}
ogrenci["yas"] = 21
ogrenci["sehir"] = "İstanbul"

# 2. Sözlük birleştirme
sozluk1 = {"a": 1, "b": 2}
sozluk2 = {"c": 3, "d": 4}
birlesik = {**sozluk1, **sozluk2}

# 3. En büyük ve en küçük
sayilar = {"a": 10, "b": 5, "c": 15, "d": 3}
en_buyuk = max(sayilar.values())
en_kucuk = min(sayilar.values())

# 4. Sıralama
sirali = dict(sorted(sayilar.items()))

# 5. İç içe sözlük
karmaşık = {
    "kisi": {"ad": "Mehmet", "yas": 25},
    "adres": {"sehir": "Ankara", "ilce": "Çankaya"}
}
``` 