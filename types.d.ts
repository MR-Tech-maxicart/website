import type { ComposerTranslation } from 'vue-i18n'
import type { OverlayManager } from '~/composables/useAppOverlays'

declare global {
  type AppTranslator = ComposerTranslation<Record<string, string>, 'en'>
}

declare module '#app' {
  interface NuxtApp {
    $appOverlays?: OverlayManager
  }
}
