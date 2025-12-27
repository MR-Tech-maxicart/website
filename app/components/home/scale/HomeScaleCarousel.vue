<script setup lang="ts">
import type { ScaleItemsCollectionItem } from '@nuxt/content'

export type HomeScaleCarouselExposed = {
  slidePrev: () => void
  slideNext: () => void
}

defineProps<{
  items: ScaleItemsCollectionItem[]
}>()

const carousel = useTemplateRef('carousel')

const slidePrev = () => carousel.value?.emblaApi?.scrollPrev()
const slideNext = () => carousel.value?.emblaApi?.scrollNext()

defineExpose<HomeScaleCarouselExposed>({
  slidePrev,
  slideNext
})
</script>

<template>
  <UCarousel
    ref="carousel"
    v-slot="{ item }"
    loop
    :items="items"
    :ui="{
      viewport: 'h-full',
      container: 'h-full',
      item: 'h-full grid grid-cols-5 grid-rows-3 gap-1'
    }"
  >
    <HomeScaleCarouselItem
      :item="item"
      :total-items="items.length"
      :index="items.indexOf(item)"
    />
  </UCarousel>
</template>
