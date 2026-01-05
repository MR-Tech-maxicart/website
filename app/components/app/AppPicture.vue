<!-- components/ResponsivePicture.vue -->
<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue'

type BreakpointImage = {
  /**
   * Path in /public or provider path
   * Example: "/home/hero/mobile-bg.png"
   */
  src: string

  /**
   * Mobile-first:
   * - first (default) image should NOT have minWidth
   * - desktop/tablet sources should have minWidth (e.g. 768, 1280)
   */
  minWidth?: number

  /**
   * Widths used to build srcset.
   * If not provided, fallback is used.
   */
  widths?: number[]

  /**
   * Sizes attribute for that specific source (optional).
   * If not provided, component-level sizes are used.
   */
  sizes?: string
}

const props = withDefaults(
  defineProps<{
    /**
     * Mobile-first array:
     * images[0] = default mobile image (no minWidth)
     * images[1...] = larger breakpoints (with minWidth)
     */
    images: BreakpointImage[]

    /**
     * Default sizes for all sources (can be overridden per image item)
     */
    sizes?: string

    /**
     * Formats:
     * - avif preferred
     * - webp fallback
     */
    preferFormat?: 'avif'
    fallbackFormat?: 'webp' | 'jpeg' | 'png'

    /**
     * Default widths for srcset generation if not provided in item.widths
     */
    defaultWidths?: number[]

    /**
     * Classes applied to <picture>
     */
    pictureClass?: string

    /**
     * Classes applied to <img>
     */
    imgClass?: string

    /**
     * Additional <img> attributes (alt, loading, decoding, aria-*, etc.)
     */
    imgAttrs?: ImgHTMLAttributes
  }>(),
  {
    sizes: '100vw',
    preferFormat: 'avif',
    fallbackFormat: 'webp',
    defaultWidths: () => [320, 480, 640, 768, 1024, 1280, 1536, 1920],
    pictureClass: '',
    imgClass: '',
    imgAttrs: () => ({ alt: '' })
  }
)

const img = useImage()

function buildSrcset(src: string, format: string, widths?: number[]) {
  const w = (widths?.length ? widths : props.defaultWidths).slice().sort((a, b) => a - b)
  return w.map(width => `${img(src, { width, format })} ${width}w`).join(', ')
}

const defaultImage = computed(() => props.images.find(i => !i.minWidth) ?? props.images[0])

// For <picture>, order matters: first matching <source> wins.
// So we sort breakpoint sources by minWidth DESC (largest first).
const breakpointImages = computed(() =>
  props.images
    .filter(i => typeof i.minWidth === 'number')
    .slice()
    .sort((a, b) => (b.minWidth! - a.minWidth!))
)
</script>

<template>
  <picture :class="pictureClass">
    <template
      v-for="(it, idx) in breakpointImages"
      :key="`${it.src}-${it.minWidth}-${idx}`"
    >
      <source
        :media="`(min-width: ${it.minWidth}px)`"
        type="image/avif"
        :sizes="it.sizes ?? sizes"
        :srcset="buildSrcset(it.src, 'avif', it.widths)"
      >
      <source
        :media="`(min-width: ${it.minWidth}px)`"
        type="image/webp"
        :sizes="it.sizes ?? sizes"
        :srcset="buildSrcset(it.src, 'webp', it.widths)"
      >
    </template>

    <source
      type="image/avif"
      :sizes="defaultImage?.sizes ?? sizes"
      :srcset="buildSrcset(defaultImage!.src, 'avif', defaultImage?.widths)"
    >
    <source
      type="image/webp"
      :sizes="defaultImage?.sizes ?? sizes"
      :srcset="buildSrcset(defaultImage!.src, 'webp', defaultImage?.widths)"
    >

    <img
      :class="imgClass"
      :src="img(defaultImage!.src, { width: 1024, format: fallbackFormat })"
      :sizes="defaultImage?.sizes ?? sizes"
      v-bind="imgAttrs"
    >
  </picture>
</template>
