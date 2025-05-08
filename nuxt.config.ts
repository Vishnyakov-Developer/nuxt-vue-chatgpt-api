
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    secretKey: process.env.CHATGPT_API_KEY || 'your-secret-key'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-aos'],
  app: {
    head: {
      title: 'CHAT GPT / NUXT 3 / VUE 3',
      meta: [
        { name: 'description', content: 'Denis Vishnyakov' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
});
