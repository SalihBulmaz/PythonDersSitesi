import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Python Programlama Kursu",
  description: "Sıfırdan İleri Seviye Python Programlama Dersi",
  themeConfig: {
    nav: [
      { text: "🏠 Ana Sayfa", link: "/" },
      { text: "📚 Dersler", link: "/degiskenler.md" },
      { text: "📝 Ödevler", link: "/odevler/degiskenler-odev1.md" },
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
          // {
          //   text: "📊 Veri Türleri",
          //   link: "/dersler/veri-turleri.md",
          // },
          {
            text: "� Kontrol Yapıları",
            link: "/dersler/if-elif-else-temel.md",
          },
          {
            text: "� For Döngüleri",
            link: "/dersler/for-temel.md",
          },
          {
            text: "🔄 While Döngüleri",
            link: "/dersler/while-temel.md",
          },
          {
            text: "� Listeler",
            link: "/dersler/listeler-detayli.md",
          },
          {
            text: "� Stringler",
            link: "/dersler/string-detayli.md",
          },
          {
            text: "🔧 Fonksiyonlar",
            link: "/dersler/fonksiyonlar",
          },
          {
            text: "🔧 Dosyalar",
            link: "/dersler/dosya-islemleri",
          },
          {
            text: "🔧 Modüller",
            link: "/dersler/moduller",
          },
        ],
      },
      {
        text: "📝 Ödevler",
        items: [
          {
            text: "📖 SÖZLÜK Ödevleri",
            link: "/odevler/sozlukler-odev.md",
          },
          {
            text: "⚙️ FONKSİYON Ödevleri",
            link: "/odevler/fonksiyonlar-odev.md",
          },
          {
            text: "📝 Değişkenler - Ödev 1",
            link: "/odevler/degiskenler-1.md",
          },
          {
            text: "📝 Değişkenler - Ödev 2",
            link: "/odevler/degiskenler-2.md",
          },
          {
            text: "📝 Değişkenler - Ödev 3",
            link: "/odevler/degiskenler-3.md",
          },
          {
            text: "🔀 if elif else Ödevler 1",
            link: "/odevler/if-elif-else-ek-odevler.md",
          },
          {
            text: "🔀 if elif else Ödevler 2",
            link: "/odevler/if-elif-2.md",
          },
          {
            text: "🔁 for ödevleri",
            link: "/odevler/for-odevleri.md",
          },
          {
            text: "🔄 while ödevleri",
            link: "/odevler/while-odevleri.md",
          },
          {
            text: "📋 list ödevleri",
            link: "/odevler/list-odevleri.md",
          },
          {
            text: "🔤 str ödevleri",
            link: "/odevler/str-odevleri.md",
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
