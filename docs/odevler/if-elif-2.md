# Python Ödevleri - Gerçek Hayat Senaryoları

## IF-ELIF-ELSE Ödevleri

### 1. Okul Kantine Sistemi 🏫

**Açıklama:** Okul kantininde çalışıyorsun ve öğrencilerin yaşına göre indirim uygulaman gerekiyor. Bu sistem sayesinde farklı yaş gruplarındaki öğrenciler uygun fiyatlarla alışveriş yapabilecek.

**İndirim Oranları:**
- 11-13 yaş: %20 indirim
- 14-16 yaş: %15 indirim  
- 17-18 yaş: %10 indirim
- Diğer yaşlar: indirim yok

**Görevin:** Kullanıcıdan yaş ve ürün fiyatını al, indirimli fiyatı hesapla ve detaylı bilgi göster.

**Başlangıç Kodu:**
```python
print("=== OKUL KANTİN SİSTEMİ ===")
yas = int(input("Yaşınızı girin: "))
fiyat = float(input("Ürün fiyatını girin (TL): "))

# Buradan devam et...
```

**Örnek Çıktı:**
```
=== OKUL KANTİN SİSTEMİ ===
Yaşınızı girin: 14
Ürün fiyatını girin (TL): 20

Yaş grubu: 14-16 yaş
İndirim oranı: %15
Normal fiyat: 20.0 TL
İndirim tutarı: 3.0 TL
Ödenecek tutar: 17.0 TL
```

**İpucu:** Yaş aralıklarını kontrol etmek için `<=` ve `>=` operatörlerini kullan.

---

### 2. Hava Durumu Kıyafet Önerisi 🌡️

**Açıklama:** Meteoroloji uygulaması geliştiriyorsun. Kullanıcıların hava sıcaklığına göre ne giyeceklerini bilmelerine yardımcı olacak bir sistem yapacaksın.

**Sıcaklık Aralıkları:**
- 30°C ve üzeri: "Şort ve tişört giy"
- 20-29°C arası: "Hafif kıyafetler giy"
- 10-19°C arası: "Sweatshirt veya hırka giy"
- 0-9°C arası: "Mont ve kalın kıyafetler giy"
- 0°C altı: "Çok kalın kıyafetler ve eldiven giy"

**Başlangıç Kodu:**
```python
print("=== HAVA DURUMU KIYAFETÖNERİSİ ===")
sicaklik = int(input("Hava sıcaklığını girin (°C): "))

# if-elif-else yapısını buraya yaz...
```

**Örnek Çıktı:**
```
=== HAVA DURUMU KIYAFET ÖNERİSİ ===
Hava sıcaklığını girin (°C): 15

Sıcaklık: 15°C
Öneri: Sweatshirt veya hırka giy
Durum: Serin hava
```

**İpucu:** En yüksek sıcaklıktan başlayarak kontrol et, böylece mantık daha kolay olur.

---

### 3. Sinema Bilet Fiyatı 🎬

**Açıklama:** Sinema işletmecisisin ve günlere göre farklı fiyat politikan var. Ayrıca öğrencilere özel indirim uyguluyorsun.

**Fiyat Listesi:**
- Hafta içi (Pazartesi-Perşembe): 25 TL
- Cuma: 30 TL
- Hafta sonu (Cumartesi-Pazar): 35 TL
- Öğrenci indirimi: %25 (varsa)

**Başlangıç Kodu:**
```python
print("=== SİNEMA BİLET SİSTEMİ ===")
gun = input("Hangi gün? (pazartesi, salı, vs.): ").lower()
ogrenci = input("Öğrenci misiniz? (evet/hayır): ").lower()

# Gün kontrolü için if-elif yapısını buraya yaz...
```

**Örnek Çıktı:**
```
=== SİNEMA BİLET SİSTEMİ ===
Hangi gün? (pazartesi, salı, vs.): cumartesi
Öğrenci misiniz? (evet/hayır): evet

Gün: Cumartesi (Hafta sonu)
Normal fiyat: 35 TL
Öğrenci indirimi: %25 (8.75 TL)
Ödenecek tutar: 26.25 TL
```

**İpucu:** String karşılaştırmasında büyük-küçük harf sorununu önlemek için `.lower()` kullan.

---

### 4. Otobüs Kart Sistemi 🚌

**Açıklama:** Şehrin otobüs kartı sisteminde çalışıyorsun. Yolcuların bakiye durumlarına göre onları bilgilendirmen gerekiyor.

**Bakiye Durumları:**
- 50 TL ve üzeri: "Rahatça seyahat edebilirsiniz"
- 20-49 TL: "Orta seviye bakiye"
- 5-19 TL: "Bakiye azalıyor, yükleme yapın"
- 0-4 TL: "Acil bakiye yükleyin!"
- Negatif bakiye: "Kartınız bloke, borç ödeyiniz"

**Başlangıç Kodu:**
```python
print("=== OTOBÜS KART SİSTEMİ ===")
bakiye = float(input("Kart bakiyenizi girin (TL): "))

# Bakiye kontrolü için if-elif yapısını buraya yaz...
```

**Örnek Çıktı:**
```
=== OTOBÜS KART SİSTEMİ ===
Kart bakiyenizi girin (TL): 12.50

Mevcut bakiye: 12.5 TL
Durum: Bakiye azalıyor, yükleme yapın
Önerilen yükleme: En az 20 TL
```

**İpucu:** Negatif sayıları kontrol etmek için `< 0` koşulunu kullan.

---

### 5. Spor Salonu Üyelik 💪

**Açıklama:** Spor salonu çalışanısın ve üyelik paketlerine göre fiyat hesaplıyorsun. Uzun vadeli üyeliklerde indirim var, öğrencilere de ek indirim uyguluyorsun.

**Aylık Ücretler:**
- 1 ay: 300 TL
- 3 ay: 250 TL (aylık)
- 6 ay: 200 TL (aylık)
- 12 ay: 150 TL (aylık)
- Öğrenci indirimi: %30 (varsa)

**Başlangıç Kodu:**
```python
print("=== SPOR SALONU ÜYELİK ===")
ay_sayisi = int(input("Kaç aylık üyelik? (1, 3, 6, 12): "))
ogrenci = input("Öğrenci misiniz? (evet/hayır): ").lower()

# Ay sayısına göre aylık ücret belirleme...
```

**Örnek Çıktı:**
```
=== SPOR SALONU ÜYELİK ===
Kaç aylık üyelik? (1, 3, 6, 12): 6
Öğrenci misiniz? (evet/hayır): evet

Üyelik süresi: 6 ay
Aylık ücret: 200 TL
Toplam (öğrenci indirimi öncesi): 1200 TL
Öğrenci indirimi: %30 (360 TL)
Ödenecek toplam tutar: 840 TL
```

**İpucu:** Önce aylık ücreti belirle, sonra toplam tutarı hesapla, en son indirim uygula.

---

## MATCH-CASE Ödevleri

### 6. Fast Food Sipariş Sistemi 🍔

**Açıklama:** Fast food restoranında sipariş sistemini yönetiyorsun. Her ürünün özel bir kodu var ve müşteriler bu kodları kullanarak sipariş veriyor.

**Menü Kodları:**
- "H1": Hamburger 45 TL
- "H2": Cheeseburger 50 TL  
- "P1": Pizza 60 TL
- "D1": Döner 35 TL
- "I1": İçecek 15 TL

**Başlangıç Kodu:**
```python
print("=== FAST FOOD SİPARİŞ SİSTEMİ ===")
print("Menü Kodları: H1, H2, P1, D1, I1")
kod = input("Ürün kodunu girin: ").upper()

match kod:
    # Case'leri buraya yaz...
```

**Örnek Çıktı:**
```
=== FAST FOOD SİPARİŞ SİSTEMİ ===
Menü Kodları: H1, H2, P1, D1, I1
Ürün kodunu girin: h2

Seçilen ürün: Cheeseburger
Fiyat: 50 TL
Sipariş alındı!
```

**İpucu:** Kullanıcı girişini `.upper()` ile büyük harfe çevir, böylece kod tutarlılığı sağla.

---

### 7. Matematik Hesap Makinesi 🧮

**Açıklama:** Basit bir hesap makinesi programı yazacaksın. İki sayı ve bir işlem alarak sonucu hesaplayacak.

**Desteklenen İşlemler:**
- "+": Toplama
- "-": Çıkarma
- "*": Çarpma
- "/": Bölme
- "**": Üs alma

**Başlangıç Kodu:**
```python
print("=== MATEMATİK HESAP MAKİNESİ ===")
sayi1 = float(input("Birinci sayıyı girin: "))
sayi2 = float(input("İkinci sayıyı girin: "))
islem = input("İşlem (+, -, *, /, **): ")

match islem:
    # Case'leri buraya yaz...
```

**Örnek Çıktı:**
```
=== MATEMATİK HESAP MAKİNESİ ===
Birinci sayıyı girin: 10
İkinci sayıyı girin: 3
İşlem (+, -, *, /, **): /

İşlem: 10.0 ÷ 3.0
Sonuç: 3.33
```

**İpucu:** Bölme işleminde sıfıra bölme kontrolü yapmayı unutma. `sayi2 == 0` koşulunu kontrol et.

---

### 8. Okul Not Sistemi 📚

**Açıklama:** Öğretmensin ve öğrencilerin harf notlarını sayısal puana çevirmen gerekiyor. Bu sistem ile not ortalaması hesaplanabilecek.

**Not Dönüşüm Tablosu:**
- "AA": 95 puan
- "BA": 85 puan
- "BB": 75 puan
- "CB": 65 puan
- "CC": 55 puan
- "FF": 0 puan

**Başlangıç Kodu:**
```python
print("=== OKUL NOT SİSTEMİ ===")
harf_not = input("Harf notunu girin (AA, BA, BB, CB, CC, FF): ").upper()

match harf_not:
    # Case'leri buraya yaz...
```

**Örnek Çıktı:**
```
=== OKUL NOT SİSTEMİ ===
Harf notunu girin (AA, BA, BB, CB, CC, FF): bb

Harf Notu: BB
Sayısal Karşılığı: 75 puan
Durum: Orta seviye başarı
```

**İpucu:** Harf notunu `.upper()` ile büyük harfe çevir. Her notun başarı durumunu da belirtebilirsin.

---

### 9. Oyun Seçim Menüsü 🎮

**Açıklama:** Oyun geliştiricisisin ve ana menü sistemini kodluyorsun. Oyuncular numaralı seçenekler arasından seçim yapacaklar.

**Menü Seçenekleri:**
- "1": "Yeni Oyun Başla"
- "2": "Kayıtlı Oyunu Yükle"
- "3": "Ayarlar"
- "4": "Yardım"
- "5": "Çıkış"

**Başlangıç Kodu:**
```python
print("=== OYUN ANA MENÜSÜ ===")
print("1. Yeni Oyun Başla")
print("2. Kayıtlı Oyunu Yükle")
print("3. Ayarlar")
print("4. Yardım")
print("5. Çıkış")
secim = input("Seçiminizi yapın (1-5): ")

match secim:
    # Case'leri buraya yaz...
```

**Örnek Çıktı:**
```
=== OYUN ANA MENÜSÜ ===
1. Yeni Oyun Başla
2. Kayıtlı Oyunu Yükle
3. Ayarlar
4. Yardım
5. Çıkış
Seçiminizi yapın (1-5): 1

Seçim: Yeni Oyun Başla
Oyun başlatılıyor...
Karakterinizi oluşturun!
```

**İpucu:** Her seçenek için farklı mesajlar yazarak oyun deneyimini zenginleştir.

---

### 10. Sosyal Medya Durum 📱

**Açıklama:** Sosyal medya uygulaması geliştiriyorsun ve kullanıcıların durumlarını göstermek için bir sistem kuruyorsun.

**Durum Kodları:**
- "online": "Kullanıcı şu anda aktif"
- "away": "Kullanıcı uzakta (5 dk önce görüldü)"
- "busy": "Kullanıcı meşgul"
- "invisible": "Kullanıcı görünmez modda"
- "offline": "Kullanıcı çevrimdışı"

**Başlangıç Kodu:**
```python
print("=== SOSYAL MEDYA DURUM SİSTEMİ ===")
kullanici_adi = input("Kullanıcı adını girin: ")
durum = input("Durum (online, away, busy, invisible, offline): ").lower()

match durum:
    # Case'leri buraya yaz...
```

**Örnek Çıktı:**
```
=== SOSYAL MEDYA DURUM SİSTEMİ ===
Kullanıcı adını girin: ahmet_123
Durum (online, away, busy, invisible, offline): busy

Kullanıcı: ahmet_123
Durum: Kullanıcı meşgul
Simge: 🔴
Son görülme: Şu anda
```

**İpucu:** Her duruma uygun emoji ekleyerek görsel zenginlik katabilirsin.

---

## Genel Talimatlar 📋

1. **Veri Girişi:** `input()` fonksiyonu ile kullanıcıdan veri al
2. **Çıktı:** `print()` fonksiyonu ile sonuçları göster
3. **Veri Tipleri:** Sadece `int`, `float`, `str`, `bool` kullan
4. **Operatörler:** Aritmetik (`+`, `-`, `*`, `/`, `**`, `%`) ve boolean (`and`, `or`, `not`, `==`, `!=`, `<`, `>`, `<=`, `>=`) operatörler
5. **Kod Stil:** Değişken isimlerini anlamlı yap, yorum satırları ekle
6. **Test:** Her ödev için farklı girişlerle test yap

**Başarılar!** 🎉