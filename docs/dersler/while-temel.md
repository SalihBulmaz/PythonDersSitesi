# Python While Döngüleri - Primitif Tipler Rehberi

## Giriş

Bu derste Python'da koşula bağlı tekrarlayan işlemleri gerçekleştirmek için kullanılan `while` döngülerini öğreneceğiz. While döngüleri, belirli bir koşul sağlandığı sürece çalışmaya devam eder. Bu rehberde sadece primitif veri tipleri (int, float, string, boolean) kullanarak örnekler yapacağız.

## While Döngüsünün Temel Yapısı

```python
while koşul:
    # Yapılacak işlemler
    # Koşulu değiştirecek kod
```

**ÖNEMLİ:** While döngülerinde sonsuz döngüye girmemek için döngü içinde koşulu değiştirecek bir kod olmalıdır!

## 1. Temel Sayma İşlemleri

### Basit Sayma
```python
# 1'den 10'a kadar sayma
sayi = 1
while sayi <= 10:
    print(sayi)
    sayi += 1  # Koşulu değiştiren kod

# Çıktı: 1 2 3 4 5 6 7 8 9 10
```

### Geriye Doğru Sayma
```python
# 10'dan 1'e kadar geriye sayma
sayi = 10
while sayi >= 1:
    print(sayi, end=" ")
    sayi -= 1

print()  # Yeni satır
# Çıktı: 10 9 8 7 6 5 4 3 2 1
```

### Belirli Adımlarla Sayma
```python
# 2'şer 2'şer sayma
sayi = 0
while sayi <= 20:
    print(sayi, end=" ")
    sayi += 2

# Çıktı: 0 2 4 6 8 10 12 14 16 18 20
```

### Boolean Kontrolü ile Sayma
```python
# 100'e kadar sayma ama 50'de durma
sayi = 1
devam_et = True

while devam_et and sayi <= 100:
    print(sayi, end=" ")
    if sayi == 50:
        devam_et = False
    sayi += 1

# Çıktı: 1 2 3 ... 49 50
```

### Pratik Alıştırmalar

**Alıştırma 1:** 5'den 50'ye kadar 5'er 5'er sayan program yazın.

**Alıştırma 2:** 100'den 1'e kadar 3'er 3'er azaltarak sayan program yazın.

**Alıştırma 3:** 1'den başlayarak çift sayıları yazdıran, 20'ye ulaştığında duran program yazın.

**Alıştırma 4:** Kullanıcıdan bir sayı alın ve 1'den o sayıya kadar yazdıran program yazın.

**Alıştırma 5:** 1'den 1000'e kadar sayarken, 7'nin katlarını atlayan program yazın.

## 2. Kullanıcı Girdisi ile Kontrol

### Basit Menü Sistemi
```python
# Basit menü sistemi
devam = True
while devam:
    print("\n1. Merhaba de")
    print("2. Çıkış")
    secim = input("Seçiminiz (1-2): ")
    
    if secim == "1":
        print("Merhaba!")
    elif secim == "2":
        devam = False
        print("Çıkış yapılıyor...")
    else:
        print("Geçersiz seçim!")
```

### Sayı Tahmin Oyunu
```python
# Basit sayı tahmin oyunu
gizli_sayi = 42
tahmin = 0
deneme_sayisi = 0

while tahmin != gizli_sayi:
    tahmin = int(input("Bir sayı tahmin edin (1-100): "))
    deneme_sayisi += 1
    
    if tahmin < gizli_sayi:
        print("Daha büyük bir sayı deneyin!")
    elif tahmin > gizli_sayi:
        print("Daha küçük bir sayı deneyin!")
    else:
        print(f"Tebrikler! {deneme_sayisi} denemede buldunuz!")
```

### Şifre Kontrol Sistemi
```python
# Şifre kontrol sistemi
dogru_sifre = "python123"
giris_yapildi = False
deneme_hakki = 3

while not giris_yapildi and deneme_hakki > 0:
    sifre = input("Şifrenizi girin: ")
    
    if sifre == dogru_sifre:
        giris_yapildi = True
        print("Giriş başarılı!")
    else:
        deneme_hakki -= 1
        if deneme_hakki > 0:
            print(f"Yanlış şifre! {deneme_hakki} hakkınız kaldı.")
        else:
            print("Giriş hakkiniz bitti!")
```

### Float Değerlerle Hesaplama
```python
# Toplam hesaplayıcı
toplam = 0.0
sayi = 0.0

print("Sayıları girin (0 ile bitirin):")
while sayi != 0:
    sayi = float(input("Sayı: "))
    if sayi != 0:
        toplam += sayi

print(f"Girilen sayıların toplamı: {toplam}")
```

### Pratik Alıştırmalar

**Alıştırma 1:** Kullanıcı "quit" yazana kadar string alan ve karakter sayısını gösteren program yazın.

**Alıştırma 2:** Kullanıcıdan pozitif sayılar alıp ortalamasını hesaplayan program yazın (negatif sayı ile bitsin).

**Alıştırma 3:** Kullanıcıdan şifre alıp, en az 8 karakter olana kadar tekrar isteyen program yazın.

**Alıştırma 4:** Basit ATM simülasyonu yapın (bakiye sorma, para çekme, çıkış).

**Alıştırma 5:** Kullanıcının girdiği sayıların en büyüğünü bulan program yazın (0 ile bitsin).

## 3. String İşlemleri

### Karakter Karakter İşleme
```python
# String'i karakter karakter yazdırma
metin = "Python"
indeks = 0

while indeks < len(metin):
    print(f"{indeks}. karakter: {metin[indeks]}")
    indeks += 1

# Çıktı:
# 0. karakter: P
# 1. karakter: y
# 2. karakter: t
# 3. karakter: h
# 4. karakter: o
# 5. karakter: n
```

### String'de Karakter Arama
```python
# Belirli bir karakteri arama
metin = "Python programlama"
aranan = "a"
indeks = 0
bulundu = False

while indeks < len(metin) and not bulundu:
    if metin[indeks] == aranan:
        print(f"'{aranan}' karakteri {indeks}. pozisyonda bulundu!")
        bulundu = True
    indeks += 1

if not bulundu:
    print(f"'{aranan}' karakteri bulunamadı!")
```

### String Temizleme
```python
# String'den boşlukları temizleme
metin = "  Python   Programlama  "
temiz_metin = ""
indeks = 0

while indeks < len(metin):
    if metin[indeks] != " ":
        temiz_metin += metin[indeks]
    indeks += 1

print(f"Orijinal: '{metin}'")
print(f"Temizlenmiş: '{temiz_metin}'")
# Çıktı:
# Orijinal: '  Python   Programlama  '
# Temizlenmiş: 'PythonProgramlama'
```

### Palindrom Kontrolü
```python
# Kelime palindrom mu kontrol etme
kelime = "radar"
baslangic = 0
son = len(kelime) - 1
palindrom = True

while baslangic < son and palindrom:
    if kelime[baslangic] != kelime[son]:
        palindrom = False
    baslangic += 1
    son -= 1

if palindrom:
    print(f"'{kelime}' bir palindromdur")
else:
    print(f"'{kelime}' bir palindrom değildir")
```

### Kelime Sayma
```python
# String'deki kelime sayısını bulma
cumle = "Python programlama dili çok güçlüdür"
kelime_sayisi = 0
indeks = 0
kelime_icinde = False

while indeks < len(cumle):
    if cumle[indeks] != " ":
        if not kelime_icinde:
            kelime_sayisi += 1
            kelime_icinde = True
    else:
        kelime_icinde = False
    indeks += 1

print(f"'{cumle}' cümlesinde {kelime_sayisi} kelime var")
# Çıktı: 'Python programlama dili çok güçlüdür' cümlesinde 5 kelime var
```

### Pratik Alıştırmalar

**Alıştırma 1:** Bir string'deki sesli harf sayısını while döngüsü ile bulan program yazın.

**Alıştırma 2:** Verilen string'i tersten yazdıran program yazın.

**Alıştırma 3:** Bir string'deki her karakterin kaç kez tekrarlandığını gösteren program yazın.

**Alıştırma 4:** String'den sadece rakamları çıkaran program yazın.

**Alıştırma 5:** İki string'in aynı olup olmadığını karakter karakter kontrol eden program yazın.

## 4. Matematiksel Hesaplamalar

### Faktöriyel Hesaplama
```python
# Faktöriyel hesaplama
sayi = 5
faktoriyel = 1
sayac = 1

while sayac <= sayi:
    faktoriyel *= sayac
    sayac += 1

print(f"{sayi}! = {faktoriyel}")
# Çıktı: 5! = 120
```

### Fibonacci Serisi
```python
# Fibonacci serisinin ilk n terimini yazdırma
n = 10
a, b = 0, 1
sayac = 0

print("Fibonacci serisi:")
while sayac < n:
    print(a, end=" ")
    a, b = b, a + b
    sayac += 1

# Çıktı: 0 1 1 2 3 5 8 13 21 34
```

### Asal Sayı Kontrolü
```python
# Bir sayının asal olup olmadığını kontrol etme
sayi = 17
bolen = 2
asal = True

if sayi <= 1:
    asal = False
else:
    while bolen < sayi and asal:
        if sayi % bolen == 0:
            asal = False
        bolen += 1

if asal:
    print(f"{sayi} asal bir sayıdır")
else:
    print(f"{sayi} asal bir sayı değildir")
```

### EBOB Hesaplama
```python
# İki sayının EBOB'unu bulma (Öklid algoritması)
a = 48
b = 18

print(f"{a} ve {b} sayılarının EBOB'u:")
while b != 0:
    kalan = a % b
    a = b
    b = kalan

print(f"EBOB = {a}")
# Çıktı: 48 ve 18 sayılarının EBOB'u: EBOB = 6
```

### Sayının Rakamlarını Toplama
```python
# Bir sayının rakamlarını toplama
sayi = 12345
rakam_toplami = 0

while sayi > 0:
    rakam = sayi % 10  # Son rakamı al
    rakam_toplami += rakam
    sayi = sayi // 10  # Son rakamı at

print(f"Rakamlar toplamı: {rakam_toplami}")
# Çıktı: Rakamlar toplamı: 15
```

### Pratik Alıştırmalar

**Alıştırma 1:** İki sayının EKOK'unu bulan program yazın.

**Alıştırma 2:** Verilen bir sayının kaç basamaklı olduğunu bulan program yazın.

**Alıştırma 3:** Bir sayının mükemmel sayı olup olmadığını kontrol eden program yazın.

**Alıştırma 4:** Girilen sayının tersini (rakamları ters sırada) bulan program yazın.

**Alıştırma 5:** 1'den 1000'e kadar olan Armstrong sayılarını bulan program yazın.

## 5. İç İçe While Döngüleri

### Çarpım Tablosu
```python
# 1-5 arası çarpım tabloları
i = 1
while i <= 5:
    print(f"\n{i}'lik çarpım tablosu:")
    print("-" * 15)
    j = 1
    while j <= 10:
        sonuc = i * j
        print(f"{i} x {j} = {sonuc}")
        j += 1
    i += 1
```

### Yıldız Üçgeni
```python
# Yıldızlarla üçgen çizme
satir = 1
yukseklik = 5

while satir <= yukseklik:
    yildiz = 1
    while yildiz <= satir:
        print("*", end="")
        yildiz += 1
    print()  # Yeni satır
    satir += 1

# Çıktı:
# *
# **
# ***
# ****
# *****
```

### Sayı Piramidi
```python
# Sayılarla piramit çizme
satir = 1
yukseklik = 5

while satir <= yukseklik:
    sayi = 1
    while sayi <= satir:
        print(sayi, end="")
        sayi += 1
    print()
    satir += 1

# Çıktı:
# 1
# 12
# 123
# 1234
# 12345
```

### Ters Üçgen
```python
# Ters yıldız üçgeni
satir = 5

while satir > 0:
    yildiz = 1
    while yildiz <= satir:
        print("*", end="")
        yildiz += 1
    print()
    satir -= 1

# Çıktı:
# *****
# ****
# ***
# **
# *
```

### Pratik Alıştırmalar

**Alıştırma 1:** Boş kare (sadece kenarları yıldızlı) çizen program yazın.

**Alıştırma 2:** Piramit şeklinde (ortadan başlayıp genişleyen) yıldız çizen program yazın.

**Alıştırma 3:** 1'den 10'a kadar tüm sayıların karelerini tablo halinde gösteren program yazın.

**Alıştırma 4:** İki basamaklı tüm asal sayıları bulan program yazın.

**Alıştırma 5:** Baklava dilimi şeklinde (büyüyüp küçülen) yıldız deseni çizen program yazın.

## 6. Koşullu Durumlar ve Kontrol

### Break ve Continue Benzeri Davranış
```python
# Break benzeri davranış (flag kullanarak)
sayi = 1
bulundu = False

while sayi <= 100 and not bulundu:
    if sayi % 7 == 0 and sayi % 11 == 0:
        print(f"7 ve 11'e bölünen ilk sayı: {sayi}")
        bulundu = True
    sayi += 1
```

### Çoklu Koşul Kontrolü
```python
# Birden fazla koşulu kontrol etme
sayi = 1
cift_toplam = 0
tek_toplam = 0

while sayi <= 100:
    if sayi % 2 == 0:
        cift_toplam += sayi
    else:
        tek_toplam += sayi
    sayi += 1

print(f"Çift sayıların toplamı: {cift_toplam}")
print(f"Tek sayıların toplamı: {tek_toplam}")
```

### Hata Kontrolü ile Girdi Alma
```python
# Geçerli girdi alana kadar tekrar etme
gecerli_girdi = False
sayi = 0

while not gecerli_girdi:
    girdi = input("1-10 arası bir sayı girin: ")
    
    # String'in sayı olup olmadığını kontrol et
    if girdi.isdigit():
        sayi = int(girdi)
        if 1 <= sayi <= 10:
            gecerli_girdi = True
            print(f"Geçerli sayı girdiniz: {sayi}")
        else:
            print("Sayı 1-10 arasında olmalı!")
    else:
        print("Lütfen geçerli bir sayı girin!")
```

### Pratik Alıştırmalar

**Alıştırma 1:** Kullanıcı 'e' veya 'h' (evet/hayır) girene kadar soru soran program yazın.

**Alıştırma 2:** Geçerli email formatı girene kadar tekrar isteyen program yazın.

**Alıştırma 3:** Pozitif çift sayı girene kadar tekrar isteyen program yazın.

**Alıştırma 4:** Kullanıcının girdiği sayıları toplayan, negatif sayı girince duran program yazın.

**Alıştırma 5:** Şifre güvenlik kontrolü yapan program yazın (en az 8 karakter, büyük-küçük harf içermeli).

## 7. Karakter ve ASCII İşlemleri

### ASCII Değerleri ile Çalışma
```python
# Alfabeyi yazdırma
ascii_kod = 65  # 'A' harfinin ASCII kodu
son_harf = 90   # 'Z' harfinin ASCII kodu

print("Büyük harfler:")
while ascii_kod <= son_harf:
    harf = chr(ascii_kod)
    print(f"{harf} = {ascii_kod}")
    ascii_kod += 1
```

### Caesar Şifresi
```python
# Basit Caesar şifresi (3 karakter kaydırma)
metin = "HELLO"
sifreli_metin = ""
indeks = 0

while indeks < len(metin):
    karakter = metin[indeks]
    if karakter.isalpha():
        ascii_degeri = ord(karakter)
        yeni_ascii = ascii_degeri + 3
        # Z'den sonra A'ya döndür
        if yeni_ascii > 90:
            yeni_ascii = yeni_ascii - 26
        sifreli_karakter = chr(yeni_ascii)
        sifreli_metin += sifreli_karakter
    else:
        sifreli_metin += karakter
    indeks += 1

print(f"Orijinal: {metin}")
print(f"Şifreli: {sifreli_metin}")
# Çıktı:
# Orijinal: HELLO
# Şifreli: KHOOR
```

### Karakter Frekans Analizi
```python
# En çok tekrar eden karakteri bulma
metin = "python programlama"
indeks = 0

while indeks < len(metin):
    karakter = metin[indeks]
    if karakter != " ":  # Boşlukları sayma
        sayac = 0
        j = 0
        # Bu karakterin kaç kez geçtiğini say
        while j < len(metin):
            if metin[j] == karakter:
                sayac += 1
            j += 1
        print(f"'{karakter}' karakteri {sayac} kez geçiyor")
    indeks += 1
```

### Pratik Alıştırmalar

**Alıştırma 1:** Küçük harflerin ASCII değerlerini yazdıran program yazın.

**Alıştırma 2:** Rakamların ASCII değerlerini (0-9) gösteren program yazın.

**Alıştırma 3:** String'i 5 karakter ileri kaydıran şifreleme programı yazın.

**Alıştırma 4:** Bir string'deki en çok ve en az geçen karakterleri bulan program yazın.

**Alıştırma 5:** ROT13 şifrelemesi yapan program yazın.

## 8. Oyunlar ve Eğlenceli Uygulamalar

### Sayı Toplamı Oyunu
```python
# Hedef sayıya ulaşma oyunu
hedef = 21
mevcut_toplam = 0
oyuncu_sirasi = 1

print(f"Hedef: {hedef}'e ulaşın!")
print("Her seferde 1, 2 veya 3 ekleyebilirsiniz")

while mevcut_toplam < hedef:
    print(f"\nMevcut toplam: {mevcut_toplam}")
    ekleme = int(input(f"Oyuncu {oyuncu_sirasi}, kaç eklemek istersiniz (1-3)? "))
    
    if 1 <= ekleme <= 3:
        mevcut_toplam += ekleme
        if mevcut_toplam >= hedef:
            print(f"Oyuncu {oyuncu_sirasi} kazandı!")
        else:
            oyuncu_sirasi = 2 if oyuncu_sirasi == 1 else 1
    else:
        print("Geçersiz hamle! 1, 2 veya 3 girmelisiniz.")
```

### Basit Kelime Oyunu
```python
# Harflerle kelime oluşturma
hedef_kelime = "PYTHON"
tahmin = ""
deneme = 0
max_deneme = 6

print("Kelimeyi tahmin edin!")
print("_" * len(hedef_kelime))

while tahmin != hedef_kelime and deneme < max_deneme:
    harf = input("Bir harf girin: ").upper()
    
    if len(harf) == 1 and harf.isalpha():
        if harf in hedef_kelime:
            print(f"'{harf}' harfi doğru!")
        else:
            deneme += 1
            print(f"'{harf}' harfi yanlış! {max_deneme - deneme} hakkınız kaldı.")
    else:
        print("Geçerli bir harf girin!")
        
    # Tahmin kontrolü için basit yaklaşım
    if deneme < max_deneme:
        tam_tahmin = input("Kelimeyi biliyor musunuz? (Bilmiyorsanız ENTER): ").upper()
        if tam_tahmin == hedef_kelime:
            tahmin = hedef_kelime

if tahmin == hedef_kelime:
    print("Tebrikler! Kelimeyi buldunuz!")
else:
    print(f"Oyun bitti! Kelime: {hedef_kelime}")
```

### Pratik Alıştırmalar

**Alıştırma 1:** Taş-kağıt-makas oyunu yapın.

**Alıştırma 2:** Basit hesap makinesi yapın (işlemler bitene kadar devam etsin).

**Alıştırma 3:** Kelime uzunluğu tahmin oyunu yapın.

**Alıştırma 4:** Sayı çiftleri toplama oyunu yapın.

**Alıştırma 5:** Basit şans oyunu (zar atma simülasyonu) yapın.

## Genel Pratik Projeleri

### Proje 1: Gelişmiş ATM Simülasyonu
Bakiye görme, para yatırma, para çekme, işlem geçmişi özeti sunan ATM programı yazın.

### Proje 2: Öğrenci Not Sistemi
Öğrenci bilgilerini alıp not girişi yapan ve ortalama hesaplayan sistem yazın.

### Proje 3: Basit Metin Editörü
Metin girme, karakter/kelime sayma, arama ve değiştirme fonksiyonları olan program yazın.

### Proje 4: Kişisel Finans Takipçisi
Gelir-gider takibi yapan, toplam hesaplayan ve rapor sunan program yazın.

### Proje 5: Quiz Uygulaması
Sorular soran, doğru/yanlış sayısını tutan ve skor gösteren quiz programı yazın.

---

## While vs For Döngüleri - Ne Zaman Hangisini Kullanmalı?

### While Döngüsü Tercih Edilir:
- Kaç kez tekrar edeceği bilinmeyen durumlar
- Kullanıcı girdisine bağlı kontrol
- Koşula bağlı çalışma gereken durumlar
- Sonsuz döngü gerektiğinde
- Oyun döngüleri ve menü sistemleri

### For Döngüsü Tercih Edilir:
- Belirli sayıda tekrar gerektiğinde
- Koleksiyonları (string, range) dolaşırken
- İndeks bazlı işlemlerde
- Matematiksel seriler için

---

## Özet

Bu rehberde Python while döngülerini primitif veri tipleri ile nasıl kullanacağınızı öğrendiniz:

- **Temel sayma**: Koşula bağlı sayma işlemleri
- **Kullanıcı kontrolü**: Girdi alma ve doğrulama
- **String işlemleri**: Karakter bazlı string işleme
- **Matematik**: Döngülerle matematiksel hesaplamalar
- **İç içe döngüler**: Karmaşık desenler ve tablolar
- **Koşullu kontrol**: Çoklu koşul yönetimi
- **ASCII işlemleri**: Karakter kodları ile çalışma
- **Oyun uygulamaları**: Eğlenceli pratik örnekler

**ÖNEMLİ:** While döngülerinde her zaman sonsuz döngüye girmemeye dikkat edin ve koşulu değiştirecek kodları unutmayın!

Her bölümdeki pratik alıştırmaları yaparak konuları pekiştirin ve projelerle gerçek uygulamalar geliştirin.