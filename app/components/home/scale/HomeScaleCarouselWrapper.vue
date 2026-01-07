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
  <div class="block md:grid md:grid-cols-5 xl:grid-cols-6 md:gap-x-1">
    <HomeScaleCarousel
      ref="scaleCarousel"
      class="md:col-span-4 xl:col-span-5"
      :items="items"
    />

    <div class="md:grid md:grid-rows-3 md:gap-y-1 max-md:mt-1">
      <HomeScaleCarouselControls
        class="hidden md:flex"
        @prev="handlePrev"
        @next="handleNext"
      />

      <HomeScaleGetAdviceCTA
        class="md:row-span-2"
      />
    </div>
  </div>
</template>
