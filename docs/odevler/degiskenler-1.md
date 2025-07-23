# Python Değişkenler ve Print - 10 Detaylı Ödev

## 1. İsim ve Yaş

**Açıklama:** Bu ödev, string ve integer değişkenlerini tanımlayıp f-string formatı ile yazdırma işlemini öğretir. Python'da değişken tanımlama ve string formatlama temellerini atar.

**Örnek Çıktı:**

```
Merhaba, ben Ahmet, 25 yaşındayım
```

**İpucu:** f-string kullanarak değişkenleri süslü parantez içinde kullanabilirsiniz: `f\Merhaba, ben {isim}, {yas} yaşındayım\

## 2. Matematik İşlemleri

**Açıklama:** İki sayı ile dört temel matematik işlemini gerçekleştiren program. Aritmetik operatörlerin kullanımını ve sonuçların yazdırılmasını öğretir.

**Örnek Çıktı:**

```
15 + 7 = 22
15 - 7 = 8
15 * 7 = 105
15 / 7 = 2.142857142857143
```

**İpucu:** Bölme işlemi sonucunu daha düzenli göstermek için `round()` fonksiyonu kullanabilirsiniz

## 3. Daire Alanı

**Açıklama:** Daire alanı formülü (π × r²) kullanarak hesaplama yapan program. Math kütüphanesini kullanmayı ve geometrik hesaplamaları öğretir.

**Örnek Çıktı:**

```
Yarıçapı 5 cm olan dairenin alanı: 78.54 cm²
```

**İpucu:** Pi sayısı için `3.14159` değerini kullanabilir veya `import math` ile `math.pi`yi kullanabilirsiniz

## 4. Sıcaklık Dönüşümü

**Açıklama:** Celsius'tan Fahrenheit'e çevirme formülü (F = C × 9/5 + 32) kullanarak dönüşüm yapan program. Formül kullanımını ve birim dönüşümlerini öğretir.

**Örnek Çıktı:**

```
25°C = 77.0°F
```

**İpucu:** Formülü doğru yazmaya dikkat edin: önce 9/5 ile çarp, sonra 32 ekle

## 5. String Birleştirme

**Açıklama:** Ayrı değişkenlerde saklanan string değerlerini birleştirme işlemi. String concatenation ve boşluk karakteri ekleme işlemlerini öğretir.

**Örnek Çıktı:**

```
Tam adınız: Mehmet Özkan
```

**İpucu:** İki string arasına boşluk eklemek için `\ \` karakterini kullanın veya f-string formatını tercih edin

## 6. Yaş Hesaplama

**Açıklama:** Doğum yılından yaş hesaplama işlemi. Basit çıkarma işlemi ile tarih hesaplamaları yapmayı öğretir.

**Örnek Çıktı:**

```
1990 doğumlu birinin yaşı: 35
```

**İpucu:** Güncel yılı (2025) değişken olarak tanımlayın, böylece gelecekte kolayca değiştirebilirsiniz

## 7. Dikdörtgen Çevre

**Açıklama:** Dikdörtgenin çevre formülü (2 × (uzun kenar + kısa kenar)) kullanarak hesaplama yapan program. Geometrik formülleri ve parantez kullanımını öğretir.

**Örnek Çıktı:**

```
Uzun kenar: 12 cm, Kısa kenar: 8 cm
Dikdörtgenin çevresi: 40 cm
```

**İpucu:** Çevre formülünü doğru yazmak için parantez kullanımına dikkat edin: `2 \* (uzun + kisa)

## 8. Saniye Çevirme

**Açıklama:** Toplam saniye sayısını saat, dakika ve saniye cinsine çeviren program. Modulo (%) ve integer division (//) operatörlerini öğretir.

**Örnek Çıktı:**

```
3725 saniye = 1 saat, 2 dakika, 5 saniye
```

**İpucu:** Önce saat sayısını bulun (3600'e böl), kalan saniyeden dakika bulun (60'a böl), son kalan saniyedir

## 9. Ortalama Hesaplama

**Açıklama:** Üç sayının aritmetik ortalamasını hesaplayan program. Toplama işlemi ve bölme işlemini kullanarak ortalama hesaplamayı öğretir.

**Örnek Çıktı:**

```
Notlar: 85, 92, 78
Ortalamanız: 85.0
```

**İpucu:** Üç notun toplamını 3'e bölerek ortalamayı hesaplayın. Sonucu daha düzenli göstermek için `round()` kullanabilirsiniz
