# Ödev 9: Set (Küme) İşlemleri

## Amaç
Bu ödevde Python'da set (küme) veri yapısını, küme işlemlerini ve kullanım alanlarını öğreneceksiniz.

## Görevler

### 1. Temel Set İşlemleri
Aşağıdaki set işlemlerini gerçekleştirin:

```python
# Set oluşturma
meyveler = {"elma", "armut", "muz", "portakal", "elma"}  # Tekrarlanan elma silinir
sayılar = set([1, 2, 3, 2, 4, 1, 5])  # Liste'den set oluşturma
karışık = {1, "iki", 3.0, True}

print("Orijinal setler:")
print(f"Meyveler: {meyveler}")
print(f"Sayılar: {sayılar}")
print(f"Karışık: {karışık}")

# Set işlemleri
meyveler.add("kiraz")  # Eleman ekleme
meyveler.add("elma")   # Var olan eleman tekrar eklenmez
meyveler.remove("armut")  # Eleman silme (hata verir yoksa)
meyveler.discard("ananas")  # Güvenli silme (hata vermez)

print(f"\nİşlemler sonrası meyveler: {meyveler}")

# Set özellikleri
print(f"\nMeyveler seti uzunluğu: {len(meyveler)}")
print(f"'muz' meyvesi sette mi: {'muz' in meyveler}")
print(f"'ananas' meyvesi sette mi: {'ananas' in meyveler}")

# Rastgele eleman çıkarma
rastgele_eleman = meyveler.pop()
print(f"Çıkarılan rastgele eleman: {rastgele_eleman}")
print(f"Güncellenmiş meyveler: {meyveler}")
```

### 2. Küme İşlemleri
Küme matematik işlemlerini gerçekleştirin:

```python
# İki küme oluşturma
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(f"A kümesi: {a}")
print(f"B kümesi: {b}")

# Birleşim (Union)
birleşim = a | b
birleşim2 = a.union(b)
print(f"A ∪ B (| operatörü): {birleşim}")
print(f"A ∪ B (union metodu): {birleşim2}")

# Kesişim (Intersection)
kesişim = a & b
kesişim2 = a.intersection(b)
print(f"A ∩ B (& operatörü): {kesişim}")
print(f"A ∩ B (intersection metodu): {kesişim2}")

# Fark (Difference)
a_fark_b = a - b
b_fark_a = b - a
a_fark_b2 = a.difference(b)
print(f"A - B (- operatörü): {a_fark_b}")
print(f"B - A (- operatörü): {b_fark_a}")
print(f"A - B (difference metodu): {a_fark_b2}")

# Simetrik fark (Symmetric Difference)
simetrik_fark = a ^ b
simetrik_fark2 = a.symmetric_difference(b)
print(f"A △ B (^ operatörü): {simetrik_fark}")
print(f"A △ B (symmetric_difference metodu): {simetrik_fark2}")
```

### 3. Küme Karşılaştırma İşlemleri
Küme karşılaştırma işlemlerini gerçekleştirin:

```python
# Küme oluşturma
a = {1, 2, 3, 4}
b = {2, 3, 4, 5}
c = {1, 2, 3, 4, 5, 6}
d = {1, 2}

print(f"A: {a}")
print(f"B: {b}")
print(f"C: {c}")
print(f"D: {d}")

# Alt küme kontrolü
print(f"\nD ⊆ A: {d.issubset(a)}")
print(f"D ⊆ C: {d.issubset(c)}")
print(f"A ⊆ C: {a.issubset(c)}")

# Üst küme kontrolü
print(f"\nA ⊇ D: {a.issuperset(d)}")
print(f"C ⊇ A: {c.issuperset(a)}")
print(f"B ⊇ D: {b.issuperset(d)}")

# Eşitlik kontrolü
print(f"\nA == B: {a == b}")
print(f"A == A: {a == a}")

# Ayrık küme kontrolü
ayrık_kümeler = {1, 2, 3}
ayrık_kümeler2 = {4, 5, 6}
print(f"\n{ayrık_kümeler} ve {ayrık_kümeler2} ayrık mı: {ayrık_kümeler.isdisjoint(ayrık_kümeler2)}")
print(f"{a} ve {b} ayrık mı: {a.isdisjoint(b)}")
```

### 4. Set Comprehension
Set comprehension kullanarak işlemler yapın:

```python
# Temel set comprehension
sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
kareler = {x**2 for x in sayılar}
print(f"Sayıların kareleri: {kareler}")

# Koşullu set comprehension
çift_kareler = {x**2 for x in sayılar if x % 2 == 0}
print(f"Çift sayıların kareleri: {çift_kareler}")

# String işlemleri ile set comprehension
kelimeler = ["python", "programlama", "dili", "çok", "güzel", "python"]
uzunluklar = {len(kelime) for kelime in kelimeler}
print(f"Kelimelerin uzunlukları: {uzunluklar}")

# Karakter seti oluşturma
metin = "hello world"
karakterler = {char for char in metin if char != ' '}
print(f"Metindeki benzersiz karakterler: {karakterler}")

# Çoklu koşul ile set comprehension
karmaşık_set = {x for x in range(1, 21) if x % 2 == 0 and x % 3 == 0}
print(f"2 ve 3'e bölünen sayılar: {karmaşık_set}")
```

### 5. Set Metodları
Set metodlarını kullanarak işlemler yapın:

```python
# Örnek setler
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(f"A: {a}")
print(f"B: {b}")

# update() metodu
a.update([6, 7, 8])
print(f"A güncellenmiş: {a}")

# intersection_update() metodu
a.intersection_update(b)
print(f"A kesişim güncellemesi: {a}")

# difference_update() metodu
a = {1, 2, 3, 4, 5}  # A'yı yeniden oluştur
a.difference_update(b)
print(f"A fark güncellemesi: {a}")

# symmetric_difference_update() metodu
a = {1, 2, 3, 4, 5}  # A'yı yeniden oluştur
a.symmetric_difference_update(b)
print(f"A simetrik fark güncellemesi: {a}")

# copy() metodu
a = {1, 2, 3, 4, 5}
a_kopya = a.copy()
a_kopya.add(10)
print(f"Orijinal A: {a}")
print(f"Kopya A: {a_kopya}")
```

## Ek Görevler (İsteğe Bağlı)

### 6. Benzersiz Eleman Bulma
Listelerdeki tekrarlanan elemanları set kullanarak temizleyin:

```python
def benzersiz_elemanlar(liste):
    """Listedeki tekrarlanan elemanları kaldır"""
    return list(set(liste))

def tekrarlanan_elemanlar(liste):
    """Listedeki tekrarlanan elemanları bul"""
    tekrarlar = set()
    görülen = set()
    
    for eleman in liste:
        if eleman in görülen:
            tekrarlar.add(eleman)
        else:
            görülen.add(eleman)
    
    return list(tekrarlar)

def sadece_bir_kez_geçenler(liste):
    """Listede sadece bir kez geçen elemanları bul"""
    tekrarlar = set()
    görülen = set()
    
    for eleman in liste:
        if eleman in görülen:
            tekrarlar.add(eleman)
        else:
            görülen.add(eleman)
    
    return list(görülen - tekrarlar)

# Test
test_listesi = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7]
print(f"Orijinal liste: {test_listesi}")
print(f"Benzersiz elemanlar: {benzersiz_elemanlar(test_listesi)}")
print(f"Tekrarlanan elemanlar: {tekrarlanan_elemanlar(test_listesi)}")
print(f"Sadece bir kez geçenler: {sadece_bir_kez_geçenler(test_listesi)}")
```

### 7. Öğrenci Grup Sistemi
Set kullanarak öğrenci grup sistemi oluşturun:

```python
def öğrenci_grup_sistemi():
    # Öğrenci grupları
    matematik_öğrencileri = {"Ali", "Ayşe", "Mehmet", "Fatma", "Ahmet"}
    fizik_öğrencileri = {"Ayşe", "Mehmet", "Zeynep", "Can", "Elif"}
    kimya_öğrencileri = {"Fatma", "Can", "Elif", "Burak", "Deniz"}
    
    print("Öğrenci Grup Sistemi")
    print("=" * 30)
    
    while True:
        print("\nİşlemler:")
        print("1. Tüm öğrencileri göster")
        print("2. Matematik ve Fizik öğrencileri")
        print("3. Sadece Matematik öğrencileri")
        print("4. Sadece Fizik öğrencileri")
        print("5. Üç derste de olan öğrenciler")
        print("6. En az bir derste olan öğrenciler")
        print("7. Hiçbir derste olmayan öğrenciler")
        print("8. Çıkış")
        
        seçim = input("Seçiminiz (1-8): ")
        
        if seçim == "1":
            tüm_öğrenciler = matematik_öğrencileri | fizik_öğrencileri | kimya_öğrencileri
            print(f"Tüm öğrenciler: {sorted(tüm_öğrenciler)}")
            
        elif seçim == "2":
            mat_fizik = matematik_öğrencileri & fizik_öğrencileri
            print(f"Matematik ve Fizik öğrencileri: {sorted(mat_fizik)}")
            
        elif seçim == "3":
            sadece_mat = matematik_öğrencileri - (fizik_öğrencileri | kimya_öğrencileri)
            print(f"Sadece Matematik öğrencileri: {sorted(sadece_mat)}")
            
        elif seçim == "4":
            sadece_fizik = fizik_öğrencileri - (matematik_öğrencileri | kimya_öğrencileri)
            print(f"Sadece Fizik öğrencileri: {sorted(sadece_fizik)}")
            
        elif seçim == "5":
            üç_derste = matematik_öğrencileri & fizik_öğrencileri & kimya_öğrencileri
            print(f"Üç derste de olan öğrenciler: {sorted(üç_derste)}")
            
        elif seçim == "6":
            en_az_bir = matematik_öğrencileri | fizik_öğrencileri | kimya_öğrencileri
            print(f"En az bir derste olan öğrenciler: {sorted(en_az_bir)}")
            
        elif seçim == "7":
            tüm_öğrenciler = matematik_öğrencileri | fizik_öğrencileri | kimya_öğrencileri
            # Gerçek hayatta tüm öğrenci listesi olurdu
            tüm_okul = {"Ali", "Ayşe", "Mehmet", "Fatma", "Ahmet", "Zeynep", "Can", "Elif", "Burak", "Deniz", "Gizem", "Kemal"}
            hiçbir_derste = tüm_okul - tüm_öğrenciler
            print(f"Hiçbir derste olmayan öğrenciler: {sorted(hiçbir_derste)}")
            
        elif seçim == "8":
            print("Güle güle!")
            break
            
        else:
            print("Geçersiz seçim!")

# öğrenci_grup_sistemi()  # Çalıştırmak için yorumu kaldırın
```

## Değerlendirme Kriterleri

- [ ] Set oluşturma ve temel işlemler doğru
- [ ] Küme matematik işlemleri doğru
- [ ] Küme karşılaştırma işlemleri doğru
- [ ] Set comprehension kullanılmış
- [ ] Set metodları doğru kullanılmış
- [ ] Kod düzenli ve okunabilir
- [ ] Ek görevler tamamlanmış

## Teslim Formatı
Kodunuzu bir Python dosyası (.py) olarak kaydedin ve çalıştırarak sonuçları kontrol edin.

## Örnek Çıktı
```
Orijinal setler:
Meyveler: {'elma', 'armut', 'muz', 'portakal'}
Sayılar: {1, 2, 3, 4, 5}
Karışık: {1, 3.0, True, 'iki'}

İşlemler sonrası meyveler: {'elma', 'muz', 'portakal', 'kiraz'}

Meyveler seti uzunluğu: 4
'muz' meyvesi sette mi: True
'ananas' meyvesi sette mi: False

Çıkarılan rastgele eleman: elma
Güncellenmiş meyveler: {'muz', 'portakal', 'kiraz'}

A kümesi: {1, 2, 3, 4, 5}
B kümesi: {4, 5, 6, 7, 8}

A ∪ B (| operatörü): {1, 2, 3, 4, 5, 6, 7, 8}
A ∪ B (union metodu): {1, 2, 3, 4, 5, 6, 7, 8}

A ∩ B (& operatörü): {4, 5}
A ∩ B (intersection metodu): {4, 5}

A - B (- operatörü): {1, 2, 3}
B - A (- operatörü): {6, 7, 8}
A - B (difference metodu): {1, 2, 3}

A △ B (^ operatörü): {1, 2, 3, 6, 7, 8}
A △ B (symmetric_difference metodu): {1, 2, 3, 6, 7, 8}
```

**Başarılar! 🚀** 