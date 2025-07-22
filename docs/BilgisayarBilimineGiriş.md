# Python Temel Kavramlar Rehberi

## İçindekiler
1. [Print Fonksiyonu](#print-fonksiyonu)
2. [Input Fonksiyonu](#input-fonksiyonu)
3. [Değişkenler](#değişkenler)
4. [Primitif Veri Tipleri](#primitif-veri-tipleri)
5. [Operatörler](#operatörler)
6. [Pratik Örnekler](#pratik-örnekler)

---

## Print Fonksiyonu

`print()` fonksiyonu, ekrana metin veya değişken değerlerini yazdırmak için kullanılır.

### Temel Kullanım
```python
print("Merhaba Dünya!")
print('Tek tırnak da kullanılabilir')
print("Python öğreniyorum")
```

### Çoklu Değer Yazdırma
```python
print("İsim:", "Ahmet", "Yaş:", 25)
print("Sonuç:", 42, "Durum:", True)
```

### Özel Parametreler
```python
# sep parametresi - ayırıcı belirleme
print("A", "B", "C", sep="-")  # Çıktı: A-B-C
print("Elma", "Armut", "Muz", sep=" | ")  # Çıktı: Elma | Armut | Muz

# end parametresi - satır sonu belirleme
print("Birinci satır", end=" ")
print("Aynı satırda devam")  # Çıktı: Birinci satır Aynı satırda devam

# Satır atlama
print("İlk satır")
print("İkinci satır")
print()  # Boş satır
print("Üçüncü satır")
```

### Formatlamalar
```python
isim = "Mehmet"
yas = 30
boy = 1.75

# f-string kullanımı (önerilen)
print(f"İsim: {isim}, Yaş: {yas}, Boy: {boy}")

# .format() kullanımı
print("İsim: {}, Yaş: {}, Boy: {}".format(isim, yas, boy))

# % formatı (eski yöntem)
print("İsim: %s, Yaş: %d, Boy: %.2f" % (isim, yas, boy))
```

---

## Input Fonksiyonu

`input()` fonksiyonu, kullanıcıdan klavye girişi almak için kullanılır. Her zaman string döndürür.

### Temel Kullanım
```python
isim = input("Adınızı girin: ")
print(f"Merhaba {isim}!")

# Yaş bilgisi alma ve int'e çevirme
yas_str = input("Yaşınızı girin: ")
yas = int(yas_str)
print(f"Yaşınız: {yas}")

# Tek satırda yapma
yas = int(input("Yaşınızı girin: "))
```

### Farklı Veri Tiplerine Çevirme
```python
# Float'a çevirme
boy = float(input("Boyunuzu metre cinsinden girin: "))
print(f"Boyunuz: {boy} metre")

# Boolean'a çevirme
cevap = input("Devam etmek istiyor musunuz? (evet/hayır): ")
devam = cevap.lower() == "evet"
print(f"Devam durumu: {devam}")

# Birden fazla değer alma
print("İki sayı girin:")
sayi1 = int(input("Birinci sayı: "))
sayi2 = int(input("İkinci sayı: "))
toplam = sayi1 + sayi2
print(f"Toplam: {toplam}")
```

---

## Değişkenler

Değişkenler, verileri bellekte saklayan isimli konteynerlerdir.

### Değişken Tanımlama Kuralları
```python
# Geçerli değişken isimleri
isim = "Ali"
yaş = 25
boy_cm = 175
_gizli = "gizli değer"
sayi2 = 42

# Geçersiz örnekler (hata verir):
# 2sayi = 10        # Rakamla başlayamaz
# my-var = 5        # Tire içeremez
# class = "test"    # Anahtar kelime kullanılamaz
```

### Değişken Atama Yöntemleri
```python
# Tek tek atama
x = 10
y = 20
z = 30

# Çoklu atama
a, b, c = 1, 2, 3
print(f"a={a}, b={b}, c={c}")

# Aynı değeri birden fazla değişkene atama
x = y = z = 0
print(f"x={x}, y={y}, z={z}")

# Değişken değerlerini değiştirme
temp = x
x = y
y = temp
print(f"Değişim sonrası: x={x}, y={y}")

# Python'da kolay değişim
x, y = y, x
print(f"Kolay değişim: x={x}, y={y}")
```

### Değişken İsimlendirme Kuralları
```python
# Anlamlı isimler kullanın
ogrenci_adi = "Ayşe"
matematik_notu = 85
gecti_mi = True

# Kısa ama anlaşılır
ad = "Fatma"
not_ = 90  # 'not' anahtar kelime olduğu için _ eklendi

# Sabitler için büyük harf (konvansiyon)
PI = 3.14159
MAKSIMUM_DENEME = 3
```

---

## Primitif Veri Tipleri

Python'da dört temel primitif veri tipi vardır.

### 1. String (str) - Metin
```python
# String tanımlama
isim = "Ahmet"
soyisim = 'Yılmaz'
mesaj = """Çok satırlı
metin yazısı"""

# String birleştirme
tam_isim = isim + " " + soyisim
print(tam_isim)  # Ahmet Yılmaz

# String çarpma
tekrar = "Merhaba " * 3
print(tekrar)  # Merhaba Merhaba Merhaba 

# String uzunluğu
print(len(isim))  # 5

# String metotları
print(isim.upper())     # AHMET
print(isim.lower())     # ahmet
print(isim.title())     # Ahmet

# String indeksleme
print(isim[0])    # A (ilk karakter)
print(isim[-1])   # t (son karakter)
print(isim[1:3])  # hm (2. ve 3. karakter)

# String kontrolleri
print("Ah" in isim)      # True
print(isim.startswith("A"))  # True
print(isim.endswith("t"))    # True
```

### 2. Integer (int) - Tam Sayı
```python
# Integer tanımlama
yaş = 25
negatif = -10
büyük_sayı = 1000000

# Farklı sayı sistemleri
binary = 0b1010    # 10 (2'lik sistem)
octal = 0o12       # 10 (8'lik sistem)
hex_num = 0xA      # 10 (16'lık sistem)

# Integer işlemleri
toplam = 15 + 25    # 40
fark = 50 - 20      # 30
çarpım = 6 * 7      # 42
bölüm = 20 // 3     # 6 (tam bölüm)
kalan = 20 % 3      # 2 (mod)
üs = 2 ** 3         # 8 (üs alma)

print(f"Toplam: {toplam}")
print(f"Bölüm: {bölüm}, Kalan: {kalan}")

# Tip kontrolü
print(type(yaş))    # <class 'int'>
```

### 3. Float (float) - Ondalıklı Sayı
```python
# Float tanımlama
pi = 3.14159
negatif_float = -2.5
bilimsel = 1.5e2    # 150.0 (1.5 * 10^2)

# Float işlemleri
toplam = 3.5 + 2.1    # 5.6
çarpım = 2.5 * 4      # 10.0
bölüm = 7.5 / 2       # 3.75

# Kesinlik problemleri
sonuç = 0.1 + 0.2
print(sonuç)          # 0.30000000000000004
print(round(sonuç, 2))  # 0.30

# Float metotları
print(pi.is_integer())    # False
print((5.0).is_integer()) # True

# Tip dönüşümleri
int_değer = int(3.7)      # 3 (kesme)
float_değer = float(5)    # 5.0

print(f"Float değer: {pi}")
print(f"Tip: {type(pi)}")
```

### 4. Boolean (bool) - Mantıksal
```python
# Boolean tanımlama
doğru = True
yanlış = False

# Boolean değer döndüren işlemler
yaş = 18
reşit_mi = yaş >= 18      # True
öğrenci_mi = True
çalışan_mı = False

# Boolean işlemleri
# AND (ve) operatörü
print(True and True)      # True
print(True and False)     # False
print(doğru and öğrenci_mi)  # True

# OR (veya) operatörü  
print(True or False)      # True
print(False or False)     # False
print(çalışan_mı or öğrenci_mi)  # True

# NOT (değil) operatörü
print(not True)           # False
print(not yanlış)         # True

# Karşılaştırma sonuçları
print(5 > 3)              # True
print(10 == 10)           # True
print("a" < "b")          # True

# Falsy değerler (False olarak değerlendirilen)
print(bool(0))            # False
print(bool(""))           # False
print(bool(None))         # False

# Truthy değerler (True olarak değerlendirilen)
print(bool(1))            # True
print(bool("merhaba"))    # True
print(bool(-1))           # True
```

---

## Operatörler

### Aritmetik Operatörler
```python
a = 15
b = 4

# Temel işlemler
toplam = a + b      # 19
fark = a - b        # 11
çarpım = a * b      # 60
bölüm = a / b       # 3.75 (float bölüm)
tam_bölüm = a // b  # 3 (tam sayı bölüm)
kalan = a % b       # 3 (mod)
üs = a ** b         # 50625 (15^4)

print(f"{a} + {b} = {toplam}")
print(f"{a} / {b} = {bölüm}")
print(f"{a} // {b} = {tam_bölüm}")
print(f"{a} % {b} = {kalan}")

# Öncelik sırası
sonuç = 2 + 3 * 4    # 14 (çarpma önce)
parantez = (2 + 3) * 4  # 20 (parantez önce)
```

### Atama Operatörleri
```python
x = 10

# Temel atama
x = 20
print(f"x = {x}")  # 20

# Artırımlı atama
x += 5    # x = x + 5
print(f"x += 5: {x}")  # 25

x -= 3    # x = x - 3
print(f"x -= 3: {x}")  # 22

x *= 2    # x = x * 2
print(f"x *= 2: {x}")  # 44

x /= 4    # x = x / 4
print(f"x /= 4: {x}")  # 11.0

x //= 3   # x = x // 3
print(f"x //= 3: {x}")  # 3.0

x %= 2    # x = x % 2
print(f"x %= 2: {x}")  # 1.0

# String ile de çalışır
mesaj = "Merhaba"
mesaj += " Dünya"
print(mesaj)  # Merhaba Dünya

# Çoklu atama
a = b = c = 5
print(f"a={a}, b={b}, c={c}")
```

### Karşılaştırma Operatörleri
```python
a = 10
b = 20
c = 10

# Eşitlik kontrolü
print(f"{a} == {c}: {a == c}")    # True
print(f"{a} == {b}: {a == b}")    # False
print(f"{a} != {b}: {a != b}")    # True

# Büyüklük küçüklük
print(f"{a} < {b}: {a < b}")      # True
print(f"{a} > {b}: {a > b}")      # False
print(f"{a} <= {c}: {a <= c}")    # True
print(f"{b} >= {a}: {b >= a}")    # True

# String karşılaştırması
isim1 = "Ali"
isim2 = "Ayşe"
print(f"'{isim1}' < '{isim2}': {isim1 < isim2}")  # True (alfabetik)

# Boolean karşılaştırması
print(f"True == 1: {True == 1}")      # True
print(f"False == 0: {False == 0}")    # True
print(f"True > False: {True > False}")  # True
```

### Mantıksal Operatörler
```python
# AND operatörü (ve)
yaş = 20
ehliyet = True
araba_var = False

araba_kullanabilir = (yaş >= 18) and ehliyet
print(f"Araba kullanabilir: {araba_kullanabilir}")  # True

# OR operatörü (veya)
öğrenci = True
emekli = False
indirim = öğrenci or emekli
print(f"İndirim hakkı: {indirim}")  # True

# NOT operatörü (değil)
hasta = False
sağlıklı = not hasta
print(f"Sağlıklı: {sağlıklı}")  # True

# Karmaşık mantıksal ifadeler
not1 = 85
not2 = 92
not3 = 78
ortalama = (not1 + not2 + not3) / 3
geçti = (ortalama >= 80) and (not1 >= 70) and (not2 >= 70) and (not3 >= 70)
print(f"Ortalama: {ortalama:.1f}")
print(f"Geçti: {geçti}")

# Kısa devre değerlendirme
def kontrol():
    print("Fonksiyon çalıştı")
    return True

# False olduğu için ikinci kısım çalışmaz
sonuç = False and kontrol()  # "Fonksiyon çalıştı" yazdırılmaz
print(f"Sonuç: {sonuç}")

# True olduğu için ikinci kısım çalışmaz
sonuç2 = True or kontrol()  # "Fonksiyon çalıştı" yazdırılmaz
print(f"Sonuç2: {sonuç2}")
```

### Üyelik Operatörleri
```python
# in operatörü
metin = "Python programlama"
print(f"'Python' in metin: {'Python' in metin}")      # True
print(f"'Java' in metin: {'Java' in metin}")          # False

# not in operatörü
print(f"'C++' not in metin: {'C++' not in metin}")    # True

# String karakteri kontrol
harf = 'a'
kelime = "programlama"
print(f"'{harf}' kelimede var mı: {harf in kelime}")   # True

# Sayı kontrolü (string olarak)
sayı_str = "12345"
print(f"'3' sayıda var mı: {'3' in sayı_str}")        # True
```

### Kimlik Operatörleri
```python
# is operatörü - aynı nesne mi kontrol eder
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(f"a is b: {a is b}")    # False (farklı nesneler)
print(f"a is c: {a is c}")    # True (aynı nesne)
print(f"a == b: {a == b}")    # True (içerik aynı)

# is not operatörü
print(f"a is not b: {a is not b}")  # True

# None kontrolü
değer = None
print(f"değer is None: {değer is None}")      # True
print(f"değer is not None: {değer is not None}")  # False

# Küçük sayılar için özel durum
x = 5
y = 5
print(f"x is y: {x is y}")    # True (Python küçük sayıları cache'ler)

x = 1000
y = 1000
print(f"x is y: {x is y}")    # False (büyük sayılar için)
```

---

## Pratik Örnekler

### Örnek 1: Basit Hesap Makinesi
```python
print("=== Basit Hesap Makinesi ===")

# Sayıları al
sayi1 = float(input("Birinci sayıyı girin: "))
sayi2 = float(input("İkinci sayıyı girin: "))

# İşlemleri hesapla
toplam = sayi1 + sayi2
fark = sayi1 - sayi2
çarpım = sayi1 * sayi2

# Bölme işlemi için sıfıra bölme kontrolü
if sayi2 != 0:
    bölüm = sayi1 / sayi2
    print(f"Bölüm: {sayi1} / {sayi2} = {bölüm:.2f}")
else:
    print("Sıfıra bölme hatası!")

# Sonuçları yazdır
print(f"Toplam: {sayi1} + {sayi2} = {toplam}")
print(f"Fark: {sayi1} - {sayi2} = {fark}")
print(f"Çarpım: {sayi1} * {sayi2} = {çarpım}")
```

### Örnek 2: Yaş Hesaplama ve Kategori Belirleme
```python
print("=== Yaş Kategori Belirleme ===")

# Kişi bilgilerini al
isim = input("İsminizi girin: ")
doğum_yılı = int(input("Doğum yılınızı girin: "))

# Yaşı hesapla
şu_anki_yıl = 2024
yaş = şu_anki_yıl - doğum_yılı

# Kategori belirleme
çocuk = yaş < 13
genç = 13 <= yaş < 20
yetişkin = 20 <= yaş < 65
yaşlı = yaş >= 65

print(f"\nMerhaba {isim}!")
print(f"Yaşınız: {yaş}")

if çocuk:
    kategori = "Çocuk"
elif genç:
    kategori = "Genç"
elif yetişkin:
    kategori = "Yetişkin"
else:
    kategori = "Yaşlı"

print(f"Kategoriniz: {kategori}")

# Ek bilgiler
reşit = yaş >= 18
emekli_yaşı = yaş >= 65

print(f"Reşit misiniz: {reşit}")
print(f"Emekli yaşında mısınız: {emekli_yaşı}")
```

### Örnek 3: BMI (Vücut Kitle İndeksi) Hesaplama
```python
print("=== BMI Hesaplama ===")

# Bilgileri al
isim = input("İsminizi girin: ")
kilo = float(input("Kilonuzu kg cinsinden girin: "))
boy = float(input("Boyunuzu metre cinsinden girin: "))

# BMI hesapla
bmi = kilo / (boy ** 2)

# BMI kategorisi belirleme
zayıf = bmi < 18.5
normal = 18.5 <= bmi < 25
fazla_kilolu = 25 <= bmi < 30
obez = bmi >= 30

print(f"\n{isim}, BMI sonuçlarınız:")
print(f"Kilo: {kilo} kg")
print(f"Boy: {boy} m")
print(f"BMI: {bmi:.1f}")

if zayıf:
    durum = "Zayıf"
    öneri = "Kilo almanız önerilir."
elif normal:
    durum = "Normal"
    öneri = "Kilonuz ideal aralıkta."
elif fazla_kilolu:
    durum = "Fazla Kilolu"
    öneri = "Biraz kilo vermeniz yararlı olabilir."
else:
    durum = "Obez"
    öneri = "Doktor kontrolünde kilo vermeniz önerilir."

print(f"Durum: {durum}")
print(f"Öneri: {öneri}")
```

### Örnek 4: Basit Şifre Kontrol Sistemi
```python
print("=== Şifre Kontrol Sistemi ===")

# Doğru şifre (normalde veritabanından gelir)
doğru_şifre = "python123"
maksimum_deneme = 3

# Kullanıcı bilgilerini al
kullanıcı_adı = input("Kullanıcı adını girin: ")

print(f"Merhaba {kullanıcı_adı}!")

# Şifre denemesi
deneme_sayısı = 0
giriş_başarılı = False

while deneme_sayısı < maksimum_deneme:
    şifre = input("Şifrenizi girin: ")
    deneme_sayısı += 1
    
    if şifre == doğru_şifre:
        giriş_başarılı = True
        break
    else:
        kalan_deneme = maksimum_deneme - deneme_sayısı
        if kalan_deneme > 0:
            print(f"Yanlış şifre! {kalan_deneme} deneme hakkınız kaldı.")
        else:
            print("Tüm deneme haklarınız bitti!")

if giriş_başarılı:
    print(f"Hoş geldiniz {kullanıcı_adı}! Giriş başarılı.")
else:
    print("Giriş başarısız. Hesabınız geçici olarak kilitlendi.")

# İstatistikler
print(f"\nGiriş İstatistikleri:")
print(f"Toplam deneme sayısı: {deneme_sayısı}")
print(f"Başarılı: {giriş_başarılı}")
```

### Örnek 5: Sayı Tahmin Oyunu Temeleri
```python
print("=== Sayı Tahmin Oyunu Temeleri ===")

# Gizli sayı (normalde random olur)
gizli_sayı = 42

# Oyuncu bilgileri
oyuncu_adı = input("Adınızı girin: ")
print(f"Merhaba {oyuncu_adı}! 1-100 arası bir sayı tuttum.")

# İlk tahmin
tahmin = int(input("Tahmininizi girin: "))

# Tahmin kontrolleri
doğru_tahmin = tahmin == gizli_sayı
büyük_tahmin = tahmin > gizli_sayı
küçük_tahmin = tahmin < gizli_sayı

# Sonuçları değerlendirme
if doğru_tahmin:
    print(f"Tebrikler {oyuncu_adı}! Doğru tahmin: {gizli_sayı}")
    skor = 100
elif büyük_tahmin:
    print("Tahmininiz büyük! Daha küçük bir sayı deneyin.")
    fark = tahmin - gizli_sayı
    skor = max(0, 100 - fark * 2)
else:  # küçük_tahmin
    print("Tahmininiz küçük! Daha büyük bir sayı deneyin.")
    fark = gizli_sayı - tahmin
    skor = max(0, 100 - fark * 2)

print(f"Skorunuz: {skor}")

# Tahmin analizi
fark_mutlak = abs(tahmin - gizli_sayı)
yakın_tahmin = fark_mutlak <= 5
orta_tahmin = 5 < fark_mutlak <= 15
uzak_tahmin = fark_mutlak > 15

if doğru_tahmin:
    mesaj = "Mükemmel!"
elif yakın_tahmin:
    mesaj = "Çok yaklaştınız!"
elif orta_tahmin:
    mesaj = "Yaklaştınız."
else:
    mesaj = "Uzaksınız."

print(f"Değerlendirme: {mesaj}")
print(f"Gizli sayı ile aranızdaki fark: {fark_mutlak}")
```

### Örnek 6: Alışveriş Hesaplama
```python
print("=== Alışveriş Sepeti Hesaplama ===")

# Müşteri bilgileri
müşteri_adı = input("Adınızı girin: ")
üye_mi = input("Üye misiniz? (evet/hayır): ").lower() == "evet"

# Ürün bilgileri
ürün1_fiyat = float(input("1. ürün fiyatı: "))
ürün1_adet = int(input("1. ürün adet: "))

ürün2_fiyat = float(input("2. ürün fiyatı: "))
ürün2_adet = int(input("2. ürün adet: "))

ürün3_fiyat = float(input("3. ürün fiyatı: "))
ürün3_adet = int(input("3. ürün adet: "))

# Hesaplamalar
toplam1 = ürün1_fiyat * ürün1_adet
toplam2 = ürün2_fiyat * ürün2_adet
toplam3 = ürün3_fiyat * ürün3_adet

ara_toplam = toplam1 + toplam2 + toplam3
toplam_adet = ürün1_adet + ürün2_adet + ürün3_adet

# İndirim hesaplamaları
üye_indirimi = 0.10 if üye_mi else 0.0
miktar_indirimi = 0.05 if toplam_adet >= 10 else 0.0
tutar_indirimi = 0.15 if ara_toplam >= 500 else 0.0

# En yüksek indirimi uygula
maksimum_indirim = max(üye_indirimi, miktar_indirimi, tutar_indirimi)
indirim_tutarı = ara_toplam * maksimum_indirim
net_tutar = ara_toplam - indirim_tutarı

# KDV hesaplama
kdv_oranı = 0.18
kdv_tutarı = net_tutar * kdv_oranı
ödenecek_tutar = net_tutar + kdv_tutarı

# Sonuçları yazdır
print(f"\n=== {müşteri_adı} Alışveriş Fişi ===")
print(f"Üye: {'Evet' if üye_mi else 'Hayır'}")
print(f"Toplam Ürün Adedi: {toplam_adet}")
print(f"Ara Toplam: {ara_toplam:.2f} TL")
print(f"İndirim Oranı: %{maksimum_indirim*100:.0f}")
print(f"İndirim Tutarı: {indirim_tutarı:.2f} TL")
print(f"İndirimli Tutar: {net_tutar:.2f} TL")
print(f"KDV (%18): {kdv_tutarı:.2f} TL")
print(f"Ödenecek Tutar: {ödenecek_tutar:.2f} TL")

# Ek bilgiler
bedava_kargo = ödenecek_tutar >= 150
puan = int(ödenecek_tutar / 10) if üye_mi else 0

print(f"\nEk Bilgiler:")
print(f"Bedava Kargo: {'Evet' if bedava_kargo else 'Hayır'}")
print(f"Kazanılan Puan: {puan}")
```

### Örnek 7: Not Hesaplama Sistemi
```python
print("=== Öğrenci Not Hesaplama Sistemi ===")

# Öğrenci bilgileri
öğrenci_adı = input("Öğrenci adı: ")
öğrenci_no = input("Öğrenci numarası: ")
ders_adı = input("Ders adı: ")

print(f"\n{öğrenci_adı} - {ders_adı} dersi notları:")

# Notları al
vize_notu = float(input("Vize notu (0-100): "))
final_notu = float(input("Final notu (0-100): "))
ödev_notu = float(input("Ödev notu (0-100): "))
quiz_notu = float(input("Quiz notu (0-100): "))

# Not yüzdeleri
vize_yüzde = 0.30
final_yüzde = 0.40
ödev_yüzde = 0.20
quiz_yüzde = 0.10

# Geçerlilik kontrolleri
vize_geçerli = 0 <= vize_notu <= 100
final_geçerli = 0 <= final_notu <= 100
ödev_geçerli = 0 <= ödev_notu <= 100
quiz_geçerli = 0 <= quiz_notu <= 100

tüm_notlar_geçerli = vize_geçerli and final_geçerli and ödev_geçerli and quiz_geçerli

if tüm_notlar_geçerli:
    # Ağırlıklı ortalama hesaplama
    ağırlıklı_ortalama = (vize_notu * vize_yüzde + 
                         final_notu * final_yüzde + 
                         ödev_notu * ödev_yüzde + 
                         quiz_notu * quiz_yüzde)
    
    # Harf notu belirleme
    AA = ağırlıklı_ortalama >= 90
    BA = 85 <= ağırlıklı_ortalama < 90
    BB = 80 <= ağırlıklı_ortalama < 85
    CB = 75 <= ağırlıklı_ortalama < 80
    CC = 70 <= ağırlıklı_ortalama < 75
    DC = 65 <= ağırlıklı_ortalama < 70
    DD = 60 <= ağırlıklı_ortalama < 65
    FF = ağırlıklı_ortalama < 60
    
    if AA:
        harf_notu = "AA"
        geçti = True
    elif BA:
        harf_notu = "BA"
        geçti = True
    elif BB:
        harf_notu = "BB"
        geçti = True
    elif CB:
        harf_notu = "CB"
        geçti = True
    elif CC:
        harf_notu = "CC"
        geçti = True
    elif DC:
        harf_notu = "DC"
        geçti = True
    elif DD:
        harf_notu = "DD"
        geçti = True
    else:
        harf_notu = "FF"
        geçti = False
    
    # Ek kontroller
    final_şartı = final_notu >= 40
    devam_şartı = True  # Bu örnekte hep True
    
    kesin_geçti = geçti and final_şartı and devam_şartı
    
    # Sonuçları yazdır
    print(f"\n=== {öğrenci_adı} Not Raporu ===")
    print(f"Öğrenci No: {öğrenci_no}")
    print(f"Ders: {ders_adı}")
    print(f"Vize: {vize_notu} (%{vize_yüzde*100:.0f})")
    print(f"Final: {final_notu} (%{final_yüzde*100:.0f})")
    print(f"Ödev: {ödev_notu} (%{ödev_yüzde*100:.0f})")
    print(f"Quiz: {quiz_notu} (%{quiz_yüzde*100:.0f})")
    print(f"Ağırlıklı Ortalama: {ağırlıklı_ortalama:.2f}")
    print(f"Harf Notu: {harf_notu}")
    print(f"Final Şartı: {'Sağlandı' if final_şartı else 'Sağlanmadı'}")
    print(f"Sonuç: {'GEÇTİ' if kesin_geçti else 'KALDI'}")
    
else:
    print("Hata: Geçersiz not girişi! Notlar 0-100 arasında olmalıdır.")
```

### Örnek 8: Basit Banka Hesap Sistemi
```python
print("=== Basit Banka Hesap Sistemi ===")

# Hesap bilgileri
hesap_sahibi = input("Hesap sahibinin adı: ")
hesap_no = input("Hesap numarası: ")
mevcut_bakiye = float(input("Mevcut bakiye: "))

# Minimum bakiye
minimum_bakiye = 100.0

print(f"\nHoş geldiniz {hesap_sahibi}!")
print(f"Hesap No: {hesap_no}")
print(f"Mevcut Bakiye: {mevcut_bakiye:.2f} TL")

# İşlem seçimi
print("\nYapmak istediğiniz işlemi seçin:")
print("1- Para Yatırma")
print("2- Para Çekme")
print("3- Bakiye Sorgulama")

işlem = input("İşlem numarası (1/2/3): ")

if işlem == "1":
    # Para yatırma
    yatırılacak_tutar = float(input("Yatırılacak tutarı girin: "))
    
    geçerli_tutar = yatırılacak_tutar > 0
    
    if geçerli_tutar:
        yeni_bakiye = mevcut_bakiye + yatırılacak_tutar
        print(f"İşlem başarılı!")
        print(f"Yatırılan tutar: {yatırılacak_tutar:.2f} TL")
        print(f"Yeni bakiye: {yeni_bakiye:.2f} TL")
    else:
        print("Hata: Geçersiz tutar!")

elif işlem == "2":
    # Para çekme
    çekilecek_tutar = float(input("Çekilecek tutarı girin: "))
    
    geçerli_tutar = çekilecek_tutar > 0
    yeterli_bakiye = (mevcut_bakiye - çekilecek_tutar) >= minimum_bakiye
    
    if geçerli_tutar and yeterli_bakiye:
        yeni_bakiye = mevcut_bakiye - çekilecek_tutar
        print(f"İşlem başarılı!")
        print(f"Çekilen tutar: {çekilecek_tutar:.2f} TL")
        print(f"Yeni bakiye: {yeni_bakiye:.2f} TL")
    elif not geçerli_tutar:
        print("Hata: Geçersiz tutar!")
    else:
        print(f"Hata: Yetersiz bakiye!")
        print(f"Çekebileceğiniz maksimum tutar: {mevcut_bakiye - minimum_bakiye:.2f} TL")

elif işlem == "3":
    # Bakiye sorgulama
    print(f"Güncel bakiyeniz: {mevcut_bakiye:.2f} TL")
    print(f"Minimum bakiye: {minimum_bakiye:.2f} TL")
    kullanılabilir_bakiye = mevcut_bakiye - minimum_bakiye
    print(f"Kullanılabilir bakiye: {kullanılabilir_bakiye:.2f} TL")
    
    # Hesap durumu
    iyi_durum = mevcut_bakiye > minimum_bakiye * 5
    orta_durum = minimum_bakiye * 2 < mevcut_bakiye <= minimum_bakiye * 5
    risk_durum = mevcut_bakiye <= minimum_bakiye * 2
    
    if iyi_durum:
        durum = "Mükemmel"
    elif orta_durum:
        durum = "İyi"
    else:
        durum = "Riskli"
    
    print(f"Hesap durumu: {durum}")

else:
    print("Hata: Geçersiz işlem seçimi!")

# Genel bilgiler
print(f"\nHesap Özeti:")
print(f"Hesap Sahibi: {hesap_sahibi}")
print(f"Hesap Aktif: {mevcut_bakiye >= 0}")
print(f"VIP Müşteri: {mevcut_bakiye >= 10000}")
```

### Örnek 9: Basit Envanter Takip Sistemi
```python
print("=== Basit Envanter Takip Sistemi ===")

# Ürün bilgileri
ürün_adı = input("Ürün adı: ")
ürün_kodu = input("Ürün kodu: ")
mevcut_stok = int(input("Mevcut stok adedi: "))
minimum_stok = int(input("Minimum stok seviyesi: "))
birim_fiyat = float(input("Birim fiyat: "))

# Stok durumu kontrolleri
stok_yeterli = mevcut_stok >= minimum_stok
kritik_stok = mevcut_stok < minimum_stok
stok_tükendi = mevcut_stok == 0

print(f"\n=== {ürün_adı} Stok Raporu ===")
print(f"Ürün Kodu: {ürün_kodu}")
print(f"Mevcut Stok: {mevcut_stok} adet")
print(f"Minimum Stok: {minimum_stok} adet")
print(f"Birim Fiyat: {birim_fiyat:.2f} TL")

# Toplam değer
toplam_değer = mevcut_stok * birim_fiyat
print(f"Toplam Stok Değeri: {toplam_değer:.2f} TL")

# Stok durumu mesajları
if stok_tükendi:
    durum = "STOK TÜKENDİ"
    aciliyet = "ACİL"
elif kritik_stok:
    durum = "KRİTİK STOK"
    aciliyet = "YÜKSEK"
else:
    durum = "NORMAL"
    aciliyet = "DÜŞ�K"

print(f"Stok Durumu: {durum}")
print(f"Aciliyet Seviyesi: {aciliyet}")

# Sipariş önerisi
if kritik_stok:
    önerilen_sipariş = minimum_stok * 2 - mevcut_stok
    print(f"Önerilen Sipariş Miktarı: {önerilen_sipariş} adet")

# İşlem yapmak istiyor mu?
işlem_var = input("\nStok işlemi yapmak istiyor musunuz? (evet/hayır): ").lower() == "evet"

if işlem_var:
    print("1- Stok Girişi")
    print("2- Stok Çıkışı")
    
    işlem_tipi = input("İşlem tipi (1/2): ")
    
    if işlem_tipi == "1":
        # Stok girişi
        giren_miktar = int(input("Giren miktar: "))
        
        if giren_miktar > 0:
            yeni_stok = mevcut_stok + giren_miktar
            print(f"Stok girişi başarılı!")
            print(f"Önceki stok: {mevcut_stok}")
            print(f"Giren miktar: {giren_miktar}")
            print(f"Yeni stok: {yeni_stok}")
            
            # Yeni durum kontrolü
            yeni_durum_normal = yeni_stok >= minimum_stok
            if kritik_stok and yeni_durum_normal:
                print("Harika! Stok seviyesi normale döndü.")
        else:
            print("Hata: Geçersiz miktar!")
    
    elif işlem_tipi == "2":
        # Stok çıkışı
        çıkan_miktar = int(input("Çıkan miktar: "))
        
        geçerli_miktar = çıkan_miktar > 0
        yeterli_stok = çıkan_miktar <= mevcut_stok
        
        if geçerli_miktar and yeterli_stok:
            yeni_stok = mevcut_stok - çıkan_miktar
            print(f"Stok çıkışı başarılı!")
            print(f"Önceki stok: {mevcut_stok}")
            print(f"Çıkan miktar: {çıkan_miktar}")
            print(f"Yeni stok: {yeni_stok}")
            
            # Uyarı kontrolleri
            if yeni_stok < minimum_stok:
                print("UYARI: Stok minimum seviyenin altına düştü!")
            if yeni_stok == 0:
                print("UYARI: Stok tükendi!")
                
        elif not geçerli_miktar:
            print("Hata: Geçersiz miktar!")
        else:
            print(f"Hata: Yetersiz stok! Maksimum çıkabilecek: {mevcut_stok}")
    
    else:
        print("Geçersiz işlem tipi!")

print("\nİşlemler tamamlandı.")
```

Bu rehber, Python'da temel kavramları öğrenmek için kapsamlı bir kaynak sunuyor. Her konu detaylı açıklamalar ve pratik örneklerle destekleniyor. Bu örnekleri inceleyerek ve çalıştırarak Python programlamanın temellerini sağlam bir şekilde öğrenebilirsiniz.