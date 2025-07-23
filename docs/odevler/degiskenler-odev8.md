# Ödev 8: Dictionary (Sözlük) İşlemleri

## Amaç
Bu ödevde Python'da dictionary (sözlük) veri yapısını, işlemlerini ve kullanım alanlarını öğreneceksiniz.

## Görevler

### 1. Temel Dictionary İşlemleri
Aşağıdaki dictionary işlemlerini gerçekleştirin:

```python
# Dictionary oluşturma
öğrenci = {
    "ad": "Ali",
    "yaş": 20,
    "bölüm": "Bilgisayar Mühendisliği",
    "notlar": [85, 90, 78, 92]
}

print("Orijinal öğrenci bilgileri:")
print(f"Ad: {öğrenci['ad']}")
print(f"Yaş: {öğrenci['yaş']}")
print(f"Bölüm: {öğrenci['bölüm']}")
print(f"Notlar: {öğrenci['notlar']}")

# Dictionary işlemleri
öğrenci["şehir"] = "İstanbul"  # Yeni anahtar ekleme
öğrenci["yaş"] = 21  # Değer güncelleme
öğrenci["notlar"].append(88)  # Liste içindeki değeri güncelleme

print(f"\nGüncellenmiş bilgiler:")
print(f"Şehir: {öğrenci.get('şehir', 'Belirtilmemiş')}")
print(f"Yeni yaş: {öğrenci['yaş']}")
print(f"Güncellenmiş notlar: {öğrenci['notlar']}")

# Dictionary özellikleri
print(f"\nDictionary uzunluğu: {len(öğrenci)}")
print(f"Anahtarlar: {list(öğrenci.keys())}")
print(f"Değerler: {list(öğrenci.values())}")
print(f"Anahtar-değer çiftleri: {list(öğrenci.items())}")
```

### 2. Dictionary Metodları
Dictionary metodlarını kullanarak işlemler yapın:

```python
# Örnek dictionary
kişi = {
    "ad": "Ayşe",
    "yaş": 25,
    "meslek": "Mühendis",
    "şehir": "Ankara"
}

print("Orijinal dictionary:")
print(kişi)

# get() metodu
yaş = kişi.get("yaş", "Belirtilmemiş")
telefon = kişi.get("telefon", "Belirtilmemiş")
print(f"\nYaş: {yaş}")
print(f"Telefon: {telefon}")

# pop() metodu
meslek = kişi.pop("meslek")
print(f"Çıkarılan meslek: {meslek}")
print(f"Güncellenmiş dictionary: {kişi}")

# update() metodu
yeni_bilgiler = {"telefon": "555-1234", "email": "ayse@email.com"}
kişi.update(yeni_bilgiler)
print(f"Güncellenmiş dictionary: {kişi}")

# clear() metodu
kişi.clear()
print(f"Temizlenmiş dictionary: {kişi}")
```

### 3. Dictionary İterasyonu
Dictionary üzerinde farklı iterasyon yöntemlerini kullanın:

```python
öğrenci = {
    "ad": "Mehmet",
    "yaş": 22,
    "bölüm": "Matematik",
    "notlar": [75, 82, 90, 85],
    "şehir": "İzmir"
}

print("Dictionary iterasyon örnekleri:")
print("-" * 30)

# Anahtarlar üzerinde iterasyon
print("Anahtarlar:")
for anahtar in öğrenci.keys():
    print(f"  {anahtar}")

# Değerler üzerinde iterasyon
print("\nDeğerler:")
for değer in öğrenci.values():
    print(f"  {değer}")

# Anahtar-değer çiftleri üzerinde iterasyon
print("\nAnahtar-Değer çiftleri:")
for anahtar, değer in öğrenci.items():
    print(f"  {anahtar}: {değer}")

# enumerate() ile iterasyon
print("\nEnumerate ile:")
for i, (anahtar, değer) in enumerate(öğrenci.items(), 1):
    print(f"  {i}. {anahtar}: {değer}")
```

### 4. İç İçe Dictionary
İç içe dictionary yapılarını kullanın:

```python
# İç içe dictionary
okul = {
    "ad": "Teknik Üniversite",
    "öğrenciler": {
        "ali": {
            "yaş": 20,
            "bölüm": "Bilgisayar",
            "notlar": [85, 90, 78]
        },
        "ayşe": {
            "yaş": 21,
            "bölüm": "Matematik",
            "notlar": [92, 88, 95]
        },
        "mehmet": {
            "yaş": 19,
            "bölüm": "Fizik",
            "notlar": [75, 82, 80]
        }
    }
}

print("Okul bilgileri:")
print(f"Okul adı: {okul['ad']}")
print(f"Öğrenci sayısı: {len(okul['öğrenciler'])}")

print("\nÖğrenci detayları:")
for öğrenci_adı, bilgiler in okul['öğrenciler'].items():
    print(f"\n{öğrenci_adı.upper()}:")
    print(f"  Yaş: {bilgiler['yaş']}")
    print(f"  Bölüm: {bilgiler['bölüm']}")
    print(f"  Notlar: {bilgiler['notlar']}")
    ortalama = sum(bilgiler['notlar']) / len(bilgiler['notlar'])
    print(f"  Ortalama: {ortalama:.1f}")
```

### 5. Dictionary Comprehension
Dictionary comprehension kullanarak işlemler yapın:

```python
# Temel dictionary comprehension
sayılar = [1, 2, 3, 4, 5]
kareler = {x: x**2 for x in sayılar}
print(f"Sayılar ve kareleri: {kareler}")

# Koşullu dictionary comprehension
çift_kareler = {x: x**2 for x in sayılar if x % 2 == 0}
print(f"Çift sayıların kareleri: {çift_kareler}")

# String işlemleri ile dictionary comprehension
kelimeler = ["python", "programlama", "dili", "çok", "güzel"]
uzunluklar = {kelime: len(kelime) for kelime in kelimeler}
print(f"Kelimeler ve uzunlukları: {uzunluklar}")

# İki liste ile dictionary comprehension
anahtarlar = ["a", "b", "c", "d"]
değerler = [1, 2, 3, 4]
birleşik = {k: v for k, v in zip(anahtarlar, değerler)}
print(f"Birleşik dictionary: {birleşik}")

# Mevcut dictionary'den yeni dictionary oluşturma
öğrenci = {"ad": "Ali", "yaş": 20, "bölüm": "Bilgisayar"}
büyük_harfli = {k.upper(): str(v).upper() for k, v in öğrenci.items()}
print(f"Büyük harfli: {büyük_harfli}")
```

## Ek Görevler (İsteğe Bağlı)

### 6. Öğrenci Not Sistemi
Dictionary kullanarak öğrenci not sistemi oluşturun:

```python
def öğrenci_not_sistemi():
    öğrenciler = {}
    
    while True:
        print("\nÖğrenci Not Sistemi")
        print("1. Öğrenci Ekle")
        print("2. Not Ekle")
        print("3. Öğrenci Bilgilerini Göster")
        print("4. Tüm Öğrencileri Listele")
        print("5. En Yüksek Ortalamalı Öğrenci")
        print("6. Çıkış")
        
        seçim = input("Seçiminiz (1-6): ")
        
        if seçim == "1":
            ad = input("Öğrenci adı: ")
            yaş = int(input("Yaşı: "))
            bölüm = input("Bölümü: ")
            
            öğrenciler[ad] = {
                "yaş": yaş,
                "bölüm": bölüm,
                "notlar": []
            }
            print("Öğrenci eklendi!")
            
        elif seçim == "2":
            ad = input("Öğrenci adı: ")
            if ad in öğrenciler:
                not_değeri = float(input("Not değeri: "))
                öğrenciler[ad]["notlar"].append(not_değeri)
                print("Not eklendi!")
            else:
                print("Öğrenci bulunamadı!")
                
        elif seçim == "3":
            ad = input("Öğrenci adı: ")
            if ad in öğrenciler:
                bilgiler = öğrenciler[ad]
                print(f"\n{ad.upper()} BİLGİLERİ:")
                print(f"Yaş: {bilgiler['yaş']}")
                print(f"Bölüm: {bilgiler['bölüm']}")
                print(f"Notlar: {bilgiler['notlar']}")
                if bilgiler['notlar']:
                    ortalama = sum(bilgiler['notlar']) / len(bilgiler['notlar'])
                    print(f"Ortalama: {ortalama:.2f}")
            else:
                print("Öğrenci bulunamadı!")
                
        elif seçim == "4":
            if öğrenciler:
                print("\nTÜM ÖĞRENCİLER:")
                for ad, bilgiler in öğrenciler.items():
                    print(f"\n{ad}:")
                    print(f"  Yaş: {bilgiler['yaş']}")
                    print(f"  Bölüm: {bilgiler['bölüm']}")
                    print(f"  Notlar: {bilgiler['notlar']}")
                    if bilgiler['notlar']:
                        ortalama = sum(bilgiler['notlar']) / len(bilgiler['notlar'])
                        print(f"  Ortalama: {ortalama:.2f}")
            else:
                print("Henüz öğrenci eklenmemiş!")
                
        elif seçim == "5":
            if öğrenciler:
                en_yüksek = None
                en_yüksek_ortalama = -1
                
                for ad, bilgiler in öğrenciler.items():
                    if bilgiler['notlar']:
                        ortalama = sum(bilgiler['notlar']) / len(bilgiler['notlar'])
                        if ortalama > en_yüksek_ortalama:
                            en_yüksek_ortalama = ortalama
                            en_yüksek = ad
                
                if en_yüksek:
                    print(f"En yüksek ortalamalı öğrenci: {en_yüksek} ({en_yüksek_ortalama:.2f})")
                else:
                    print("Henüz not girilmemiş!")
            else:
                print("Henüz öğrenci eklenmemiş!")
                
        elif seçim == "6":
            print("Güle güle!")
            break
            
        else:
            print("Geçersiz seçim!")

# öğrenci_not_sistemi()  # Çalıştırmak için yorumu kaldırın
```

### 7. Sözlük Uygulaması
Basit bir sözlük uygulaması oluşturun:

```python
def sözlük_uygulaması():
    sözlük = {
        "python": "Yüksek seviyeli, genel amaçlı programlama dili",
        "dictionary": "Anahtar-değer çiftlerinden oluşan veri yapısı",
        "list": "Sıralı, değiştirilebilir veri koleksiyonu",
        "tuple": "Sıralı, değiştirilemez veri koleksiyonu",
        "function": "Belirli bir görevi yerine getiren kod bloğu",
        "variable": "Veri saklamak için kullanılan isimli alan",
        "loop": "Belirli bir işlemi tekrarlamak için kullanılan yapı",
        "condition": "Program akışını kontrol eden koşul ifadesi"
    }
    
    while True:
        print("\nPython Sözlüğü")
        print("1. Kelime Ara")
        print("2. Yeni Kelime Ekle")
        print("3. Tüm Kelimeleri Listele")
        print("4. Kelime Sil")
        print("5. Çıkış")
        
        seçim = input("Seçiminiz (1-5): ")
        
        if seçim == "1":
            kelime = input("Aranacak kelime: ").lower()
            if kelime in sözlük:
                print(f"\n{kelime.upper()}:")
                print(f"  {sözlük[kelime]}")
            else:
                print("Kelime bulunamadı!")
                
        elif seçim == "2":
            kelime = input("Yeni kelime: ").lower()
            anlam = input("Anlamı: ")
            sözlük[kelime] = anlam
            print("Kelime eklendi!")
            
        elif seçim == "3":
            print("\nSÖZLÜK İÇERİĞİ:")
            for kelime, anlam in sözlük.items():
                print(f"\n{kelime.upper()}:")
                print(f"  {anlam}")
                
        elif seçim == "4":
            kelime = input("Silinecek kelime: ").lower()
            if kelime in sözlük:
                silinen = sözlük.pop(kelime)
                print(f"'{kelime}' kelimesi silindi.")
            else:
                print("Kelime bulunamadı!")
                
        elif seçim == "5":
            print("Güle güle!")
            break
            
        else:
            print("Geçersiz seçim!")

# sözlük_uygulaması()  # Çalıştırmak için yorumu kaldırın
```

## Değerlendirme Kriterleri

- [ ] Dictionary oluşturma ve erişim doğru
- [ ] Dictionary metodları doğru kullanılmış
- [ ] Dictionary iterasyonu doğru
- [ ] İç içe dictionary yapısı anlaşılmış
- [ ] Dictionary comprehension kullanılmış
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Orijinal öğrenci bilgileri:
Ad: Ali
Yaş: 20
Bölüm: Bilgisayar Mühendisliği
Notlar: [85, 90, 78, 92]

Güncellenmiş bilgiler:
Şehir: İstanbul
Yeni yaş: 21
Güncellenmiş notlar: [85, 90, 78, 92, 88]

Dictionary uzunluğu: 5
Anahtarlar: ['ad', 'yaş', 'bölüm', 'notlar', 'şehir']
Değerler: ['Ali', 21, 'Bilgisayar Mühendisliği', [85, 90, 78, 92, 88], 'İstanbul']
Anahtar-değer çiftleri: [('ad', 'Ali'), ('yaş', 21), ('bölüm', 'Bilgisayar Mühendisliği'), ('notlar', [85, 90, 78, 92, 88]), ('şehir', 'İstanbul')]

Dictionary iterasyon örnekleri:
------------------------------
Anahtarlar:
  ad
  yaş
  bölüm
  notlar
  şehir

Değerler:
  Mehmet
  22
  Matematik
  [75, 82, 90, 85]
  İzmir

Anahtar-Değer çiftleri:
  ad: Mehmet
  yaş: 22
  bölüm: Matematik
  notlar: [75, 82, 90, 85]
  şehir: İzmir

Enumerate ile:
  1. ad: Mehmet
  2. yaş: 22
  3. bölüm: Matematik
  4. notlar: [75, 82, 90, 85]
  5. şehir: İzmir
```

**Başarılar! 🚀** 