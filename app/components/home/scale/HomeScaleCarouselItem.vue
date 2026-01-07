<script setup lang="ts">
import type { ScaleItemsCollectionItem } from '@nuxt/content'
import HomeScaleCarouselItemDots from '~/components/home/scale/HomeScaleCarouselItemDots.vue'

defineProps<{
  item: ScaleItemsCollectionItem
  totalItems: number
  index: number
}>()

const emit = defineEmits<{
  prevBtnClick: [event: PointerEvent]
  nextBtnClock: [event: PointerEvent]
}>()

const handlePrevClick = (e: PointerEvent) => emit('prevBtnClick', e)
const handleNextClick = (e: PointerEvent) => emit('nextBtnClock', e)
</script>

<template>
  <AppPicture
    class="md:col-span-2 md:row-span-3 "
    :images="[
      { src: item.iconMobile },
      { src: item.icon, minWidth: 768 }
    ]"
    :img-attrs="{
      alt: item.title,
      loading: 'lazy',
      decoding: 'async',
      class: 'w-full md:h-full md:object-fill'
    }"
  />

  <div class="grid grid-cols-2 mt-1 gap-x-1 md:hidden">
    <HomeScaleCarouselItemDots
      class="py-[39px] bg-[#141414] rounded-md justify-center"
      :total-items="totalItems"
      :index="index"
    />

    <HomeScaleCarouselControls
      @prev="handlePrevClick"
      @next="handleNextClick"
    />
  </div>

  <div class="md:col-span-3 bg-[#141414] max-md:mt-1 rounded-t-md md:rounded-md px-[30px] max-md:pt-[30px] md:px-[24px] lg:px-[53px] md:pt-7 md:pb-4 lg:py-[63px] flex justify-between items-center gap-x-2">
    <div
      v-sane-html="item.title"
      class="text-[25px] md:text-[22px] lg:text-[35px] leading-[1.05] w-max text-balance max-md:mb-1"
    />

    <HomeScaleCarouselItemDots
      class="hidden md:flex"
      :total-items="totalItems"
      :index="index"
    />
  </div>
  <div class="max-md:flex-1 col-span-3 row-span-2 bg-[#141414] rounded-b-md md:rounded-md px-[30px] md:px-[24px] xl:px-[53px] pb-[18px] md:py-5 xl:py-12 flex flex-col justify-between">
    <p
      v-sane-html="item.description"
      class="md:text-[16px] xl:text-[24px] leading-[1.3] text-[#888891] text-balance xl:max-w-[480px]"
    />

    <div
      v-sane-html="item.highlight"
      class="text-[#888891] max-xl:font-light text-[13px] md:text-[10px] xl:text-[18px] leading-[1.3] [&_span]:leading-[1.05] [&_span]:text-[29.46px] md:[&_span]:text-[25px] xl:[&_span]:text-[52px] [&_span]:block [&_span]:font-semibold [&_sup]:text-[13px] md:[&_sup]:text-[10px] xl:[&_sup]:text-[18px] [&_sup]:font-light xl:[&_sup]:font-medium [&_sup]:top-[-.95em] xl:[&_sup]:top-[-1.3em] [&_sub]:text-[13px] md:[&_sub]:text-[10px] xl:[&_sub]:text-[18px] [&_sub]:font-light xl:[&_sub]:font-medium [&_sub]:bottom-0 xl:[&_sub]:bottom-[.4em] [&_sub]:left-[-.59em]"
    />
  </div>
</template>
