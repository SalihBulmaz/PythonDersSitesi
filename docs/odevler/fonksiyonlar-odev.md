# Python Fonksiyonlar Ödevleri

## GENEL TALİMATLAR
- **Fonksiyon** kavramını kullanın
- Her fonksiyon tek bir görevi yerine getirsin
- Fonksiyon isimlerini açıklayıcı seçin
- Her ödevde yorum satırları ekleyin
- return kullanarak değer döndürün
- Parametreli ve parametresiz fonksiyonları öğrenin

---

## Ödev 1: Favori Renk Fonksiyonu (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

Bir renk ismi alan ve "Benim favori rengim [renk]!" şeklinde cümle döndüren fonksiyon yazın.

**Örnek Çıktı:**
```
favori_renk("mavi") → "Benim favori rengim mavi!"
favori_renk("kırmızı") → "Benim favori rengim kırmızı!"
```

**İpuçları:**
- def ile fonksiyon tanımlayın
- Parametre olarak renk alın
- String birleştirme yapın

---

## Ödev 2: Çarpma Fonksiyonu (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

İki sayıyı çarpan bir fonksiyon yazın.

**Örnek Çıktı:**
```
carp(4, 3) → 12
carp(7, 2) → 14
carp(5, 0) → 0
```

**İpuçları:**
- İki parametre tanımlayın
- * operatörü kullanın
- return ile sonucu döndürün

---

## Ödev 3: Hava Durumu Fonksiyonu (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

Sıcaklık değeri alan bir fonksiyon yazın. 25'ten büyükse "Sıcak", 15-25 arasında "Ilık", 15'ten küçükse "Soğuk" döndürsün.

**Örnek Çıktı:**
```
hava_durumu(30) → "Sıcak"
hava_durumu(20) → "Ilık"
hava_durumu(10) → "Soğuk"
```

**İpuçları:**
- if-elif-else yapısı kullanın
- Karşılaştırma operatörleri kullanın
- String değer döndürün

---

## Ödev 4: Büyük Harf Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Bir kelime alan ve tamamını büyük harfe çeviren fonksiyon yazın.

**Örnek Çıktı:**
```
buyuk_yap("merhaba") → "MERHABA"
buyuk_yap("Python") → "PYTHON"
buyuk_yap("öğrenci") → "ÖĞRENCİ"
```

**İpuçları:**
- upper() metodunu kullanın
- String döndürün
- Türkçe karakterleri de düşünün

---

## Ödev 5: Pozitif mi Negatif mi Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Bir sayı alan ve pozitif ise "Pozitif", negatif ise "Negatif", sıfır ise "Sıfır" döndüren fonksiyon yazın.

**Örnek Çıktı:**
```
sayi_kontrol(5) → "Pozitif"
sayi_kontrol(-3) → "Negatif"
sayi_kontrol(0) → "Sıfır"
```

**İpuçları:**
- if-elif-else kullanın
- > ve < operatörleri kullanın
- == ile sıfır kontrolü yapın

---

## Ödev 6: Kare Alma Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Bir sayının karesini alan fonksiyon yazın. (5² = 25)

**Örnek Çıktı:**
```
kare_al(4) → 16
kare_al(7) → 49
kare_al(10) → 100
```

**İpuçları:**
- ** veya * operatörü kullanın
- Tek parametre alın
- Sonucu döndürün

---

## Ödev 7: İsim Uzunluğu Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Bir isim alan ve "Senin ismin [uzunluk] harfli" şeklinde mesaj döndüren fonksiyon yazın.

**Örnek Çıktı:**
```
isim_uzunlugu("Mehmet") → "Senin ismin 6 harfli"
isim_uzunlugu("Ayşe") → "Senin ismin 4 harfli"
```

**İpuçları:**
- len() fonksiyonu kullanın
- f-string veya + ile birleştirme
- Mesaj formatını doğru yapın

---

## Ödev 8: Dikdörtgen Alanı Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Uzunluk ve genişlik alan, dikdörtgenin alanını hesaplayan fonksiyon yazın. (Alan = uzunluk × genişlik)

**Örnek Çıktı:**
```
dikdortgen_alani(5, 3) → 15
dikdortgen_alani(8, 4) → 32
dikdortgen_alani(10, 2) → 20
```

**İpuçları:**
- İki parametre alın
- Çarpma işlemi yapın
- Sonucu döndürün

---

## Ödev 9: Harfli Not Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Sayısal not alan ve harfli nota çeviren fonksiyon yazın. (90-100: AA, 80-89: BA, 70-79: BB, 60-69: CB, 50-59: CC, 0-49: FF)

**Örnek Çıktı:**
```
harfli_not(95) → "AA"
harfli_not(75) → "BB"
harfli_not(45) → "FF"
```

**İpuçları:**
- if-elif-else zinciri kullanın
- >= operatörü ile kontrol edin
- String döndürün

---

## Ödev 10: Gün Adı Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

1-7 arası sayı alan ve günün adını döndüren fonksiyon yazın. (1: Pazartesi, 2: Salı, ... 7: Pazar)

**Örnek Çıktı:**
```
gun_adi(1) → "Pazartesi"
gun_adi(3) → "Çarşamba"
gun_adi(7) → "Pazar"
```

**İpuçları:**
- if-elif-else veya liste kullanın
- 1-7 aralığını kontrol edin
- Geçersiz sayı için hata mesajı

---

## Ödev 11: Yaş Grubu Fonksiyonu (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Yaş alan ve yaş grubunu döndüren fonksiyon yazın. (0-12: Çocuk, 13-17: Genç, 18-64: Yetişkin, 65+: Yaşlı)

**Örnek Çıktı:**
```
yas_grubu(8) → "Çocuk"
yas_grubu(16) → "Genç"
yas_grubu(25) → "Yetişkin"
yas_grubu(70) → "Yaşlı"
```

**İpuçları:**
- if-elif-else kullanın
- Yaş aralıklarını kontrol edin
- Uygun string döndürün

---

## Ödev 12: Saniye Çevirici Fonksiyonu (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Dakika alan ve kaç saniye olduğunu söyleyen fonksiyon yazın. (1 dakika = 60 saniye)

**Örnek Çıktı:**
```
dakika_saniye(5) → "5 dakika = 300 saniye"
dakika_saniye(2) → "2 dakika = 120 saniye"
```

**İpuçları:**
- Dakikayı 60 ile çarp
- f-string ile mesaj oluştur
- Format düzenini koru

---

## Ödev 13: Su Durumu Fonksiyonu (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Sıcaklık alan ve suyun durumunu döndüren fonksiyon yazın. (0°C altı: Buz, 0-99°C: Sıvı, 100°C üstü: Buhar)

**Örnek Çıktı:**
```
su_durumu(-5) → "Buz"
su_durumu(25) → "Sıvı"
su_durumu(105) → "Buhar"
```

**İpuçları:**
- Sıcaklık aralıklarını kontrol et
- if-elif-else kullan
- Uygun durumu döndür

---

## Ödev 14: Basit Hesap Makinesi Fonksiyonu (Orta)
**Zorluk:** ⭐⭐⭐☆☆

İki sayı ve bir işlem (+, -, *, /) alan hesap makinesi fonksiyonu yazın.

**Örnek Çıktı:**
```
hesapla(10, 5, "+") → 15
hesapla(20, 4, "/") → 5.0
hesapla(7, 3, "*") → 21
```

**İpuçları:**
- Üç parametre alın
- if-elif ile işlemleri kontrol edin
- Bölmede sıfıra bölme kontrolü yapın

---

## Ödev 15: Kelime Tersine Çevirme Fonksiyonu (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Bir kelime alan ve tersini döndüren fonksiyon yazın.

**Örnek Çıktı:**
```
ters_cevir("merhaba") → "abahrem"
ters_cevir("python") → "nohtyp"
ters_cevir("okul") → "luko"
```

**İpuçları:**
- String slicing kullanın [::-1]
- Veya döngü ile ters çevirin
- Sonucu döndürün

---