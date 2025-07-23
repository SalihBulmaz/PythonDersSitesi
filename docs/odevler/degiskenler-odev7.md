# Ödev 7: Liste ve Tuple İşlemleri

## Amaç
Bu ödevde Python'da liste ve tuple veri yapılarını, bunların işlemlerini ve kullanım alanlarını öğreneceksiniz.

## Görevler

### 1. Temel Liste İşlemleri
Aşağıdaki liste işlemlerini gerçekleştirin:

```python
# Liste oluşturma
sayılar = [1, 2, 3, 4, 5]
meyveler = ["elma", "armut", "muz", "portakal"]
karışık = [1, "iki", 3.0, True]

print("Orijinal listeler:")
print(f"Sayılar: {sayılar}")
print(f"Meyveler: {meyveler}")
print(f"Karışık: {karışık}")

# Liste işlemleri
meyveler.append("kiraz")  # Sona ekleme
meyveler.insert(1, "ananas")  # Belirli konuma ekleme
meyveler.remove("armut")  # Silme
son_eleman = meyveler.pop()  # Son elemanı çıkar ve döndür

print(f"\nİşlemler sonrası meyveler: {meyveler}")
print(f"Çıkarılan son eleman: {son_eleman}")

# Liste özellikleri
print(f"\nMeyveler listesi uzunluğu: {len(meyveler)}")
print(f"İlk meyve: {meyveler[0]}")
print(f"Son meyve: {meyveler[-1]}")
print(f"'muz' meyvesi listede mi: {'muz' in meyveler}")
```

### 2. Liste Slicing (Dilimleme)
Liste dilimleme işlemlerini gerçekleştirin:

```python
sayılar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(f"Orijinal liste: {sayılar}")

# Temel dilimleme
ilk_5 = sayılar[:5]
son_5 = sayılar[-5:]
ortadaki = sayılar[3:7]

print(f"İlk 5 eleman: {ilk_5}")
print(f"Son 5 eleman: {son_5}")
print(f"Ortadaki elemanlar (3-6): {ortadaki}")

# Adım ile dilimleme
her_ikinci = sayılar[::2]
ters_liste = sayılar[::-1]
her_üçüncü = sayılar[::3]

print(f"Her ikinci eleman: {her_ikinci}")
print(f"Ters liste: {ters_liste}")
print(f"Her üçüncü eleman: {her_üçüncü}")

# Negatif adım
ters_her_ikinci = sayılar[::-2]
print(f"Ters her ikinci eleman: {ters_her_ikinci}")
```

### 3. Liste Metodları
Liste metodlarını kullanarak işlemler yapın:

```python
sayılar = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

print(f"Orijinal liste: {sayılar}")

# Sıralama
sayılar.sort()
print(f"Sıralanmış liste: {sayılar}")

sayılar.sort(reverse=True)
print(f"Ters sıralanmış liste: {sayılar}")

# Sayma
beş_sayısı = sayılar.count(5)
print(f"Listede 5 sayısı: {beş_sayısı}")

# Arama
beş_konumu = sayılar.index(5)
print(f"İlk 5'in konumu: {beş_konumu}")

# Ters çevirme
sayılar.reverse()
print(f"Ters çevrilmiş liste: {sayılar}")

# Liste kopyalama
sayılar_kopya = sayılar.copy()
sayılar_kopya.append(10)
print(f"Orijinal liste: {sayılar}")
print(f"Kopya liste: {sayılar_kopya}")
```

### 4. Tuple İşlemleri
Tuple veri yapısını kullanarak işlemler yapın:

```python
# Tuple oluşturma
koordinat = (10, 20)
renk = (255, 128, 0)
kişi = ("Ali", 25, "İstanbul")

print("Tuple örnekleri:")
print(f"Koordinat: {koordinat}")
print(f"Renk: {renk}")
print(f"Kişi: {kişi}")

# Tuple özellikleri
print(f"\nKoordinat uzunluğu: {len(koordinat)}")
print(f"X koordinatı: {koordinat[0]}")
print(f"Y koordinatı: {koordinat[1]}")

# Tuple unpacking
x, y = koordinat
ad, yaş, şehir = kişi

print(f"\nUnpacking sonuçları:")
print(f"X: {x}, Y: {y}")
print(f"Ad: {ad}, Yaş: {yaş}, Şehir: {şehir}")

# Tuple birleştirme
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
birleşik = tuple1 + tuple2
print(f"\nBirleşik tuple: {birleşik}")

# Tuple tekrarlama
tekrarlı = tuple1 * 3
print(f"Tekrarlı tuple: {tekrarlı}")
```

### 5. Liste ve Tuple Karşılaştırması
Liste ve tuple arasındaki farkları gösterin:

```python
# Liste - değiştirilebilir
liste = [1, 2, 3, 4, 5]
print(f"Orijinal liste: {liste}")

liste[0] = 10
liste.append(6)
liste.remove(3)

print(f"Değiştirilmiş liste: {liste}")

# Tuple - değiştirilemez
tuple_veri = (1, 2, 3, 4, 5)
print(f"Orijinal tuple: {tuple_veri}")

# tuple_veri[0] = 10  # Hata! Tuple değiştirilemez
# tuple_veri.append(6)  # Hata! Tuple'da append yok

print("Tuple değiştirilemez!")

# Performans karşılaştırması
import time

# Liste oluşturma süresi
başlangıç = time.time()
liste = [i for i in range(1000000)]
liste_süre = time.time() - başlangıç

# Tuple oluşturma süresi
başlangıç = time.time()
tuple_veri = tuple(i for i in range(1000000))
tuple_süre = time.time() - başlangıç

print(f"\nPerformans karşılaştırması:")
print(f"Liste oluşturma süresi: {liste_süre:.4f} saniye")
print(f"Tuple oluşturma süresi: {tuple_süre:.4f} saniye")
```

## Ek Görevler (İsteğe Bağlı)

### 6. Liste İşlemleri Uygulaması
Öğrenci notları ile çalışan bir uygulama:

```python
def öğrenci_not_sistemi():
    öğrenciler = []
    
    while True:
        print("\nÖğrenci Not Sistemi")
        print("1. Öğrenci Ekle")
        print("2. Notları Listele")
        print("3. Ortalama Hesapla")
        print("4. En Yüksek Not")
        print("5. En Düşük Not")
        print("6. Çıkış")
        
        seçim = input("Seçiminiz (1-6): ")
        
        if seçim == "1":
            ad = input("Öğrenci adı: ")
            notlar_str = input("Notları (virgülle ayırın): ")
            notlar = [int(n.strip()) for n in notlar_str.split(",")]
            öğrenciler.append((ad, notlar))
            print("Öğrenci eklendi!")
            
        elif seçim == "2":
            if öğrenciler:
                print("\nÖğrenci Notları:")
                for ad, notlar in öğrenciler:
                    print(f"{ad}: {notlar}")
            else:
                print("Henüz öğrenci eklenmemiş!")
                
        elif seçim == "3":
            if öğrenciler:
                print("\nOrtalamalar:")
                for ad, notlar in öğrenciler:
                    ortalama = sum(notlar) / len(notlar)
                    print(f"{ad}: {ortalama:.2f}")
            else:
                print("Henüz öğrenci eklenmemiş!")
                
        elif seçim == "4":
            if öğrenciler:
                en_yüksek = max(öğrenciler, key=lambda x: max(x[1]))
                print(f"En yüksek not: {en_yüksek[0]} - {max(en_yüksek[1])}")
            else:
                print("Henüz öğrenci eklenmemiş!")
                
        elif seçim == "5":
            if öğrenciler:
                en_düşük = min(öğrenciler, key=lambda x: min(x[1]))
                print(f"En düşük not: {en_düşük[0]} - {min(en_düşük[1])}")
            else:
                print("Henüz öğrenci eklenmemiş!")
                
        elif seçim == "6":
            print("Güle güle!")
            break
            
        else:
            print("Geçersiz seçim!")

# öğrenci_not_sistemi()  # Çalıştırmak için yorumu kaldırın
```

### 7. Tuple Kullanım Örnekleri
Tuple'ların pratik kullanım alanlarını gösteren örnekler:

```python
# Koordinat sistemi
noktalar = [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16)]

print("Koordinat noktaları:")
for x, y in noktalar:
    print(f"({x}, {y})")

# Renk paleti
renkler = [
    ("kırmızı", (255, 0, 0)),
    ("yeşil", (0, 255, 0)),
    ("mavi", (0, 0, 255)),
    ("sarı", (255, 255, 0)),
    ("mor", (128, 0, 128))
]

print("\nRenk paleti:")
for renk_adı, rgb in renkler:
    print(f"{renk_adı}: RGB{rgb}")

# Kişi bilgileri
kişiler = [
    ("Ali", 25, "İstanbul", "Mühendis"),
    ("Ayşe", 30, "Ankara", "Doktor"),
    ("Mehmet", 28, "İzmir", "Öğretmen")
]

print("\nKişi bilgileri:")
for ad, yaş, şehir, meslek in kişiler:
    print(f"{ad} ({yaş} yaşında) - {şehir} - {meslek}")

# Tuple'ları sözlüğe çevirme
kişi_sözlüğü = {}
for ad, yaş, şehir, meslek in kişiler:
    kişi_sözlüğü[ad] = {"yaş": yaş, "şehir": şehir, "meslek": meslek}

print("\nSözlük formatında:")
for ad, bilgiler in kişi_sözlüğü.items():
    print(f"{ad}: {bilgiler}")
```

## Değerlendirme Kriterleri

- [ ] Liste işlemleri doğru kullanılmış
- [ ] Liste slicing işlemleri doğru
- [ ] Liste metodları doğru kullanılmış
- [ ] Tuple işlemleri doğru
- [ ] Liste ve tuple farkları anlaşılmış
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Orijinal listeler:
Sayılar: [1, 2, 3, 4, 5]
Meyveler: ['elma', 'armut', 'muz', 'portakal']
Karışık: [1, 'iki', 3.0, True]

İşlemler sonrası meyveler: ['elma', 'ananas', 'muz', 'portakal', 'kiraz']
Çıkarılan son eleman: kiraz

Meyveler listesi uzunluğu: 5
İlk meyve: elma
Son meyve: kiraz
'muz' meyvesi listede mi: True

Orijinal liste: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
İlk 5 eleman: [0, 1, 2, 3, 4]
Son 5 eleman: [5, 6, 7, 8, 9]
Ortadaki elemanlar (3-6): [3, 4, 5, 6]
Her ikinci eleman: [0, 2, 4, 6, 8]
Ters liste: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
Her üçüncü eleman: [0, 3, 6, 9]

Tuple örnekleri:
Koordinat: (10, 20)
Renk: (255, 128, 0)
Kişi: ('Ali', 25, 'İstanbul')

Koordinat uzunluğu: 2
X koordinatı: 10
Y koordinatı: 20

Unpacking sonuçları:
X: 10, Y: 20
Ad: Ali, Yaş: 25, Şehir: İstanbul

Birleşik tuple: (1, 2, 3, 4, 5, 6)
Tekrarlı tuple: (1, 2, 3, 1, 2, 3, 1, 2, 3)
```

**Başarılar! 🚀** 