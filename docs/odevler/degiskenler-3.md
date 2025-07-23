# Python Primitif Tipler Ödevleri

Bu ödevler, Python'da yalnızca primitif tipler (int, float, str, bool), değişkenler, `print` ve `input` fonksiyonlarını kullanarak hazırlanmıştır. Her ödevde ne yapmanız gerektiği, bir ipucu ve örnek çıktı verilmiştir.

## Ödev 1: İsim ve Yaş Sorma
**Ne İstendiği**: Kullanıcıdan isim ve yaş bilgisini alın. Ardından, kullanıcının ismini ve yaşını bir cümle içinde ekrana yazdırın.

**İpucu**: `input()` fonksiyonu ile kullanıcıdan veri alın ve `str` tipini kullanarak cümle oluşturun. Yaş için `int` tipine dönüştürmeyi unutmayın.

**Örnek Çıktı**:
```
Adınızı girin: Ali
Yaşınızı girin: 25
Merhaba Ali, sen 25 yaşındasın!
```

---

## Ödev 2: Dört İşlem Hesap Makinesi
**Ne İstendiği**: Kullanıcıdan iki sayı alın ve bu sayılarla toplama, çıkarma, çarpma ve bölme işlemlerini yapıp sonuçları ekrana yazdırın.

**İpucu**: Sayıları `float` tipine çevirin ki ondalıklı sayılar da işlenebilsin. Her işlemi ayrı bir değişkene atayın.

**Örnek Çıktı**:
```
Birinci sayıyı girin: 10.5
İkinci sayıyı girin: 2
Toplama: 12.5
Çıkarma: 8.5
Çarpma: 21.0
Bölme: 5.25
```

---

## Ödev 3: Santimetre'den Metre'ye Çevirme
**Ne İstendiği**: Kullanıcıdan santimetre cinsinden bir uzunluk alın ve bunu metre cinsine çevirip ekrana yazdırın.

**İpucu**: Santimetreyi metreye çevirmek için 100'e bölün. Sonucu `float` olarak tutabilirsiniz.

**Örnek Çıktı**:
```
Uzunluğu santimetre cinsinden girin: 250
250 cm = 2.5 metre
```

---

## Ödev 4: Vücut Kitle İndeksi Hesaplama
**Ne İstendiği**: Kullanıcıdan kilo (kg) ve boy (cm) bilgisini alın. Vücut kitle indeksini (VKİ) hesaplayın ve ekrana yazdırın. (VKİ = kilo / (boy * boy), boy metre cinsine çevrilmeli).

**İpucu**: Boyu santimetreden metreye çevirmek için 100'e bölün. Sonucu `float` olarak tutun.

**Örnek Çıktı**:
```
Kilonuzu kg cinsinden girin: 70
Boyunuzu cm cinsinden girin: 170
Vücut Kitle İndeksiniz: 24.22
```

---

## Ödev 5: Kelime ve Harf Sayısı
**Ne İstendiği**: Kullanıcıdan bir cümle alın. Cümlenin kelime sayısını ve toplam harf sayısını (boşluklar hariç) ekrana yazdırın.

**İpucu**: Kelime sayısını bulmak için cümleyi boşluklara göre ayırmak yerine, boşluk sayısını sayabilirsiniz. Harf sayısını bulmak için boşlukları çıkarmayı unutmayın.

**Örnek Çıktı**:
```
Bir cümle girin: Merhaba dünya nasılsın
Kelime sayısı: 3
Harf sayısı: 19
```

---

## Ödev 6: Sıcaklık Dönüşümü
**Ne İstendiği**: Kullanıcıdan Celsius cinsinden bir sıcaklık alın ve bunu Fahrenheit'a çevirip ekrana yazdırın. (F = C * 9/5 + 32)

**İpucu**: Celsius değerini `float` olarak alın ve formülü uygulayın.

**Örnek Çıktı**:
```
Sıcaklığı Celsius cinsinden girin: 25
25°C = 77.0°F
```

---

## Ödev 7: Harf Notu Hesaplama
**Ne İstendiği**: Kullanıcıdan bir sınav notu (0-100) alın ve bu nota göre harf notunu ekrana yazdırın (90-100: AA, 80-89: BA, 70-79: BB, 60-69: CB, 50-59: CC, diğerleri: FF).

**İpucu**: Notu `int` olarak alın ve uygun aralıkları kontrol edin. Boolean değerler kullanabilirsiniz.

**Örnek Çıktı**:
```
Sınav notunuzu girin: 85
Harf notunuz: BA
```

---

## Ödev 8: Alışveriş Faturası
**Ne İstendiği**: Kullanıcıdan bir ürünün fiyatını ve adetini alın. Toplam tutarı hesaplayın ve ekrana yazdırın.

**İpucu**: Fiyatı `float`, adeti `int` olarak alın ve çarparak toplamı bulun.

**Örnek Çıktı**:
```
Ürün fiyatını girin: 15.99
Adet sayısını girin: 3
Toplam tutar: 47.97 TL
```

---

## Ödev 9: Basit Şifre Oluşturma
**Ne İstendiği**: Kullanıcıdan isim, soyisim ve doğum yılı alın. Bu bilgileri birleştirerek bir şifre oluşturun ve ekrana yazdırın (örneğin: isim + soyisim + doğum yılı).

**İpucu**: Tüm girişleri `str` olarak alın ve birleştirin.

**Örnek Çıktı**:
```
İsminizi girin: Ali
Soyisminizi girin: Yılmaz
Doğum yılınızı girin: 1995
Oluşturulan şifre: AliYılmaz1995
```

---

## Ödev 10: Mesafe ve Yakıt Hesaplama
**Ne İstendiği**: Kullanıcıdan bir arabanın 100 km'deki yakıt tüketimi (litre cinsinden) ve gidilen mesafeyi (km) alın. Toplam yakıt tüketimini hesaplayın ve ekrana yazdırın.

**İpucu**: Yakıt tüketimini hesaplamak için (mesafe / 100) * yakıt tüketimi formülünü kullanın. Sonucu `float` olarak tutun.

**Örnek Çıktı**:
```
100 km'deki yakıt tüketimini litre cinsinden girin: 7.5
Gidilen mesafeyi km cinsinden girin: 250
Toplam yakıt tüketimi: 18.75 litre
```