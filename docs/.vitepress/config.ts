import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Python Programlama Kursu',
  description: 'Sıfırdan İleri Seviye Python Programlama Dersi',
  themeConfig: {
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'Dersler', link: '/degiskenler.md' },
      { text: 'Ödevler', link: '/odevler/degiskenler-odev1.md' }
    ],
    sidebar: [
      {
        text: '📚 Dersler',
        items: [
          {
            text: '🏠 Ana Sayfa',
            link: '/'
          },
          {
            text: '⚙️ Kurulum Aşaması',
            link: '/kurulum.md'
          },
          {
            text: '💻 Bilgisayar Bilimine Giriş',
            link: '/BilgisayarBilimineGiriş.md'
          },
          {
            text: '🔤 Değişkenler ve Operatörler',
            link: '/degiskenler.md'
          },
          {
            text: '📊 Veri Türleri',
            link: '/veri-turleri.md'
          },
          {
            text: '🔄 Kontrol Yapıları',
            link: '/kontrol-yapilari.md'
          },
          {
            text: '⚡ Fonksiyonlar',
            link: '/fonksiyonlar.md'
          },
          {
            text: '🏗️ Nesne Yönelimli Programlama',
            link: '/nesne-yonelimli-programlama.md'
          },
          {
            text: '📁 Dosya İşlemleri ve Hata Yönetimi',
            link: '/dosya-islemleri.md'
          },
          {
            text: '🚀 İleri Seviye Konular',
            link: '/ileri-python-konulari.md'
          }
        ]
      },
      {
        text: '📝 Ödevler',
        items: [
          {
            text: 'Değişkenler - Ödev 1',
            link: '/odevler/degiskenler-1.md'
          },
          {
            text: 'Değişkenler - Ödev 2',
            link: '/odevler/degiskenler-2.md'
          },
          {
            text: 'Değişkenler - Ödev 3',
            link: '/odevler/degiskenler-3.md'
          },
          // {
          //   text: 'Değişkenler - Ödev 4',
          //   link: '/odevler/degiskenler-odev4.md'
          // },
          // {
          //   text: 'Değişkenler - Ödev 5',
          //   link: '/odevler/degiskenler-odev5.md'
          // },
          // {
          //   text: 'Değişkenler - Ödev 6',
          //   link: '/odevler/degiskenler-odev6.md'
          // },
          // {
          //   text: 'Değişkenler - Ödev 7',
          //   link: '/odevler/degiskenler-odev7.md'
          // },
          // {
          //   text: 'Değişkenler - Ödev 8',
          //   link: '/odevler/degiskenler-odev8.md'
          // },
          // {
          //   text: 'Değişkenler - Ödev 9',
          //   link: '/odevler/degiskenler-odev9.md'
          // },
          // {
          //   text: 'Değişkenler - Ödev 10',
          //   link: '/odevler/degiskenler-odev10.md'
          // }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Python Programlama Kursu'
    }
  }
})
