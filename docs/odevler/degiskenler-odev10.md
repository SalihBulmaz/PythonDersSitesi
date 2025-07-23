# Ödev 10: Kapsamlı Proje - Kişisel Bilgi Yönetim Sistemi

## Amaç
Bu ödevde önceki tüm konuları kullanarak kapsamlı bir kişisel bilgi yönetim sistemi oluşturacaksınız.

## Proje Açıklaması
Kişisel bilgi yönetim sistemi, kullanıcının kişisel bilgilerini, notlarını, görevlerini ve hesaplamalarını yönetebileceği kapsamlı bir uygulamadır.

## Görevler

### 1. Ana Menü ve Temel Yapı
Ana menü ve temel program yapısını oluşturun:

```python
import json
import datetime
import math

class KişiselBilgiSistemi:
    def __init__(self):
        self.kişisel_bilgiler = {}
        self.notlar = []
        self.görevler = []
        self.hesaplamalar_geçmişi = []
        
    def ana_menü(self):
        while True:
            print("\n" + "="*50)
            print("    KİŞİSEL BİLGİ YÖNETİM SİSTEMİ")
            print("="*50)
            print("1. Kişisel Bilgiler")
            print("2. Not Yönetimi")
            print("3. Görev Yönetimi")
            print("4. Hesaplama Araçları")
            print("5. Veri İstatistikleri")
            print("6. Veri Kaydetme/Yükleme")
            print("7. Çıkış")
            
            seçim = input("\nSeçiminiz (1-7): ")
            
            if seçim == "1":
                self.kişisel_bilgiler_menüsü()
            elif seçim == "2":
                self.not_yönetimi_menüsü()
            elif seçim == "3":
                self.görev_yönetimi_menüsü()
            elif seçim == "4":
                self.hesaplama_araçları_menüsü()
            elif seçim == "5":
                self.veri_istatistikleri()
            elif seçim == "6":
                self.veri_kaydetme_yükleme_menüsü()
            elif seçim == "7":
                print("Güle güle!")
                break
            else:
                print("Geçersiz seçim!")

# Ana program
if __name__ == "__main__":
    sistem = KişiselBilgiSistemi()
    sistem.ana_menü()
```

### 2. Kişisel Bilgiler Modülü
Kişisel bilgileri yöneten modülü oluşturun:

```python
def kişisel_bilgiler_menüsü(self):
    while True:
        print("\n--- KİŞİSEL BİLGİLER ---")
        print("1. Bilgileri Görüntüle")
        print("2. Bilgi Ekle/Güncelle")
        print("3. Bilgi Sil")
        print("4. Ana Menüye Dön")
        
        seçim = input("Seçiminiz (1-4): ")
        
        if seçim == "1":
            self.bilgileri_görüntüle()
        elif seçim == "2":
            self.bilgi_ekle_güncelle()
        elif seçim == "3":
            self.bilgi_sil()
        elif seçim == "4":
            break
        else:
            print("Geçersiz seçim!")

def bilgileri_görüntüle(self):
    if not self.kişisel_bilgiler:
        print("Henüz bilgi girilmemiş!")
        return
    
    print("\nKİŞİSEL BİLGİLER:")
    print("-" * 30)
    for anahtar, değer in self.kişisel_bilgiler.items():
        print(f"{anahtar.title()}: {değer}")

def bilgi_ekle_güncelle(self):
    print("\nBilgi Ekleme/Güncelleme")
    print("Mevcut alanlar: ad, yaş, boy, kilo, şehir, meslek, email, telefon")
    
    alan = input("Alan adı: ").lower()
    değer = input("Değer: ")
    
    # Veri doğrulama
    if alan == "yaş":
        try:
            değer = int(değer)
            if değer < 0 or değer > 150:
                print("Geçersiz yaş!")
                return
        except ValueError:
            print("Yaş sayı olmalı!")
            return
    elif alan == "boy":
        try:
            değer = float(değer)
            if değer < 0.5 or değer > 3.0:
                print("Geçersiz boy!")
                return
        except ValueError:
            print("Boy sayı olmalı!")
            return
    elif alan == "kilo":
        try:
            değer = float(değer)
            if değer < 20 or değer > 300:
                print("Geçersiz kilo!")
                return
        except ValueError:
            print("Kilo sayı olmalı!")
            return
    
    self.kişisel_bilgiler[alan] = değer
    print("Bilgi kaydedildi!")

def bilgi_sil(self):
    if not self.kişisel_bilgiler:
        print("Silinecek bilgi yok!")
        return
    
    print("\nMevcut bilgiler:")
    for i, (anahtar, değer) in enumerate(self.kişisel_bilgiler.items(), 1):
        print(f"{i}. {anahtar}: {değer}")
    
    try:
        indeks = int(input("Silinecek bilginin numarası: ")) - 1
        anahtarlar = list(self.kişisel_bilgiler.keys())
        if 0 <= indeks < len(anahtarlar):
            silinen = anahtarlar[indeks]
            del self.kişisel_bilgiler[silinen]
            print(f"'{silinen}' bilgisi silindi!")
        else:
            print("Geçersiz numara!")
    except ValueError:
        print("Geçersiz numara!")
```

### 3. Not Yönetimi Modülü
Not yönetimi modülünü oluşturun:

```python
def not_yönetimi_menüsü(self):
    while True:
        print("\n--- NOT YÖNETİMİ ---")
        print("1. Notları Listele")
        print("2. Not Ekle")
        print("3. Not Düzenle")
        print("4. Not Sil")
        print("5. Not Ara")
        print("6. Ana Menüye Dön")
        
        seçim = input("Seçiminiz (1-6): ")
        
        if seçim == "1":
            self.notları_listele()
        elif seçim == "2":
            self.not_ekle()
        elif seçim == "3":
            self.not_düzenle()
        elif seçim == "4":
            self.not_sil()
        elif seçim == "5":
            self.not_ara()
        elif seçim == "6":
            break
        else:
            print("Geçersiz seçim!")

def notları_listele(self):
    if not self.notlar:
        print("Henüz not eklenmemiş!")
        return
    
    print("\nNOTLAR:")
    print("-" * 50)
    for i, not_obj in enumerate(self.notlar, 1):
        print(f"{i}. {not_obj['başlık']}")
        print(f"   Tarih: {not_obj['tarih']}")
        print(f"   İçerik: {not_obj['içerik'][:50]}...")
        print()

def not_ekle(self):
    başlık = input("Not başlığı: ")
    içerik = input("Not içeriği: ")
    tarih = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    
    not_obj = {
        "başlık": başlık,
        "içerik": içerik,
        "tarih": tarih
    }
    
    self.notlar.append(not_obj)
    print("Not eklendi!")

def not_düzenle(self):
    if not self.notlar:
        print("Düzenlenecek not yok!")
        return
    
    self.notları_listele()
    try:
        indeks = int(input("Düzenlenecek notun numarası: ")) - 1
        if 0 <= indeks < len(self.notlar):
            not_obj = self.notlar[indeks]
            print(f"\nDüzenlenen not: {not_obj['başlık']}")
            
            yeni_başlık = input("Yeni başlık (boş bırakınca değişmez): ")
            yeni_içerik = input("Yeni içerik (boş bırakınca değişmez): ")
            
            if yeni_başlık:
                not_obj['başlık'] = yeni_başlık
            if yeni_içerik:
                not_obj['içerik'] = yeni_içerik
            
            not_obj['tarih'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
            print("Not güncellendi!")
        else:
            print("Geçersiz numara!")
    except ValueError:
        print("Geçersiz numara!")

def not_ara(self):
    if not self.notlar:
        print("Aranacak not yok!")
        return
    
    arama_terimi = input("Arama terimi: ").lower()
    bulunan_notlar = []
    
    for not_obj in self.notlar:
        if (arama_terimi in not_obj['başlık'].lower() or 
            arama_terimi in not_obj['içerik'].lower()):
            bulunan_notlar.append(not_obj)
    
    if bulunan_notlar:
        print(f"\n'{arama_terimi}' için {len(bulunan_notlar)} sonuç bulundu:")
        for i, not_obj in enumerate(bulunan_notlar, 1):
            print(f"{i}. {not_obj['başlık']} - {not_obj['tarih']}")
    else:
        print("Sonuç bulunamadı!")
```

### 4. Görev Yönetimi Modülü
Görev yönetimi modülünü oluşturun:

```python
def görev_yönetimi_menüsü(self):
    while True:
        print("\n--- GÖREV YÖNETİMİ ---")
        print("1. Görevleri Listele")
        print("2. Görev Ekle")
        print("3. Görev Tamamla")
        print("4. Görev Sil")
        print("5. Öncelikli Görevler")
        print("6. Ana Menüye Dön")
        
        seçim = input("Seçiminiz (1-6): ")
        
        if seçim == "1":
            self.görevleri_listele()
        elif seçim == "2":
            self.görev_ekle()
        elif seçim == "3":
            self.görev_tamamla()
        elif seçim == "4":
            self.görev_sil()
        elif seçim == "5":
            self.öncelikli_görevler()
        elif seçim == "6":
            break
        else:
            print("Geçersiz seçim!")

def görevleri_listele(self):
    if not self.görevler:
        print("Henüz görev eklenmemiş!")
        return
    
    print("\nGÖREVLER:")
    print("-" * 60)
    for i, görev in enumerate(self.görevler, 1):
        durum = "✓" if görev['tamamlandı'] else "□"
        öncelik = "Yüksek" if görev['öncelik'] == 3 else "Orta" if görev['öncelik'] == 2 else "Düşük"
        print(f"{i}. [{durum}] {görev['başlık']} (Öncelik: {öncelik})")
        print(f"   Açıklama: {görev['açıklama']}")
        print(f"   Tarih: {görev['tarih']}")
        print()

def görev_ekle(self):
    başlık = input("Görev başlığı: ")
    açıklama = input("Görev açıklaması: ")
    
    print("Öncelik seviyesi:")
    print("1. Düşük")
    print("2. Orta")
    print("3. Yüksek")
    
    try:
        öncelik = int(input("Öncelik (1-3): "))
        if öncelik not in [1, 2, 3]:
            print("Geçersiz öncelik! Orta seviye atandı.")
            öncelik = 2
    except ValueError:
        print("Geçersiz öncelik! Orta seviye atandı.")
        öncelik = 2
    
    tarih = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    
    görev = {
        "başlık": başlık,
        "açıklama": açıklama,
        "öncelik": öncelik,
        "tamamlandı": False,
        "tarih": tarih
    }
    
    self.görevler.append(görev)
    print("Görev eklendi!")

def görev_tamamla(self):
    if not self.görevler:
        print("Tamamlanacak görev yok!")
        return
    
    tamamlanmamış = [g for g in self.görevler if not g['tamamlandı']]
    if not tamamlanmamış:
        print("Tüm görevler tamamlanmış!")
        return
    
    print("\nTAMAMLANMAMIŞ GÖREVLER:")
    for i, görev in enumerate(tamamlanmamış, 1):
        print(f"{i}. {görev['başlık']}")
    
    try:
        indeks = int(input("Tamamlanacak görevin numarası: ")) - 1
        if 0 <= indeks < len(tamamlanmamış):
            görev = tamamlanmamış[indeks]
            görev['tamamlandı'] = True
            print(f"'{görev['başlık']}' görevi tamamlandı!")
        else:
            print("Geçersiz numara!")
    except ValueError:
        print("Geçersiz numara!")

def öncelikli_görevler(self):
    yüksek_öncelikli = [g for g in self.görevler if g['öncelik'] == 3 and not g['tamamlandı']]
    
    if yüksek_öncelikli:
        print("\nYÜKSEK ÖNCELİKLİ GÖREVLER:")
        for i, görev in enumerate(yüksek_öncelikli, 1):
            print(f"{i}. {görev['başlık']}")
            print(f"   Açıklama: {görev['açıklama']}")
    else:
        print("Yüksek öncelikli görev yok!")
```

### 5. Hesaplama Araçları Modülü
Hesaplama araçları modülünü oluşturun:

```python
def hesaplama_araçları_menüsü(self):
    while True:
        print("\n--- HESAPLAMA ARAÇLARI ---")
        print("1. Vücut Kitle İndeksi")
        print("2. Basit Hesap Makinesi")
        print("3. Geometrik Hesaplamalar")
        print("4. Hesaplama Geçmişi")
        print("5. Ana Menüye Dön")
        
        seçim = input("Seçiminiz (1-5): ")
        
        if seçim == "1":
            self.vki_hesapla()
        elif seçim == "2":
            self.hesap_makinesi()
        elif seçim == "3":
            self.geometrik_hesaplamalar()
        elif seçim == "4":
            self.hesaplama_geçmişi()
        elif seçim == "5":
            break
        else:
            print("Geçersiz seçim!")

def vki_hesapla(self):
    try:
        kilo = float(input("Kilonuz (kg): "))
        boy = float(input("Boyunuz (metre): "))
        
        vki = kilo / (boy ** 2)
        
        if vki < 18.5:
            durum = "Zayıf"
        elif vki < 25:
            durum = "Normal"
        elif vki < 30:
            durum = "Fazla kilolu"
        else:
            durum = "Obez"
        
        sonuç = f"VKİ: {vki:.1f} - Durum: {durum}"
        print(sonuç)
        
        # Geçmişe kaydet
        self.hesaplamalar_geçmişi.append({
            "tür": "VKİ",
            "sonuç": sonuç,
            "tarih": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        })
        
    except ValueError:
        print("Geçersiz değer!")

def hesap_makinesi(self):
    print("\nBasit Hesap Makinesi")
    print("İşlemler: +, -, *, /, **, sqrt")
    
    try:
        sayı1 = float(input("Birinci sayı: "))
        işlem = input("İşlem: ")
        
        if işlem == "sqrt":
            sonuç = math.sqrt(sayı1)
            işlem_str = f"√{sayı1}"
        else:
            sayı2 = float(input("İkinci sayı: "))
            if işlem == "+":
                sonuç = sayı1 + sayı2
            elif işlem == "-":
                sonuç = sayı1 - sayı2
            elif işlem == "*":
                sonuç = sayı1 * sayı2
            elif işlem == "/":
                if sayı2 == 0:
                    print("Sıfıra bölme hatası!")
                    return
                sonuç = sayı1 / sayı2
            elif işlem == "**":
                sonuç = sayı1 ** sayı2
            else:
                print("Geçersiz işlem!")
                return
            
            işlem_str = f"{sayı1} {işlem} {sayı2}"
        
        print(f"Sonuç: {işlem_str} = {sonuç}")
        
        # Geçmişe kaydet
        self.hesaplamalar_geçmişi.append({
            "tür": "Hesap Makinesi",
            "sonuç": f"{işlem_str} = {sonuç}",
            "tarih": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        })
        
    except ValueError:
        print("Geçersiz değer!")

def geometrik_hesaplamalar(self):
    print("\nGeometrik Hesaplamalar")
    print("1. Daire")
    print("2. Dikdörtgen")
    print("3. Üçgen")
    
    seçim = input("Seçiminiz (1-3): ")
    
    try:
        if seçim == "1":
            yarıçap = float(input("Yarıçap: "))
            alan = math.pi * yarıçap ** 2
            çevre = 2 * math.pi * yarıçap
            sonuç = f"Daire - Alan: {alan:.2f}, Çevre: {çevre:.2f}"
            
        elif seçim == "2":
            uzun = float(input("Uzun kenar: "))
            kısa = float(input("Kısa kenar: "))
            alan = uzun * kısa
            çevre = 2 * (uzun + kısa)
            sonuç = f"Dikdörtgen - Alan: {alan:.2f}, Çevre: {çevre:.2f}"
            
        elif seçim == "3":
            taban = float(input("Taban: "))
            yükseklik = float(input("Yükseklik: "))
            alan = 0.5 * taban * yükseklik
            sonuç = f"Üçgen - Alan: {alan:.2f}"
            
        else:
            print("Geçersiz seçim!")
            return
        
        print(sonuç)
        
        # Geçmişe kaydet
        self.hesaplamalar_geçmişi.append({
            "tür": "Geometrik Hesaplama",
            "sonuç": sonuç,
            "tarih": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        })
        
    except ValueError:
        print("Geçersiz değer!")

def hesaplama_geçmişi(self):
    if not self.hesaplamalar_geçmişi:
        print("Hesaplama geçmişi boş!")
        return
    
    print("\nHESAPLAMA GEÇMİŞİ:")
    print("-" * 50)
    for hesaplama in self.hesaplamalar_geçmişi[-10:]:  # Son 10 hesaplama
        print(f"{hesaplama['tür']}: {hesaplama['sonuç']}")
        print(f"Tarih: {hesaplama['tarih']}")
        print()
```

### 6. Veri İstatistikleri ve Kaydetme Modülü
Veri istatistikleri ve kaydetme modülünü oluşturun:

```python
def veri_istatistikleri(self):
    print("\nVERİ İSTATİSTİKLERİ")
    print("=" * 30)
    
    # Kişisel bilgiler istatistikleri
    print(f"Kişisel bilgi sayısı: {len(self.kişisel_bilgiler)}")
    if self.kişisel_bilgiler:
        print("Kişisel bilgiler:", list(self.kişisel_bilgiler.keys()))
    
    # Not istatistikleri
    print(f"\nToplam not sayısı: {len(self.notlar)}")
    if self.notlar:
        son_not = max(self.notlar, key=lambda x: x['tarih'])
        print(f"Son not tarihi: {son_not['tarih']}")
    
    # Görev istatistikleri
    tamamlanmış = sum(1 for g in self.görevler if g['tamamlandı'])
    toplam_görev = len(self.görevler)
    print(f"\nGörev tamamlanma oranı: {tamamlanmış}/{toplam_görev}")
    if toplam_görev > 0:
        oran = (tamamlanmış / toplam_görev) * 100
        print(f"Tamamlanma yüzdesi: %{oran:.1f}")
    
    # Hesaplama istatistikleri
    print(f"\nToplam hesaplama sayısı: {len(self.hesaplamalar_geçmişi)}")
    if self.hesaplamalar_geçmişi:
        hesaplama_türleri = {}
        for h in self.hesaplamalar_geçmişi:
            tür = h['tür']
            hesaplama_türleri[tür] = hesaplama_türleri.get(tür, 0) + 1
        
        print("Hesaplama türleri:")
        for tür, sayı in hesaplama_türleri.items():
            print(f"  {tür}: {sayı}")

def veri_kaydetme_yükleme_menüsü(self):
    while True:
        print("\n--- VERİ KAYDETME/YÜKLEME ---")
        print("1. Verileri Kaydet")
        print("2. Verileri Yükle")
        print("3. Ana Menüye Dön")
        
        seçim = input("Seçiminiz (1-3): ")
        
        if seçim == "1":
            self.verileri_kaydet()
        elif seçim == "2":
            self.verileri_yükle()
        elif seçim == "3":
            break
        else:
            print("Geçersiz seçim!")

def verileri_kaydet(self):
    veri = {
        "kişisel_bilgiler": self.kişisel_bilgiler,
        "notlar": self.notlar,
        "görevler": self.görevler,
        "hesaplamalar_geçmişi": self.hesaplamalar_geçmişi
    }
    
    try:
        with open("kişisel_veriler.json", "w", encoding="utf-8") as f:
            json.dump(veri, f, ensure_ascii=False, indent=2)
        print("Veriler başarıyla kaydedildi!")
    except Exception as e:
        print(f"Kaydetme hatası: {e}")

def verileri_yükle(self):
    try:
        with open("kişisel_veriler.json", "r", encoding="utf-8") as f:
            veri = json.load(f)
        
        self.kişisel_bilgiler = veri.get("kişisel_bilgiler", {})
        self.notlar = veri.get("notlar", [])
        self.görevler = veri.get("görevler", [])
        self.hesaplamalar_geçmişi = veri.get("hesaplamalar_geçmişi", [])
        
        print("Veriler başarıyla yüklendi!")
    except FileNotFoundError:
        print("Kayıtlı veri bulunamadı!")
    except Exception as e:
        print(f"Yükleme hatası: {e}")
```

## Değerlendirme Kriterleri

- [ ] Ana program yapısı doğru
- [ ] Tüm modüller çalışıyor
- [ ] Veri doğrulama yapılmış
- [ ] Hata yönetimi var
- [ ] Veri kaydetme/yükleme çalışıyor
- [ ] Kod düzenli ve modüler
- [ ] Kullanıcı dostu arayüz
- [ ] Tüm veri yapıları kullanılmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak test edin.

## Örnek Çıktı
```
==================================================
    KİŞİSEL BİLGİ YÖNETİM SİSTEMİ
==================================================
1. Kişisel Bilgiler
2. Not Yönetimi
3. Görev Yönetimi
4. Hesaplama Araçları
5. Veri İstatistikleri
6. Veri Kaydetme/Yükleme
7. Çıkış

Seçiminiz (1-7): 1

--- KİŞİSEL BİLGİLER ---
1. Bilgileri Görüntüle
2. Bilgi Ekle/Güncelle
3. Bilgi Sil
4. Ana Menüye Dön

Seçiminiz (1-4): 2

Bilgi Ekleme/Güncelleme
Mevcut alanlar: ad, yaş, boy, kilo, şehir, meslek, email, telefon
Alan adı: ad
Değer: Ahmet
Bilgi kaydedildi!

VERİ İSTATİSTİKLERİ
==============================
Kişisel bilgi sayısı: 1
Kişisel bilgiler: ['ad']

Toplam not sayısı: 0

Görev tamamlanma oranı: 0/0

Toplam hesaplama sayısı: 0
```

**Başarılar! 🚀** 