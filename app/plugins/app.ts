import type { App } from 'vue'
import DOMPurify from 'dompurify'

export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre',
  hooks: {
    'app:created': (vueApp: App) => {
      vueApp.directive('sane-html', (el, bindings) => {
        el.innerHTML = DOMPurify.sanitize(bindings.value as string)
      })
    }
  }
})
