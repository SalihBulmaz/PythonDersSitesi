# VS Code ve Python Kurulum Rehberi

## 📚 İçindekiler
- [Python Nedir?](#python-nedir)
- [Python Kurulumu](#python-kurulumu)
- [VS Code Kurulumu](#vs-code-kurulumu)
- [VS Code Python Eklentileri](#vs-code-python-eklentileri)
- [İlk Python Programınız](#ilk-python-programınız)
- [Python Ortamı (Environment)](#python-ortamı-environment)
- [Hata Ayıklama (Debugging)](#hata-ayıklama-debugging)
- [Terminal Kullanımı](#terminal-kullanımı)
- [Git Entegrasyonu](#git-entegrasyonu)
- [Yararlı Kısayollar](#yararlı-kısayollar)
- [Sık Karşılaşılan Sorunlar](#sık-karşılaşılan-sorunlar)

---

## 🐍 Python Nedir?

Python, 1991 yılında Guido van Rossum tarafından geliştirilen, yüksek seviyeli, genel amaçlı bir programlama dilidir.

### Python'un Avantajları:
- ✅ **Öğrenmesi Kolay**: Temiz ve okunabilir sözdizimi
- ✅ **Çok Yönlü**: Web, veri analizi, AI, oyun geliştirme
- ✅ **Zengin Kütüphane**: 200,000+ paket
- ✅ **Topluluk Desteği**: Büyük ve aktif topluluk
- ✅ **Ücretsiz**: Açık kaynak kodlu

### Python Kullanım Alanları:
- 🌐 **Web Geliştirme**: Django, Flask
- 📊 **Veri Analizi**: Pandas, NumPy
- 🤖 **Yapay Zeka**: TensorFlow, PyTorch
- 🎮 **Oyun Geliştirme**: Pygame
- 🔧 **Otomasyon**: Selenium, Requests

---

## 💻 Python Kurulumu

### Windows'ta Python Kurulumu:

#### 1. Python İndirme
1. [python.org](https://www.python.org/downloads/) adresine gidin
2. "Download Python" butonuna tıklayın (en son sürüm)
3. İndirilen `.exe` dosyasını çalıştırın

#### 2. Kurulum Adımları
```
✅ Install launcher for all users (recommended)
✅ Add Python to PATH
✅ Install for all users
```

**ÖNEMLİ**: "Add Python to PATH" seçeneğini mutlaka işaretleyin!

#### 3. Kurulumu Doğrulama
Komut istemini açın (cmd) ve şu komutları yazın:
```bash
python --version
pip --version
```

### macOS'ta Python Kurulumu:

#### Yöntem 1: Homebrew ile (Önerilen)
```bash
# Homebrew kurulumu (yoksa)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Python kurulumu
brew install python
```

#### Yöntem 2: Resmi İndirici
1. [python.org](https://www.python.org/downloads/) adresinden macOS sürümünü indirin
2. `.pkg` dosyasını çalıştırın
3. Kurulum sihirbazını takip edin

### Linux'ta Python Kurulumu:

#### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install python3 python3-pip
```

#### CentOS/RHEL:
```bash
sudo yum install python3 python3-pip
```

---

## 🔧 VS Code Kurulumu

### VS Code İndirme ve Kurulum:

#### 1. İndirme
1. [code.visualstudio.com](https://code.visualstudio.com/) adresine gidin
2. İşletim sisteminize uygun sürümü indirin:
   - Windows: `.exe` dosyası
   - macOS: `.dmg` dosyası
   - Linux: `.deb` veya `.rpm` dosyası

#### 2. Kurulum
- **Windows**: İndirilen `.exe` dosyasını çalıştırın
- **macOS**: `.dmg` dosyasını açın ve VS Code'u Applications klasörüne sürükleyin
- **Linux**: Terminal'de `sudo dpkg -i code_*.deb` komutunu çalıştırın

#### 3. İlk Açılış
VS Code'u ilk açtığınızda:
- Dil seçimi yapın (Türkçe seçebilirsiniz)
- Tema seçimi yapın (Dark/Light)
- Eklenti önerilerini inceleyin

---

## 🔌 VS Code Python Eklentileri

### Temel Python Eklentileri:

#### 1. **Python (Microsoft)**
- **Açıklama**: Resmi Python eklentisi
- **Özellikler**: IntelliSense, debugging, linting
- **Kurulum**: VS Code'da Extensions sekmesinden "Python" arayın

#### 2. **Pylance**
- **Açıklama**: Gelişmiş Python dil sunucusu
- **Özellikler**: Hızlı kod tamamlama, tip kontrolü
- **Kurulum**: Python eklentisiyle birlikte gelir

#### 3. **Python Indent**
- **Açıklama**: Otomatik girinti ayarlama
- **Özellikler**: Python sözdizimi için özel girinti

#### 4. **Python Docstring Generator**
- **Açıklama**: Otomatik dokümantasyon oluşturma
- **Kullanım**: `Ctrl+Shift+2` (Windows) / `Cmd+Shift+2` (macOS)

#### 5. **Python Test Explorer**
- **Açıklama**: Test dosyalarını yönetme
- **Özellikler**: pytest, unittest desteği

### Yararlı Genel Eklentiler:

#### 6. **Auto Rename Tag**
- **Açıklama**: HTML/XML etiketlerini otomatik yeniden adlandırma

#### 7. **Bracket Pair Colorizer**
- **Açıklama**: Parantezleri renklendirme

#### 8. **GitLens**
- **Açıklama**: Git geçmişini görüntüleme
- **Özellikler**: Satır bazında değişiklik geçmişi

#### 9. **Live Server**
- **Açıklama**: HTML dosyalarını canlı sunucuda açma

#### 10. **Material Icon Theme**
- **Açıklama**: Güzel dosya ikonları

### Eklenti Kurulumu:
1. VS Code'da `Ctrl+Shift+X` (Windows) / `Cmd+Shift+X` (macOS)
2. Arama kutusuna eklenti adını yazın
3. "Install" butonuna tıklayın

---

## 🚀 İlk Python Programınız

### 1. Yeni Proje Oluşturma:
1. VS Code'u açın
2. `File > Open Folder` ile yeni bir klasör açın
3. Klasör adı: `python_kursu`

### 2. İlk Python Dosyası:
1. Sol panelde "New File" butonuna tıklayın
2. Dosya adı: `merhaba.py`
3. Aşağıdaki kodu yazın:

```python
# Bu benim ilk Python programım!
print("Merhaba, Dünya!")

# Kullanıcıdan isim alalım
isim = input("Adınız nedir? ")
print(f"Hoş geldin, {isim}!")

# Basit bir hesaplama
yas = int(input("Yaşınız kaç? "))
dogum_yili = 2024 - yas
print(f"{yas} yaşındasınız ve {dogum_yili} yılında doğmuşsunuz.")
```

### 3. Programı Çalıştırma:
- **Yöntem 1**: `F5` tuşuna basın
- **Yöntem 2**: `Ctrl+F5` (Windows) / `Cmd+F5` (macOS)
- **Yöntem 3**: Terminal'de `python merhaba.py`

### 4. Çıktı:
```
Merhaba, Dünya!
Adınız nedir? Ahmet
Hoş geldin, Ahmet!
Yaşınız kaç? 25
25 yaşındasınız ve 1999 yılında doğmuşsunuz.
```

---

## 🌍 Python Ortamı (Environment)

### Sanal Ortam Nedir?
Sanal ortam, Python projelerinizi izole etmenizi sağlar. Her proje kendi paketlerini kullanır.

### Sanal Ortam Oluşturma:

#### 1. Terminal'de Komut:
```bash
# Proje klasörüne gidin
cd python_kursu

# Sanal ortam oluşturun
python -m venv venv

# Sanal ortamı aktifleştirin
# Windows:
venv\Scripts\activate

# macOS/Linux:
source venv/bin/activate
```

#### 2. VS Code'da Otomatik Seçim:
1. `Ctrl+Shift+P` (Windows) / `Cmd+Shift+P` (macOS)
2. "Python: Select Interpreter" yazın
3. `./venv/bin/python` seçin

### Paket Yönetimi:

#### Paket Kurulumu:
```bash
# Sanal ortam aktifken
pip install pandas numpy matplotlib
```

#### requirements.txt Oluşturma:
```bash
pip freeze > requirements.txt
```

#### Paketleri requirements.txt'den Kurma:
```bash
pip install -r requirements.txt
```

---

## 🐛 Hata Ayıklama (Debugging)

### Breakpoint Ekleme:
1. Kod satırının soluna tıklayın (kırmızı nokta belirir)
2. `F5` tuşuna basın
3. Program breakpoint'te duracak

### Debugging Kontrolleri:
- **F5**: Devam et
- **F10**: Adım adım (Step Over)
- **F11**: İçeri gir (Step Into)
- **Shift+F11**: Dışarı çık (Step Out)
- **F9**: Breakpoint ekle/çıkar

### Debugging Örneği:
```python
def toplama(a, b):
    sonuc = a + b  # Breakpoint buraya
    return sonuc

x = 5
y = 3
z = toplama(x, y)
print(f"{x} + {y} = {z}")
```

### Debug Console:
- Debugging sırasında değişkenleri kontrol edin
- Python komutları çalıştırın
- Değerleri inceleyin

---

## 💻 Terminal Kullanımı

### VS Code Terminal'i Açma:
- **Ctrl+`** (Windows) / **Cmd+`** (macOS)
- **View > Terminal**
- **Ctrl+Shift+P** > "Terminal: Create New Terminal"

### Yararlı Terminal Komutları:

#### Python Komutları:
```bash
# Python sürümü
python --version

# Python'u interaktif modda başlat
python

# Python dosyasını çalıştır
python dosya_adi.py

# Modülü çalıştır
python -m modul_adi
```

#### Dosya İşlemleri:
```bash
# Dizin değiştir
cd klasor_adi

# Bir üst dizine git
cd ..

# Dizin içeriğini listele
dir          # Windows
ls           # macOS/Linux

# Dosya oluştur
touch dosya.txt  # macOS/Linux
echo. > dosya.txt  # Windows
```

#### Paket Yönetimi:
```bash
# Paket kur
pip install paket_adi

# Paket kaldır
pip uninstall paket_adi

# Kurulu paketleri listele
pip list

# Paket bilgisi
pip show paket_adi
```

---

## 📝 Git Entegrasyonu

### Git Kurulumu:
1. [git-scm.com](https://git-scm.com/) adresinden indirin
2. Kurulumu tamamlayın
3. VS Code'da Git eklentisi otomatik çalışır

### İlk Git Repository:
```bash
# Git repository başlat
git init

# Dosyaları staging area'ya ekle
git add .

# İlk commit
git commit -m "İlk Python projesi"
```

### VS Code Git Özellikleri:
- **Source Control** sekmesi (Ctrl+Shift+G)
- **Değişiklikleri görüntüleme**
- **Commit ve push işlemleri**
- **Branch yönetimi**

### .gitignore Dosyası:
```bash
# Python
__pycache__/
*.py[cod]
*$py.class
venv/
.env

# VS Code
.vscode/
*.code-workspace

# Sistem dosyaları
.DS_Store
Thumbs.db
```

---

## ⌨️ Yararlı Kısayollar

### Genel Kısayollar:
- **Ctrl+N**: Yeni dosya
- **Ctrl+S**: Kaydet
- **Ctrl+Z**: Geri al
- **Ctrl+Y**: İleri al
- **Ctrl+F**: Bul
- **Ctrl+H**: Değiştir
- **Ctrl+A**: Tümünü seç

### Python Geliştirme:
- **F5**: Çalıştır/Debug
- **Ctrl+F5**: Çalıştır (Debug olmadan)
- **F9**: Breakpoint
- **Ctrl+Shift+P**: Komut paleti
- **Ctrl+Space**: Kod tamamlama

### Dosya Gezinme:
- **Ctrl+P**: Dosya aç
- **Ctrl+Shift+E**: Explorer
- **Ctrl+Shift+F**: Arama
- **Ctrl+Shift+X**: Eklentiler

### Terminal:
- **Ctrl+`**: Terminal aç/kapat
- **Ctrl+Shift+`**: Yeni terminal
- **Ctrl+Shift+5**: Terminal böl

---

## ❗ Sık Karşılaşılan Sorunlar

### 1. "Python is not recognized"
**Çözüm**: Python'u PATH'e ekleyin
```bash
# Windows'ta PATH kontrolü
echo %PATH%

# Python'u PATH'e manuel ekleme
set PATH=%PATH%;C:\Python39\
```

### 2. "pip is not recognized"
**Çözüm**: pip'i yeniden yükleyin
```bash
python -m ensurepip --upgrade
```

### 3. VS Code Python Interpreter Bulamıyor
**Çözüm**:
1. `Ctrl+Shift+P` > "Python: Select Interpreter"
2. Python yolunu manuel seçin
3. Sanal ortam kullanın

### 4. Eklenti Çalışmıyor
**Çözüm**:
1. VS Code'u yeniden başlatın
2. Eklentiyi kaldırıp yeniden kurun
3. Python eklentisini güncelleyin

### 5. Terminal'de Python Çalışmıyor
**Çözüm**:
```bash
# Python yolunu kontrol edin
where python  # Windows
which python  # macOS/Linux

# Sanal ortamı aktifleştirin
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
```

---

## 🎯 Öneriler ve İpuçları

### Geliştirme İpuçları:
1. **Sanal ortam kullanın**: Her proje için ayrı ortam
2. **Düzenli commit yapın**: Git kullanın
3. **Kod formatını koruyun**: PEP 8 standartları
4. **Dokümantasyon yazın**: Docstring kullanın
5. **Test yazın**: Unit testler ekleyin

### Performans İpuçları:
1. **VS Code'u güncel tutun**
2. **Gereksiz eklentileri kaldırın**
3. **Büyük dosyaları bölün**
4. **Linting kullanın**: Pylint, Flake8
5. **Type hints kullanın**

### Öğrenme Kaynakları:
- **Python.org**: Resmi dokümantasyon
- **Real Python**: Pratik örnekler
- **Python Crash Course**: Kitap
- **Automate the Boring Stuff**: Ücretsiz kitap
- **Python for Everybody**: Coursera kursu

---

## 🎉 Sonuç

VS Code ve Python kurulumunuz tamamlandı! Artık:

✅ **Python programları yazabilirsiniz**  
✅ **VS Code'un güçlü özelliklerini kullanabilirsiniz**  
✅ **Sanal ortamlar oluşturabilirsiniz**  
✅ **Debugging yapabilirsiniz**  
✅ **Git ile versiyon kontrolü yapabilirsiniz**  

Bir sonraki adımda Python'un temel konularını öğrenmeye başlayabilirsiniz. İyi çalışmalar! 🚀 