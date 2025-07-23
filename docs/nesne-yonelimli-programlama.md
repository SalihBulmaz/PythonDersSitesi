# Python - Nesne Yönelimli Programlama (OOP)

## 📝 Ders Hedefleri

Bu derste şunları öğreneceksiniz:
- Sınıf (Class) ve nesne (Object) kavramları
- Constructor (__init__) metodu
- Instance değişkenleri ve metodları
- Inheritance (Kalıtım) kavramı
- Encapsulation (Kapsülleme)
- Polymorphism (Çok biçimlilik)
- Özel metodlar (Magic methods)

---

## 🏗️ Sınıf ve Nesne Kavramları

Nesne Yönelimli Programlama (OOP), gerçek dünya nesnelerini programlama dünyasında modellemek için kullanılan bir paradigmasıdır.

### Temel Sınıf Tanımlama

```python
class Kisi:
    """Kişi sınıfı - temel örnek"""
    
    def __init__(self, ad, yas):
        self.ad = ad      # Instance değişkeni
        self.yas = yas    # Instance değişkeni
    
    def kendini_tanit(self):
        """Kişinin kendini tanıtma metodu"""
        return f"Merhaba, ben {self.ad}. {self.yas} yaşındayım."
    
    def yaslan(self):
        """Yaş artırma metodu"""
        self.yas += 1
        return f"{self.ad} bir yaş daha büyüdü. Yeni yaşı: {self.yas}"

# Nesne oluşturma
kisi1 = Kisi("Ali", 25)
kisi2 = Kisi("Ayşe", 30)

print(kisi1.kendini_tanit())  # Merhaba, ben Ali. 25 yaşındayım.
print(kisi2.kendini_tanit())  # Merhaba, ben Ayşe. 30 yaşındayım.

kisi1.yaslan()  # Ali bir yaş daha büyüdü. Yeni yaşı: 26
```

---

## 🔧 Constructor ve Instance Değişkenleri

### __init__ Metodu

```python
class Ogrenci:
    def __init__(self, ad, soyad, ogrenci_no, bolum):
        # Instance değişkenleri
        self.ad = ad
        self.soyad = soyad
        self.ogrenci_no = ogrenci_no
        self.bolum = bolum
        self.notlar = []  # Boş liste ile başlatma
    
    def not_ekle(self, not_degeri):
        """Öğrenciye not ekleme"""
        if 0 <= not_degeri <= 100:
            self.notlar.append(not_degeri)
            return f"{not_degeri} notu eklendi."
        else:
            return "Geçersiz not değeri!"
    
    def ortalama_hesapla(self):
        """Not ortalamasını hesaplama"""
        if self.notlar:
            return sum(self.notlar) / len(self.notlar)
        else:
            return 0
    
    def bilgileri_goster(self):
        """Öğrenci bilgilerini gösterme"""
        return f"""
        Ad Soyad: {self.ad} {self.soyad}
        Öğrenci No: {self.ogrenci_no}
        Bölüm: {self.bolum}
        Notlar: {self.notlar}
        Ortalama: {self.ortalama_hesapla():.2f}
        """

# Kullanım
ogrenci1 = Ogrenci("Mehmet", "Yılmaz", "2024001", "Bilgisayar Mühendisliği")
ogrenci1.not_ekle(85)
ogrenci1.not_ekle(90)
ogrenci1.not_ekle(78)

print(ogrenci1.bilgileri_goster())
```

---

## 🧬 Inheritance (Kalıtım)

Kalıtım, bir sınıfın başka bir sınıftan özelliklerini miras almasını sağlar.

### Temel Kalıtım

```python
class Hayvan:
    def __init__(self, ad, tur):
        self.ad = ad
        self.tur = tur
    
    def ses_cikar(self):
        return "Bilinmeyen ses"
    
    def bilgi_ver(self):
        return f"Ad: {self.ad}, Tür: {self.tur}"

class Kopek(Hayvan):
    def __init__(self, ad, cins):
        super().__init__(ad, "Köpek")  # Parent constructor çağırma
        self.cins = cins
    
    def ses_cikar(self):
        return "Hav hav!"
    
    def oyun_oyna(self):
        return f"{self.ad} top ile oynuyor!"

class Kedi(Hayvan):
    def __init__(self, ad, renk):
        super().__init__(ad, "Kedi")
        self.renk = renk
    
    def ses_cikar(self):
        return "Miyav!"
    
    def tirman(self):
        return f"{self.ad} ağaca tırmanıyor!"

# Kullanım
kopek = Kopek("Karabaş", "Golden Retriever")
kedi = Kedi("Pamuk", "Beyaz")

print(kopek.bilgi_ver())      # Ad: Karabaş, Tür: Köpek
print(kopek.ses_cikar())      # Hav hav!
print(kopek.oyun_oyna())      # Karabaş top ile oynuyor!

print(kedi.bilgi_ver())       # Ad: Pamuk, Tür: Kedi
print(kedi.ses_cikar())       # Miyav!
print(kedi.tirman())          # Pamuk ağaca tırmanıyor!
```

### Çoklu Kalıtım

```python
class Calisan:
    def __init__(self, ad, maas):
        self.ad = ad
        self.maas = maas
    
    def calis(self):
        return f"{self.ad} çalışıyor."

class Ogretmen(Calisan):
    def __init__(self, ad, maas, ders):
        super().__init__(ad, maas)
        self.ders = ders
    
    def ders_ver(self):
        return f"{self.ad} {self.ders} dersini veriyor."

class Arastirmaci(Calisan):
    def __init__(self, ad, maas, alan):
        super().__init__(ad, maas)
        self.alan = alan
    
    def arastir(self):
        return f"{self.ad} {self.alan} alanında araştırma yapıyor."

class Profesor(Ogretmen, Arastirmaci):
    def __init__(self, ad, maas, ders, alan, unvan):
        Ogretmen.__init__(self, ad, maas, ders)
        Arastirmaci.__init__(self, ad, maas, alan)
        self.unvan = unvan
    
    def yonet(self):
        return f"{self.unvan} {self.ad} bölümü yönetiyor."

# Kullanım
prof = Profesor("Dr. Ahmet", 15000, "Python", "Yapay Zeka", "Profesör")
print(prof.ders_ver())    # Dr. Ahmet Python dersini veriyor.
print(prof.arastir())     # Dr. Ahmet Yapay Zeka alanında araştırma yapıyor.
print(prof.yonet())       # Profesör Dr. Ahmet bölümü yönetiyor.
```

---

## 🔒 Encapsulation (Kapsülleme)

Kapsülleme, verilerin ve metodların bir arada tutulması ve dış dünyadan gizlenmesidir.

### Private ve Protected Değişkenler

```python
class BankaHesabi:
    def __init__(self, hesap_sahibi, baslangic_bakiye):
        self.hesap_sahibi = hesap_sahibi
        self._bakiye = baslangic_bakiye  # Protected (tek alt çizgi)
        self.__hesap_no = self._hesap_no_uret()  # Private (çift alt çizgi)
    
    def _hesap_no_uret(self):
        """Hesap numarası üretme (protected method)"""
        import random
        return f"TR{random.randint(100000, 999999)}"
    
    def bakiye_goster(self):
        """Bakiyeyi gösterme"""
        return f"Bakiye: {self._bakiye} TL"
    
    def para_yatir(self, miktar):
        """Para yatırma"""
        if miktar > 0:
            self._bakiye += miktar
            return f"{miktar} TL yatırıldı. Yeni bakiye: {self._bakiye} TL"
        else:
            return "Geçersiz miktar!"
    
    def para_cek(self, miktar):
        """Para çekme"""
        if 0 < miktar <= self._bakiye:
            self._bakiye -= miktar
            return f"{miktar} TL çekildi. Kalan bakiye: {self._bakiye} TL"
        else:
            return "Yetersiz bakiye veya geçersiz miktar!"
    
    def hesap_bilgileri(self):
        """Hesap bilgilerini gösterme"""
        return f"""
        Hesap Sahibi: {self.hesap_sahibi}
        Hesap No: {self.__hesap_no}
        Bakiye: {self._bakiye} TL
        """

# Kullanım
hesap = BankaHesabi("Ali Veli", 1000)
print(hesap.bakiye_goster())      # Bakiye: 1000 TL
print(hesap.para_yatir(500))      # 500 TL yatırıldı. Yeni bakiye: 1500 TL
print(hesap.para_cek(200))        # 200 TL çekildi. Kalan bakiye: 1300 TL
print(hesap.hesap_bilgileri())

# Private değişkene erişim hatası
# print(hesap.__hesap_no)  # AttributeError
```

---

## 🎭 Polymorphism (Çok Biçimlilik)

Aynı arayüzün farklı sınıflarda farklı şekillerde uygulanmasıdır.

### Method Overriding

```python
class Sekil:
    def __init__(self, ad):
        self.ad = ad
    
    def alan_hesapla(self):
        return "Alan hesaplanamıyor"
    
    def cevre_hesapla(self):
        return "Çevre hesaplanamıyor"

class Dikdortgen(Sekil):
    def __init__(self, uzunluk, genislik):
        super().__init__("Dikdörtgen")
        self.uzunluk = uzunluk
        self.genislik = genislik
    
    def alan_hesapla(self):
        return self.uzunluk * self.genislik
    
    def cevre_hesapla(self):
        return 2 * (self.uzunluk + self.genislik)

class Daire(Sekil):
    def __init__(self, yaricap):
        super().__init__("Daire")
        self.yaricap = yaricap
    
    def alan_hesapla(self):
        import math
        return math.pi * self.yaricap ** 2
    
    def cevre_hesapla(self):
        import math
        return 2 * math.pi * self.yaricap

class Ucgen(Sekil):
    def __init__(self, taban, yukseklik):
        super().__init__("Üçgen")
        self.taban = taban
        self.yukseklik = yukseklik
    
    def alan_hesapla(self):
        return 0.5 * self.taban * self.yukseklik

# Polymorphism örneği
sekliler = [
    Dikdortgen(5, 3),
    Daire(4),
    Ucgen(6, 4)
]

for sekil in sekliler:
    print(f"{sekil.ad}:")
    print(f"  Alan: {sekil.alan_hesapla():.2f}")
    if hasattr(sekil, 'cevre_hesapla'):
        print(f"  Çevre: {sekil.cevre_hesapla():.2f}")
    print()
```

---

## ✨ Özel Metodlar (Magic Methods)

Python'da özel metodlar, sınıfların davranışlarını özelleştirmek için kullanılır.

### Temel Özel Metodlar

```python
class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        """String temsili"""
        return f"Vektor({self.x}, {self.y})"
    
    def __repr__(self):
        """Detaylı string temsili"""
        return f"Vektor(x={self.x}, y={self.y})"
    
    def __add__(self, other):
        """Toplama operatörü"""
        return Vektor(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        """Çıkarma operatörü"""
        return Vektor(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """Çarpma operatörü"""
        return Vektor(self.x * scalar, self.y * scalar)
    
    def __eq__(self, other):
        """Eşitlik kontrolü"""
        return self.x == other.x and self.y == other.y
    
    def __len__(self):
        """Uzunluk (magnitude)"""
        import math
        return math.sqrt(self.x**2 + self.y**2)
    
    def __getitem__(self, index):
        """Index erişimi"""
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        else:
            raise IndexError("Vektör indeksi 0 veya 1 olmalıdır")

# Kullanım
v1 = Vektor(3, 4)
v2 = Vektor(1, 2)

print(v1)                    # Vektor(3, 4)
print(v1 + v2)               # Vektor(4, 6)
print(v1 - v2)               # Vektor(2, 2)
print(v1 * 2)                # Vektor(6, 8)
print(v1 == v2)              # False
print(len(v1))               # 5.0 (magnitude)
print(v1[0], v1[1])          # 3 4
```

---

## 🏭 Abstract Classes (Soyut Sınıflar)

Soyut sınıflar, alt sınıfların uygulaması gereken metodları tanımlar.

```python
from abc import ABC, abstractmethod

class Hayvan(ABC):
    def __init__(self, ad):
        self.ad = ad
    
    @abstractmethod
    def ses_cikar(self):
        """Alt sınıflar bu metodu uygulamalı"""
        pass
    
    @abstractmethod
    def hareket_et(self):
        """Alt sınıflar bu metodu uygulamalı"""
        pass
    
    def uyu(self):
        """Ortak metod"""
        return f"{self.ad} uyuyor."

class Kopek(Hayvan):
    def ses_cikar(self):
        return f"{self.ad}: Hav hav!"
    
    def hareket_et(self):
        return f"{self.ad} koşuyor."

class Kus(Hayvan):
    def ses_cikar(self):
        return f"{self.ad}: Cik cik!"
    
    def hareket_et(self):
        return f"{self.ad} uçuyor."

# Kullanım
kopek = Kopek("Karabaş")
kus = Kus("Kanarya")

print(kopek.ses_cikar())     # Karabaş: Hav hav!
print(kopek.hareket_et())    # Karabaş koşuyor.
print(kopek.uyu())           # Karabaş uyuyor.

print(kus.ses_cikar())       # Kanarya: Cik cik!
print(kus.hareket_et())      # Kanarya uçuyor.
print(kus.uyu())             # Kanarya uyuyor.
```

---

## 🎯 Pratik Örnekler

### Örnek 1: Kütüphane Sistemi

```python
class Kitap:
    def __init__(self, baslik, yazar, isbn, sayfa_sayisi):
        self.baslik = baslik
        self.yazar = yazar
        self.isbn = isbn
        self.sayfa_sayisi = sayfa_sayisi
        self.odunc_alindi = False
    
    def odunc_ver(self):
        if not self.odunc_alindi:
            self.odunc_alindi = True
            return f"'{self.baslik}' kitabı ödünç verildi."
        else:
            return f"'{self.baslik}' kitabı zaten ödünç alınmış."
    
    def geri_al(self):
        if self.odunc_alindi:
            self.odunc_alindi = False
            return f"'{self.baslik}' kitabı geri alındı."
        else:
            return f"'{self.baslik}' kitabı zaten kütüphanede."

class Kutuphane:
    def __init__(self, ad):
        self.ad = ad
        self.kitaplar = []
    
    def kitap_ekle(self, kitap):
        self.kitaplar.append(kitap)
        return f"'{kitap.baslik}' kitabı kütüphaneye eklendi."
    
    def kitap_ara(self, arama_terimi):
        bulunan_kitaplar = []
        for kitap in self.kitaplar:
            if (arama_terimi.lower() in kitap.baslik.lower() or 
                arama_terimi.lower() in kitap.yazar.lower()):
                bulunan_kitaplar.append(kitap)
        return bulunan_kitaplar
    
    def mevcut_kitaplar(self):
        return [kitap for kitap in self.kitaplar if not kitap.odunc_alindi]

# Kullanım
kutuphane = Kutuphane("Merkez Kütüphane")

kitap1 = Kitap("Python Programlama", "Ahmet Yılmaz", "123-456", 300)
kitap2 = Kitap("Veri Yapıları", "Mehmet Demir", "789-012", 250)

kutuphane.kitap_ekle(kitap1)
kutuphane.kitap_ekle(kitap2)

print(kitap1.odunc_ver())    # 'Python Programlama' kitabı ödünç verildi.
print(kitap1.odunc_ver())    # 'Python Programlama' kitabı zaten ödünç alınmış.

bulunan = kutuphane.kitap_ara("Python")
print(f"Bulunan kitap sayısı: {len(bulunan)}")
```

### Örnek 2: Hesap Makinesi

```python
class HesapMakinesi:
    def __init__(self):
        self.gecmis = []
    
    def topla(self, a, b):
        sonuc = a + b
        self.gecmis.append(f"{a} + {b} = {sonuc}")
        return sonuc
    
    def cikar(self, a, b):
        sonuc = a - b
        self.gecmis.append(f"{a} - {b} = {sonuc}")
        return sonuc
    
    def carp(self, a, b):
        sonuc = a * b
        self.gecmis.append(f"{a} * {b} = {sonuc}")
        return sonuc
    
    def bol(self, a, b):
        if b == 0:
            return "Sıfıra bölme hatası!"
        sonuc = a / b
        self.gecmis.append(f"{a} / {b} = {sonuc}")
        return sonuc
    
    def gecmisi_goster(self):
        return self.gecmis
    
    def gecmisi_temizle(self):
        self.gecmis.clear()
        return "Geçmiş temizlendi."

# Kullanım
hesap_makinesi = HesapMakinesi()

print(hesap_makinesi.topla(10, 5))      # 15
print(hesap_makinesi.carp(4, 7))        # 28
print(hesap_makinesi.bol(20, 4))        # 5.0
print(hesap_makinesi.gecmisi_goster())  # ['10 + 5 = 15', '4 * 7 = 28', '20 / 4 = 5.0']
```

---

## ✅ Özet ve Kontrol Listesi

### Öğrendikleriniz
- [x] Sınıf ve nesne kavramları
- [x] Constructor (__init__) metodu
- [x] Instance değişkenleri ve metodları
- [x] Inheritance (Kalıtım)
- [x] Encapsulation (Kapsülleme)
- [x] Polymorphism (Çok biçimlilik)
- [x] Özel metodlar (Magic methods)
- [x] Abstract classes (Soyut sınıflar)

### Sırada Ne Var?
- Dosya işlemleri
- Exception handling (Hata yönetimi)
- Regular expressions
- Web scraping
- API kullanımı

### Pratik Yapın!
OOP kavramlarını pekiştirmek için:
1. Kendi sınıflarınızı oluşturun
2. Kalıtım kullanarak hiyerarşi kurun
3. Özel metodları deneyin
4. Gerçek dünya problemlerini OOP ile çözün

---

**🎯 Sonraki ders: Dosya İşlemleri ve Exception Handling** 