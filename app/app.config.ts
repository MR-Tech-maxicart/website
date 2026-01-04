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
    icons: {
      menu: 'maxicart:menu'
    },
    button: {
      slots: {
        base: 'font-light capitalize'
      }
    },
    header: {
      slots: {
        container: 'w-full max-w-[1920px] sm:px-16 lg:px-[50px]'
      }
    },
    pageSection: {
      slots: {
        container: 'lg:px-[20px] sm:px-16'
      }
    },
    slideover: {
      slots: {
        title: 'text-[#ffffff]'
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
