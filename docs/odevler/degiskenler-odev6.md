# Ödev 6: Hata Yönetimi ve Try-Except Blokları

## Amaç
Bu ödevde Python'da hata yönetimi, try-except blokları ve program güvenliği konularını öğreneceksiniz.

## Görevler

### 1. Temel Try-Except Yapısı
Aşağıdaki hata yönetimi örneklerini gerçekleştirin:

```python
# ValueError hatası yönetimi
try:
    sayı = int(input("Bir sayı girin: "))
    print(f"Girdiğiniz sayı: {sayı}")
except ValueError:
    print("Hata: Geçerli bir sayı girmediniz!")

# ZeroDivisionError hatası yönetimi
try:
    pay = int(input("Payı girin: "))
    payda = int(input("Paydayı girin: "))
    sonuç = pay / payda
    print(f"Bölüm: {sonuç}")
except ZeroDivisionError:
    print("Hata: Sıfıra bölme işlemi yapılamaz!")
except ValueError:
    print("Hata: Geçerli bir sayı girmediniz!")

# IndexError hatası yönetimi
liste = [1, 2, 3, 4, 5]
try:
    indeks = int(input("Hangi indeksi görmek istiyorsunuz (0-4): "))
    print(f"Liste[{indeks}] = {liste[indeks]}")
except IndexError:
    print("Hata: Geçersiz indeks!")
except ValueError:
    print("Hata: Geçerli bir sayı girmediniz!")
```

### 2. Çoklu Exception Yönetimi
Farklı hata türlerini yöneten bir program yazın:

```python
def güvenli_hesaplama():
    try:
        # Kullanıcıdan sayı alma
        sayı1 = float(input("Birinci sayıyı girin: "))
        sayı2 = float(input("İkinci sayıyı girin: "))
        
        # İşlem seçimi
        işlem = input("İşlem seçin (+, -, *, /, **): ")
        
        # Hesaplama
        if işlem == "+":
            sonuç = sayı1 + sayı2
        elif işlem == "-":
            sonuç = sayı1 - sayı2
        elif işlem == "*":
            sonuç = sayı1 * sayı2
        elif işlem == "/":
            sonuç = sayı1 / sayı2
        elif işlem == "**":
            sonuç = sayı1 ** sayı2
        else:
            raise ValueError("Geçersiz işlem!")
        
        print(f"Sonuç: {sayı1} {işlem} {sayı2} = {sonuç}")
        
    except ValueError as e:
        print(f"Değer hatası: {e}")
    except ZeroDivisionError:
        print("Hata: Sıfıra bölme işlemi yapılamaz!")
    except OverflowError:
        print("Hata: Sonuç çok büyük!")
    except Exception as e:
        print(f"Beklenmeyen hata: {e}")
    else:
        print("İşlem başarıyla tamamlandı!")
    finally:
        print("Program sonlandı.")

# güvenli_hesaplama()  # Çalıştırmak için yorumu kaldırın
```

### 3. Dosya İşlemleri ve Hata Yönetimi
Dosya okuma/yazma işlemlerinde hata yönetimi:

```python
def dosya_okuma():
    try:
        dosya_adı = input("Okumak istediğiniz dosyanın adını girin: ")
        with open(dosya_adı, 'r', encoding='utf-8') as dosya:
            içerik = dosya.read()
            print("Dosya içeriği:")
            print(içerik)
    except FileNotFoundError:
        print("Hata: Dosya bulunamadı!")
    except PermissionError:
        print("Hata: Dosyaya erişim izniniz yok!")
    except UnicodeDecodeError:
        print("Hata: Dosya kodlaması uyumsuz!")
    except Exception as e:
        print(f"Beklenmeyen hata: {e}")

def dosya_yazma():
    try:
        dosya_adı = input("Yazmak istediğiniz dosyanın adını girin: ")
        metin = input("Yazmak istediğiniz metni girin: ")
        
        with open(dosya_adı, 'w', encoding='utf-8') as dosya:
            dosya.write(metin)
        print("Dosya başarıyla yazıldı!")
        
    except PermissionError:
        print("Hata: Dosyaya yazma izniniz yok!")
    except Exception as e:
        print(f"Beklenmeyen hata: {e}")

# Test
print("1. Dosya Okuma")
print("2. Dosya Yazma")
seçim = input("Seçiminiz (1-2): ")

if seçim == "1":
    dosya_okuma()
elif seçim == "2":
    dosya_yazma()
else:
    print("Geçersiz seçim!")
```

### 4. Özel Exception Sınıfları
Kendi exception sınıflarınızı oluşturun:

```python
class YaşHatası(Exception):
    """Yaş ile ilgili hatalar için özel exception"""
    pass

class ŞifreHatası(Exception):
    """Şifre ile ilgili hatalar için özel exception"""
    pass

def yaş_kontrol(yaş):
    if yaş < 0:
        raise YaşHatası("Yaş negatif olamaz!")
    elif yaş > 150:
        raise YaşHatası("Yaş çok yüksek!")
    return yaş

def şifre_kontrol(şifre):
    if len(şifre) < 6:
        raise ŞifreHatası("Şifre en az 6 karakter olmalı!")
    elif not any(c.isdigit() for c in şifre):
        raise ŞifreHatası("Şifre en az bir rakam içermeli!")
    return şifre

# Test
try:
    yaş = int(input("Yaşınızı girin: "))
    yaş_kontrol(yaş)
    print(f"Yaşınız: {yaş}")
except YaşHatası as e:
    print(f"Yaş hatası: {e}")
except ValueError:
    print("Geçersiz yaş girişi!")

try:
    şifre = input("Şifrenizi girin: ")
    şifre_kontrol(şifre)
    print("Şifre geçerli!")
except ŞifreHatası as e:
    print(f"Şifre hatası: {e}")
```

### 5. Güvenli Hesap Makinesi
Hata yönetimi ile güvenli bir hesap makinesi:

```python
def güvenli_hesap_makinesi():
    print("Güvenli Hesap Makinesi")
    print("=" * 25)
    
    while True:
        try:
            print("\nİşlemler:")
            print("1. Toplama")
            print("2. Çıkarma")
            print("3. Çarpma")
            print("4. Bölme")
            print("5. Karekök")
            print("6. Çıkış")
            
            seçim = input("İşlem seçin (1-6): ")
            
            if seçim == "6":
                print("Güle güle!")
                break
                
            if seçim == "5":
                sayı = float(input("Sayıyı girin: "))
                if sayı < 0:
                    print("Hata: Negatif sayının karekökü alınamaz!")
                    continue
                import math
                sonuç = math.sqrt(sayı)
                print(f"√{sayı} = {sonuç}")
            else:
                sayı1 = float(input("Birinci sayıyı girin: "))
                sayı2 = float(input("İkinci sayıyı girin: "))
                
                if seçim == "1":
                    sonuç = sayı1 + sayı2
                    işlem = "toplama"
                elif seçim == "2":
                    sonuç = sayı1 - sayı2
                    işlem = "çıkarma"
                elif seçim == "3":
                    sonuç = sayı1 * sayı2
                    işlem = "çarpma"
                elif seçim == "4":
                    if sayı2 == 0:
                        print("Hata: Sıfıra bölme işlemi yapılamaz!")
                        continue
                    sonuç = sayı1 / sayı2
                    işlem = "bölme"
                else:
                    print("Hata: Geçersiz işlem!")
                    continue
                
                print(f"{sayı1} ile {sayı2} arasında {işlem} işlemi sonucu: {sonuç}")
                
        except ValueError:
            print("Hata: Geçerli bir sayı girin!")
        except OverflowError:
            print("Hata: Sonuç çok büyük!")
        except Exception as e:
            print(f"Beklenmeyen hata: {e}")

# güvenli_hesap_makinesi()  # Çalıştırmak için yorumu kaldırın
```

## Ek Görevler (İsteğe Bağlı)

### 6. Güvenli Veri Girişi Sistemi
Kullanıcıdan güvenli veri alan bir sistem:

```python
def güvenli_sayı_al(mesaj, minimum=None, maksimum=None):
    """Güvenli sayı alma fonksiyonu"""
    while True:
        try:
            sayı = float(input(mesaj))
            
            if minimum is not None and sayı < minimum:
                print(f"Hata: Sayı en az {minimum} olmalı!")
                continue
                
            if maksimum is not None and sayı > maksimum:
                print(f"Hata: Sayı en fazla {maksimum} olmalı!")
                continue
                
            return sayı
            
        except ValueError:
            print("Hata: Geçerli bir sayı girin!")

def güvenli_metin_al(mesaj, minimum_uzunluk=None, maksimum_uzunluk=None):
    """Güvenli metin alma fonksiyonu"""
    while True:
        metin = input(mesaj).strip()
        
        if minimum_uzunluk is not None and len(metin) < minimum_uzunluk:
            print(f"Hata: Metin en az {minimum_uzunluk} karakter olmalı!")
            continue
            
        if maksimum_uzunluk is not None and len(metin) > maksimum_uzunluk:
            print(f"Hata: Metin en fazla {maksimum_uzunluk} karakter olmalı!")
            continue
            
        return metin

# Test
print("Güvenli Veri Girişi Sistemi")
print("=" * 30)

yaş = güvenli_sayı_al("Yaşınızı girin: ", 0, 150)
ad = güvenli_metin_al("Adınızı girin: ", 2, 50)
boy = güvenli_sayı_al("Boyunuzu girin (metre): ", 0.5, 3.0)

print(f"\nGirilen bilgiler:")
print(f"Yaş: {yaş}")
print(f"Ad: {ad}")
print(f"Boy: {boy} metre")
```

### 7. Log Dosyası Oluşturma
Hataları log dosyasına kaydeden bir sistem:

```python
import datetime

def log_hatası(hata_türü, mesaj):
    """Hataları log dosyasına kaydet"""
    try:
        zaman = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_mesajı = f"[{zaman}] {hata_türü}: {mesaj}\n"
        
        with open("hata_log.txt", "a", encoding="utf-8") as log_dosyası:
            log_dosyası.write(log_mesajı)
            
    except Exception as e:
        print(f"Log yazma hatası: {e}")

def güvenli_program():
    """Hataları loglayan güvenli program"""
    try:
        sayı = int(input("Bir sayı girin: "))
        sonuç = 100 / sayı
        print(f"Sonuç: {sonuç}")
        
    except ValueError as e:
        mesaj = "Geçersiz sayı girişi"
        print(f"Hata: {mesaj}")
        log_hatası("ValueError", mesaj)
        
    except ZeroDivisionError as e:
        mesaj = "Sıfıra bölme hatası"
        print(f"Hata: {mesaj}")
        log_hatası("ZeroDivisionError", mesaj)
        
    except Exception as e:
        mesaj = f"Beklenmeyen hata: {e}"
        print(f"Hata: {mesaj}")
        log_hatası("Exception", mesaj)

# Test
print("Hata Loglama Sistemi")
print("=" * 25)

for _ in range(3):
    güvenli_program()
    print()

print("Log dosyası 'hata_log.txt' oluşturuldu.")
```

## Değerlendirme Kriterleri

- [ ] Try-except blokları doğru kullanılmış
- [ ] Farklı hata türleri yönetilmiş
- [ ] Özel exception sınıfları oluşturulmuş
- [ ] Finally bloğu kullanılmış
- [ ] Hata mesajları açıklayıcı
- [ ] Program güvenliği sağlanmış
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Bir sayı girin: abc
Hata: Geçerli bir sayı girmediniz!

Payı girin: 10
Paydayı girin: 0
Hata: Sıfıra bölme işlemi yapılamaz!

Hangi indeksi görmek istiyorsunuz (0-4): 10
Hata: Geçersiz indeks!

Güvenli Hesap Makinesi
=========================
İşlemler:
1. Toplama
2. Çıkarma
3. Çarpma
4. Bölme
5. Karekök
6. Çıkış
İşlem seçin (1-6): 4
Birinci sayıyı girin: 10
İkinci sayıyı girin: 0
Hata: Sıfıra bölme işlemi yapılamaz!
```

**Başarılar! 🚀** 