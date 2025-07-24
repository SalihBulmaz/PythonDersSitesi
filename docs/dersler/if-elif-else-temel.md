# Python if, elif, else - Temel Kontrol Yapıları

## Giriş

Bu derste Python'da program akışını kontrol etmek için kullanılan temel yapıları öğreneceğiz: `if`, `elif` ve `else` ifadeleri. Bu yapılar sayesinde programlarımız farklı durumlara göre farklı davranışlar sergileyebilir.

## Temel Veri Tipleri

Önce kontrol yapılarında kullanacağımız temel veri tiplerini hatırlayalım:

### Sayısal Veri Tipleri
```python
# Integer (Tam sayılar)
yas = 25
ogrenci_sayisi = 30
sıcaklık = -5

# Float (Ondalıklı sayılar)
boy = 1.75
agırlık = 68.5
ortalama = 85.7

```

### String (Metin)
```python
ad = "Ahmet"
soyad = 'Yılmaz'
mesaj = """Bu çok satırlı
bir metindir"""
```

### Boolean (Mantıksal)
```python
dogru = True
yanlış = False
```

## Aritmetik Operatörler

```python
a = 10
b = 3

toplama = a + b        # 13
çıkarma = a - b        # 7
çarpma = a * b         # 30
bölme = a / b          # 3.333...
tam_bölme = a // b     # 3
mod = a % b            # 1
üs = a ** b            # 1000
```

## Mantıksal Operatörler

```python
x = True
y = False

# and operatörü - her iki koşul da doğru olmalı
sonuç1 = x and y       # False

# or operatörü - en az bir koşul doğru olmalı
sonuç2 = x or y        # True

# not operatörü - değeri tersine çevirir
sonuç3 = not x         # False
sonuç4 = not y         # True
```

## Karşılaştırma Operatörleri

```python
a = 10
b = 5

eşit = a == b          # False
eşit_değil = a != b    # True
büyük = a > b          # True
küçük = a < b          # False
büyük_eşit = a >= b    # True
küçük_eşit = a <= b    # False
```

## if Yapısı

### Basit if
```python
yas = 18

if yas >= 18:
    print("Reşitsiniz")
    print("Oy kullanabilirsiniz")
```

### if-else Yapısı
```python
sıcaklık = 25

if sıcaklık > 30:
    print("Hava çok sıcak!")
    print("Bol su için")
else:
    print("Hava sıcak değil")
    print("Normal kıyafet giyebilirsiniz")
```

### if-elif-else Yapısı
```python
not_değeri = 85

if not_değeri >= 90:
    print("AA - Mükemmel!")
elif not_değeri >= 80:
    print("BA - Çok iyi!")
elif not_değeri >= 70:
    print("BB - İyi")
elif not_değeri >= 60:
    print("CB - Orta")
else:
    print("FF - Başarısız")
```

## Detaylı Örnekler

### Yaş Grupları
```python
yas = 25

if yas < 13:
    kategori = "Çocuk"
elif yas < 20:
    kategori = "Ergen"
elif yas < 65:
    kategori = "Yetişkin"
else:
    kategori = "Yaşlı"

print(f"{yas} yaşındasınız, {kategori} kategorisindesiniz")
```

### Hava Durumu Değerlendirmesi
```python
sıcaklık = 28
nem_oranı = 70

if sıcaklık > 35:
    if nem_oranı > 80:
        print("Çok sıcak ve nemli! Dikkatli olun")
    else:
        print("Çok sıcak ama nem düşük")
elif sıcaklık > 25:
    if nem_oranı > 70:
        print("Sıcak ve nemli")
    else:
        print("Güzel hava")
elif sıcaklık > 15:
    print("Ilık hava")
elif sıcaklık > 5:
    print("Serin hava")
else:
    print("Soğuk hava")
```

### Basit Hesap Makinesi
```python
sayı1 = 10
sayı2 = 5
işlem = "+"

if işlem == "+":
    sonuç = sayı1 + sayı2
    print(f"{sayı1} + {sayı2} = {sonuç}")
elif işlem == "-":
    sonuç = sayı1 - sayı2
    print(f"{sayı1} - {sayı2} = {sonuç}")
elif işlem == "*":
    sonuç = sayı1 * sayı2
    print(f"{sayı1} * {sayı2} = {sonuç}")
elif işlem == "/":
    if sayı2 != 0:
        sonuç = sayı1 / sayı2
        print(f"{sayı1} / {sayı2} = {sonuç}")
    else:
        print("Sıfıra bölme hatası!")
else:
    print("Geçersiz işlem")
```

### Şifre Kontrolü
```python
doğru_şifre = "1234"
girilen_şifre = "1234"

if girilen_şifre == doğru_şifre:
    print("Giriş başarılı!")
    print("Hoş geldiniz")
else:
    print("Yanlış şifre!")
    print("Lütfen tekrar deneyin")
```

### Vücut Kitle İndeksi
```python
kilo = 70
boy = 1.75

bmi = kilo / (boy ** 2)

if bmi < 18.5:
    kategori = "Zayıf"
elif bmi < 25:
    kategori = "Normal"
elif bmi < 30:
    kategori = "Fazla kilolu"
else:
    kategori = "Obez"

print(f"VKİ: {bmi:.1f}")
print(f"Kategori: {kategori}")
```

### Çift/Tek Sayı Kontrolü
```python
sayı = 7

if sayı % 2 == 0:
    print(f"{sayı} çift sayıdır")
else:
    print(f"{sayı} tek sayıdır")
```

### Pozitif/Negatif/Sıfır Kontrolü
```python
sayı = -5

if sayı > 0:
    print("Pozitif sayı")
elif sayı < 0:
    print("Negatif sayı")
else:
    print("Sıfır")
```

### Kredi Değerlendirmesi
```python
yas = 25
gelir = 5000
kredi_geçmişi = True

if yas >= 18:
    if gelir >= 3000:
        if kredi_geçmişi:
            print("Kredi onaylandı!")
        else:
            print("Kredi geçmişi yetersiz")
    else:
        print("Gelir yetersiz")
else:
    print("Yaş yetersiz")
```

## Pratik Alıştırmalar

### Alıştırma 1: Not Değerlendirmesi
```python
# Kullanıcıdan bir not alın (0-100 arası)
# Bu nota göre harf notu verin:
# 90-100: AA
# 80-89: BA
# 70-79: BB
# 60-69: CB
# 0-59: FF

not_puani = 85  # Bu değeri değiştirerek test edin

# Kodunuzu buraya yazın
```

### Alıştırma 2: Haftanın Günü
```python
# 1-7 arası bir sayı alın
# Bu sayıya göre haftanın gününü yazdırın:
# 1: Pazartesi, 2: Salı, 3: Çarşamba, 4: Perşembe
# 5: Cuma, 6: Cumartesi, 7: Pazar

gün_sayısı = 3  # Bu değeri değiştirerek test edin

# Kodunuzu buraya yazın
```

### Alıştırma 3: Üçgen Türü
```python
# Üç kenar uzunluğu verildiğinde üçgen türünü belirleyin
# Eşkenar: Tüm kenarlar eşit
# İkizkenar: İki kenar eşit
# Çeşitkenar: Tüm kenarlar farklı

a = 5
b = 5
c = 5

# Kodunuzu buraya yazın
```

### Alıştırma 4: Basit Hesap Makinesi
```python
# İki sayı ve bir işlem operatörü verildiğinde sonucu hesaplayın
# Desteklenen işlemler: +, -, *, /

sayı1 = 10
sayı2 = 3
işlem = "*"

# Kodunuzu buraya yazın
```

### Alıştırma 5: Mevsim Belirleme
```python
# Ay numarası verildiğinde hangi mevsimde olduğunu belirleyin
# İlkbahar: 3, 4, 5
# Yaz: 6, 7, 8
# Sonbahar: 9, 10, 11
# Kış: 12, 1, 2

ay = 7  # Bu değeri değiştirerek test edin

# Kodunuzu buraya yazın
```

## Ödevler

### Ödev 1: Yaş Kategorisi ve Aktivite Önerisi
Bir kişinin yaşını alın ve şu kategorilere göre aktivite önerisi verin:
- 0-2: Bebek (Emekleme ve oyun)
- 3-5: Okul öncesi (Anaokulu aktiviteleri)
- 6-12: Çocuk (Spor ve sanat)
- 13-17: Ergen (Arkadaşlarla aktiviteler)
- 18-25: Genç yetişkin (Üniversite ve kariyer)
- 26-64: Yetişkin (İş ve aile)
- 65+: Yaşlı (Hobi ve dinlenme)

### Ödev 2: Basit ATM Sistemi
Kullanıcının hesabında 1000 TL olduğunu varsayın. Kullanıcıdan işlem seçmesini isteyin:
- 1: Para çekme
- 2: Para yatırma
- 3: Bakiye sorgulama
- 4: Çıkış

Para çekme işleminde yeterli bakiye kontrolü yapın.

### Ödev 3: Hava Durumu ve Kıyafet Önerisi
Sıcaklık ve hava durumunu (güneşli, yağmurlu, karlı) alın ve uygun kıyafet önerisi verin. Örneğin:
- 30°C, güneşli → "Şort ve t-shirt giyin, şapka takın"
- 5°C, karlı → "Kalın mont, eldiven ve bere giyin"

### Ödev 4: Basit Quiz Sistemi
3 soruluk bir quiz oluşturun. Her soru için doğru cevabı kontrol edin ve toplam puanı hesaplayın:
- Her doğru cevap: 10 puan
- Yanlış cevap: 0 puan
- Sonuçta puanı değerlendirin:
  - 30 puan: Mükemmel
  - 20-29 puan: İyi
  - 10-19 puan: Orta
  - 0-9 puan: Geliştirilmeli

### Ödev 5: Basit Oyun: Sayı Tahmin
Bilgisayar 1-100 arası rastgele bir sayı seçsin. Kullanıcıdan tahmin alın ve:
- Tahmin doğruysa: "Tebrikler! X denemede buldunuz"
- Tahmin küçükse: "Daha büyük bir sayı girin"
- Tahmin büyükse: "Daha küçük bir sayı girin"

Maksimum 10 deneme hakkı verin.

## Özet

Bu derste öğrendiklerimiz:
- `if`, `elif`, `else` yapılarını kullanarak koşullu işlemler yapabiliriz
- Aritmetik operatörlerle matematiksel işlemler gerçekleştirebiliriz
- Mantıksal operatörlerle karmaşık koşullar oluşturabiliriz
- Karşılaştırma operatörleriyle değerleri karşılaştırabiliriz
- İç içe if yapılarıyla daha detaylı kontroller yapabiliriz

Bu temel yapılar, Python programlamanın en önemli yapı taşlarıdır ve neredeyse her programda kullanılır. 