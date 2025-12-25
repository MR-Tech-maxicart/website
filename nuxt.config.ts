// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-studio',
  ],

  image: {
    format: ['avif', 'webp'],
  },

  devtools: {
    enabled: false,
  },

  css: ['~/assets/css/main.css'],

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
      { code: 'en', name: 'English', file: 'en.json' },
    ],
  },

  icon: {
    mode: 'svg',
    customCollections: [{
      prefix: 'maxicart',
      dir: './app/assets/icons',
    }]
  },

  studio: {
    route: '/_studio',

    repository: {
      provider: 'github',
      owner: 'MR-Tech-maxicart',
      repo: 'website',
    },
  },
})
