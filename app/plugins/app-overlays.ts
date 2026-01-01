export default defineNuxtPlugin((nuxtApp) => {
  const overlays = nuxtApp.vueApp.runWithContext(() => createOverlayManager())

  if (import.meta.client) {
    const router = useRouter()
    const route = useRoute()

    type PopupController = {
      overlay: OverlayManager['contact']
      routeClosing: boolean
    }

    const popupControllers: Record<string, PopupController> = {
      contact: {
        overlay: overlays.contact,
        routeClosing: false
      }
    }

    const normalizePopup = (value: unknown): string | null => {
      if (!value) {
        return null
      }
      if (Array.isArray(value)) {
        return value[0] ?? null
      }
      return String(value)
    }

    const clearPopupQuery = (popupName: string) => {
      const current = normalizePopup(route.query.popup)
      if (current !== popupName) {
        return
      }

      const query = { ...route.query }
      delete query.popup
      router.replace({ query })
    }

    watch(
      () => route.query.popup,
      (popupValue) => {
        const popupName = normalizePopup(popupValue)

        if (!popupName) {
          Object.values(popupControllers).forEach((controller) => {
            if (controller.overlay.isOpen) {
              controller.routeClosing = true
              controller.overlay.close()
            }
          })
          return
        }

        const controller = popupControllers[popupName]
        if (!controller) {
          return
        }

        Object.entries(popupControllers).forEach(([name, otherController]) => {
          if (name !== popupName && otherController.overlay.isOpen) {
            otherController.routeClosing = true
            otherController.overlay.close()
          }
        })

        if (controller.overlay.isOpen) {
          return
        }

        const instance = controller.overlay.open()
        controller.routeClosing = false

        instance.finally(() => {
          if (controller.routeClosing) {
            controller.routeClosing = false
            return
          }

          clearPopupQuery(popupName)
        })
      },
      { immediate: true }
    )
  }

  return {
    provide: {
      appOverlays: overlays
    }
  }
})
