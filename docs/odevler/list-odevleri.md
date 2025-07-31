# Python Liste Ödevleri

## GENEL TALİMATLAR
- **Liste** veri yapısını kullanın
- Primitif veri tipleri kullanın (int, float, string, boolean)
- Dictionary kullanmayın
- Her ödevde yorum satırları ekleyin
- Kullanıcı girişlerini kontrol edin
- Liste metodlarını aktif olarak kullanın

---

## Ödev 1: Not Ortalaması Hesaplama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan 5 adet not alın ve bunları bir listede saklayın. Bu notların:
- Ortalamasını
- En yüksek notu
- En düşük notu
- Kaç tane geçer not olduğunu (50 ve üzeri)

hesaplayın ve ekrana yazdırın.

**Örnek Çıktı:**
```
1. notu girin: 85
2. notu girin: 92
3. notu girin: 78
4. notu girin: 95
5. notu girin: 88

Notlar: [85, 92, 78, 95, 88]
Ortalama: 87.6
En yüksek not: 95
En düşük not: 78
Geçer not sayısı: 5
```

**İpuçları:**
- Boş liste oluşturun
- append() ile notları ekleyin
- sum(), max(), min() fonksiyonlarını kullanın
- List comprehension ile geçer notları filtreleyin

---

## Ödev 2: Sayı Filtreleme (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan 10 adet sayı alın. Bu sayıları bir listede saklayın ve:
- Çift sayıları ayrı bir listeye
- Tek sayıları ayrı bir listeye
- 5'ten büyük sayıları ayrı bir listeye

ayırın ve ekrana yazdırın.

**Örnek Çıktı:**
```
1. sayıyı girin: 3
2. sayıyı girin: 8
3. sayıyı girin: 12
4. sayıyı girin: 5
5. sayıyı girin: 7
6. sayıyı girin: 2
7. sayıyı girin: 15
8. sayıyı girin: 4
9. sayıyı girin: 9
10. sayıyı girin: 6

Tüm sayılar: [3, 8, 12, 5, 7, 2, 15, 4, 9, 6]
Çift sayılar: [8, 12, 2, 4, 6]
Tek sayılar: [3, 5, 7, 15, 9]
5'ten büyük sayılar: [8, 12, 7, 15, 9, 6]
```

**İpuçları:**
- List comprehension kullanın
- Modulo operatörü (%) ile çift/tek kontrolü
- Karşılaştırma operatörleri ile filtreleme

---

## Ödev 3: Liste Sıralama ve Arama (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan 8 adet isim alın. Bu isimleri bir listede saklayın ve:
- İsimleri alfabetik sıraya dizin
- En uzun ismi bulun
- En kısa ismi bulun
- Belirli bir ismin listede olup olmadığını kontrol edin

**Örnek Çıktı:**
```
1. ismi girin: Ahmet
2. ismi girin: Zeynep
3. ismi girin: Mehmet
4. ismi girin: Ayşe
5. ismi girin: Mustafa
6. ismi girin: Fatma
7. ismi girin: Ali
8. ismi girin: Elif

Orijinal liste: ['Ahmet', 'Zeynep', 'Mehmet', 'Ayşe', 'Mustafa', 'Fatma', 'Ali', 'Elif']
Sıralı liste: ['Ahmet', 'Ali', 'Ayşe', 'Elif', 'Fatma', 'Mehmet', 'Mustafa', 'Zeynep']
En uzun isim: Mustafa (7 harf)
En kısa isim: Ali (3 harf)

Aranacak ismi girin: Ayşe
Ayşe listede bulundu! (İndeks: 2)
```

**İpuçları:**
- sort() metodu ile sıralama
- len() fonksiyonu ile uzunluk kontrolü
- max() ve min() fonksiyonları ile en uzun/kısa bulma
- in operatörü ile arama

---

## Ödev 4: Liste Manipülasyonu (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan 6 adet sayı alın. Bu sayıları bir listede saklayın ve:
- İlk 3 sayıyı silin
- Sona 3 yeni sayı ekleyin
- Ortadaki 2 sayıyı değiştirin
- Listenin tersini alın

**Örnek Çıktı:**
```
1. sayıyı girin: 10
2. sayıyı girin: 20
3. sayıyı girin: 30
4. sayıyı girin: 40
5. sayıyı girin: 50
6. sayıyı girin: 60

Orijinal liste: [10, 20, 30, 40, 50, 60]

İlk 3 sayı silindi: [40, 50, 60]

Sona 3 sayı eklendi: [40, 50, 60, 100, 200, 300]

Ortadaki 2 sayı değiştirildi: [40, 999, 888, 100, 200, 300]

Ters liste: [300, 200, 100, 888, 999, 40]
```

**İpuçları:**
- del komutu veya pop() ile silme
- append() ile ekleme
- İndeks ile değiştirme
- reverse() metodu ile ters çevirme

---

## Ödev 5: Matris İşlemleri (Orta)
**Zorluk:** ⭐⭐⭐☆☆

3x3'lük bir matris oluşturun ve:
- Matrisi ekrana yazdırın
- Ana köşegen elemanlarının toplamını bulun
- Yan köşegen elemanlarının toplamını bulun
- En büyük elemanı bulun

**Örnek Çıktı:**
```
Matris:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Ana köşegen: [1, 5, 9] = 15
Yan köşegen: [3, 5, 7] = 15
En büyük eleman: 9
```

**Gelişmiş versiyon:**
```
Matris:
1  2  3
4  5  6
7  8  9

Ana köşegen toplamı: 15
Yan köşegen toplamı: 15
En büyük eleman: 9 (konum: [2][2])
```

**İpuçları:**
- İç içe liste oluşturun
- İndeks ile köşegen elemanlarına erişin
- max() fonksiyonu ile en büyük elemanı bulun

---

## Ödev 6: Liste İstatistikleri (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan 12 adet sayı alın. Bu sayıların:
- Ortalamasını
- Medyanını (ortadaki değer)
- Modunu (en çok tekrar eden)
- Varyansını (ortalama sapma)

hesaplayın.

**Örnek Çıktı:**
```
Sayıları girin:
1: 5
2: 8
3: 5
4: 12
5: 3
6: 8
7: 5
8: 9
9: 7
10: 8
11: 4
12: 6

Sayılar: [5, 8, 5, 12, 3, 8, 5, 9, 7, 8, 4, 6]
Ortalama: 6.67
Medyan: 6.5
Mod: 5 ve 8 (her biri 3 kez)
Varyans: 6.22
```

**İpuçları:**
- sorted() ile sıralama
- count() metodu ile tekrar sayısı
- İstatistiksel hesaplamalar için matematiksel formüller

---

## Ödev 7: Liste Birleştirme ve Ayırma (Kolay)
**Zorluk:** ⭐⭐☆☆☆

İki ayrı liste oluşturun:
- İlk liste: 1'den 10'a kadar sayılar
- İkinci liste: 11'den 20'ye kadar sayılar

Bu listeleri:
- Birleştirin
- Karıştırın
- İlk yarısını alın
- İkinci yarısını alın

**Örnek Çıktı:**
```
Liste 1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Liste 2: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

Birleştirilmiş: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

Karıştırılmış: [15, 3, 19, 7, 11, 1, 17, 9, 13, 5, 20, 2, 16, 8, 14, 6, 18, 4, 12, 10]

İlk yarı: [15, 3, 19, 7, 11, 1, 17, 9, 13, 5]
İkinci yarı: [20, 2, 16, 8, 14, 6, 18, 4, 12, 10]
```

**İpuçları:**
- extend() veya + operatörü ile birleştirme
- random.shuffle() ile karıştırma
- Slicing ile yarıya bölme

---

## Ödev 8: Liste Temizleme (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan 15 adet sayı alın. Bu listeden:
- Tekrar eden sayıları silin
- Negatif sayıları silin
- 100'den büyük sayıları silin
- Kalan sayıları sıralayın

**Örnek Çıktı:**
```
Orijinal liste: [5, 12, -3, 8, 5, 150, 12, 7, -8, 25, 8, 99, 5, 200, 15]

Tekrarlar silindi: [5, 12, -3, 8, 150, 7, -8, 25, 99, 200, 15]

Negatif sayılar silindi: [5, 12, 8, 150, 7, 25, 99, 200, 15]

100'den büyük sayılar silindi: [5, 12, 8, 7, 25, 99, 15]

Sıralı liste: [5, 7, 8, 12, 15, 25, 99]
```

**İpuçları:**
- List comprehension ile filtreleme
- set() ile tekrarları silme
- Karşılaştırma operatörleri ile filtreleme

---

## Ödev 9: Liste Dönüşümleri (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan 10 adet string alın. Bu stringleri:
- Büyük harfe çevirin
- Küçük harfe çevirin
- İlk harflerini büyük yapın
- Uzunluklarına göre sıralayın

**Örnek Çıktı:**
```
1. kelime: python
2. kelime: PROGRAMLAMA
3. kelime: Dili
4. kelime: çok
5. kelime: GÜZEL
6. kelime: bir
7. kelime: DİL
8. kelime: öğrenmesi
9. kelime: KOLAY
10. kelime: ama

Orijinal: ['python', 'PROGRAMLAMA', 'Dili', 'çok', 'GÜZEL', 'bir', 'DİL', 'öğrenmesi', 'KOLAY', 'ama']

Büyük harf: ['PYTHON', 'PROGRAMLAMA', 'DİLİ', 'ÇOK', 'GÜZEL', 'BİR', 'DİL', 'ÖĞRENMESİ', 'KOLAY', 'AMA']

Küçük harf: ['python', 'programlama', 'dili', 'çok', 'güzel', 'bir', 'dil', 'öğrenmesi', 'kolay', 'ama']

İlk harf büyük: ['Python', 'Programlama', 'Dili', 'Çok', 'Güzel', 'Bir', 'Dil', 'Öğrenmesi', 'Kolay', 'Ama']

Uzunluğa göre sıralı: ['ama', 'bir', 'çok', 'dil', 'Dili', 'Kolay', 'Python', 'Güzel', 'Programlama', 'Öğrenmesi']
```

**İpuçları:**
- upper(), lower(), title() metodları
- List comprehension ile dönüşüm
- key parametresi ile sıralama

---

## Ödev 10: Liste Analizi (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan 20 adet sayı alın. Bu sayıların:
- Kaç tanesi asal sayı
- Kaç tanesi mükemmel sayı
- Kaç tanesi palindrom sayı
- Kaç tanesi Armstrong sayısı

olduğunu bulun.

**Örnek Çıktı:**
```
Sayıları girin:
1: 7
2: 28
3: 121
4: 153
5: 13
...

Sayılar: [7, 28, 121, 153, 13, ...]

Analiz sonuçları:
Asal sayılar: 5 adet [7, 13, 17, 19, 23]
Mükemmel sayılar: 1 adet [28]
Palindrom sayılar: 3 adet [121, 131, 141]
Armstrong sayıları: 2 adet [153, 370]
```

**İpuçları:**
- Asal sayı kontrolü için bölen sayısı
- Mükemmel sayı: bölenlerinin toplamı kendisine eşit
- Palindrom: tersi kendisine eşit
- Armstrong: basamaklarının küplerinin toplamı kendisine eşit

--- 