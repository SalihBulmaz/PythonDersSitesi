# Python Liste İşlemleri - Detaylı Rehber

## Giriş

Bu derste Python'da **liste** (list) veri yapısını detaylı olarak öğreneceğiz. Listeler, Python'da en çok kullanılan veri yapılarından biridir ve çok esnek özelliklere sahiptir. **Index mantığını** iyice anlayarak, en çok kullanılan liste metodlarını öğreneceğiz.

## Liste Nedir?

Liste, farklı veri tiplerini içerebilen, sıralı (sequence) ve **mutable** (değiştirilebilir) bir veri yapısıdır.

```python
# Liste oluşturma yöntemleri
liste1 = [1, 2, 3, 4, 5]
liste2 = ["Python", "Java", "C++"]
liste3 = [1, "Python", 3.14, True]  # Farklı tipler
liste4 = []  # Boş liste
liste5 = list("Python")  # String'den liste oluşturma
liste6 = list(range(5))  # Range'den liste oluşturma

print(f"liste1: {liste1}")
print(f"liste2: {liste2}")
print(f"liste3: {liste3}")
print(f"liste4: {liste4}")
print(f"liste5: {liste5}")  # ['P', 'y', 't', 'h', 'o', 'n']
print(f"liste6: {liste6}")  # [0, 1, 2, 3, 4]

# Liste uzunluğu
print(f"liste1 uzunluğu: {len(liste1)}")
print(f"liste2 uzunluğu: {len(liste2)}")
```

## Index Mantığı - Temel Kavram

### Index Nedir?

Index, liste içindeki elemanların **pozisyon numarası**dır. Python'da indexleme **0'dan başlar**.

```python
sayilar = [10, 20, 30, 40, 50]
# Index:    0   1   2   3   4

print(sayilar[0])  # 10 (ilk eleman)
print(sayilar[1])  # 20
print(sayilar[2])  # 30
print(sayilar[3])  # 40
print(sayilar[4])  # 50 (son eleman)
```

### Negatif Index

Python'da **negatif index** kullanarak sondan başlayarak elemanlara erişebiliriz:

```python
sayilar = [10, 20, 30, 40, 50]
# Pozitif index:  0   1   2   3   4
# Negatif index: -5  -4  -3  -2  -1

print(sayilar[-1])  # 50 (son eleman)
print(sayilar[-2])  # 40
print(sayilar[-3])  # 30
print(sayilar[-4])  # 20
print(sayilar[-5])  # 10 (ilk eleman)
```

### Index Hatası

Var olmayan bir indexe erişmeye çalışırsak **IndexError** alırız:

```python
sayilar = [10, 20, 30, 40, 50]
# print(sayilar[5])  # IndexError: list index out of range
# print(sayilar[-6]) # IndexError: list index out of range

# Güvenli erişim için kontrol
if len(sayilar) > 5:
    print(sayilar[5])
else:
    print("Bu index mevcut değil!")
```

### Liste Uzunluğu

`len()` fonksiyonu ile listenin uzunluğunu öğrenebiliriz:

```python
sayilar = [10, 20, 30, 40, 50]
uzunluk = len(sayilar)
print(f"Liste uzunluğu: {uzunluk}")

# Boş liste
bos_liste = []
print(f"Boş liste uzunluğu: {len(bos_liste)}")  # 0
```

## Liste Slicing (Dilimleme)

Listelerde de string'lerdeki gibi slicing kullanabiliriz. Format: `liste[başlangıç:bitiş:adım]`

### Temel Slicing

```python
sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# Temel slicing
print(sayilar[0:5])      # [10, 20, 30, 40, 50] (0'dan 5'e kadar, 5 dahil değil)
print(sayilar[2:7])      # [30, 40, 50, 60, 70]
print(sayilar[:5])       # [10, 20, 30, 40, 50] (baştan 5'e kadar)
print(sayilar[5:])       # [60, 70, 80, 90, 100] (5'ten sona kadar)
print(sayilar[:])        # [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] (tamamı)

# Tek eleman alma
print(sayilar[0])        # 10
print(sayilar[1])        # 20
```

### Negatif Index ile Slicing

```python
sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# Negatif index ile slicing
print(sayilar[-5:])      # [60, 70, 80, 90, 100] (sondan 5 eleman)
print(sayilar[:-5])      # [10, 20, 30, 40, 50] (sondan 5 eleman hariç)
print(sayilar[-7:-3])    # [40, 50, 60, 70] (sondan 7'den 3'e kadar)
print(sayilar[-6:])      # [50, 60, 70, 80, 90, 100] (sondan 6 eleman)
```

### Adım (Step) Kullanımı

```python
sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# Adım kullanımı
print(sayilar[::2])      # [10, 30, 50, 70, 90] (2'şer atlayarak)
print(sayilar[1::2])     # [20, 40, 60, 80, 100] (1'den başlayarak 2'şer atlayarak)
print(sayilar[::3])      # [10, 40, 70, 100] (3'er atlayarak)
print(sayilar[::4])      # [10, 50, 90] (4'er atlayarak)

# Negatif adım (tersten)
print(sayilar[::-1])     # [100, 90, 80, 70, 60, 50, 40, 30, 20, 10] (tersten)
print(sayilar[::-2])     # [100, 80, 60, 40, 20] (tersten 2'şer atlayarak)
```

### Pratik Slicing Örnekleri

```python
sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# İlk 3 elemanı al
ilk_uc = sayilar[:3]
print(f"İlk 3 eleman: {ilk_uc}")  # [1, 2, 3]

# Son 3 elemanı al
son_uc = sayilar[-3:]
print(f"Son 3 eleman: {son_uc}")  # [8, 9, 10]

# Ortadaki elemanları al
orta = sayilar[3:7]
print(f"Ortadaki elemanlar: {orta}")  # [4, 5, 6, 7]

# Çift indeksli elemanları al
cift_indeks = sayilar[::2]
print(f"Çift indeksli elemanlar: {cift_indeks}")  # [1, 3, 5, 7, 9]
```

## Liste Elemanlarına Erişim ve Değiştirme

### Elemanlara Erişim

```python
sayilar = [10, 20, 30, 40, 50]

# Elemanlara erişim
print(sayilar[0])    # 10
print(sayilar[2])    # 30
print(sayilar[-1])   # 50
print(sayilar[-3])   # 30

# İç içe listelerde erişim
matris = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matris[0])      # [1, 2, 3]
print(matris[0][1])   # 2
print(matris[1][2])   # 6
```

### Elemanları Değiştirme

```python
sayilar = [10, 20, 30, 40, 50]

# Tek eleman değiştirme
sayilar[1] = 25
print(sayilar)       # [10, 25, 30, 40, 50]

sayilar[-1] = 55
print(sayilar)       # [10, 25, 30, 40, 55]

# Slicing ile değiştirme
sayilar[1:3] = [22, 33]
print(sayilar)       # [10, 22, 33, 40, 55]

# Birden fazla eleman ekleme
sayilar[1:1] = [15, 16]  # 1. pozisyona ekle
print(sayilar)       # [10, 15, 16, 22, 33, 40, 55]
```

## En Çok Kullanılan Liste Metodları

### 1. Eleman Ekleme Metodları

#### append() - Sona Eleman Ekleme

```python
sayilar = [1, 2, 3]

# append() - sona eleman ekleme
sayilar.append(4)
print(sayilar)  # [1, 2, 3, 4]

sayilar.append(5)
print(sayilar)  # [1, 2, 3, 4, 5]

# Farklı tipler ekleyebiliriz
sayilar.append("Python")
print(sayilar)  # [1, 2, 3, 4, 5, 'Python']

# Liste ekleme
sayilar.append([6, 7, 8])
print(sayilar)  # [1, 2, 3, 4, 5, 'Python', [6, 7, 8]]
```

#### insert() - Belirli Pozisyona Eleman Ekleme

```python
sayilar = [1, 2, 3, 4]

# insert() - belirli pozisyona eleman ekleme
sayilar.insert(1, 1.5)
print(sayilar)  # [1, 1.5, 2, 3, 4]

sayilar.insert(0, 0)
print(sayilar)  # [0, 1, 1.5, 2, 3, 4]

sayilar.insert(-1, 3.5)  # Son elemandan önce ekle
print(sayilar)  # [0, 1, 1.5, 2, 3, 3.5, 4]

# Son pozisyona ekleme
sayilar.insert(len(sayilar), 5)
print(sayilar)  # [0, 1, 1.5, 2, 3, 3.5, 4, 5]
```

#### extend() - Başka Bir Listeyi Ekleme

```python
liste1 = [1, 2, 3]
liste2 = [4, 5, 6]

# extend() - başka bir listeyi ekleme
liste1.extend(liste2)
print(liste1)  # [1, 2, 3, 4, 5, 6]

# Farklı yöntemler
liste3 = [7, 8, 9]
liste1.extend(liste3)
print(liste1)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# + operatörü ile birleştirme (yeni liste oluşturur)
birlesik = liste1 + liste2
print(birlesik)  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6]
```

### 2. Eleman Silme Metodları

#### remove() - Değere Göre Silme

```python
sayilar = [10, 20, 30, 20, 40, 50]

# remove() - değere göre silme (ilk bulduğunu siler)
sayilar.remove(20)
print(sayilar)  # [10, 30, 20, 40, 50]

sayilar.remove(20)  # İkinci 20'yi siler
print(sayilar)  # [10, 30, 40, 50]

# Olmayan eleman silmeye çalışırsak hata alırız
# sayilar.remove(100)  # ValueError: list.remove(x): x not in list

# Güvenli silme
def guvenli_sil(liste, eleman):
    if eleman in liste:
        liste.remove(eleman)
        return True
    else:
        return False

print(guvenli_sil(sayilar, 30))  # True
print(guvenli_sil(sayilar, 100)) # False
```

#### pop() - Index'e Göre Silme

```python
sayilar = [10, 20, 30, 40, 50]

# pop() - index'e göre silme (varsayılan olarak son elemanı siler)
silinen = sayilar.pop()
print(f"Silinen: {silinen}")  # Silinen: 50
print(sayilar)  # [10, 20, 30, 40]

silinen2 = sayilar.pop(1)
print(f"Silinen: {silinen2}")  # Silinen: 20
print(sayilar)  # [10, 30, 40]

# Son elemanı silme
son_eleman = sayilar.pop(-1)
print(f"Son eleman: {son_eleman}")  # Son eleman: 40
print(sayilar)  # [10, 30]

# Boş listeden pop yapmaya çalışırsak hata alırız
# sayilar.pop()  # IndexError: pop from empty list
```

#### del - Index veya Slicing ile Silme

```python
sayilar = [10, 20, 30, 40, 50, 60, 70]

# del - index veya slicing ile silme
del sayilar[0]
print(sayilar)  # [20, 30, 40, 50, 60, 70]

del sayilar[1:3]  # 1'den 3'e kadar sil (3 dahil değil)
print(sayilar)  # [20, 50, 60, 70]

del sayilar[-1]  # Son elemanı sil
print(sayilar)  # [20, 50, 60]

# Tüm listeyi sil
del sayilar[:]
print(sayilar)  # []
```

#### clear() - Tüm Elemanları Silme

```python
sayilar = [1, 2, 3, 4, 5]

# clear() - tüm elemanları silme
sayilar.clear()
print(sayilar)  # []
print(len(sayilar))  # 0
```

### 3. Arama ve Sıralama Metodları

#### index() - Elemanın Index'ini Bulma

```python
sayilar = [3, 1, 4, 1, 5, 9, 2, 6]

# index() - elemanın index'ini bulma
print(sayilar.index(1))      # 1 (ilk bulduğunun index'i)
print(sayilar.index(1, 2))   # 3 (2'den sonra ara)
print(sayilar.index(5))      # 4

# Olmayan eleman ararsak hata alırız
# print(sayilar.index(10))   # ValueError: 10 is not in list

# Güvenli arama
def guvenli_index(liste, eleman):
    try:
        return liste.index(eleman)
    except ValueError:
        return -1

print(guvenli_index(sayilar, 5))   # 4
print(guvenli_index(sayilar, 10))  # -1
```

#### count() - Elemanın Kaç Kez Geçtiğini Sayma

```python
sayilar = [1, 2, 2, 3, 2, 4, 5, 2]

# count() - elemanın kaç kez geçtiğini sayma
print(sayilar.count(2))      # 4
print(sayilar.count(1))      # 1
print(sayilar.count(10))     # 0

# Pratik örnek - En çok geçen elemanı bulma
def en_cok_gecen(liste):
    if not liste:
        return None
    
    en_cok_eleman = liste[0]
    en_cok_sayi = liste.count(liste[0])
    
    for eleman in liste:
        sayi = liste.count(eleman)
        if sayi > en_cok_sayi:
            en_cok_sayi = sayi
            en_cok_eleman = eleman
    
    return en_cok_eleman, en_cok_sayi

sonuc = en_cok_gecen(sayilar)
print(f"En çok geçen: {sonuc[0]} ({sonuc[1]} kez)")
```

#### sort() - Sıralama

```python
sayilar = [3, 1, 4, 1, 5, 9, 2, 6]

# sort() - sıralama (listeyi değiştirir)
sayilar.sort()
print(sayilar)  # [1, 1, 2, 3, 4, 5, 6, 9]

# Ters sıralama
sayilar.sort(reverse=True)
print(sayilar)  # [9, 6, 5, 4, 3, 2, 1, 1]

# String listesi sıralama
kelimeler = ["Python", "Java", "C++", "JavaScript"]
kelimeler.sort()
print(kelimeler)  # ['C++', 'Java', 'JavaScript', 'Python']

# Karma tip liste sıralama
karma = [3, "Python", 1, "Java"]
# karma.sort()  # TypeError: '<' not supported between instances of 'str' and 'int'
```

#### sorted() - Yeni Sıralı Liste Oluşturma

```python
sayilar = [3, 1, 4, 1, 5, 9, 2, 6]

# sorted() - yeni sıralı liste oluşturur (orijinali değiştirmez)
sirali = sorted(sayilar)
print(sayilar)  # [3, 1, 4, 1, 5, 9, 2, 6] (değişmedi)
print(sirali)    # [1, 1, 2, 3, 4, 5, 6, 9]

# Ters sıralama
ters_sirali = sorted(sayilar, reverse=True)
print(ters_sirali)  # [9, 6, 5, 4, 3, 2, 1, 1]
```

#### reverse() - Ters Çevirme

```python
sayilar = [1, 2, 3, 4, 5]

# reverse() - ters çevirme (listeyi değiştirir)
sayilar.reverse()
print(sayilar)  # [5, 4, 3, 2, 1]

# reversed() - yeni ters liste oluşturur
sayilar2 = [1, 2, 3, 4, 5]
ters_liste = list(reversed(sayilar2))
print(sayilar2)     # [1, 2, 3, 4, 5] (değişmedi)
print(ters_liste)   # [5, 4, 3, 2, 1]
```

### 4. Kopyalama

#### Sığ Kopya (Shallow Copy)

```python
# Sığ kopya (shallow copy)
liste1 = [1, 2, 3]
liste2 = liste1.copy()  # veya liste2 = liste1[:]
liste2[0] = 10
print(liste1)  # [1, 2, 3] (değişmedi)
print(liste2)  # [10, 2, 3]

# İç içe listelerde sorun
liste3 = [[1, 2], [3, 4]]
liste4 = liste3.copy()
liste4[0][0] = 10
print(liste3)  # [[10, 2], [3, 4]] (değişti!)
print(liste4)  # [[10, 2], [3, 4]]
```

#### Derin Kopya (Deep Copy)

```python
import copy

# Derin kopya (deep copy) - iç içe listeler için
liste3 = [[1, 2], [3, 4]]
liste4 = copy.deepcopy(liste3)
liste4[0][0] = 10
print(liste3)  # [[1, 2], [3, 4]] (değişmedi)
print(liste4)  # [[10, 2], [3, 4]]
```

## Liste Comprehension

Liste comprehension, liste oluşturmanın kısa ve etkili bir yoludur.

### Temel Liste Comprehension

```python
# Temel liste comprehension
sayilar = [1, 2, 3, 4, 5]
kareler = [x**2 for x in sayilar]
print(kareler)  # [1, 4, 9, 16, 25]

# String listesi
kelimeler = ["Python", "Java", "C++"]
buyuk_harfler = [kelime.upper() for kelime in kelimeler]
print(buyuk_harfler)  # ['PYTHON', 'JAVA', 'C++']

# Karakter listesi
metin = "Python"
karakterler = [harf for harf in metin]
print(karakterler)  # ['P', 'y', 't', 'h', 'o', 'n']
```

### Koşullu Liste Comprehension

```python
sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Koşullu liste comprehension
cift_sayilar = [x for x in sayilar if x % 2 == 0]
print(cift_sayilar)  # [2, 4, 6, 8, 10]

tek_sayilar = [x for x in sayilar if x % 2 == 1]
print(tek_sayilar)  # [1, 3, 5, 7, 9]

# Pozitif sayılar
sayilar2 = [-3, 1, -5, 2, 0, 8, -1, 4]
pozitif = [x for x in sayilar2 if x > 0]
print(pozitif)  # [1, 2, 8, 4]

# String filtreleme
kelimeler = ["Python", "Java", "C++", "JavaScript", "PHP"]
uzun_kelimeler = [kelime for kelime in kelimeler if len(kelime) > 4]
print(uzun_kelimeler)  # ['Python', 'JavaScript']
```

### Karmaşık Liste Comprehension

```python
# Karmaşık örnek
metin = "Python Programlama"
buyuk_harfler = [harf.upper() for harf in metin if harf.isalpha()]
print(buyuk_harfler)  # ['P', 'Y', 'T', 'H', 'O', 'N', 'P', 'R', 'O', 'G', 'R', 'A', 'M', 'L', 'A', 'M', 'A']

# İç içe liste comprehension
matris = [[i+j for j in range(3)] for i in range(3)]
print(matris)  # [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

# Koşullu dönüşüm
sayilar = [1, 2, 3, 4, 5]
donusum = [x*2 if x % 2 == 0 else x*3 for x in sayilar]
print(donusum)  # [3, 4, 9, 8, 15]
```

## İç İçe Listeler (Nested Lists)

### 2D Liste (Matris)

```python
# 2D liste (matris)
matris = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matris[0])      # [1, 2, 3]
print(matris[0][1])   # 2
print(matris[1][2])   # 6

# Matris işlemleri
for satir in matris:
    for eleman in satir:
        print(eleman, end=" ")
    print()  # Yeni satır

# Matris oluşturma
def matris_olustur(satir, sutun):
    return [[0 for j in range(sutun)] for i in range(satir)]

yeni_matris = matris_olustur(3, 4)
print(yeni_matris)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

### 3D Liste

```python
# 3D liste
kup = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]

print(kup[0])         # [[1, 2], [3, 4]]
print(kup[0][1])      # [3, 4]
print(kup[0][1][0])   # 3

# 3D liste oluşturma
def kup_olustur(boyut):
    return [[[0 for k in range(boyut)] for j in range(boyut)] for i in range(boyut)]

yeni_kup = kup_olustur(2)
print(yeni_kup)  # [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
```

## Pratik Liste Örnekleri

### 1. Liste Filtreleme

```python
def pozitif_sayilar(liste):
    return [x for x in liste if x > 0]

def cift_sayilar(liste):
    return [x for x in liste if x % 2 == 0]

def tek_sayilar(liste):
    return [x for x in liste if x % 2 == 1]

# Test
sayilar = [-3, 1, -5, 2, 0, 8, -1, 4]
print(f"Pozitif sayılar: {pozitif_sayilar(sayilar)}")
print(f"Çift sayılar: {cift_sayilar(sayilar)}")
print(f"Tek sayılar: {tek_sayilar(sayilar)}")
```

### 2. Liste İstatistikleri

```python
def liste_istatistikleri(liste):
    if not liste:
        return None
    
    return {
        'toplam': sum(liste),
        'ortalama': sum(liste) / len(liste),
        'minimum': min(liste),
        'maksimum': max(liste),
        'uzunluk': len(liste),
        'medyan': sorted(liste)[len(liste)//2] if len(liste) % 2 == 1 else (sorted(liste)[len(liste)//2-1] + sorted(liste)[len(liste)//2]) / 2
    }

# Test
sayilar = [10, 20, 30, 40, 50]
istatistikler = liste_istatistikleri(sayilar)
for key, value in istatistikler.items():
    print(f"{key}: {value}")
```

### 3. Liste Birleştirme ve Temizleme

```python
def listeleri_birlestir(liste1, liste2):
    # Tekrarlayan elemanları çıkararak birleştir
    birlesik = liste1 + liste2
    return list(set(birlesik))

def tekrarlari_temizle(liste):
    # Sırayı koruyarak tekrarları temizle
    temiz = []
    for eleman in liste:
        if eleman not in temiz:
            temiz.append(eleman)
    return temiz

def tekrarlari_say(liste):
    # Her elemanın kaç kez geçtiğini say
    sayac = {}
    for eleman in liste:
        if eleman in sayac:
            sayac[eleman] += 1
        else:
            sayac[eleman] = 1
    return sayac

# Test
liste1 = [1, 2, 3, 4]
liste2 = [3, 4, 5, 6]
print(f"Birleştirilmiş: {listeleri_birlestir(liste1, liste2)}")

tekrarli = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
print(f"Temizlenmiş: {tekrarlari_temizle(tekrarli)}")
print(f"Tekrar sayıları: {tekrarlari_say(tekrarli)}")
```

### 4. Liste Sıralama ve Arama

```python
def en_buyuk_n_eleman(liste, n):
    # En büyük n elemanı döndür
    return sorted(liste, reverse=True)[:n]

def en_kucuk_n_eleman(liste, n):
    # En küçük n elemanı döndür
    return sorted(liste)[:n]

def ikinci_en_buyuk(liste):
    # İkinci en büyük elemanı bul
    if len(liste) < 2:
        return None
    sirali = sorted(liste, reverse=True)
    return sirali[1]

# Test
sayilar = [10, 5, 20, 15, 30, 25]
print(f"En büyük 3 eleman: {en_buyuk_n_eleman(sayilar, 3)}")
print(f"En küçük 3 eleman: {en_kucuk_n_eleman(sayilar, 3)}")
print(f"İkinci en büyük: {ikinci_en_buyuk(sayilar)}")
```

### 5. Liste Dönüşümleri

```python
def liste_donustur(liste, islem):
    # Liste elemanlarını dönüştür
    if islem == "kare":
        return [x**2 for x in liste]
    elif islem == "kup":
        return [x**3 for x in liste]
    elif islem == "mutlak":
        return [abs(x) for x in liste]
    elif islem == "string":
        return [str(x) for x in liste]
    else:
        return liste

def liste_filtrele_donustur(liste, kosul, islem):
    # Koşula uyan elemanları dönüştür
    return [islem(x) for x in liste if kosul(x)]

# Test
sayilar = [-3, 1, -5, 2, 0, 8, -1, 4]
print(f"Kareler: {liste_donustur(sayilar, 'kare')}")
print(f"Mutlak değerler: {liste_donustur(sayilar, 'mutlak')}")
print(f"Pozitif sayıların kareleri: {liste_filtrele_donustur(sayilar, lambda x: x > 0, lambda x: x**2)}")
```

## Pratik Alıştırmalar

**Alıştırma 1:** Bir listedeki en büyük 3 elemanı bulan fonksiyon yazın.

```python
def en_buyuk_uc(liste):
    return sorted(liste, reverse=True)[:3]

# Test
sayilar = [10, 5, 20, 15, 30, 25]
print(en_buyuk_uc(sayilar))  # [30, 25, 20]
```

**Alıştırma 2:** İki listeyi eleman eleman toplayan fonksiyon yazın.

```python
def listeleri_topla(liste1, liste2):
    return [a + b for a, b in zip(liste1, liste2)]

# Test
liste1 = [1, 2, 3, 4]
liste2 = [5, 6, 7, 8]
print(listeleri_topla(liste1, liste2))  # [6, 8, 10, 12]
```

**Alıştırma 3:** Bir listedeki elemanları ters sırada döndüren fonksiyon yazın.

```python
def ters_liste(liste):
    return liste[::-1]

# Test
sayilar = [1, 2, 3, 4, 5]
print(ters_liste(sayilar))  # [5, 4, 3, 2, 1]
```

**Alıştırma 4:** Bir listedeki tekrarlayan elemanları bulan fonksiyon yazın.

```python
def tekrarlayan_elemanlar(liste):
    tekrarlar = []
    for eleman in liste:
        if liste.count(eleman) > 1 and eleman not in tekrarlar:
            tekrarlar.append(eleman)
    return tekrarlar

# Test
sayilar = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
print(tekrarlayan_elemanlar(sayilar))  # [2, 3, 4]
```

**Alıştırma 5:** Bir listeyi belirli bir elemana göre bölen fonksiyon yazın.

```python
def listeyi_bol(liste, ayrac):
    sonuclar = []
    gecici = []
    
    for eleman in liste:
        if eleman == ayrac:
            if gecici:
                sonuclar.append(gecici)
                gecici = []
        else:
            gecici.append(eleman)
    
    if gecici:
        sonuclar.append(gecici)
    
    return sonuclar

# Test
sayilar = [1, 2, 0, 3, 4, 0, 5, 6]
print(listeyi_bol(sayilar, 0))  # [[1, 2], [3, 4], [5, 6]]
```

## İleri Seviye Liste İşlemleri

### Lambda Fonksiyonları ile Liste İşlemleri

```python
# map() ile liste işlemleri
sayilar = [1, 2, 3, 4, 5]
kareler = list(map(lambda x: x**2, sayilar))
print(kareler)  # [1, 4, 9, 16, 25]

# filter() ile filtreleme
cift_sayilar = list(filter(lambda x: x % 2 == 0, sayilar))
print(cift_sayilar)  # [2, 4]

# reduce() ile toplama
from functools import reduce
toplam = reduce(lambda x, y: x + y, sayilar)
print(toplam)  # 15

# Karmaşık örnek
karma_liste = [1, "Python", 3.14, True, "Java"]
sayilar = list(filter(lambda x: isinstance(x, (int, float)), karma_liste))
print(sayilar)  # [1, 3.14]
```

### Liste Comprehension ile Gelişmiş İşlemler

```python
# İç içe liste comprehension
matris = [[i*j for j in range(1, 6)] for i in range(1, 6)]
print(matris)

# Koşullu dönüşüm
sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
donusum = [x*2 if x % 2 == 0 else x*3 for x in sayilar]
print(donusum)

# Çoklu koşul
sonuclar = []
for x in sayilar:
    if x < 5:
        sonuclar.append(x*2)
    elif x < 8:
        sonuclar.append(x*3)
    else:
        sonuclar.append(x*4)
print(sonuclar)

# Liste comprehension ile aynı işlem
sonuclar2 = [x*2 if x < 5 else x*3 if x < 8 else x*4 for x in sayilar]
print(sonuclar2)
```

## Genel Pratik Projeleri

### Proje 1: Öğrenci Not Sistemi
- Öğrenci bilgilerini listelerde saklama
- Not hesaplama ve sıralama
- Ortalama ve istatistikler

### Proje 2: Basit Veritabanı
- CSV formatında veri saklama
- Arama ve filtreleme
- Veri ekleme ve silme

### Proje 3: Oyun Skor Sistemi
- Oyuncu skorlarını saklama
- En yüksek skorları listeleme
- Ortalama skor hesaplama

### Proje 4: Basit Hesap Makinesi
- İşlem geçmişini saklama
- Son işlemleri listeleme
- İstatistik hesaplama

### Proje 5: Dosya İşleme Sistemi
- Dosya listelerini yönetme
- Dosya boyutlarını hesaplama
- Filtreleme ve sıralama

---

## Özet

Bu rehberde Python'da liste işlemleri hakkında detaylı bilgi edindiniz:

### Temel Kavramlar:
- **Index mantığı**: 0'dan başlayan pozisyon numaraları
- **Negatif index**: Sondan başlayarak erişim
- **Slicing**: Belirli kısımları alma
- **Mutable**: Listeler değiştirilebilir

### En Çok Kullanılan Metodlar:
- **Ekleme**: append(), insert(), extend()
- **Silme**: remove(), pop(), del, clear()
- **Arama**: index(), count()
- **Sıralama**: sort(), sorted(), reverse()
- **Kopyalama**: copy(), deepcopy()

### Özel Özellikler:
- **Liste Comprehension**: Kısa ve etkili liste oluşturma
- **İç içe listeler**: Matris ve 3D yapılar
- **Farklı tipler**: Aynı listede farklı veri tipleri

### Pratik Uygulamalar:
- Liste filtreleme ve dönüştürme
- İstatistik hesaplama
- Veri işleme ve analiz
- Algoritma uygulamaları

**ÖNEMLİ:** Index mantığını iyice anlayın - 0'dan başlar ve negatif indexler sondan başlar!

Her bölümdeki pratik alıştırmaları yaparak konuları pekiştirin ve projelerle gerçek uygulamalar geliştirin. 