// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
  ],

  devtools: {
    enabled: true
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

  fonts: {
    // families: gilroyVariants.map((variant) => ({
    //   name: 'Gilroy',
    //   global: true,
    //   weight: variant.weight,
    //   style: 'normal',
    //   display: 'swap',
    //   src: [
    //     { url: `fonts/${variant.file}.woff2`, format: 'woff2' },
    //     { url: `fonts/${variant.file}.woff`, format: 'woff' }
    //   ]
    // }))
  },
})
