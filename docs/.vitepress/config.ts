import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Python Programlama Kursu",
  description: "Sıfırdan İleri Seviye Python Programlama Dersi",
  themeConfig: {
    nav: [
      { text: "Ana Sayfa", link: "/" },
      { text: "Dersler", link: "/degiskenler.md" },
      { text: "Ödevler", link: "/odevler/degiskenler-odev1.md" },
    ],
    sidebar: [
      {
        text: "📚 Dersler",
        items: [
          {
            text: "⚙️ Kurulum Aşaması",
            link: "/dersler/kurulum.md",
          },
          {
            text: "💻 Bilgisayar Bilimine Giriş",
            link: "/dersler/BilgisayarBilimineGiriş.md",
          },
          {
            text: "🔤 Değişkenler ve Operatörler",
            link: "/dersler/degiskenler.md",
          },
          {
            text: "📊 Veri Türleri",
            link: "/dersler/veri-turleri.md",
          },
          {
            text: "🔄 Kontrol Yapıları",
            link: "/dersler/if-elif-else-temel.md",
          },
          {
            text: "⚡ Fonksiyonlar",
            link: "/dersler/fonksiyonlar.md",
          },
          {
            text: "🏗️ Nesne Yönelimli Programlama",
            link: "/dersler/nesne-yonelimli-programlama.md",
          },
          {
            text: "📁 Dosya İşlemleri ve Hata Yönetimi",
            link: "/dersler/dosya-islemleri.md",
          },
          {
            text: "🚀 İleri Seviye Konular",
            link: "/dersler/ileri-python-konulari.md",
          },
        ],
      },
      {
        text: "📝 Ödevler",
        items: [
          {
            text: "GÜNCEL ÖDEVLER 1",
            link: "/odevler/if-elif-else-ek-odevler.md",
          },
          {
            text: "GÜNCEL ÖDEVLER 2",
            link: "/odevler/if-elif-2.md",
          },
          {
            text: "Değişkenler - Ödev 1",
            link: "/odevler/degiskenler-1.md",
          },
          {
            text: "Değişkenler - Ödev 2",
            link: "/odevler/degiskenler-2.md",
          },
          {
            text: "Değişkenler - Ödev 3",
            link: "/odevler/degiskenler-3.md",
          },
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
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 Python Programlama Kursu",
    },
  },
});
