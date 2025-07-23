# Python Kontrol Yapıları

## Giriş

Kontrol yapıları, programların akışını yönetmemizi sağlar. Python'da koşullu ifadeler ve döngüler ile programlarımızı daha dinamik hale getirebiliriz.

## Koşullu İfadeler (Conditional Statements)

### if - elif - else Yapısı

```python
# Temel if yapısı
yas = 18

if yas >= 18:
    print("Reşitsiniz")
```

```python
# if-else yapısı
sıcaklık = 25

if sıcaklık > 30:
    print("Hava çok sıcak!")
else:
    print("Hava sıcak değil")
```

```python
# if-elif-else yapısı
not_değeri = 85

if not_değeri >= 90:
    print("AA")
elif not_değeri >= 80:
    print("BA")
elif not_değeri >= 70:
    print("BB")
elif not_değeri >= 60:
    print("CB")
else:
    print("FF")
```

### İç İçe if Yapıları

```python
yas = 25
gelir = 5000

if yas >= 18:
    if gelir >= 3000:
        print("Kredi alabilirsiniz")
    else:
        print("Gelir yetersiz")
else:
    print("Yaş yetersiz")
```

### Ternary Operator (Üçlü Operatör)

```python
yas = 20
durum = "Reşit" if yas >= 18 else "Reşit değil"
print(durum)

# Uzun hali:
if yas >= 18:
    durum = "Reşit"
else:
    durum = "Reşit değil"
```

### Mantıksal Operatörler

```python
yas = 25
gelir = 5000
kredi_geçmişi = True

# and operatörü
if yas >= 18 and gelir >= 3000:
    print("Kredi alabilirsiniz")

# or operatörü
if yas >= 18 or gelir >= 10000:
    print("Kredi değerlendirilebilir")

# not operatörü
if not kredi_geçmişi:
    print("Kredi geçmişi yok")

# Karmaşık koşullar
if (yas >= 18 and gelir >= 3000) or kredi_geçmişi:
    print("Kredi onaylandı")
```

## Döngüler (Loops)

### for Döngüsü

#### Liste ile Döngü
```python
meyveler = ["elma", "armut", "muz", "portakal"]

for meyve in meyveler:
    print(f"Bu meyve: {meyve}")
```

#### range() ile Döngü
```python
# 0'dan 4'e kadar
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# 1'den 10'a kadar
for i in range(1, 11):
    print(i)  # 1, 2, 3, ..., 10

# 2'şer artarak
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
```

#### Dictionary ile Döngü
```python
öğrenci = {
    "ad": "Ali",
    "yaş": 20,
    "bölüm": "Bilgisayar"
}

# Anahtarlar
for anahtar in öğrenci.keys():
    print(anahtar)

# Değerler
for değer in öğrenci.values():
    print(değer)

# Anahtar-değer çiftleri
for anahtar, değer in öğrenci.items():
    print(f"{anahtar}: {değer}")
```

#### enumerate() ile İndeks
```python
meyveler = ["elma", "armut", "muz"]

for indeks, meyve in enumerate(meyveler):
    print(f"{indeks}: {meyve}")
```

### while Döngüsü

```python
# Basit while döngüsü
sayı = 1
while sayı <= 5:
    print(sayı)
    sayı += 1
```

```python
# Kullanıcı girişi ile
şifre = "1234"
giriş = ""
deneme = 0

while giriş != şifre and deneme < 3:
    giriş = input("Şifreyi girin: ")
    deneme += 1
    if giriş != şifre:
        print(f"Yanlış! {3 - deneme} deneme hakkınız kaldı")

if giriş == şifre:
    print("Giriş başarılı!")
else:
    print("Hesap bloke edildi!")
```

### Döngü Kontrolü

#### break - Döngüden Çıkma
```python
sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for sayı in sayılar:
    if sayı == 5:
        break
    print(sayı)  # 1, 2, 3, 4
```

#### continue - Atlama
```python
for i in range(1, 11):
    if i % 2 == 0:  # Çift sayıları atla
        continue
    print(i)  # 1, 3, 5, 7, 9
```

#### else ile Döngü
```python
for i in range(5):
    print(i)
else:
    print("Döngü tamamlandı")  # Döngü normal bittiğinde çalışır

# break ile çıkıldığında else çalışmaz
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("Bu çalışmaz")
```

## List Comprehension

### Temel List Comprehension
```python
# Geleneksel yöntem
sayılar = [1, 2, 3, 4, 5]
kareler = []
for sayı in sayılar:
    kareler.append(sayı ** 2)

# List comprehension
kareler = [sayı ** 2 for sayı in sayılar]
```

### Koşullu List Comprehension
```python
sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Sadece çift sayıların kareleri
çift_kareler = [x**2 for x in sayılar if x % 2 == 0]

# Koşullu değer atama
sonuçlar = ["çift" if x % 2 == 0 else "tek" for x in sayılar]
```

### İç İçe List Comprehension
```python
# 3x3 matris
matris = [[i+j for j in range(3)] for i in range(0, 9, 3)]
print(matris)  # [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
```

## Pratik Örnekler

### Not Ortalaması Hesaplama
```python
notlar = [85, 90, 78, 92, 88]

def ortalama_hesapla(not_listesi):
    if not not_listesi:
        return 0
    return sum(not_listesi) / len(not_listesi)

ortalama = ortalama_hesapla(notlar)

if ortalama >= 90:
    harf = "AA"
elif ortalama >= 80:
    harf = "BA"
elif ortalama >= 70:
    harf = "BB"
elif ortalama >= 60:
    harf = "CB"
else:
    harf = "FF"

print(f"Ortalama: {ortalama:.1f} - Harf: {harf}")
```

### Asal Sayı Kontrolü
```python
def asal_mı(sayı):
    if sayı < 2:
        return False
    for i in range(2, int(sayı ** 0.5) + 1):
        if sayı % i == 0:
            return False
    return True

# 1'den 50'ye kadar asal sayıları bul
asal_sayılar = [sayı for sayı in range(1, 51) if asal_mı(sayı)]
print(f"1-50 arası asal sayılar: {asal_sayılar}")
```

### Şifre Güvenlik Kontrolü
```python
def şifre_kontrol(şifre):
    uzunluk_ok = len(şifre) >= 8
    büyük_harf = any(c.isupper() for c in şifre)
    küçük_harf = any(c.islower() for c in şifre)
    rakam = any(c.isdigit() for c in şifre)
    özel_karakter = any(c in "!@#$%^&*" for c in şifre)
    
    if uzunluk_ok and büyük_harf and küçük_harf and rakam and özel_karakter:
        return "Güçlü şifre"
    elif uzunluk_ok and büyük_harf and küçük_harf and rakam:
        return "Orta güçlükte şifre"
    else:
        return "Zayıf şifre"

test_şifreleri = ["abc123", "Abc123!", "GüçlüŞifre123!", "12345678"]
for şifre in test_şifreleri:
    print(f"'{şifre}': {şifre_kontrol(şifre)}")
```

### Basit Hesap Makinesi
```python
def hesap_makinesi():
    print("Basit Hesap Makinesi")
    print("1. Toplama")
    print("2. Çıkarma")
    print("3. Çarpma")
    print("4. Bölme")
    print("5. Çıkış")
    
    while True:
        seçim = input("İşlem seçin (1-5): ")
        
        if seçim == "5":
            print("Güle güle!")
            break
        
        if seçim not in ["1", "2", "3", "4"]:
            print("Geçersiz seçim!")
            continue
        
        try:
            sayı1 = float(input("Birinci sayı: "))
            sayı2 = float(input("İkinci sayı: "))
            
            if seçim == "1":
                sonuç = sayı1 + sayı2
            elif seçim == "2":
                sonuç = sayı1 - sayı2
            elif seçim == "3":
                sonuç = sayı1 * sayı2
            elif seçim == "4":
                if sayı2 == 0:
                    print("Sıfıra bölme hatası!")
                    continue
                sonuç = sayı1 / sayı2
            
            print(f"Sonuç: {sonuç}")
            
        except ValueError:
            print("Geçersiz sayı girişi!")

# hesap_makinesi()  # Çalıştırmak için yorumu kaldırın
```

## Özet

### Koşullu İfadeler
- `if`, `elif`, `else` ile program akışını kontrol edebiliriz
- Mantıksal operatörler (`and`, `or`, `not`) ile karmaşık koşullar oluşturabiliriz
- Ternary operator ile kısa koşullu atamalar yapabiliriz

### Döngüler
- `for` döngüsü ile listeler, stringler, range() üzerinde iterasyon yapabiliriz
- `while` döngüsü ile koşul sağlandığı sürece işlem yapabiliriz
- `break` ile döngüden çıkabilir, `continue` ile atlama yapabiliriz

### List Comprehension
- Kısa ve etkili liste oluşturma yöntemi
- Koşullu filtreleme ve dönüştürme işlemleri için idealdir

Bu kontrol yapıları ile Python'da güçlü ve esnek programlar yazabiliriz. 