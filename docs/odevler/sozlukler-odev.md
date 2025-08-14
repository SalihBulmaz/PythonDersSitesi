# Python Sözlükler Ödevleri

## GENEL TALİMATLAR
- **Sözlük (Dictionary)** veri yapısını kullanın
- Anahtar-değer çiftlerini öğrenin
- Sözlük metodlarını aktif olarak kullanın
- Her ödevde yorum satırları ekleyin
- Kullanıcı girişlerini kontrol edin
- Sözlük işlemlerini öğrenin

---

## Ödev 1: Öğrenci Bilgi Sözlüğü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

Bir öğrencinin bilgilerini içeren sözlük oluşturun ve ekrana yazdırın.

**Örnek Çıktı:**
```
Öğrenci Bilgileri:
Ad: Mehmet
Yaş: 14
Sınıf: 8A
Okul: Atatürk Ortaokulu
```

**İpuçları:**
- Boş sözlük oluşturun
- Anahtar-değer çiftlerini ekleyin
- for döngüsü ile yazdırın
- Türkçe anahtarlar kullanabilirsiniz

---

## Ödev 2: Favori Şeyler Sözlüğü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

Favori şeylerinizi içeren bir sözlük oluşturun ve kullanıcıdan bir kategori isteyerek o kategorideki favoriyi gösterin.

**Örnek Çıktı:**
```
Favoriler:
renk: mavi
yemek: pizza
spor: futbol
ders: matematik

Hangi kategoriyi öğrenmek istiyorsun? renk
Favori rengim: mavi
```

**İpuçları:**
- get() metodunu kullanın
- Kullanıcı girişi alın
- Hata kontrolü yapın

---

## Ödev 3: Hayvan Sesleri Sözlüğü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

Hayvanlar ve sesleri için bir sözlük oluşturun. Kullanıcıdan hayvan adı alın ve sesini söyleyin.

**Örnek Çıktı:**
```
Hayvan adı girin: kedi
Kedi şöyle ses çıkarır: miyav

Hayvan adı girin: köpek
Köpek şöyle ses çıkarır: hav hav

Hayvan adı girin: aslan
Bu hayvanın sesi kayıtlı değil!
```

**İpuçları:**
- Hayvan-ses çiftleri oluşturun
- get() ile güvenli erişim
- Bulunamayan için varsayılan mesaj

---

## Ödev 4: Basit Çeviri Sözlüğü (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Türkçe-İngilizce kelime çevirisi yapan sözlük programı yazın.

**Örnek Çıktı:**
```
Türkçe-İngilizce Çeviri:
elma → apple
ev → house
okul → school
kitap → book

Çevirmek istediğin kelime: ev
ev = house

Çevirmek istediğin kelime: araba
Bu kelime sözlükte yok!
```

**İpuçları:**
- Çeviri sözlüğü oluşturun
- Döngü ile sürekli çeviri yapın
- "çıkış" kelimesi ile program bitsin

---

## Ödev 5: Not Defteri Sözlüğü (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Derslere göre notları saklayan bir sözlük oluşturun. Kullanıcı ders adı girsin, o dersin notunu gösterin.

**Örnek Çıktı:**
```
Notlarım:
matematik: 85
fen: 90
türkçe: 78
sosyal: 82

Hangi dersin notunu görmek istiyorsun? matematik
Matematik notun: 85

Hangi dersin notunu görmek istiyorsun? müzik
Bu dersin notu kayıtlı değil!
```

**İpuçları:**
- Ders-not çiftleri oluşturun
- get() ile güvenli erişim yapın
- Kayıtlı olmayan dersler için mesaj

---

## Ödev 6: Telefon Rehberi (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Basit bir telefon rehberi oluşturun. İsim girince telefon numarasını göstersin.

**Örnek Çıktı:**
```
Telefon Rehberi:
Ahmet → 0555-111-1111
Ayşe → 0555-222-2222
Mehmet → 0555-333-3333

Kimin telefonunu arıyorsun? Ayşe
Ayşe'nin telefonu: 0555-222-2222

Kimin telefonunu arıyorsun? Ali
Ali rehberde kayıtlı değil!
```

**İpuçları:**
- İsim-telefon çiftleri oluşturun
- Büyük-küçük harf kontrolü yapın
- Bulunamayan için uygun mesaj

---

## Ödev 7: Meyve Fiyatları (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Meyve fiyatları sözlüğü oluşturun. Kullanıcı meyve adı ve kilosunu girsin, toplam fiyatı hesaplayın.

**Örnek Çıktı:**
```
Meyve Fiyatları (TL/kg):
elma: 8
muz: 12
portakal: 6
üzüm: 15

Hangi meyve? elma
Kaç kilo? 2
2 kilo elma = 16 TL

Hangi meyve? çilek
Bu meyvenin fiyatı kayıtlı değil!
```

**İpuçları:**
- Meyve-fiyat sözlüğü oluşturun
- Çarpma işlemi yapın
- Float sayılar kullanın

---

## Ödev 8: Renkli Sayılar (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Sayıları renklerle eşleştiren sözlük oluşturun. Kullanıcı sayı girsin, rengini söyleyin.

**Örnek Çıktı:**
```
Sayı-Renk Eşleştirmesi:
1 → kırmızı
2 → mavi
3 → yeşil
4 → sarı
5 → turuncu

Bir sayı gir (1-5): 3
3 sayısının rengi: yeşil

Bir sayı gir (1-5): 7
Bu sayının rengi tanımlı değil!
```

**İpuçları:**
- Sayı-renk çiftleri oluşturun
- int() ile sayıya çevirin
- 1-5 aralığını kontrol edin

---

## Ödev 9: Başkent Bilgisi (Kolay)
**Zorluk:** ⭐⭐☆☆☆

Ülke-başkent bilgilerini içeren sözlük oluşturun. Ülke adı girince başkentini gösterin.

**Örnek Çıktı:**
```
Ülke-Başkent Bilgisi:
Türkiye → Ankara
Fransa → Paris
İtalya → Roma
Almanya → Berlin

Hangi ülkenin başkentini öğrenmek istiyorsun? Fransa
Fransa'nın başkenti: Paris

Hangi ülkenin başkentini öğrenmek istiyorsun? Japonya
Bu ülke kayıtlı değil!
```

**İpuçları:**
- Ülke-başkent çiftleri oluşturun
- Büyük-küçük harf dikkati
- title() metodu kullanabilirsiniz

---

## Ödev 10: Oyun Skoru (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Oyuncular ve skorları için sözlük oluşturun. Yeni skor ekleyin, en yüksek skoru bulun.

**Örnek Çıktı:**
```
Oyuncu Skorları:
Ali: 150
Ayşe: 200
Mehmet: 175

Yeni oyuncu adı: Fatma
Fatma'nın skoru: 180

Güncel skorlar:
Ali: 150
Ayşe: 200
Mehmet: 175
Fatma: 180

En yüksek skor: Ayşe (200 puan)
```

**İpuçları:**
- Skor ekleme fonksiyonu yazın
- max() ile en yüksek skoru bulun
- items() ile döngü yapın

---

## Ödev 11: Kelime Sayacı (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Bir cümlede her kelimenin kaç kez geçtiğini sayan program yazın.

**Örnek Çıktı:**
```
Cümle girin: ben okula gidiyorum ben de çok mutluyum

Kelime sayıları:
ben: 2
okula: 1
gidiyorum: 1
de: 1
çok: 1
mutluyum: 1

En çok geçen kelime: ben (2 kez)
```

**İpuçları:**
- split() ile kelimeleri ayırın
- Her kelime için sayaç tutun
- max() ile en çok geçeni bulun

---

## Ödev 12: Kitap Kütüphanesi (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Kitap adı ve yazarı için sözlük oluşturun. Kitap adı girince yazarını gösterin, yeni kitap ekleyin.

**Örnek Çıktı:**
```
Kütüphane:
Çalıkuşu → Reşat Nuri Güntekin
Tutunamayanlar → Oğuz Atay
İnce Memed → Yaşar Kemal

1. Kitap ara
2. Yeni kitap ekle
Seçim: 1

Kitap adı: Çalıkuşu
Çalıkuşu kitabının yazarı: Reşat Nuri Güntekin

Seçim: 2
Yeni kitap adı: Saatleri Ayarlama Enstitüsü
Yazarı: Ahmet Hamdi Tanpınar
Kitap eklendi!
```

**İpuçları:**
- Menü sistemi oluşturun
- Kitap ekleme fonksiyonu yazın
- While döngüsü ile sürekli çalışsın

---

## Ödev 13: Hava Durumu Haftalık (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Günlere göre hava durumu bilgisi tutan sözlük oluşturun.

**Örnek Çıktı:**
```
Haftalık Hava Durumu:
Pazartesi: 22°C, Güneşli
Salı: 18°C, Bulutlu
Çarşamba: 15°C, Yağmurlu
Perşembe: 20°C, Parçalı bulutlu
Cuma: 25°C, Güneşli
Cumartesi: 23°C, Güneşli
Pazar: 19°C, Bulutlu

Hangi günün hava durumunu öğrenmek istiyorsun? Çarşamba
Çarşamba günü: 15°C, Yağmurlu

En sıcak gün: Cuma (25°C)
En soğuk gün: Çarşamba (15°C)
```

**İpuçları:**
- Gün-hava bilgisi çiftleri oluşturun
- Sıcaklık değerlerini ayrı işleyin
- max() ve min() kullanın

---

## Ödev 14: Öğrenci Not Sistemi (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Birden fazla öğrencinin notlarını tutan sistem oluşturun.

**Örnek Çıktı:**
```
Öğrenci Not Sistemi:
Ali: [85, 90, 78, 92]
Ayşe: [95, 88, 91, 87]
Mehmet: [76, 82, 79, 85]

Hangi öğrencinin notlarını görmek istiyorsun? Ali
Ali'nin notları: [85, 90, 78, 92]
Ali'nin ortalaması: 86.25

Tüm sınıf ortalaması: 84.17
En yüksek ortalama: Ayşe (90.25)
```

**İpuçları:**
- İç içe veri yapısı kullanın
- Ortalama hesaplama fonksiyonu yazın
- Her öğrenci için ayrı liste

---

## Ödev 15: Alışveriş Sepeti (Orta)
**Zorluk:** ⭐⭐⭐☆☆

Ürün-fiyat sözlüğü ve alışveriş sepeti sistemi oluşturun.

**Örnek Çıktı:**
```
Ürün Fiyatları:
ekmek: 3 TL
süt: 8 TL
yumurta: 12 TL
peynir: 25 TL

Alışveriş Sepeti:
1. Ürün ekle
2. Sepeti görüntüle
3. Hesap öde
4. Çıkış

Seçim: 1
Ürün adı: süt
Kaç adet? 2
2 adet süt sepete eklendi.

Seçim: 2
Sepetiniz:
süt x2 = 16 TL
ekmek x1 = 3 TL
Toplam: 19 TL

Seçim: 3
Ödemeniz gereken tutar: 19 TL
Teşekkürler!
```

**İpuçları:**
- İki ayrı sözlük kullanın (ürünler, sepet)
- Miktar kontrolü yapın
- Toplam hesaplama fonksiyonu yazın

---