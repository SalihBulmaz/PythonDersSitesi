# Python Listeler (Lists)

## Giriş

Listeler, Python'da en çok kullanılan veri yapılarından biridir. Farklı veri türlerini içerebilen, değiştirilebilir (mutable) koleksiyonlardır.

## Liste Oluşturma

### Temel Liste Oluşturma
```python
# Boş liste
bos_liste = []
bos_liste2 = list()

# Elemanlı liste
meyveler = ["elma", "armut", "muz"]
sayilar = [1, 2, 3, 4, 5]
karisik = [1, "iki", 3.0, True]

print(meyveler)  # ['elma', 'armut', 'muz']
print(type(meyveler))  # <class 'list'>
```

### List Comprehension ile Liste Oluşturma
```python
# 1'den 10'a kadar sayılar
sayilar = [i for i in range(1, 11)]
print(sayilar)  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Çift sayılar
cift_sayilar = [i for i in range(2, 21, 2)]
print(cift_sayilar)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Kareleri
kareler = [i**2 for i in range(1, 6)]
print(kareler)  # [1, 4, 9, 16, 25]
```

## Liste Elemanlarına Erişim

### İndeks ile Erişim
```python
meyveler = ["elma", "armut", "muz", "portakal", "kiraz"]

# İlk eleman (indeks 0)
print(meyveler[0])  # elma

# Son eleman
print(meyveler[-1])  # kiraz
print(meyveler[len(meyveler)-1])  # kiraz

# Belirli bir eleman
print(meyveler[2])  # muz
```

### Slicing (Dilimleme)
```python
sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Belirli aralık
print(sayilar[2:5])    # [2, 3, 4]
print(sayilar[1:8:2])  # [1, 3, 5, 7]

# Baştan belirli noktaya
print(sayilar[:3])     # [0, 1, 2]

# Belirli noktadan sona
print(sayilar[7:])     # [7, 8, 9]

# Ters sıralama
print(sayilar[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# 2'şer atlayarak
print(sayilar[::2])    # [0, 2, 4, 6, 8]
```

## Liste İşlemleri

### Eleman Ekleme
```python
meyveler = ["elma", "armut"]

# Sona ekleme
meyveler.append("muz")
print(meyveler)  # ['elma', 'armut', 'muz']

# Belirli konuma ekleme
meyveler.insert(1, "kiraz")
print(meyveler)  # ['elma', 'kiraz', 'armut', 'muz']

# Birden fazla eleman ekleme
meyveler.extend(["portakal", "mandalina"])
print(meyveler)  # ['elma', 'kiraz', 'armut', 'muz', 'portakal', 'mandalina']
```

### Eleman Silme
```python
meyveler = ["elma", "kiraz", "armut", "muz", "portakal"]

# Değere göre silme
meyveler.remove("kiraz")
print(meyveler)  # ['elma', 'armut', 'muz', 'portakal']

# İndekse göre silme
silinen = meyveler.pop(1)  # armut'u sil ve döndür
print(silinen)  # armut
print(meyveler)  # ['elma', 'muz', 'portakal']

# Son elemanı silme
son_eleman = meyveler.pop()
print(son_eleman)  # portakal
print(meyveler)  # ['elma', 'muz']

# Tüm elemanları silme
meyveler.clear()
print(meyveler)  # []
```

### Eleman Değiştirme
```python
meyveler = ["elma", "armut", "muz"]

# Tek eleman değiştirme
meyveler[1] = "kiraz"
print(meyveler)  # ['elma', 'kiraz', 'muz']

# Dilimleme ile değiştirme
meyveler[0:2] = ["portakal", "mandalina"]
print(meyveler)  # ['portakal', 'mandalina', 'muz']
```

## Liste Metodları

### Arama ve Kontrol
```python
meyveler = ["elma", "armut", "muz", "elma", "kiraz"]

# Eleman sayısı
print(len(meyveler))  # 5

# Eleman var mı?
print("muz" in meyveler)  # True
print("portakal" in meyveler)  # False

# İlk bulunan elemanın indeksi
print(meyveler.index("elma"))  # 0

# Eleman sayısı
print(meyveler.count("elma"))  # 2
```

### Sıralama ve Ters Çevirme
```python
sayilar = [3, 1, 4, 1, 5, 9, 2, 6]

# Sıralama (orijinal listeyi değiştirir)
sayilar.sort()
print(sayilar)  # [1, 1, 2, 3, 4, 5, 6, 9]

# Ters sıralama
sayilar.sort(reverse=True)
print(sayilar)  # [9, 6, 5, 4, 3, 2, 1, 1]

# Sıralı kopya (orijinal listeyi değiştirmez)
sayilar = [3, 1, 4, 1, 5, 9, 2, 6]
sirali = sorted(sayilar)
print(sirali)  # [1, 1, 2, 3, 4, 5, 6, 9]
print(sayilar)  # [3, 1, 4, 1, 5, 9, 2, 6] (değişmedi)

# Ters çevirme
sayilar.reverse()
print(sayilar)  # [6, 2, 9, 5, 1, 4, 1, 3]
```

## İç İçe Listeler

### 2D Liste (Matris)
```python
# 3x3 matris
matris = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Elemana erişim
print(matris[0][1])  # 2
print(matris[2][2])  # 9

# Satır ekleme
matris.append([10, 11, 12])
print(matris)
# [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
```

### Liste Comprehension ile Matris
```python
# 3x3 sıfır matrisi
sifir_matris = [[0 for j in range(3)] for i in range(3)]
print(sifir_matris)  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

# Çarpım tablosu
carpim_tablosu = [[i*j for j in range(1, 6)] for i in range(1, 6)]
print(carpim_tablosu)
# [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
```

## Liste ile Döngüler

### For Döngüsü
```python
meyveler = ["elma", "armut", "muz", "kiraz"]

# Elemanları yazdırma
for meyve in meyveler:
    print(meyve)

# İndeks ile döngü
for i in range(len(meyveler)):
    print(f"{i}: {meyveler[i]}")

# enumerate ile indeks ve değer
for i, meyve in enumerate(meyveler):
    print(f"{i}: {meyve}")
```

### While Döngüsü
```python
meyveler = ["elma", "armut", "muz", "kiraz"]
i = 0

while i < len(meyveler):
    print(meyveler[i])
    i += 1
```

## Pratik Örnekler

### Örnek 1: Not Ortalaması
```python
notlar = [85, 90, 78, 92, 88]

# Ortalama hesaplama
toplam = sum(notlar)
ortalama = toplam / len(notlar)

print(f"Notlar: {notlar}")
print(f"Toplam: {toplam}")
print(f"Ortalama: {ortalama:.2f}")
```

### Örnek 2: En Büyük ve En Küçük
```python
sayilar = [23, 45, 12, 67, 34, 89, 56]

en_buyuk = max(sayilar)
en_kucuk = min(sayilar)

print(f"Sayılar: {sayilar}")
print(f"En büyük: {en_buyuk}")
print(f"En küçük: {en_kucuk}")
```

### Örnek 3: Filtreleme
```python
sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Çift sayıları filtreleme
cift_sayilar = [sayi for sayi in sayilar if sayi % 2 == 0]
print(f"Çift sayılar: {cift_sayilar}")

# 5'ten büyük sayıları filtreleme
buyuk_sayilar = [sayi for sayi in sayilar if sayi > 5]
print(f"5'ten büyük sayılar: {buyuk_sayilar}")
```

## Önemli Notlar

1. **Değiştirilebilir (Mutable)**: Listeler değiştirilebilir, elemanları eklenebilir, silinebilir, değiştirilebilir.

2. **Referans**: Liste değişkenleri referans tutar, kopyalama yaparken dikkatli olun.

3. **Performans**: Büyük listelerde `append()` ve `pop()` işlemleri hızlıdır, `insert()` ve `remove()` yavaştır.

4. **Bellek**: Listeler dinamik olarak büyür ve küçülür.

## Alıştırmalar

1. 1'den 20'ye kadar olan sayıları içeren bir liste oluşturun.
2. Bu listeden çift sayıları filtreleyin.
3. Listenin ortalamasını hesaplayın.
4. En büyük 3 sayıyı bulun.
5. Listeyi ters çevirin.

```python
# Çözüm
sayilar = list(range(1, 21))
cift_sayilar = [x for x in sayilar if x % 2 == 0]
ortalama = sum(sayilar) / len(sayilar)
en_buyuk_3 = sorted(sayilar, reverse=True)[:3]
ters_liste = sayilar[::-1]

print(f"Orijinal: {sayilar}")
print(f"Çift sayılar: {cift_sayilar}")
print(f"Ortalama: {ortalama}")
print(f"En büyük 3: {en_buyuk_3}")
print(f"Ters liste: {ters_liste}")
``` 