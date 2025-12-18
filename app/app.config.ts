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
    button: {
      slots: {
        base: 'font-light',
      },
    },
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
      compoundVariants: [
        {
          variant: 'pill',
          active: true,
          highlight: false,
          class: {
            link: 'before:bg-[#ffffff]/10'
          }
        },
      ],
    },
  },
})
