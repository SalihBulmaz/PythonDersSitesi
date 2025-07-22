import { defineConfig } from 'vitepress'

// To auto-generate sidebar, use a plugin or script. For now, add lesson pages manually here.
export default defineConfig({
  themeConfig: {
    sidebar: [
      {
        text: 'Dersler',
        items: [
          {
            text: 'Kurulum Aşaması',
            link: '/kurulum.md'
          },
          {
            text: 'Bilgisayar Bilimine Giriş',
            link: '/BilgisayarBilimineGiriş.md'
          },
          {
            text: 'Değişkenler ve Operatörler',
            link: '/degiskenler.md'
          }
        ]
      }
    ]
  }
})
