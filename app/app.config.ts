export default defineAppConfig({
  app: {
    socials: [
      {
        titleKey: 'telegram',
        link: 'https://t.me/max_cscart',
        icon: 'maxicart:telegram',
      },
      {
        titleKey: 'instagram',
        link: 'https://t.me/max_greekk',
        icon: 'maxicart:instagram',
      },
      {
        titleKey: 'facebook',
        link: 'https://www.facebook.com',
        icon: 'maxicart:facebook',
      },
    ],
  },
  ui: {
    header: {
      slots: {
        container: 'lg:px-[50px]'
      },
    },
    pageSection: {
      slots: {
        container: 'lg:px-[50px]'
      },
    },
    navigationMenu: {
      variants: {
        active: {
          true: {
            link: '',
          },
        }
      },
    },
  },
})
