# Python While Döngüsü Ödevleri

## GENEL TALİMATLAR
- Sadece **while döngüsü** kullanın
- Primitif veri tipleri kullanın (int, float, string, boolean)
- List ve dictionary kullanmayın
- String metodları kullanmayın (split, join, replace vb.)
- ord(), chr() gibi fonksiyonlar kullanmayın
- Her ödevde yorum satırları ekleyin
- Kullanıcı girişlerini kontrol edin

---

## Ödev 1: Sayı Tahmin Oyunu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Bilgisayar 1-100 arası rastgele bir sayı tutsun. Kullanıcı bu sayıyı tahmin etmeye çalışsın. Her tahminde bilgisayar "daha büyük" veya "daha küçük" desin. Kaç denemede bulduğunu gösterin.

**Örnek Çıktı:**
```
1-100 arası bir sayı tuttum!
Tahmininiz: 50
Daha küçük!
Tahmininiz: 25
Daha büyük!
Tahmininiz: 37
Daha küçük!
Tahmininiz: 31
Tebrikler! 4 denemede buldunuz.
```

**İpuçları:**
- import random kullanın
- While döngüsü ile tahmin alma
- Deneme sayısını sayın

---

```python
# kodunuzu buraya yazin.
```

## Ödev 2: Şifre Doğrulama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir şifre belirlemesini isteyin. Sonra şifreyi doğru girene kadar tekrar tekrar şifre girmesini isteyin. Kaç denemede doğru girdiğini gösterin.

**Örnek Çıktı:**
```
Şifrenizi belirleyin: python123
Şifrenizi girin: abc
Yanlış şifre!
Şifrenizi girin: python
Yanlış şifre!
Şifrenizi girin: python123
Hoş geldiniz! 3 denemede doğru şifreyi girdiniz.
```

**İpuçları:**
- While döngüsü ile şifre kontrolü
- Deneme sayısını sayın
- Şifre eşleşince döngüden çıkın

---

```python
# kodunuzu buraya yazin.
```

## Ödev 3: Çarpım Tablosu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-10 arası). Bu sayının çarpım tablosunu while döngüsü kullanarak ekrana yazdırın.

**Örnek Çıktı:**
```
Sayı girin: 6
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
```

**İpuçları:**
- Sayaç değişkeni kullanın
- While döngüsü ile 1'den 10'a kadar sayın
- Her adımda çarpım sonucunu yazdırın

---

```python
# kodunuzu buraya yazin.
```

## Ödev 4: Toplam Hesaplama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-100 arası). 1'den bu sayıya kadar olan tüm sayıların toplamını while döngüsü kullanarak hesaplayın.

**Örnek Çıktı:**
```
Sayı girin: 8
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
Toplam: 36
```

**İpuçları:**
- Sayaç ve toplam değişkeni kullanın
- While döngüsü ile sayıları toplayın
- İsteğe bağlı: İşlemi de ekrana yazdırın

---

```python
# kodunuzu buraya yazin.
```

## Ödev 5: Çift Sayı Toplama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın (1-50 arası). 1'den bu sayıya kadar olan çift sayıların toplamını while döngüsü kullanarak hesaplayın.

**Örnek Çıktı:**
```
Sayı girin: 12
Çift sayılar: 2, 4, 6, 8, 10, 12
Toplam: 42
```

**İpuçları:**
- Sayaç değişkeni kullanın
- Her sayının çift olup olmadığını kontrol edin
- Çift sayıları toplam değişkenine ekleyin

---

```python
# kodunuzu buraya yazin.
```

## Ödev 6: Basamak Sayma (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın. Bu sayının kaç basamaklı olduğunu while döngüsü kullanarak bulun.

**Örnek Çıktı:**
```
Sayı girin: 12345
Basamak sayısı: 5
```

**Gelişmiş versiyon:**
```
Sayı girin: 12345
12345 sayısı 5 basamaklıdır.
```

**İpuçları:**
- Sayıyı 10'a bölerek basamak sayısını bulun
- While döngüsü ile sayı 0 olana kadar bölün

---

```python
# kodunuzu buraya yazin.
```

## Ödev 7: Ters Sayı (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan bir sayı alın. Bu sayının tersini while döngüsü kullanarak bulun.

**Örnek Çıktı:**
```
Sayı girin: 12345
Ters sayı: 54321
```

**Gelişmiş versiyon:**
```
Sayı girin: 12345
12345 sayısının tersi: 54321
```

**İpuçları:**
- Modulo (%) operatörü kullanın
- Her basamağı alıp ters sayıyı oluşturun
- While döngüsü ile basamakları işleyin

---

```python
# kodunuzu buraya yazin.
```

## Ödev 8: Faktöriyel Hesaplama (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan bir sayı alın (1-10 arası). Bu sayının faktöriyelini while döngüsü kullanarak hesaplayın.

**Örnek Çıktı:**
```
Sayı girin: 5
5! = 5 x 4 x 3 x 2 x 1 = 120
```

**Basit versiyon:**
```
Sayı girin: 5
5! = 120
```

**İpuçları:**
- Sayaç değişkeni kullanın
- While döngüsü ile çarpım yapın
- İsteğe bağlı: İşlemi de ekrana yazdırın

---

```python
# kodunuzu buraya yazin.
```

## Ödev 9: Fibonacci Serisi (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kullanıcıdan bir sayı alın (1-20 arası). Bu sayıya kadar olan Fibonacci serisini while döngüsü kullanarak yazdırın.

**Örnek Çıktı:**
```
Kaç terim: 8
Fibonacci serisi: 0, 1, 1, 2, 3, 5, 8, 13
```

**Gelişmiş versiyon:**
```
Kaç terim: 8
0, 1, 1, 2, 3, 5, 8, 13
Toplam: 33
```

**İpuçları:**
- İki önceki sayıyı tutun
- While döngüsü ile yeni sayıları hesaplayın
- Sayaç ile terim sayısını kontrol edin

---

```python
# kodunuzu buraya yazin.
```

## Ödev 10: Basamak Toplama (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Kullanıcıdan bir sayı alın. Bu sayının basamaklarının toplamını while döngüsü kullanarak bulun.

**Örnek Çıktı:**
```
Sayı girin: 12345
Basamaklar toplamı: 15 (1+2+3+4+5)
```

**Gelişmiş versiyon:**
```
Sayı girin: 12345
1 + 2 + 3 + 4 + 5 = 15
Basamaklar toplamı: 15
```

**İpuçları:**
- Modulo (%) operatörü ile son basamağı alın
- While döngüsü ile tüm basamakları toplayın
- İsteğe bağlı: İşlemi de ekrana yazdırın

--- 