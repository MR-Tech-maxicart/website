// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Nuxt exposes lazy components via `#components` per Nuxt UI docs.
import { LazySlideoverContactForm } from '#components'
import { useNuxtApp } from '#app'
import { useOverlay } from '#ui/composables'

export type OverlayManager = {
  contact: ReturnType<ReturnType<typeof useOverlay>['create']>
}

export const createOverlayManager = (): OverlayManager => {
  const overlay = useOverlay()

  return {
    contact: overlay.create(LazySlideoverContactForm)
  }
}

export const useAppOverlays = (): OverlayManager => {
  const nuxtApp = useNuxtApp()

  if (!nuxtApp.$appOverlays) {
    throw new Error('App overlay manager is not initialized.')
  }

  return nuxtApp.$appOverlays
}

export const useContactSlideover = () => {
  const overlays = useAppOverlays()

  return overlays.contact
}
