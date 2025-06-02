// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: true, // включен автоимпорт
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/', // Папка, где лежат JSON-файлы
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ua', name: 'Українська', file: 'uk.json' }
    ]
  }
})