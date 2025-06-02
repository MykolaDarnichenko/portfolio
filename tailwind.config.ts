import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue', // если появится
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif']
      },
      colors: {
        dark: '#21243D',
        light: '#8695A4'
      },
      screens: {
        'xs': '375px',    // смартфоны
        'sm': '640px',    // маленькие планшеты
        'md': '768px',    // планшеты
        'lg': '1024px',   // ноутбуки
        'xl': '1280px',   // десктоп
        '2xl': '1536px',  // большие мониторы
        '3xl': '1800px'   // ультраширокие
      }
    },
  },
  plugins: [],
} satisfies Config

