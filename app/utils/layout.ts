import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'
import type { LocalePathFunction } from '#i18n'
import { twMerge } from 'tailwind-merge'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export const cn = twMerge

export const getMainMenuItems = (t: AppTranslator, localePath: LocalePathFunction): NavigationMenuItem[] => {
  return [
    {
      label: t('menu.aboutUs'),
      to: localePath({ name: 'index' })
    },
    {
      label: t('menu.services'),
      to: localePath({ name: 'services' }),
      key: 'services',
      children: [

      ]
    },
    {
      label: t('menu.forWhom'),
      to: localePath({ name: 'for-whom' })
    },
    {
      label: t('menu.platform'),
      to: localePath({ name: 'platform' }),
      key: 'platform'
    },
    {
      label: t('menu.landingGenerator'),
      to: localePath({ name: 'landing-generator' })
    },
    {
      label: t('menu.blog'),
      to: localePath({ name: 'blog' })
    },
    {
      label: t('menu.contact'),
      to: localePath({ name: 'contact' })
    }
  ]
}

export const getFooterMenuItems = (t: AppTranslator, localePath: LocalePathFunction): NavigationMenuItem[] => {
  return [
    {
      label: t('footer.menu.privacyPolicy'),
      to: localePath({ name: 'privacy-policy' })
    },
    {
      label: t('footer.menu.termsOfService'),
      to: localePath({ name: 'terms-of-service' })
    },
    {
      label: t('footer.menu.gdpr'),
      to: localePath({ name: 'gdpr' })
    },
    {
      label: t('footer.menu.security'),
      to: localePath({ name: 'security' })
    },
  ]
}

export const getPopupLink = (popupName: string, localePath: LocalePathFunction, route: RouteLocationNormalizedLoaded) => {
  return localePath({
    ...route,
    query: {
      ...route.query,
      popup: popupName
    }
  })
}
