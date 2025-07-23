# Ödev 5: Kullanıcı Girişi ve Etkileşimli Programlar

## Amaç
Bu ödevde Python'da kullanıcı girişi alma, input/output işlemleri ve etkileşimli programlar yazmayı öğreneceksiniz.

## Görevler

### 1. Temel Input/Output İşlemleri
Kullanıcıdan bilgi alan ve formatlanmış çıktı veren bir program yazın:

```python
# Kullanıcıdan bilgi alma
ad = input("Adınızı girin: ")
soyad = input("Soyadınızı girin: ")
yaş = input("Yaşınızı girin: ")
şehir = input("Şehrinizi girin: ")
meslek = input("Mesleğinizi girin: ")

# Veri türü dönüşümleri
yaş_int = int(yaş)

# Formatlanmış çıktı
print("\n" + "="*40)
print("KİŞİSEL BİLGİLER")
print("="*40)
print(f"Ad Soyad: {ad} {soyad}")
print(f"Yaş: {yaş_int}")
print(f"Şehir: {şehir}")
print(f"Meslek: {meslek}")
print("="*40)
```

### 2. Hesap Makinesi
Kullanıcıdan iki sayı alan ve dört işlem yapan bir hesap makinesi:

```python
print("Basit Hesap Makinesi")
print("-" * 20)

# Kullanıcıdan sayı alma
sayı1 = float(input("Birinci sayıyı girin: "))
sayı2 = float(input("İkinci sayıyı girin: "))

# İşlem seçimi
print("\nİşlemler:")
print("1. Toplama")
print("2. Çıkarma")
print("3. Çarpma")
print("4. Bölme")

işlem = input("Yapmak istediğiniz işlemi seçin (1-4): ")

# Hesaplama
if işlem == "1":
    sonuç = sayı1 + sayı2
    işlem_adı = "toplama"
elif işlem == "2":
    sonuç = sayı1 - sayı2
    işlem_adı = "çıkarma"
elif işlem == "3":
    sonuç = sayı1 * sayı2
    işlem_adı = "çarpma"
elif işlem == "4":
    if sayı2 != 0:
        sonuç = sayı1 / sayı2
        işlem_adı = "bölme"
    else:
        print("Hata: Sıfıra bölme işlemi yapılamaz!")
        exit()
else:
    print("Hata: Geçersiz işlem seçimi!")
    exit()

# Sonuç
print(f"\n{sayı1} ile {sayı2} arasında {işlem_adı} işlemi sonucu: {sonuç}")
```

### 3. Vücut Kitle İndeksi Hesaplama
Kullanıcıdan boy ve kilo alan, VKİ hesaplayan bir program:

```python
print("Vücut Kitle İndeksi (VKİ) Hesaplama")
print("-" * 35)

# Kullanıcıdan bilgi alma
kilo = float(input("Kilonuzu girin (kg): "))
boy = float(input("Boyunuzu girin (metre): "))

# VKİ hesaplama
vki = kilo / (boy ** 2)

# VKİ değerlendirmesi
if vki < 18.5:
    durum = "Zayıf"
    öneri = "Biraz kilo almanız önerilir."
elif vki < 25:
    durum = "Normal"
    öneri = "Mevcut kilonuzu koruyun."
elif vki < 30:
    durum = "Fazla kilolu"
    öneri = "Kilo vermeniz önerilir."
else:
    durum = "Obez"
    öneri = "Mutlaka kilo vermeniz gerekiyor."

# Sonuç
print(f"\nVKİ'niz: {vki:.1f}")
print(f"Durumunuz: {durum}")
print(f"Öneri: {öneri}")
```

### 4. Basit Quiz Uygulaması
Kullanıcıya sorular soran ve puan hesaplayan bir quiz:

```python
print("Python Bilgi Quiz'i")
print("=" * 20)

puan = 0
toplam_soru = 3

# Soru 1
print("\nSoru 1: Python'da 'print' fonksiyonu ne işe yarar?")
print("a) Ekrana yazdırma")
print("b) Dosya okuma")
print("c) Matematik işlemi")
print("d) Döngü oluşturma")

cevap1 = input("Cevabınız (a/b/c/d): ").lower()
if cevap1 == "a":
    puan += 1
    print("Doğru!")
else:
    print("Yanlış! Doğru cevap: a) Ekrana yazdırma")

# Soru 2
print("\nSoru 2: Python'da liste tanımlamak için hangi sembol kullanılır?")
print("a) ()")
print("b) {}")
print("c) []")
print("d) <>")

cevap2 = input("Cevabınız (a/b/c/d): ").lower()
if cevap2 == "c":
    puan += 1
    print("Doğru!")
else:
    print("Yanlış! Doğru cevap: c) []")

# Soru 3
print("\nSoru 3: Python'da 'if' ifadesi ne için kullanılır?")
print("a) Döngü oluşturmak")
print("b) Koşullu işlem yapmak")
print("c) Fonksiyon tanımlamak")
print("d) Değişken tanımlamak")

cevap3 = input("Cevabınız (a/b/c/d): ").lower()
if cevap3 == "b":
    puan += 1
    print("Doğru!")
else:
    print("Yanlış! Doğru cevap: b) Koşullu işlem yapmak")

# Sonuç
yüzde = (puan / toplam_soru) * 100
print(f"\nQuiz tamamlandı!")
print(f"Puanınız: {puan}/{toplam_soru}")
print(f"Yüzdeniz: %{yüzde:.1f}")

if yüzde >= 80:
    print("Tebrikler! Çok iyi bir sonuç!")
elif yüzde >= 60:
    print("İyi! Biraz daha çalışmanız gerekiyor.")
else:
    print("Daha fazla çalışmanız gerekiyor.")
```

### 5. Basit Oyun: Sayı Tahmin Etme
Kullanıcının bilgisayarın tuttuğu sayıyı tahmin etmeye çalıştığı bir oyun:

```python
import random

print("Sayı Tahmin Oyunu")
print("=" * 20)

# Rastgele sayı üretme (1-100 arası)
hedef_sayı = random.randint(1, 100)
tahmin_sayısı = 0
maksimum_tahmin = 10

print("1 ile 100 arasında bir sayı tuttum.")
print(f"En fazla {maksimum_tahmin} tahmin hakkınız var.")

while tahmin_sayısı < maksimum_tahmin:
    tahmin_sayısı += 1
    kalan_hak = maksimum_tahmin - tahmin_sayısı
    
    try:
        tahmin = int(input(f"\nTahmininiz ({kalan_hak} hakkınız kaldı): "))
        
        if tahmin < 1 or tahmin > 100:
            print("Lütfen 1-100 arasında bir sayı girin!")
            tahmin_sayısı -= 1
            continue
            
        if tahmin == hedef_sayı:
            print(f"\nTebrikler! {tahmin_sayısı}. tahmininizde doğru bildiniz!")
            print(f"Tuttuğum sayı: {hedef_sayı}")
            break
        elif tahmin < hedef_sayı:
            print("Daha büyük bir sayı girin!")
        else:
            print("Daha küçük bir sayı girin!")
            
    except ValueError:
        print("Lütfen geçerli bir sayı girin!")
        tahmin_sayısı -= 1
        continue

if tahmin != hedef_sayı:
    print(f"\nOyun bitti! Tuttuğum sayı: {hedef_sayı}")
```

## Ek Görevler (İsteğe Bağlı)

### 6. Basit Banka Hesabı Simülasyonu
Kullanıcının para yatırıp çekebileceği basit bir banka hesabı:

```python
print("Banka Hesabı Simülasyonu")
print("=" * 25)

# Başlangıç bakiyesi
bakiye = 1000
print(f"Başlangıç bakiyeniz: {bakiye} TL")

while True:
    print("\nİşlemler:")
    print("1. Bakiye Sorgula")
    print("2. Para Yatır")
    print("3. Para Çek")
    print("4. Çıkış")
    
    işlem = input("Yapmak istediğiniz işlemi seçin (1-4): ")
    
    if işlem == "1":
        print(f"Güncel bakiyeniz: {bakiye} TL")
        
    elif işlem == "2":
        try:
            miktar = float(input("Yatırmak istediğiniz miktar (TL): "))
            if miktar > 0:
                bakiye += miktar
                print(f"{miktar} TL yatırıldı. Yeni bakiye: {bakiye} TL")
            else:
                print("Geçersiz miktar!")
        except ValueError:
            print("Geçersiz miktar!")
            
    elif işlem == "3":
        try:
            miktar = float(input("Çekmek istediğiniz miktar (TL): "))
            if miktar > 0 and miktar <= bakiye:
                bakiye -= miktar
                print(f"{miktar} TL çekildi. Yeni bakiye: {bakiye} TL")
            elif miktar > bakiye:
                print("Yetersiz bakiye!")
            else:
                print("Geçersiz miktar!")
        except ValueError:
            print("Geçersiz miktar!")
            
    elif işlem == "4":
        print("İyi günler!")
        break
        
    else:
        print("Geçersiz işlem!")
```

### 7. Basit To-Do Listesi
Kullanıcının görev ekleyip silebileceği basit bir to-do listesi:

```python
print("To-Do Listesi Uygulaması")
print("=" * 25)

görevler = []

while True:
    print(f"\nToplam görev sayısı: {len(görevler)}")
    print("\nİşlemler:")
    print("1. Görev Ekle")
    print("2. Görevleri Listele")
    print("3. Görev Sil")
    print("4. Çıkış")
    
    işlem = input("Yapmak istediğiniz işlemi seçin (1-4): ")
    
    if işlem == "1":
        görev = input("Yeni görev: ")
        görevler.append(görev)
        print("Görev eklendi!")
        
    elif işlem == "2":
        if görevler:
            print("\nGörevler:")
            for i, görev in enumerate(görevler, 1):
                print(f"{i}. {görev}")
        else:
            print("Henüz görev eklenmemiş!")
            
    elif işlem == "3":
        if görevler:
            print("\nGörevler:")
            for i, görev in enumerate(görevler, 1):
                print(f"{i}. {görev}")
            
            try:
                indeks = int(input("Silmek istediğiniz görevin numarası: ")) - 1
                if 0 <= indeks < len(görevler):
                    silinen = görevler.pop(indeks)
                    print(f"'{silinen}' görevi silindi!")
                else:
                    print("Geçersiz numara!")
            except ValueError:
                print("Geçersiz numara!")
        else:
            print("Silinecek görev yok!")
            
    elif işlem == "4":
        print("İyi günler!")
        break
        
    else:
        print("Geçersiz işlem!")
```

## Değerlendirme Kriterleri

- [ ] Input/output işlemleri doğru kullanılmış
- [ ] Veri türü dönüşümleri doğru yapılmış
- [ ] Hata kontrolü yapılmış
- [ ] Kullanıcı dostu arayüz tasarlanmış
- [ ] Program akışı mantıklı
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Adınızı girin: Ahmet
Soyadınızı girin: Yılmaz
Yaşınızı girin: 25
Şehrinizi girin: İstanbul
Mesleğinizi girin: Mühendis

========================================
KİŞİSEL BİLGİLER
========================================
Ad Soyad: Ahmet Yılmaz
Yaş: 25
Şehir: İstanbul
Meslek: Mühendis
========================================

Basit Hesap Makinesi
--------------------
Birinci sayıyı girin: 15
İkinci sayıyı girin: 7

İşlemler:
1. Toplama
2. Çıkarma
3. Çarpma
4. Bölme
Yapmak istediğiniz işlemi seçin (1-4): 1

15.0 ile 7.0 arasında toplama işlemi sonucu: 22.0

Vücut Kitle İndeksi (VKİ) Hesaplama
-----------------------------------
Kilonuzu girin (kg): 70
Boyunuzu girin (metre): 1.75

VKİ'niz: 22.9
Durumunuz: Normal
Öneri: Mevcut kilonuzu koruyun.
```

**Başarılar! 🚀** 