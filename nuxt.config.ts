// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-studio',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'GENLOFT',
    url: process.env.SITE_URL ?? 'http://localhost:3000'
  },

  colorMode: {
    preference: 'dark'
  },

  runtimeConfig: {
    googleServiceAccountJsonPath: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH,
    googleSheetsSpreadsheetId: process.env.GOOGLE_SHEET_ID,
    googleSheetsRange: process.env.GOOGLE_SHEETS_RANGE || 'Submits!A1'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },

  icon: {
    mode: 'svg',
    customCollections: [{
      prefix: 'maxicart',
      dir: './app/assets/icons'
    }]
  },

  image: {
    format: ['avif', 'webp']
  },

  studio: {
    route: '/_studio',

    repository: {
      provider: 'github',
      owner: 'MR-Tech-maxicart',
      repo: 'website'
    }
  }
})
