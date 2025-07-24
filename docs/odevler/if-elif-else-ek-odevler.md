# Python If-Elif-Else Ek Ödevleri

Bu ödevler sadece `if`, `elif`, `else` yapılarını kullanarak hazırlanmıştır. Kolaydan zora doğru sıralanmıştır.

## Ödev 1: Basit Sayı Karşılaştırma
**Seviye**: Kolay
**Ne İstendiği**: Kullanıcıdan iki sayı alın ve hangisinin büyük olduğunu ekrana yazdırın. Eğer sayılar eşitse "Sayılar eşit" mesajı verin.

**İpucu**: İki sayıyı karşılaştırmak için `if`, `elif`, `else` yapısını kullanın.

**Örnek Çıktı**:
```
Birinci sayıyı girin: 15
İkinci sayıyı girin: 20
20 sayısı daha büyüktür.
```

---

## Ödev 2: Pozitif, Negatif veya Sıfır
**Seviye**: Kolay
**Ne İstendiği**: Kullanıcıdan bir sayı alın ve bu sayının pozitif, negatif veya sıfır olduğunu belirleyip ekrana yazdırın.

**İpucu**: Sayıyı 0 ile karşılaştırın.

**Örnek Çıktı**:
```
Bir sayı girin: -5
Bu sayı negatiftir.
```

---

## Ödev 3: Çift veya Tek Sayı
**Seviye**: Kolay
**Ne İstendiği**: Kullanıcıdan bir sayı alın ve bu sayının çift mi tek mi olduğunu belirleyip ekrana yazdırın.

**İpucu**: Modulo operatörü (`%`) kullanarak 2'ye bölümünden kalanı kontrol edin.

**Örnek Çıktı**:
```
Bir sayı girin: 7
Bu sayı tektir.
```

---

## Ödev 4: Mevsim Belirleme
**Seviye**: Orta
**Ne İstendiği**: Kullanıcıdan ay numarasını (1-12) alın ve hangi mevsime ait olduğunu belirleyip ekrana yazdırın:
- 12, 1, 2: Kış
- 3, 4, 5: İlkbahar
- 6, 7, 8: Yaz
- 9, 10, 11: Sonbahar

**İpucu**: Ay numaralarını gruplara ayırarak kontrol edin.

**Örnek Çıktı**:
```
Ay numarasını girin (1-12): 4
Bu ay İlkbahar mevsimine aittir.
```

---

## Ödev 5: Basit Hesap Makinesi
**Seviye**: Orta
**Ne İstendiği**: Kullanıcıdan iki sayı ve bir işlem operatörü (+, -, *, /) alın. İşlemi gerçekleştirin ve sonucu ekrana yazdırın. Bölme işleminde sıfıra bölme kontrolü yapın.

**İpucu**: Operatörü string olarak alın ve her işlem için ayrı kontrol yapın.

**Örnek Çıktı**:
```
Birinci sayıyı girin: 10
İkinci sayıyı girin: 5
İşlem operatörünü girin (+, -, *, /): /
Sonuç: 2.0
```

---

## Ödev 6: Not Değerlendirme Sistemi
**Seviye**: Orta
**Ne İstendiği**: Kullanıcıdan bir not alın (0-100) ve bu nota göre değerlendirme yapın:
- 90-100: Mükemmel
- 80-89: Çok İyi
- 70-79: İyi
- 60-69: Orta
- 50-59: Geçer
- 0-49: Başarısız

**İpucu**: Not aralıklarını büyükten küçüğe doğru kontrol edin.

**Örnek Çıktı**:
```
Notunuzu girin (0-100): 85
Değerlendirmeniz: Çok İyi
```

---

## Ödev 7: Gün Belirleme
**Seviye**: Orta
**Ne İstendiği**: Kullanıcıdan gün numarasını (1-7) alın ve hangi güne ait olduğunu belirleyip ekrana yazdırın:
- 1: Pazartesi
- 2: Salı
- 3: Çarşamba
- 4: Perşembe
- 5: Cuma
- 6: Cumartesi
- 7: Pazar

**İpucu**: Her gün numarası için ayrı kontrol yapın.

**Örnek Çıktı**:
```
Gün numarasını girin (1-7): 3
Bu gün Çarşamba'dır.
```

---

## Ödev 8: Basit Şifre Kontrolü
**Seviye**: Orta-Zor
**Ne İstendiği**: Kullanıcıdan bir şifre alın ve şu kriterlere göre değerlendirin:
- 8 karakterden kısa: "Çok kısa"
- 8-12 karakter: "Kısa"
- 13-16 karakter: "Orta"
- 17+ karakter: "Uzun"

Ayrıca şifrede "123" geçiyorsa "Güvenli değil" uyarısı verin.

**İpucu**: Önce uzunluk kontrolü yapın, sonra içerik kontrolü yapın.

**Örnek Çıktı**:
```
Şifrenizi girin: password123
Şifre uzunluğu: Kısa
Güvenlik uyarısı: Güvenli değil
```

---

## Ödev 9: Zaman Dilimi Belirleme
**Seviye**: Zor
**Ne İstendiği**: Kullanıcıdan saat (0-23) alın ve hangi zaman dilimine ait olduğunu belirleyin:
- 0-5: Gece yarısı
- 6-11: Sabah
- 12-17: Öğleden sonra
- 18-23: Akşam

Ayrıca saat 12 ise "Öğle vakti", 18 ise "Akşam yemeği vakti" mesajı verin.

**İpucu**: Önce özel saatleri kontrol edin, sonra zaman dilimlerini kontrol edin.

**Örnek Çıktı**:
```
Saati girin (0-23): 12
Zaman dilimi: Öğleden sonra
Özel mesaj: Öğle vakti
```

---

## Ödev 10: Karmaşık Karar Sistemi
**Seviye**: Çok Zor
**Ne İstendiği**: Kullanıcıdan yaş, cinsiyet (E/K) ve meslek durumu (Öğrenci/Çalışan/İşsiz) bilgilerini alın. Bu bilgilere göre uygun aktivite önerisi verin:

**Yaş grupları:**
- 0-12: Çocuk
- 13-17: Ergen
- 18-25: Genç
- 26-64: Yetişkin
- 65+: Yaşlı

**Öneriler:**
- Çocuk + Erkek: "Futbol oyna"
- Çocuk + Kadın: "Dans et"
- Ergen + Öğrenci: "Ders çalış"
- Ergen + Çalışan: "Part-time iş ara"
- Genç + Öğrenci: "Üniversiteye hazırlan"
- Genç + Çalışan: "Kariyer planla"
- Genç + İşsiz: "İş ara"
- Yetişkin + Çalışan: "İşe odaklan"
- Yetişkin + İşsiz: "Yeni beceriler öğren"
- Yaşlı + Herhangi: "Hobi edin"

**İpucu**: İç içe if yapıları kullanarak önce yaş, sonra cinsiyet ve meslek durumunu kontrol edin.

**Örnek Çıktı**:
```
Yaşınızı girin: 16
Cinsiyetinizi girin (E/K): E
Meslek durumunuzu girin (Öğrenci/Çalışan/İşsiz): Öğrenci
Öneriniz: Ders çalış
```

---

## Özet

Bu ödevlerde öğrendiklerimiz:
- Basit karşılaştırmalardan karmaşık koşullara kadar if-elif-else yapılarını kullandık
- İç içe if yapılarıyla çoklu koşul kontrolleri yaptık
- Mantıksal operatörlerle karmaşık durumları ele aldık
- Kullanıcı girişlerini farklı veri tiplerinde işledik

Bu ödevler, koşullu ifadelerin gücünü ve esnekliğini göstermektedir. 