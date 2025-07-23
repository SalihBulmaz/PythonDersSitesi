# Ödev 4: Matematiksel İşlemler ve Operatörler

## Amaç
Bu ödevde Python'da matematiksel işlemler, operatörler ve matematik modülünü öğreneceksiniz.

## Görevler

### 1. Temel Matematik İşlemleri
Aşağıdaki matematik işlemlerini gerçekleştirin:

```python
a = 15
b = 7
c = 3.5

# Temel işlemler
toplam = a + b
çıkarım = a - b
çarpım = a * b
bölüm = a / b
tam_bölüm = a // b
kalan = a % b
kuvvet = a ** c

# Sonuçları yazdırma
print(f"Toplam: {toplam}")
print(f"Çıkarım: {çıkarım}")
print(f"Çarpım: {çarpım}")
print(f"Bölüm: {bölüm:.2f}")
print(f"Tam bölüm: {tam_bölüm}")
print(f"Kalan: {kalan}")
print(f"Kuvvet: {kuvvet:.2f}")
```

### 2. Math Modülü Kullanımı
Math modülünü kullanarak aşağıdaki işlemleri gerçekleştirin:

```python
import math

# Trigonometrik fonksiyonlar
açı_derece = 45
açı_radyan = math.radians(açı_derece)

sinüs = math.sin(açı_radyan)
kosinüs = math.cos(açı_radyan)
tanjant = math.tan(açı_radyan)

print(f"Sinüs({açı_derece}°): {sinüs:.4f}")
print(f"Kosinüs({açı_derece}°): {kosinüs:.4f}")
print(f"Tanjant({açı_derece}°): {tanjant:.4f}")

# Logaritma işlemleri
sayı = 100
doğal_log = math.log(sayı)
log_10 = math.log10(sayı)
log_2 = math.log2(sayı)

print(f"ln({sayı}): {doğal_log:.4f}")
print(f"log10({sayı}): {log_10:.4f}")
print(f"log2({sayı}): {log_2:.4f}")

# Diğer matematik fonksiyonları
karekök = math.sqrt(sayı)
mutlak_değer = math.fabs(-15.7)
yukarı_yuvarlama = math.ceil(3.2)
aşağı_yuvarlama = math.floor(3.8)
faktöriyel = math.factorial(5)

print(f"√{sayı}: {karekök}")
print(f"|-15.7|: {mutlak_değer}")
print(f"⌈3.2⌉: {yukarı_yuvarlama}")
print(f"⌊3.8⌋: {aşağı_yuvarlama}")
print(f"5!: {faktöriyel}")
```

### 3. Operatör Önceliği
Aşağıdaki işlemlerin sonuçlarını hesaplayın:

```python
# Karmaşık işlemler
sonuç1 = 2 + 3 * 4
sonuç2 = (2 + 3) * 4
sonuç3 = 10 / 2 + 3 * 2
sonuç4 = 10 / (2 + 3) * 2
sonuç5 = 2 ** 3 + 1
sonuç6 = 2 ** (3 + 1)

print(f"2 + 3 * 4 = {sonuç1}")
print(f"(2 + 3) * 4 = {sonuç2}")
print(f"10 / 2 + 3 * 2 = {sonuç3}")
print(f"10 / (2 + 3) * 2 = {sonuç4}")
print(f"2 ** 3 + 1 = {sonuç5}")
print(f"2 ** (3 + 1) = {sonuç6}")
```

### 4. Karşılaştırma Operatörleri
Aşağıdaki karşılaştırmaları yapın:

```python
x = 10
y = 5
z = 10.0

# Sayısal karşılaştırmalar
print(f"{x} > {y}: {x > y}")
print(f"{x} < {y}: {x < y}")
print(f"{x} == {z}: {x == z}")
print(f"{x} != {y}: {x != y}")
print(f"{x} >= {y}: {x >= y}")
print(f"{x} <= {y}: {x <= y}")

# String karşılaştırmaları
metin1 = "Python"
metin2 = "python"
metin3 = "Python"

print(f"'{metin1}' == '{metin2}': {metin1 == metin2}")
print(f"'{metin1}' == '{metin3}': {metin1 == metin3}")
print(f"'{metin1}' < '{metin2}': {metin1 < metin2}")
```

### 5. Mantıksal Operatörler
Aşağıdaki mantıksal işlemleri gerçekleştirin:

```python
a = True
b = False
c = True

# Temel mantıksal işlemler
and_sonuç = a and b
or_sonuç = a or b
not_sonuç = not a
xor_sonuç = (a or b) and not (a and b)

print(f"True and False: {and_sonuç}")
print(f"True or False: {or_sonuç}")
print(f"not True: {not_sonuç}")
print(f"True XOR False: {xor_sonuç}")

# Karmaşık mantıksal işlemler
karmaşık1 = (a and b) or c
karmaşık2 = not (a or b) and c
karmaşık3 = a and (b or c)

print(f"(True and False) or True: {karmaşık1}")
print(f"not (True or False) and True: {karmaşık2}")
print(f"True and (False or True): {karmaşık3}")
```

## Ek Görevler (İsteğe Bağlı)

### 6. Hesap Makinesi
Gelişmiş bir hesap makinesi yazın:

```python
import math

def hesap_makinesi():
    print("Gelişmiş Hesap Makinesi")
    print("1. Toplama")
    print("2. Çıkarma")
    print("3. Çarpma")
    print("4. Bölme")
    print("5. Kuvvet alma")
    print("6. Karekök")
    print("7. Sinüs")
    print("8. Kosinüs")
    print("9. Logaritma")
    print("10. Çıkış")
    
    while True:
        seçim = input("\nİşlem seçin (1-10): ")
        
        if seçim == "10":
            print("Güle güle!")
            break
        
        if seçim in ["6", "7", "8", "9"]:
            sayı = float(input("Sayıyı girin: "))
            
            if seçim == "6":
                sonuç = math.sqrt(sayı)
                print(f"√{sayı} = {sonuç}")
            elif seçim == "7":
                sonuç = math.sin(math.radians(sayı))
                print(f"sin({sayı}°) = {sonuç:.4f}")
            elif seçim == "8":
                sonuç = math.cos(math.radians(sayı))
                print(f"cos({sayı}°) = {sonuç:.4f}")
            elif seçim == "9":
                sonuç = math.log10(sayı)
                print(f"log10({sayı}) = {sonuç:.4f}")
        else:
            sayı1 = float(input("Birinci sayı: "))
            sayı2 = float(input("İkinci sayı: "))
            
            if seçim == "1":
                sonuç = sayı1 + sayı2
                print(f"{sayı1} + {sayı2} = {sonuç}")
            elif seçim == "2":
                sonuç = sayı1 - sayı2
                print(f"{sayı1} - {sayı2} = {sonuç}")
            elif seçim == "3":
                sonuç = sayı1 * sayı2
                print(f"{sayı1} × {sayı2} = {sonuç}")
            elif seçim == "4":
                if sayı2 != 0:
                    sonuç = sayı1 / sayı2
                    print(f"{sayı1} ÷ {sayı2} = {sonuç}")
                else:
                    print("Sıfıra bölme hatası!")
            elif seçim == "5":
                sonuç = sayı1 ** sayı2
                print(f"{sayı1} ^ {sayı2} = {sonuç}")
            else:
                print("Geçersiz seçim!")

# hesap_makinesi()  # Çalıştırmak için yorumu kaldırın
```

### 7. Geometrik Şekil Hesaplamaları
Geometrik şekillerin alan ve çevre hesaplamalarını yapan bir program:

```python
import math

def daire_hesapla(yarıçap):
    alan = math.pi * yarıçap ** 2
    çevre = 2 * math.pi * yarıçap
    return alan, çevre

def dikdörtgen_hesapla(uzun_kenar, kısa_kenar):
    alan = uzun_kenar * kısa_kenar
    çevre = 2 * (uzun_kenar + kısa_kenar)
    return alan, çevre

def üçgen_hesapla(taban, yükseklik):
    alan = 0.5 * taban * yükseklik
    return alan

def küp_hesapla(kenar):
    hacim = kenar ** 3
    yüzey_alanı = 6 * kenar ** 2
    return hacim, yüzey_alanı

# Test
print("Geometrik Şekil Hesaplamaları")
print("-" * 30)

# Daire
r = 5
daire_alan, daire_çevre = daire_hesapla(r)
print(f"Daire (r={r}):")
print(f"  Alan: {daire_alan:.2f}")
print(f"  Çevre: {daire_çevre:.2f}")

# Dikdörtgen
a, b = 6, 4
dik_alan, dik_çevre = dikdörtgen_hesapla(a, b)
print(f"\nDikdörtgen ({a}x{b}):")
print(f"  Alan: {dik_alan}")
print(f"  Çevre: {dik_çevre}")

# Üçgen
taban, yükseklik = 8, 6
üçgen_alan = üçgen_hesapla(taban, yükseklik)
print(f"\nÜçgen (taban={taban}, yükseklik={yükseklik}):")
print(f"  Alan: {üçgen_alan}")

# Küp
kenar = 3
küp_hacim, küp_yüzey = küp_hesapla(kenar)
print(f"\nKüp (kenar={kenar}):")
print(f"  Hacim: {küp_hacim}")
print(f"  Yüzey alanı: {küp_yüzey}")
```

## Değerlendirme Kriterleri

- [ ] Temel matematik işlemleri doğru
- [ ] Math modülü doğru kullanılmış
- [ ] Operatör önceliği anlaşılmış
- [ ] Karşılaştırma operatörleri doğru
- [ ] Mantıksal operatörler doğru
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Toplam: 22
Çıkarım: 8
Çarpım: 105
Bölüm: 2.14
Tam bölüm: 2
Kalan: 1
Kuvvet: 1849.15

Sinüs(45°): 0.7071
Kosinüs(45°): 0.7071
Tanjant(45°): 1.0000

ln(100): 4.6052
log10(100): 2.0000
log2(100): 6.6439

√100: 10.0
|-15.7|: 15.7
⌈3.2⌉: 4
⌊3.8⌋: 3
5!: 120

2 + 3 * 4 = 14
(2 + 3) * 4 = 20
10 / 2 + 3 * 2 = 11.0
10 / (2 + 3) * 2 = 4.0
2 ** 3 + 1 = 9
2 ** (3 + 1) = 16

10 > 5: True
10 < 5: False
10 == 10.0: True
10 != 5: True
10 >= 5: True
10 <= 5: False

'Python' == 'python': False
'Python' == 'Python': True
'Python' < 'python': True

True and False: False
True or False: True
not True: False
True XOR False: True
```

**Başarılar! 🚀** 