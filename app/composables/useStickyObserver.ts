import { onBeforeUnmount, ref, watch } from 'vue'
import type { ShallowRef } from 'vue'

interface StickyObserverElements {
  element: ShallowRef<HTMLElement | null>
  sentinel?: Readonly<ShallowRef<HTMLElement | null>>
}

export function useStickyObserver(elements: StickyObserverElements, rootMargin = '0px', threshold = [0]) {
  const isSticky = ref(false)

  if (!import.meta.client) {
    return { isSticky }
  }

  let observer: IntersectionObserver | null = null
  let observedTarget: HTMLElement | null = null

  const cleanup = () => {
    if (observer && observedTarget) {
      observer.unobserve(observedTarget)
    }
    observer = null
    observedTarget = null
  }

  const handleEntries = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry) {
      return
    }
    if (elements.sentinel?.value) {
      isSticky.value = entry.boundingClientRect.bottom <= 0
    } else {
      isSticky.value = entry.boundingClientRect.top <= 0
    }
  }

  const start = () => {
    cleanup()
    if (!import.meta.client) {
      return
    }

    const target = elements.sentinel?.value ?? elements.element.value
    if (!target) {
      return
    }

    observer = new IntersectionObserver(handleEntries, {
      rootMargin: elements.sentinel?.value ? '0px' : rootMargin,
      threshold
    })
    observer.observe(target)
    observedTarget = target
  }

  watch(
    () => [elements.element.value, elements.sentinel?.value ?? null],
    () => {
      start()
    },
    { immediate: true }
  )

  onBeforeUnmount(() => {
    cleanup()
  })

  return { isSticky }
}
