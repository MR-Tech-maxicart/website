<script setup lang="ts">
import type { ScaleItemsCollectionItem } from '@nuxt/content'
import type { HomeScaleCarouselExposed } from '~/components/home/scale/HomeScaleCarousel.vue'
import HomeScaleGetAdviceCTA from '~/components/home/scale/HomeScaleGetAdviceCTA.vue'

defineProps<{
  items: ScaleItemsCollectionItem[]
}>()

const carousel = useTemplateRef<HomeScaleCarouselExposed>('scaleCarousel')

const handlePrev = () => carousel.value?.slidePrev()
const handleNext = () => carousel.value?.slideNext()
</script>

<template>
  <div class="grid grid-cols-6 gap-x-1">
    <HomeScaleCarousel
      ref="scaleCarousel"
      class="col-span-5"
      :items="items"
    />

    <div class="grid grid-rows-3 gap-y-1">
      <HomeScaleCarouselControls
        @prev="handlePrev"
        @next="handleNext"
      />

      <HomeScaleGetAdviceCTA
        class="row-span-2"
      />
    </div>
  </div>
</template>
