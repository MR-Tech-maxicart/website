export default defineAppConfig({
  app: {
    socials: [
      {
        titleKey: 'telegram',
        link: 'https://t.me/max_cscart',
        icon: 'maxicart:telegram'
      },
      {
        titleKey: 'instagram',
        link: 'https://t.me/max_greekk',
        icon: 'maxicart:instagram'
      },
      {
        titleKey: 'facebook',
        link: 'https://www.facebook.com',
        icon: 'maxicart:facebook'
      }
    ]
  },
  ui: {
    button: {
      slots: {
        base: 'font-light capitalize'
      }
    },
    header: {
      slots: {
        container: 'w-full max-w-[1920px] lg:px-[50px]'
      }
    },
    pageSection: {
      slots: {
        container: 'lg:px-[20px]'
      }
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
        }
      ]
    }
    // ,
    // checkbox: {
    //   slots: {
    //     base: 'ring-primary'
    //   }
    // }
    // , formField: {
    //   slots: {
    //     label: 'leading-[1.3]'
    //   }
    // }
  }
})
