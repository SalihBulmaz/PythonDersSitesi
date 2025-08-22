# Python Modül ve Dosya Yönetimi Ödevleri

## GENEL TALİMATLAR
- **Modül** ve **import** kavramlarını kullanın
- Her ödevde en az 2 dosya oluşturun (modül + ana program)
- Fonksiyonları modül dosyasında tanımlayın
- Ana programda import ile modülleri kullanın
- Döngüler ve fonksiyonlarla pratik yapın
- Her ödevde yorum satırları ekleyin

---

## Ödev 1: Selamlaşma Modülü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

**selam.py** dosyasında bir selamlaşma fonksiyonu oluşturun. **main.py** dosyasında bu modülü import edip kullanın.

**selam.py içeriği:**
- `merhaba_de(isim)` fonksiyonu "Merhaba [isim]!" döndürsün

**main.py içeriği:**
- selam modülünü import edin
- Kullanıcıdan isim alın
- Fonksiyonu çağırın ve sonucu yazdırın

**İpuçları:**
- `import selam` kullanın
- `selam.merhaba_de()` şeklinde çağırın

---

## Ödev 2: Toplama Modülü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

**matematik.py** dosyasında toplama fonksiyonu oluşturun. **hesapla.py** dosyasında kullanın.

**matematik.py içeriği:**
- `topla(a, b)` fonksiyonu iki sayıyı toplasın

**hesapla.py içeriği:**
- matematik modülünü import edin
- Kullanıcıdan iki sayı alın
- Topla fonksiyonunu kullanıp sonucu yazdırın

**İpuçları:**
- `int()` ile string'i sayıya çevirin
- Input ile kullanıcıdan veri alın

---

## Ödev 3: Çember Hesaplama Modülü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

**cember.py** dosyasında çember alan ve çevre fonksiyonları oluşturun. **test.py** dosyasında kullanın.

**cember.py içeriği:**
- `alan_hesapla(yaricap)` fonksiyonu: π × r²
- `cevre_hesapla(yaricap)` fonksiyonu: 2 × π × r

**test.py içeriği:**
- cember modülünü import edin
- Kullanıcıdan yarıçap alın
- Her iki fonksiyonu da kullanıp sonuçları yazdırın

**İpuçları:**
- π için 3.14 kullanın
- `float()` ile ondalıklı sayı alın

---

## Ödev 4: İsim İşlemleri Modülü (Çok Kolay)
**Zorluk:** ⭐☆☆☆☆

**isim_islemler.py** dosyasında isim işlemleri fonksiyonları oluşturun. **isim_test.py** dosyasında kullanın.

**isim_islemler.py içeriği:**
- `buyuk_yap(isim)` fonksiyonu isimleri büyük harfe çevirsin
- `uzunluk_bul(isim)` fonksiyonu isim uzunluğunu döndürsün

**isim_test.py içeriği:**
- isim_islemler modülünü import edin
- Kullanıcıdan isim alın
- Her iki fonksiyonu da kullanın

**İpuçları:**
- `.upper()` ve `len()` kullanın
- Sonuçları kullanıcı dostu şekilde yazdırın

---

## Ödev 5: Sayı Kontrol Modülü (Kolay)
**Zorluk:** ⭐⭐☆☆☆

**sayi_kontrol.py** dosyasında sayı kontrol fonksiyonları oluşturun. **kontrol_et.py** dosyasında döngü ile kullanın.

**sayi_kontrol.py içeriği:**
- `cift_mi(sayi)` fonksiyonu sayının çift olup olmadığını döndürsün
- `pozitif_mi(sayi)` fonksiyonu sayının pozitif olup olmadığını döndürsün

**kontrol_et.py içeriği:**
- sayi_kontrol modülünü import edin
- 5 kez döngü çalıştırın
- Her döngüde kullanıcıdan sayı alıp kontrolleri yapın

**İpuçları:**
- `for i in range(5):` kullanın
- `%` operatörü ile çift kontrolü yapın

---

## Ödev 6: Dört İşlem Modülü (Kolay)
**Zorluk:** ⭐⭐☆☆☆

**dortislem.py** dosyasında dört işlem fonksiyonları oluşturun. **hesap_makinesi.py** dosyasında menü ile kullanın.

**dortislem.py içeriği:**
- `topla(a, b)`, `cikar(a, b)`, `carp(a, b)`, `bol(a, b)` fonksiyonları

**hesap_makinesi.py içeriği:**
- dortislem modülünü import edin
- Kullanıcıya işlem seçenekleri sunun (1:Toplama, 2:Çıkarma vb.)
- Seçime göre ilgili fonksiyonu çağırın

**İpuçları:**
- Bölmede sıfıra bölme kontrolü yapın
- `if-elif-else` ile menü oluşturun

---

## Ödev 7: Kelime Oyunları Modülü (Kolay)
**Zorluk:** ⭐⭐☆☆☆

**kelime_oyunlari.py** dosyasında kelime fonksiyonları oluşturun. **kelime_testi.py** dosyasında döngü ile kullanın.

**kelime_oyunlari.py içeriği:**
- `ters_cevir(kelime)` fonksiyonu kelimeyi tersine çevirsin
- `sesli_say(kelime)` fonksiyonu sesli harf sayısını döndürsün

**kelime_testi.py içeriği:**
- kelime_oyunlari modülünü import edin
- Kullanıcıdan 3 kelime alın (döngü ile)
- Her kelime için her iki fonksiyonu da kullanın

**İpuçları:**
- Sesli harfler: a, e, i, o, u, ı, ö, ü
- `[::-1]` ile string'i ters çevirin

---

## Ödev 8: Sıcaklık Dönüştürme Modülü (Kolay)
**Zorluk:** ⭐⭐☆☆☆

**sicaklik.py** dosyasında sıcaklık dönüştürme fonksiyonları oluşturun. **donustur.py** dosyasında kullanın.

**sicaklik.py içeriği:**
- `celsius_fahrenheit(celsius)` fonksiyonu: (C × 9/5) + 32
- `fahrenheit_celsius(fahrenheit)` fonksiyonu: (F - 32) × 5/9

**donustur.py içeriği:**
- sicaklik modülünü import edin
- Kullanıcıya dönüştürme seçeneği sunun
- Seçime göre ilgili fonksiyonu kullanın

**İpuçları:**
- Menü sistemi oluşturun
- Sonuçları düzgün formatlayın

---

## Ödev 9: Liste İşlemleri Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**liste_islemler.py** dosyasında liste fonksiyonları oluşturun. **liste_testi.py** dosyasında döngü ile kullanın.

**liste_islemler.py içeriği:**
- `en_buyuk_bul(liste)` fonksiyonu listenin en büyük elemanını döndürsün
- `ortalama_hesapla(liste)` fonksiyonu listenin ortalamasını döndürsün

**liste_testi.py içeriği:**
- liste_islemler modülünü import edin
- Kullanıcıdan 5 sayı alın (döngü ile)
- Sayıları listeye ekleyin ve fonksiyonları kullanın

**İpuçları:**
- `append()` ile listeye eleman ekleyin
- `sum()` ve `len()` kullanın

---

## Ödev 10: Öğrenci Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**ogrenci.py** dosyasında öğrenci işlemleri fonksiyonları oluşturun. **okul.py** dosyasında döngü ile kullanın.

**ogrenci.py içeriği:**
- `not_ortalamasi(notlar)` fonksiyonu not ortalaması hesaplasın
- `harfli_not(ortalama)` fonksiyonu sayısal notu harfli nota çevirsin

**okul.py içeriği:**
- ogrenci modülünü import edin
- 3 öğrenci için döngü çalıştırın
- Her öğrenciden 4 not alıp ortalama ve harf notu hesaplayın

**İpuçları:**
- 85+ AA, 70-84 BB, 55-69 CC, 40-54 DD, 40- FF
- İç içe döngü kullanın

---

## Ödev 11: Zaman Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**zaman.py** dosyasında zaman dönüştürme fonksiyonları oluşturun. **saat.py** dosyasında kullanın.

**zaman.py içeriği:**
- `saat_dakika(saat)` fonksiyonu saati dakikaya çevirsin
- `dakika_saniye(dakika)` fonksiyonu dakikayı saniyeye çevirsin

**saat.py içeriği:**
- zaman modülünü import edin
- Kullanıcıdan saat bilgisi alın
- Tüm dönüştürmeleri gösterin (saat→dakika→saniye)

**İpuçları:**
- 1 saat = 60 dakika, 1 dakika = 60 saniye
- Zincirleme dönüştürme yapın

---

## Ödev 12: Dosya İsim Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**dosya_isim.py** dosyasında dosya ismi işlemleri fonksiyonları oluşturun. **dosya_test.py** dosyasında döngü ile kullanın.

**dosya_isim.py içeriği:**
- `uzanti_ayir(dosya_adi)` fonksiyonu dosya adı ve uzantısını ayırsın
- `uzanti_degistir(dosya_adi, yeni_uzanti)` fonksiyonu uzantıyı değiştirsin

**dosya_test.py içeriği:**
- dosya_isim modülünü import edin
- Kullanıcıdan 3 dosya adı alın (döngü ile)
- Her dosya için işlemleri uygulayın

**İpuçları:**
- `.split('.')` kullanın
- String manipülasyonu yapın

---

## Ödev 13: Oyun Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**oyun.py** dosyasında oyun fonksiyonları oluşturun. **mini_oyun.py** dosyasında döngü ile kullanın.

**oyun.py içeriği:**
- `sayi_tahmin_uret()` fonksiyonu 1-10 arası rastgele sayı üretsin
- `tahmin_kontrol(tahmin, hedef)` fonksiyonu tahmini kontrol etsin

**mini_oyun.py içeriği:**
- oyun modülünü import edin
- 5 kere tahmin hakkı verin (döngü ile)
- Her tahmin sonrası geri bildirim verin

**İpuçları:**
- `import random` ve `random.randint()` kullanın
- "Büyük", "Küçük", "Doğru" mesajları verin

---

## Ödev 14: Metin İşleme Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**metin_isle.py** dosyasında metin işleme fonksiyonları oluşturun. **metin_test.py** dosyasında döngü ile kullanın.

**metin_isle.py içeriği:**
- `kelime_say(cumle)` fonksiyonu cümledeki kelime sayısını döndürsün
- `ilk_harf_buyut(cumle)` fonksiyonu her kelimenin ilk harfini büyük yapsın

**metin_test.py içeriği:**
- metin_isle modülünü import edin
- Kullanıcıdan 3 cümle alın (döngü ile)
- Her cümle için her iki fonksiyonu da kullanın

**İpuçları:**
- `.split()` ile kelimelere ayırın
- `.title()` veya `.capitalize()` kullanın

---

## Ödev 15: Para Hesaplama Modülü (Orta)
**Zorluk:** ⭐⭐⭐☆☆

**para.py** dosyasında para hesaplama fonksiyonları oluşturun. **kasa.py** dosyasında döngü ile kullanın.

**para.py içeriği:**
- `kdv_hesapla(fiyat, kdv_orani)` fonksiyonu KDV'li fiyat hesaplasın
- `indirim_uygula(fiyat, indirim_yuzdesi)` fonksiyonu indirim uygulasın

**kasa.py içeriği:**
- para modülünü import edin
- 5 ürün için döngü çalıştırın (kullanıcıdan fiyat alın)
- Her ürün için KDV ekleyip indirim uygulayın
- Toplam tutarı hesaplayın

**İpuçları:**
- KDV: fiyat × (1 + kdv_orani/100)
- İndirim: fiyat × (1 - indirim/100)
- Running total tutun