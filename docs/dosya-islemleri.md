# Python - Dosya İşlemleri ve Hata Yönetimi

## 📝 Ders Hedefleri

Bu derste şunları öğreneceksiniz:
- Dosya okuma ve yazma işlemleri
- Exception handling (try/except/finally)
- Context managers (with statement)
- JSON dosya işlemleri
- CSV dosya işlemleri
- Dosya ve klasör yönetimi
- Hata türleri ve yönetimi

---

## 📁 Dosya İşlemleri Temelleri

Python'da dosya işlemleri için `open()` fonksiyonu kullanılır. Dosyalar farklı modlarda açılabilir.

### Dosya Açma Modları

```python
# Temel dosya açma modları
# 'r'  - Okuma (varsayılan)
# 'w'  - Yazma (dosyayı siler)
# 'a'  - Ekleme (append)
# 'x'  - Özel yazma (dosya yoksa oluşturur)
# 'b'  - Binary mod
# 't'  - Text mod (varsayılan)
# '+'  - Okuma ve yazma

# Dosya açma örnekleri
dosya = open("ornek.txt", "r", encoding="utf-8")
icerik = dosya.read()
dosya.close()

# Daha güvenli yöntem - with statement
with open("ornek.txt", "r", encoding="utf-8") as dosya:
    icerik = dosya.read()
# Dosya otomatik olarak kapanır
```

---

## 📖 Dosya Okuma İşlemleri

### Farklı Okuma Yöntemleri

```python
# 1. Tüm dosyayı okuma
with open("metin.txt", "r", encoding="utf-8") as dosya:
    tum_icerik = dosya.read()
    print("Tüm içerik:")
    print(tum_icerik)

# 2. Satır satır okuma
with open("metin.txt", "r", encoding="utf-8") as dosya:
    print("Satır satır okuma:")
    for satir in dosya:
        print(satir.strip())  # strip() boşlukları temizler

# 3. Tüm satırları liste olarak alma
with open("metin.txt", "r", encoding="utf-8") as dosya:
    satirlar = dosya.readlines()
    print("Satırlar listesi:")
    for i, satir in enumerate(satirlar, 1):
        print(f"{i}. {satir.strip()}")

# 4. Belirli miktar okuma
with open("metin.txt", "r", encoding="utf-8") as dosya:
    ilk_100_karakter = dosya.read(100)
    print(f"İlk 100 karakter: {ilk_100_karakter}")
```

### Örnek: Öğrenci Notları Dosyası

```python
# ogrenci_notlari.txt dosyası örneği:
# Ali,85,90,78
# Ayşe,92,88,95
# Mehmet,75,82,79

def ogrenci_notlarini_oku():
    ogrenciler = []
    
    try:
        with open("ogrenci_notlari.txt", "r", encoding="utf-8") as dosya:
            for satir in dosya:
                # Satırı temizle ve parçala
                veriler = satir.strip().split(',')
                if len(veriler) >= 4:
                    ad = veriler[0]
                    notlar = [int(not_str) for not_str in veriler[1:]]
                    ortalama = sum(notlar) / len(notlar)
                    
                    ogrenci = {
                        'ad': ad,
                        'notlar': notlar,
                        'ortalama': ortalama
                    }
                    ogrenciler.append(ogrenci)
        
        return ogrenciler
    
    except FileNotFoundError:
        print("Dosya bulunamadı!")
        return []
    except ValueError:
        print("Dosya formatı hatalı!")
        return []

# Kullanım
ogrenciler = ogrenci_notlarini_oku()
for ogrenci in ogrenciler:
    print(f"{ogrenci['ad']}: {ogrenci['ortalama']:.2f}")
```

---

## ✍️ Dosya Yazma İşlemleri

### Temel Yazma İşlemleri

```python
# 1. Yeni dosya oluşturma ve yazma
with open("yeni_dosya.txt", "w", encoding="utf-8") as dosya:
    dosya.write("Merhaba Python!\n")
    dosya.write("Bu bir test dosyasıdır.\n")
    dosya.write("Dosya yazma işlemi başarılı!")

# 2. Mevcut dosyaya ekleme
with open("yeni_dosya.txt", "a", encoding="utf-8") as dosya:
    dosya.write("\nBu satır sonradan eklendi.\n")
    dosya.write("Append modu ile eklendi.")

# 3. Çoklu satır yazma
satirlar = [
    "İlk satır",
    "İkinci satır", 
    "Üçüncü satır",
    "Dördüncü satır"
]

with open("coklu_satir.txt", "w", encoding="utf-8") as dosya:
    for satir in satirlar:
        dosya.write(satir + "\n")

# 4. writelines() ile yazma
with open("coklu_satir2.txt", "w", encoding="utf-8") as dosya:
    dosya.writelines([satir + "\n" for satir in satirlar])
```

### Örnek: Günlük Kayıt Sistemi

```python
import datetime

class GunlukKayit:
    def __init__(self, dosya_adi):
        self.dosya_adi = dosya_adi
    
    def kayit_ekle(self, baslik, icerik):
        """Yeni günlük kaydı ekleme"""
        tarih = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        with open(self.dosya_adi, "a", encoding="utf-8") as dosya:
            dosya.write(f"\n{'='*50}\n")
            dosya.write(f"Tarih: {tarih}\n")
            dosya.write(f"Başlık: {baslik}\n")
            dosya.write(f"İçerik: {icerik}\n")
            dosya.write(f"{'='*50}\n")
    
    def kayitlari_oku(self):
        """Tüm kayıtları okuma"""
        try:
            with open(self.dosya_adi, "r", encoding="utf-8") as dosya:
                return dosya.read()
        except FileNotFoundError:
            return "Henüz kayıt bulunmuyor."
    
    def kayit_ara(self, arama_terimi):
        """Kayıtlarda arama yapma"""
        bulunan_kayitlar = []
        
        try:
            with open(self.dosya_adi, "r", encoding="utf-8") as dosya:
                icerik = dosya.read()
                kayitlar = icerik.split("="*50)
                
                for kayit in kayitlar:
                    if arama_terimi.lower() in kayit.lower():
                        bulunan_kayitlar.append(kayit.strip())
            
            return bulunan_kayitlar
        
        except FileNotFoundError:
            return []

# Kullanım
gunluk = GunlukKayit("gunluk.txt")
gunluk.kayit_ekle("Python Öğrenimi", "Bugün dosya işlemlerini öğrendim.")
gunluk.kayit_ekle("Proje Çalışması", "Web sitesi için kod yazdım.")

print(gunluk.kayitlari_oku())
```

---

## 🔧 Exception Handling (Hata Yönetimi)

### Try-Except Yapısı

```python
# Temel try-except yapısı
try:
    # Riskli kod
    sayi = int(input("Bir sayı girin: "))
    sonuc = 10 / sayi
    print(f"Sonuç: {sonuc}")
except ValueError:
    print("Geçerli bir sayı girin!")
except ZeroDivisionError:
    print("Sıfıra bölme hatası!")
except Exception as e:
    print(f"Beklenmeyen hata: {e}")
finally:
    print("İşlem tamamlandı.")
```

### Dosya İşlemlerinde Hata Yönetimi

```python
def dosya_oku_guvenli(dosya_adi):
    """Güvenli dosya okuma fonksiyonu"""
    try:
        with open(dosya_adi, "r", encoding="utf-8") as dosya:
            return dosya.read()
    
    except FileNotFoundError:
        print(f"'{dosya_adi}' dosyası bulunamadı!")
        return None
    
    except PermissionError:
        print(f"'{dosya_adi}' dosyasına erişim izni yok!")
        return None
    
    except UnicodeDecodeError:
        print(f"'{dosya_adi}' dosyası okunamıyor (encoding hatası)!")
        return None
    
    except Exception as e:
        print(f"Beklenmeyen hata: {e}")
        return None

def dosya_yaz_guvenli(dosya_adi, icerik):
    """Güvenli dosya yazma fonksiyonu"""
    try:
        with open(dosya_adi, "w", encoding="utf-8") as dosya:
            dosya.write(icerik)
        return True
    
    except PermissionError:
        print(f"'{dosya_adi}' dosyasına yazma izni yok!")
        return False
    
    except IsADirectoryError:
        print(f"'{dosya_adi}' bir klasör, dosya değil!")
        return False
    
    except Exception as e:
        print(f"Yazma hatası: {e}")
        return False

# Kullanım
icerik = dosya_oku_guvenli("var_olmayan_dosya.txt")
if icerik is None:
    print("Dosya okunamadı, yeni dosya oluşturuluyor...")
    basarili = dosya_yaz_guvenli("yeni_dosya.txt", "Bu yeni bir dosyadır.")
    if basarili:
        print("Dosya başarıyla oluşturuldu!")
```

---

## 📊 JSON Dosya İşlemleri

### JSON Okuma ve Yazma

```python
import json

# JSON verisi
kisi_bilgileri = {
    "ad": "Ali",
    "yas": 25,
    "sehir": "İstanbul",
    "hobiler": ["okuma", "spor", "müzik"],
    "aktif": True
}

# JSON dosyasına yazma
def json_yaz(dosya_adi, veri):
    try:
        with open(dosya_adi, "w", encoding="utf-8") as dosya:
            json.dump(veri, dosya, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"JSON yazma hatası: {e}")
        return False

# JSON dosyasından okuma
def json_oku(dosya_adi):
    try:
        with open(dosya_adi, "r", encoding="utf-8") as dosya:
            return json.load(dosya)
    except FileNotFoundError:
        print(f"'{dosya_adi}' dosyası bulunamadı!")
        return None
    except json.JSONDecodeError:
        print(f"'{dosya_adi}' geçerli bir JSON dosyası değil!")
        return None
    except Exception as e:
        print(f"JSON okuma hatası: {e}")
        return None

# Kullanım
json_yaz("kisi.json", kisi_bilgileri)
okunan_veri = json_oku("kisi.json")

if okunan_veri:
    print("JSON verisi:")
    print(json.dumps(okunan_veri, ensure_ascii=False, indent=2))
```

### Örnek: Öğrenci Veritabanı

```python
import json
import os

class OgrenciVeritabani:
    def __init__(self, dosya_adi):
        self.dosya_adi = dosya_adi
        self.ogrenciler = self.yukle()
    
    def yukle(self):
        """Veritabanını dosyadan yükleme"""
        if os.path.exists(self.dosya_adi):
            veri = json_oku(self.dosya_adi)
            return veri if veri else []
        return []
    
    def kaydet(self):
        """Veritabanını dosyaya kaydetme"""
        return json_yaz(self.dosya_adi, self.ogrenciler)
    
    def ogrenci_ekle(self, ogrenci_no, ad, soyad, bolum):
        """Yeni öğrenci ekleme"""
        yeni_ogrenci = {
            "ogrenci_no": ogrenci_no,
            "ad": ad,
            "soyad": soyad,
            "bolum": bolum,
            "notlar": []
        }
        
        # Öğrenci numarası kontrolü
        for ogrenci in self.ogrenciler:
            if ogrenci["ogrenci_no"] == ogrenci_no:
                return False, "Bu öğrenci numarası zaten mevcut!"
        
        self.ogrenciler.append(yeni_ogrenci)
        self.kaydet()
        return True, "Öğrenci başarıyla eklendi."
    
    def ogrenci_bul(self, ogrenci_no):
        """Öğrenci arama"""
        for ogrenci in self.ogrenciler:
            if ogrenci["ogrenci_no"] == ogrenci_no:
                return ogrenci
        return None
    
    def not_ekle(self, ogrenci_no, not_degeri):
        """Öğrenciye not ekleme"""
        ogrenci = self.ogrenci_bul(ogrenci_no)
        if ogrenci:
            if 0 <= not_degeri <= 100:
                ogrenci["notlar"].append(not_degeri)
                self.kaydet()
                return True, "Not başarıyla eklendi."
            else:
                return False, "Geçersiz not değeri!"
        else:
            return False, "Öğrenci bulunamadı!"
    
    def tum_ogrenciler(self):
        """Tüm öğrencileri listeleme"""
        return self.ogrenciler

# Kullanım
db = OgrenciVeritabani("ogrenciler.json")

# Öğrenci ekleme
basarili, mesaj = db.ogrenci_ekle("2024001", "Ali", "Yılmaz", "Bilgisayar Mühendisliği")
print(mesaj)

basarili, mesaj = db.ogrenci_ekle("2024002", "Ayşe", "Demir", "Matematik")
print(mesaj)

# Not ekleme
basarili, mesaj = db.not_ekle("2024001", 85)
print(mesaj)

basarili, mesaj = db.not_ekle("2024001", 90)
print(mesaj)

# Öğrenci bilgilerini görüntüleme
ogrenci = db.ogrenci_bul("2024001")
if ogrenci:
    print(f"Öğrenci: {ogrenci['ad']} {ogrenci['soyad']}")
    print(f"Notlar: {ogrenci['notlar']}")
    if ogrenci['notlar']:
        ortalama = sum(ogrenci['notlar']) / len(ogrenci['notlar'])
        print(f"Ortalama: {ortalama:.2f}")
```

---

## 📋 CSV Dosya İşlemleri

### CSV Okuma ve Yazma

```python
import csv

# CSV dosyasına yazma
def csv_yaz(dosya_adi, veriler, basliklar=None):
    try:
        with open(dosya_adi, 'w', newline='', encoding='utf-8') as dosya:
            writer = csv.writer(dosya)
            
            if basliklar:
                writer.writerow(basliklar)
            
            writer.writerows(veriler)
        return True
    except Exception as e:
        print(f"CSV yazma hatası: {e}")
        return False

# CSV dosyasından okuma
def csv_oku(dosya_adi):
    try:
        with open(dosya_adi, 'r', encoding='utf-8') as dosya:
            reader = csv.reader(dosya)
            return list(reader)
    except FileNotFoundError:
        print(f"'{dosya_adi}' dosyası bulunamadı!")
        return []
    except Exception as e:
        print(f"CSV okuma hatası: {e}")
        return []

# Örnek veri
ogrenci_verileri = [
    ["2024001", "Ali", "Yılmaz", "Bilgisayar", "85"],
    ["2024002", "Ayşe", "Demir", "Matematik", "92"],
    ["2024003", "Mehmet", "Kaya", "Fizik", "78"]
]

basliklar = ["Öğrenci No", "Ad", "Soyad", "Bölüm", "Not"]

# CSV dosyasına yazma
csv_yaz("ogrenciler.csv", ogrenci_verileri, basliklar)

# CSV dosyasından okuma
okunan_veriler = csv_oku("ogrenciler.csv")

print("CSV Verileri:")
for satir in okunan_veriler:
    print(satir)
```

### Dictionary Formatında CSV İşlemleri

```python
import csv

# Dictionary formatında CSV yazma
def csv_dict_yaz(dosya_adi, veriler):
    try:
        with open(dosya_adi, 'w', newline='', encoding='utf-8') as dosya:
            if veriler:
                fieldnames = veriler[0].keys()
                writer = csv.DictWriter(dosya, fieldnames=fieldnames)
                
                writer.writeheader()
                writer.writerows(veriler)
        return True
    except Exception as e:
        print(f"CSV dictionary yazma hatası: {e}")
        return False

# Dictionary formatında CSV okuma
def csv_dict_oku(dosya_adi):
    try:
        with open(dosya_adi, 'r', encoding='utf-8') as dosya:
            reader = csv.DictReader(dosya)
            return list(reader)
    except FileNotFoundError:
        print(f"'{dosya_adi}' dosyası bulunamadı!")
        return []
    except Exception as e:
        print(f"CSV dictionary okuma hatası: {e}")
        return []

# Örnek dictionary verisi
ogrenci_dict_verileri = [
    {"ogrenci_no": "2024001", "ad": "Ali", "soyad": "Yılmaz", "bolum": "Bilgisayar", "not": "85"},
    {"ogrenci_no": "2024002", "ad": "Ayşe", "soyad": "Demir", "bolum": "Matematik", "not": "92"},
    {"ogrenci_no": "2024003", "ad": "Mehmet", "soyad": "Kaya", "bolum": "Fizik", "not": "78"}
]

# Dictionary formatında CSV yazma
csv_dict_yaz("ogrenciler_dict.csv", ogrenci_dict_verileri)

# Dictionary formatında CSV okuma
okunan_dict_veriler = csv_dict_oku("ogrenciler_dict.csv")

print("Dictionary CSV Verileri:")
for ogrenci in okunan_dict_veriler:
    print(f"{ogrenci['ad']} {ogrenci['soyad']}: {ogrenci['not']}")
```

---

## 📁 Dosya ve Klasör Yönetimi

### os ve pathlib Modülleri

```python
import os
import shutil
from pathlib import Path

# Dosya ve klasör işlemleri
def dosya_islemleri():
    # Mevcut dizin
    print(f"Mevcut dizin: {os.getcwd()}")
    
    # Dizin içeriği
    print("Dizin içeriği:")
    for item in os.listdir('.'):
        if os.path.isfile(item):
            print(f"  Dosya: {item}")
        elif os.path.isdir(item):
            print(f"  Klasör: {item}")
    
    # Dosya bilgileri
    if os.path.exists("ornek.txt"):
        boyut = os.path.getsize("ornek.txt")
        son_degisim = os.path.getmtime("ornek.txt")
        print(f"Dosya boyutu: {boyut} byte")
        print(f"Son değişim: {son_degisim}")

# pathlib ile modern dosya işlemleri
def pathlib_islemleri():
    # Path nesnesi oluşturma
    dosya_yolu = Path("ornek.txt")
    
    # Dosya kontrolü
    if dosya_yolu.exists():
        print(f"Dosya var: {dosya_yolu}")
        print(f"Dosya boyutu: {dosya_yolu.stat().st_size} byte")
        print(f"Dosya uzantısı: {dosya_yolu.suffix}")
        print(f"Dosya adı: {dosya_yolu.stem}")
    
    # Yeni klasör oluşturma
    yeni_klasor = Path("yeni_klasor")
    yeni_klasor.mkdir(exist_ok=True)
    
    # Dosya kopyalama
    if dosya_yolu.exists():
        hedef = yeni_klasor / "kopya_ornek.txt"
        shutil.copy2(dosya_yolu, hedef)
        print(f"Dosya kopyalandı: {hedef}")

# Dosya arama
def dosya_ara(klasor, uzanti):
    """Belirli uzantılı dosyaları arama"""
    bulunan_dosyalar = []
    
    for dosya in Path(klasor).rglob(f"*{uzanti}"):
        bulunan_dosyalar.append(dosya)
    
    return bulunan_dosyalar

# Kullanım
dosya_islemleri()
pathlib_islemleri()

# Python dosyalarını ara
python_dosyalari = dosya_ara(".", ".py")
print(f"Bulunan Python dosyaları: {len(python_dosyalari)}")
for dosya in python_dosyalari:
    print(f"  {dosya}")
```

---

## 🎯 Pratik Örnekler

### Örnek 1: Log Dosyası Yöneticisi

```python
import datetime
import os

class LogYoneticisi:
    def __init__(self, log_dosyasi):
        self.log_dosyasi = log_dosyasi
    
    def log_ekle(self, mesaj, seviye="INFO"):
        """Log mesajı ekleme"""
        tarih = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_satiri = f"[{tarih}] {seviye}: {mesaj}\n"
        
        try:
            with open(self.log_dosyasi, "a", encoding="utf-8") as dosya:
                dosya.write(log_satiri)
            return True
        except Exception as e:
            print(f"Log yazma hatası: {e}")
            return False
    
    def loglari_oku(self, satir_sayisi=None):
        """Log dosyasını okuma"""
        try:
            with open(self.log_dosyasi, "r", encoding="utf-8") as dosya:
                satirlar = dosya.readlines()
                
                if satir_sayisi:
                    return satirlar[-satir_sayisi:]
                else:
                    return satirlar
        except FileNotFoundError:
            return []
        except Exception as e:
            print(f"Log okuma hatası: {e}")
            return []
    
    def log_temizle(self):
        """Log dosyasını temizleme"""
        try:
            with open(self.log_dosyasi, "w", encoding="utf-8") as dosya:
                dosya.write("")
            return True
        except Exception as e:
            print(f"Log temizleme hatası: {e}")
            return False

# Kullanım
log = LogYoneticisi("uygulama.log")

log.log_ekle("Uygulama başlatıldı", "INFO")
log.log_ekle("Kullanıcı giriş yaptı", "INFO")
log.log_ekle("Hata oluştu", "ERROR")
log.log_ekle("İşlem tamamlandı", "INFO")

# Son 5 log satırını oku
son_loglar = log.loglari_oku(5)
print("Son loglar:")
for log_satiri in son_loglar:
    print(log_satiri.strip())
```

### Örnek 2: Dosya Yedekleme Sistemi

```python
import shutil
import os
from datetime import datetime

class DosyaYedekleyici:
    def __init__(self, kaynak_klasor, hedef_klasor):
        self.kaynak_klasor = Path(kaynak_klasor)
        self.hedef_klasor = Path(hedef_klasor)
    
    def yedekle(self):
        """Klasörü yedekleme"""
        if not self.kaynak_klasor.exists():
            return False, "Kaynak klasör bulunamadı!"
        
        # Yedek klasörü oluştur
        tarih = datetime.now().strftime("%Y%m%d_%H%M%S")
        yedek_klasor = self.hedef_klasor / f"yedek_{tarih}"
        
        try:
            # Klasörü kopyala
            shutil.copytree(self.kaynak_klasor, yedek_klasor)
            return True, f"Yedekleme başarılı: {yedek_klasor}"
        except Exception as e:
            return False, f"Yedekleme hatası: {e}"
    
    def yedekleri_listele(self):
        """Mevcut yedekleri listeleme"""
        yedekler = []
        
        if self.hedef_klasor.exists():
            for item in self.hedef_klasor.iterdir():
                if item.is_dir() and item.name.startswith("yedek_"):
                    yedekler.append({
                        'ad': item.name,
                        'tarih': item.stat().st_mtime,
                        'boyut': self._klasor_boyutu(item)
                    })
        
        # Tarihe göre sırala
        yedekler.sort(key=lambda x: x['tarih'], reverse=True)
        return yedekler
    
    def _klasor_boyutu(self, klasor):
        """Klasör boyutunu hesaplama"""
        toplam_boyut = 0
        for dosya in klasor.rglob('*'):
            if dosya.is_file():
                toplam_boyut += dosya.stat().st_size
        return toplam_boyut
    
    def eski_yedekleri_temizle(self, gun_sayisi=7):
        """Eski yedekleri silme"""
        from datetime import timedelta
        
        esik_tarih = datetime.now() - timedelta(days=gun_sayisi)
        silinen_sayisi = 0
        
        for yedek in self.yedekleri_listele():
            yedek_tarih = datetime.fromtimestamp(yedek['tarih'])
            if yedek_tarih < esik_tarih:
                yedek_yolu = self.hedef_klasor / yedek['ad']
                try:
                    shutil.rmtree(yedek_yolu)
                    silinen_sayisi += 1
                except Exception as e:
                    print(f"Yedek silme hatası: {e}")
        
        return silinen_sayisi

# Kullanım
yedekleyici = DosyaYedekleyici("kaynak_klasor", "yedekler")

# Yedekleme yap
basarili, mesaj = yedekleyici.yedekle()
print(mesaj)

# Yedekleri listele
yedekler = yedekleyici.yedekleri_listele()
print("Mevcut yedekler:")
for yedek in yedekler:
    tarih = datetime.fromtimestamp(yedek['tarih'])
    boyut_mb = yedek['boyut'] / (1024 * 1024)
    print(f"  {yedek['ad']}: {tarih.strftime('%Y-%m-%d %H:%M')} ({boyut_mb:.1f} MB)")

# Eski yedekleri temizle
silinen = yedekleyici.eski_yedekleri_temizle(3)
print(f"{silinen} eski yedek silindi.")
```

---

## ✅ Özet ve Kontrol Listesi

### Öğrendikleriniz
- [x] Dosya okuma ve yazma işlemleri
- [x] Context managers (with statement)
- [x] Exception handling (try/except/finally)
- [x] JSON dosya işlemleri
- [x] CSV dosya işlemleri
- [x] Dosya ve klasör yönetimi
- [x] Hata türleri ve yönetimi
- [x] Güvenli dosya işlemleri

### Sırada Ne Var?
- Regular expressions
- Web scraping
- API kullanımı
- Veritabanı işlemleri
- Çoklu işlem (multiprocessing)

### Pratik Yapın!
Dosya işlemlerini pekiştirmek için:
1. Kendi log sisteminizi oluşturun
2. JSON formatında veri saklayın
3. CSV dosyaları ile çalışın
4. Dosya yedekleme sistemi geliştirin
5. Hata yönetimi ile güvenli kod yazın

---

**🎯 Sonraki ders: Regular Expressions ve Web Scraping** 