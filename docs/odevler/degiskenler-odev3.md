# Ödev 3: String İşlemleri ve Metin Manipülasyonu

## Amaç
Bu ödevde Python'da string işlemleri, metin manipülasyonu ve string metodlarını öğreneceksiniz.

## Görevler

### 1. String Metodları
Aşağıdaki string işlemlerini gerçekleştirin:

```python
metin = "  Python Programlama Dili  "

# Temizleme işlemleri
temiz_metin = # Başındaki ve sonundaki boşlukları temizleyin
büyük_metin = # Tümünü büyük harfe çevirin
küçük_metin = # Tümünü küçük harfe çevirin
başlık_metin = # Başlık formatına çevirin

# Arama işlemleri
python_konum = # "Python" kelimesinin konumunu bulun
programlama_sayısı = # "a" harfinin kaç kez geçtiğini sayın
içeriyor_mu = # "Dili" kelimesinin metinde olup olmadığını kontrol edin

# Değiştirme işlemleri
değiştirilmiş = # "Python" kelimesini "Java" ile değiştirin
```

Her işlemin sonucunu ekrana yazdırın.

### 2. String Slicing (Dilimleme)
Aşağıdaki dilimleme işlemlerini gerçekleştirin:

```python
metin = "Python Programlama Dili"

# Temel dilimleme
ilk_6 = # İlk 6 karakteri alın
son_4 = # Son 4 karakteri alın
ortadaki = # 7. karakterden 15. karaktere kadar alın

# Adım ile dilimleme
her_ikinci = # Her ikinci karakteri alın
ters_metin = # Metni ters çevirin
ilk_yarı = # Metnin ilk yarısını alın
ikinci_yarı = # Metnin ikinci yarısını alın

# Negatif indeksler
son_5 = # Son 5 karakteri alın (negatif indeks kullanarak)
```

### 3. String Birleştirme ve Bölme
Aşağıdaki işlemleri gerçekleştirin:

```python
# String birleştirme
kelime1 = "Python"
kelime2 = "Programlama"
kelime3 = "Dili"

# Farklı yöntemlerle birleştirme
birleşik1 = # + operatörü ile birleştirin
birleşik2 = # .join() metodu ile birleştirin
birleşik3 = # f-string ile birleştirin

# String bölme
cümle = "Python, programlama, dili, çok, güzel"

# Virgül ile bölme
kelimeler = # Cümleyi virgül ile bölün
temizlenmiş = # Bölünen kelimelerin başındaki ve sonundaki boşlukları temizleyin

# Boşluk ile bölme
kelimeler2 = # Cümleyi boşluk ile bölün
```

### 4. String Formatlama
Aşağıdaki formatlama işlemlerini gerçekleştirin:

```python
ad = "Ali"
yaş = 25
boy = 1.75
şehir = "İstanbul"

# f-string ile formatlama
mesaj1 = # "Merhaba, ben Ali. 25 yaşındayım."

# .format() ile formatlama
mesaj2 = # "Boyum: 1.75 metre, şehrim: İstanbul"

# % operatörü ile formatlama
mesaj3 = # "Adım %s, yaşım %d" formatında

# Çoklu satır formatlama
kişi_bilgisi = f"""
Kişi Bilgileri:
---------------
Ad: {ad}
Yaş: {yaş}
Boy: {boy} metre
Şehir: {şehir}
"""
```

### 5. String Kontrol Metodları
Aşağıdaki kontrol işlemlerini gerçekleştirin:

```python
test_metinleri = [
    "Python123",
    "python",
    "PYTHON",
    "12345",
    "Python Programlama",
    "   ",
    "",
    "Python@123"
]

for metin in test_metinleri:
    print(f"Metin: '{metin}'")
    print(f"  Sadece harf mi: {metin.isalpha()}")
    print(f"  Sadece rakam mı: {metin.isdigit()}")
    print(f"  Harf veya rakam mı: {metin.isalnum()}")
    print(f"  Küçük harf mi: {metin.islower()}")
    print(f"  Büyük harf mi: {metin.isupper()}")
    print(f"  Başlık formatı mı: {metin.istitle()}")
    print(f"  Sadece boşluk mu: {metin.isspace()}")
    print(f"  Boş mu: {len(metin) == 0}")
    print()
```

## Ek Görevler (İsteğe Bağlı)

### 6. Palindrom Kontrolü
Bir kelimenin palindrom olup olmadığını kontrol eden bir program yazın:

```python
def palindrom_mu(kelime):
    # Kelimeyi temizle (boşlukları kaldır, küçük harfe çevir)
    temiz_kelime = kelime.lower().replace(" ", "")
    
    # Ters çevrilmiş hali ile karşılaştır
    ters_kelime = temiz_kelime[::-1]
    
    return temiz_kelime == ters_kelime

# Test
test_kelimeler = ["kayak", "radar", "python", "A man a plan a canal Panama"]
for kelime in test_kelimeler:
    sonuç = palindrom_mu(kelime)
    print(f"'{kelime}': {'Palindrom' if sonuç else 'Palindrom değil'}")
```

### 7. Şifre Güvenlik Kontrolü
Bir şifrenin güvenlik kriterlerini kontrol eden bir program yazın:

```python
def şifre_kontrol(şifre):
    kriterler = {
        "uzunluk": len(şifre) >= 8,
        "büyük_harf": any(c.isupper() for c in şifre),
        "küçük_harf": any(c.islower() for c in şifre),
        "rakam": any(c.isdigit() for c in şifre),
        "özel_karakter": any(c in "!@#$%^&*" for c in şifre)
    }
    
    geçerli_kriterler = sum(kriterler.values())
    
    if geçerli_kriterler == 5:
        return "Çok güçlü"
    elif geçerli_kriterler >= 3:
        return "Güçlü"
    elif geçerli_kriterler >= 2:
        return "Orta"
    else:
        return "Zayıf"

# Test
test_şifreleri = ["abc", "abc123", "Abc123!", "GüçlüŞifre123!"]
for şifre in test_şifreleri:
    güvenlik = şifre_kontrol(şifre)
    print(f"'{şifre}': {güvenlik}")
```

### 8. Metin Analizi
Bir metnin istatistiklerini çıkaran bir program yazın:

```python
def metin_analizi(metin):
    # Temel istatistikler
    karakter_sayısı = len(metin)
    kelime_sayısı = len(metin.split())
    cümle_sayısı = metin.count('.') + metin.count('!') + metin.count('?')
    
    # Harf istatistikleri
    büyük_harf = sum(1 for c in metin if c.isupper())
    küçük_harf = sum(1 for c in metin if c.islower())
    rakam = sum(1 for c in metin if c.isdigit())
    boşluk = metin.count(' ')
    
    return {
        "karakter_sayısı": karakter_sayısı,
        "kelime_sayısı": kelime_sayısı,
        "cümle_sayısı": cümle_sayısı,
        "büyük_harf": büyük_harf,
        "küçük_harf": küçük_harf,
        "rakam": rakam,
        "boşluk": boşluk
    }

# Test
test_metni = "Python programlama dili çok güzel! 2023 yılında öğreniyorum."
analiz = metin_analizi(test_metni)

print("Metin Analizi:")
for anahtar, değer in analiz.items():
    print(f"  {anahtar}: {değer}")
```

## Değerlendirme Kriterleri

- [ ] String metodları doğru kullanılmış
- [ ] String dilimleme işlemleri doğru
- [ ] String birleştirme ve bölme işlemleri doğru
- [ ] String formatlama farklı yöntemlerle yapılmış
- [ ] String kontrol metodları doğru kullanılmış
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Temiz metin: Python Programlama Dili
Büyük metin:   PYTHON PROGRAMLAMA DİLİ  
Küçük metin:   python programlama dili  
Başlık metin:   Python Programlama Dili  

Python konumu: 2
'a' harfi sayısı: 4
'Dili' içeriyor mu: True
Değiştirilmiş:   Java Programlama Dili  

İlk 6 karakter: Python
Son 4 karakter: Dili
Ortadaki: Programlama
Her ikinci: Pto rgamadli
Ters metin: iliD amalmargoP nohtyP

Birleşik1: PythonProgramlamaDili
Birleşik2: Python-Programlama-Dili
Birleşik3: Python Programlama Dili

Kelimeler: ['Python', 'programlama', 'dili', 'çok', 'güzel']

Metin: 'Python123'
  Sadece harf mi: False
  Sadece rakam mı: False
  Harf veya rakam mı: True
  Küçük harf mi: False
  Büyük harf mi: False
  Başlık formatı mı: True
  Sadece boşluk mu: False
  Boş mu: False
```

**Başarılar! 🚀** 