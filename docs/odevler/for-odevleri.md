# Python For Döngüsü Ödevleri

## GENEL TALİMATLAR
- Sadece **for döngüsü** kullanın
- Primitif veri tipleri kullanın (int, float, string, boolean)
- List ve dictionary kullanmayın
- Her ödevde yorum satırları ekleyin
- Kullanıcı girişlerini kontrol edin

---

## Ödev 1: Karakter Analizi (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir kelime alın. Bu kelimede:
- Kaç tane sesli harf olduğunu
- Kaç tane ünsüz harf olduğunu  
- Toplam karakter sayısını
- En çok tekrar eden karakteri

for döngüsü kullanarak bulun ve ekrana yazdırın.

**Örnek Çıktı:**
```
Kelime girin: python
Sesli harf sayısı: 1 (y, o)
Ünsüz harf sayısı: 5 (p, t, h, n)
Toplam karakter: 6
En çok tekrar eden: Hepsi eşit (her karakter 1 kez)
```

**İpuçları:**
- Sesli harfler: "aeıioöuüAEIİOÖUÜ"
- Her karakteri tek tek kontrol edin
- En çok tekrar eden için her karakteri sayın

```python
# kodunuzu buraya yazin.
```

---

## Ödev 2: Çarpım Tablosu Matrisi (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan bir sayı alın (1-12 arası). Bu sayıya kadar olan tüm sayıların çarpım tablolarını matris şeklinde ekrana yazdırın.

**Örnek Çıktı (n=4):**
```
     1   2   3   4
  1  1   2   3   4
  2  2   4   6   8
  3  3   6   9  12
  4  4   8  12  16
```

**İpuçları:**
- İç içe for döngüleri kullanın
- Sayıları düzgün hizalamak için format kullanın
- İlk satır ve sütun başlık olacak

```python
# kodunuzu buraya yazin.
```

---

## Ödev 3: Fibonacci Paterni (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Fibonacci serisinin ilk 10 terimini kullanarak aşağıdaki deseni oluşturun:

**Beklenen Çıktı:**
```
0
0 1
0 1 1
0 1 1 2
0 1 1 2 3
0 1 1 2 3 5
0 1 1 2 3 5 8
0 1 1 2 3 5 8 13
0 1 1 2 3 5 8 13 21
0 1 1 2 3 5 8 13 21 34
```

**İpuçları:**
- Önce Fibonacci sayılarını hesaplayın
- Her satırda o satır numarasına kadar Fibonacci sayısı yazdırın
- İç içe döngü kullanın

```python
# kodunuzu buraya yazin.
```

---

## Ödev 4: ASCII Sanat Piramidi (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan bir yükseklik değeri alın ve aşağıdaki ASCII piramidini çizin:

**Örnek (yükseklik=5):**
```
    *
   ***
  *****
 *******
*********
```

**Kurallar:**
- Her satırda yıldız sayısı: 2n-1 (n = satır numarası)
- Piramit ortada hizalı olmalı
- Boşluk sayısı: yükseklik - satır numarası

**İpuçları:**
- İç içe döngü kullanın
- İlk döngü boşluklar, ikinci döngü yıldızlar için

```python
# kodunuzu buraya yazin.
```

---

## Ödev 5: Çift Sayı Toplama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-50 arası). 1'den bu sayıya kadar olan çift sayıların toplamını for döngüsü kullanarak hesaplayın.

**Örnek Çıktı:**
```
Sayı girin: 10
Çift sayılar: 2, 4, 6, 8, 10
Toplam: 30
```

**Gelişmiş versiyon:**
```
Sayı girin: 15
Çift sayılar: 2 + 4 + 6 + 8 + 10 + 12 + 14 = 56
Toplam: 56
```

**İpuçları:**
- 1'den girilen sayıya kadar for döngüsü kullanın
- Her sayının çift olup olmadığını kontrol edin
- Çift sayıları toplam değişkenine ekleyin

```python
# kodunuzu buraya yazin.
```

---

## Ödev 6: Sayı Özellikleri (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-100 arası). Bu sayının:
- Çift mi tek mi olduğunu
- Kaç basamaklı olduğunu
- Basamaklarının toplamını
- Basamaklarının çarpımını
- Basamaklarının ortalamasını

for döngüsü kullanarak bulun ve ekrana yazdırın.

**Örnek Çıktı:**
```
Sayı girin: 123
Çift/Tek: Tek
Basamak sayısı: 3
Basamaklar toplamı: 6 (1+2+3)
Basamaklar çarpımı: 6 (1*2*3)
Basamaklar ortalaması: 2.0
```

**İpuçları:**
- Sayıyı string'e çevirip karakter karakter dolaşın
- Her karakteri int'e çevirip işlem yapın

```python
# kodunuzu buraya yazin.
```

---

## Ödev 7: Kelime Sayma (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

Kullanıcıdan bir cümle alın. Bu cümlede kaç kelime olduğunu for döngüsü kullanarak bulun.

**Örnek Çıktı:**
```
Cümle girin: Python programlama dili çok güzel
Kelime sayısı: 5
```

**İpuçları:**
- Boşluk karakterlerini sayarak kelime sayısını bulun
- Kelime sayısı = boşluk sayısı + 1

```python
# kodunuzu buraya yazin.
```

---

## Ödev 8: Sayı Deseni (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-10 arası). Aşağıdaki deseni oluşturun:

**Örnek (n=4):**
```
1
1 2
1 2 3
1 2 3 4
```

**Gelişmiş versiyon (n=4):**
```
   1
  1 2
 1 2 3
1 2 3 4
```

**İpuçları:**
- İç içe for döngüleri kullanın
- Dış döngü satır sayısı, iç döngü sütun sayısı için

```python
# kodunuzu buraya yazin.
```

---

## Ödev 9: Çarpım Tablosu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-10 arası). Bu sayının çarpım tablosunu for döngüsü kullanarak ekrana yazdırın.

**Örnek Çıktı:**
```
Sayı girin: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

**İpuçları:**
- 1'den 10'a kadar for döngüsü kullanın
- Her adımda çarpım sonucunu yazdırın

```python
# kodunuzu buraya yazin.
```

---

## Ödev 10: Toplam Hesaplama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-100 arası). 1'den bu sayıya kadar olan tüm sayıların toplamını for döngüsü kullanarak hesaplayın.

**Örnek Çıktı:**
```
Sayı girin: 5
1 + 2 + 3 + 4 + 5 = 15
Toplam: 15
```

**Gelişmiş versiyon:**
```
Sayı girin: 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
Toplam: 55
```

**İpuçları:**
- 1'den girilen sayıya kadar for döngüsü kullanın
- Her sayıyı toplam değişkenine ekleyin
- İsteğe bağlı: İşlemi de ekrana yazdırın

---