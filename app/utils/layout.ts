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
      // to: localePath({ name: 'index' }),
      to: 'https://example.com',
      key: 'services',
      children: [

      ]
    },
    {
      label: t('menu.forWhom'),
      // to: localePath({ name: 'index' }),
      to: 'https://example.com'
    },
    {
      label: t('menu.platform'),
      // to: localePath({ name: 'index' }),
      to: 'https://example.com',
      key: 'platform'
    },
    {
      label: t('menu.landingGenerator'),
      // to: localePath({ name: 'index' }),
      to: 'https://example.com'
    },
    {
      label: t('menu.blog'),
      to: localePath({ name: 'blog' })
    }
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
