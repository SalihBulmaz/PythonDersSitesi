# Sıfırdan İleri Seviye Python Programlama Dersi

## 📖 Ders Hakkında

Bu kapsamlı Python programlama dersi, hiçbir programlama deneyimi olmayan başlangıç seviyesinden ileri düzey konulara kadar her şeyi kapsayan bir öğrenme yolculuğudur.

## 🎯 Hedef Kitle

- Programlamaya yeni başlayanlar
- Diğer dillerden Python'a geçmek isteyenler
- Python becerilerini derinleştirmek isteyenler

## 🛣️ Öğrenme Yolu

### **Seviye 1: Temeller (Hafta 1-2)**
- Python kurulumu ve geliştirme ortamı
- Temel söz dizimi ve değişkenler
- Veri türleri ve operatörler
- Girdi/çıktı işlemleri

### **Seviye 2: Kontrol Yapıları (Hafta 3-4)**
- Koşullu ifadeler (if/elif/else)
- Döngüler (for/while)
- Liste, tuple, set ve dictionary
- String işlemleri

### **Seviye 3: Fonksiyonlar ve Modüller (Hafta 5-6)**
- Fonksiyon tanımlama ve kullanma
- Parametreler ve geri dönüş değerleri
- Lambda fonksiyonları
- Modüller ve paketler

### **Seviye 4: Nesne Yönelimli Programlama (Hafta 7-8)**
- Sınıf ve nesne kavramları
- Encapsulation, Inheritance, Polymorphism
- Özel metotlar
- Property ve decorator'lar

### **Seviye 5: İleri Konular (Hafta 9-12)**
- Dosya işlemleri ve istisna yönetimi
- Regular expressions
- Çoklu işlem
- Veri tabanı işlemleri
- Web scraping ve API kullanımı

---

## 📚 Detaylı İçerik ve Kod Örnekleri

## 1. Python Temelleri

### Değişkenler ve Veri Türleri
```python
isim = "Ahmet"
yas = 25
boy = 1.75
evli_mi = False

print(f"Merhaba {isim}, yaşınız {yas}")
```

### String İşlemleri
```python
metin = "Python Programlama"
print(metin.upper())    # PYTHON PROGRAMLAMA
print(metin[0:6])       # Python
```

## 2. Kontrol Yapıları

### Koşullu İfadeler
```python
not_degeri = 85

if not_degeri >= 90:
    print("AA")
elif not_degeri >= 80:
    print("BA")
else:
    print("Geçer not")
```

### Döngüler
```python
# For döngüsü
sayilar = [1, 2, 3, 4, 5]
for sayi in sayilar:
    print(sayi ** 2)

# List comprehension
kareler = [x**2 for x in range(1, 6)]
print(kareler)  # [1, 4, 9, 16, 25]
```

### Veri Yapıları
```python
# Liste
meyveler = ["elma", "armut", "muz"]
meyveler.append("portakal")

# Dictionary
ogrenci = {"ad": "Ali", "yas": 20, "notlar": [85, 90, 78]}
print(ogrenci["ad"])
```

## 3. Fonksiyonlar

### Temel Fonksiyonlar
```python
def selamla(isim):
    return f"Merhaba {isim}!"

def toplam(a, b):
    return a + b

print(selamla("Ali"))
print(toplam(5, 3))
```

### Lambda Fonksiyonları
```python
kare = lambda x: x ** 2
sayilar = [1, 2, 3, 4, 5]
kareler = list(map(kare, sayilar))
print(kareler)  # [1, 4, 9, 16, 25]
```

## 4. Nesne Yönelimli Programlama

### Temel Sınıf
```python
class Kisi:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas
    
    def kendin_tanitma(self):
        return f"Benim adım {self.ad}, {self.yas} yaşındayım"

kisi1 = Kisi("Ali", 25)
print(kisi1.kendin_tanitma())
```

### Miras Alma
```python
class Ogrenci(Kisi):
    def __init__(self, ad, yas, ogrenci_no):
        super().__init__(ad, yas)
        self.ogrenci_no = ogrenci_no
    
    def bilgileri_goster(self):
        return f"{self.ad} - No: {self.ogrenci_no}"

ogrenci = Ogrenci("Ayşe", 20, "12345")
print(ogrenci.bilgileri_goster())
```

## 5. Dosya İşlemleri

### Dosya Okuma/Yazma
```python
# Yazma
with open("test.txt", "w", encoding="utf-8") as f:
    f.write("Merhaba Python!")

# Okuma
with open("test.txt", "r", encoding="utf-8") as f:
    icerik = f.read()
    print(icerik)
```

### JSON İşlemleri
```python
import json

veri = {"ad": "Ali", "yas": 25, "sehir": "İstanbul"}

# JSON'a dönüştürme
with open("veri.json", "w") as f:
    json.dump(veri, f)

# JSON'dan okuma
with open("veri.json", "r") as f:
    okunan_veri = json.load(f)
    print(okunan_veri["ad"])
```

## 6. Hata Yönetimi

```python
try:
    sayi = int(input("Bir sayı girin: "))
    sonuc = 10 / sayi
    print(f"Sonuç: {sonuc}")
except ValueError:
    print("Geçerli bir sayı girin!")
except ZeroDivisionError:
    print("Sıfıra bölme hatası!")
finally:
    print("İşlem tamamlandı.")
```

## 7. Web İşlemleri

### Basit Web İsteği
```python
import requests

try:
    response = requests.get("https://api.github.com/users/octocat")
    if response.status_code == 200:
        veri = response.json()
        print(f"Kullanıcı: {veri['name']}")
except requests.RequestException:
    print("Bağlantı hatası!")
```

## 📋 Örnek Projeler

### Mini Hesap Makinesi
```python
def hesaplama(a, b, islem):
    if islem == "+":
        return a + b
    elif islem == "-":
        return a - b
    elif islem == "*":
        return a * b
    elif islem == "/":
        return a / b if b != 0 else "Hata!"

print(hesaplama(10, 5, "+"))  # 15
```

### Basit ToDo Uygulaması
```python
class TodoApp:
    def __init__(self):
        self.gorevler = []
    
    def gorev_ekle(self, gorev):
        self.gorevler.append(gorev)
    
    def gorevleri_goster(self):
        for i, gorev in enumerate(self.gorevler, 1):
            print(f"{i}. {gorev}")

todo = TodoApp()
todo.gorev_ekle("Python öğren")
todo.gorev_ekle("Proje yap")
todo.gorevleri_goster()
```

## 🎯 Öğrenme Hedefleri

### Temel Seviye (Hafta 1-4)
- Python söz dizimini kavramak
- Temel veri türleri ile çalışabilmek
- Basit programlar yazabilmek

### Orta Seviye (Hafta 5-8)
- Fonksiyon ve sınıf kavramlarını anlamak
- Dosya işlemleri yapabilmek
- Hata yönetimi kullanabilmek

### İleri Seviye (Hafta 9-12)
- API'lar ile çalışabilmek
- Veritabanı bağlantıları kurabilmek
- Karmaşık projeler geliştirebilmek

## 📚 Önerilen Kaynaklar

### Online Platformlar
- Python.org resmi dokümantasyonu
- LeetCode (algoritma pratikleri)
- GitHub (açık kaynak projeler)

### Pratik Projeleri
1. **Hesap Makinesi**: Gelişmiş matematik işlemleri
2. **ToDo Uygulaması**: Görev yönetimi sistemi
3. **Hava Durumu**: API kullanarak veri çekme
4. **Blog Sistemi**: Web uygulaması geliştirme

## 🔧 Kurulum

```bash
# Python kurulumu sonrası
pip install requests beautifulsoup4 pandas

# Sanal ortam
python -m venv myenv
myenv\Scripts\activate  # Windows
source myenv/bin/activate  # Linux/Mac
```

## ✅ İlerleme Takibi

### Haftalık Kontrol
- [ ] **Hafta 1-2**: Temeller ve değişkenler
- [ ] **Hafta 3-4**: Kontrol yapıları
- [ ] **Hafta 5-6**: Fonksiyonlar
- [ ] **Hafta 7-8**: OOP kavramları
- [ ] **Hafta 9-10**: Dosya işlemleri
- [ ] **Hafta 11-12**: Web ve API

---

**🚀 Başarı için günlük pratik yapın ve küçük projelerle öğrendiklerinizi pekiştirin!**