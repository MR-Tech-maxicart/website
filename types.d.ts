import type {ComposerTranslation} from "vue-i18n";

declare global {
  type AppTranslator = ComposerTranslation<Record<string, any>, 'en'>
}
