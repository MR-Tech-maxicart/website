<script setup lang="ts">
import type { SolutionsCollectionItem } from '@nuxt/content'

defineProps<{
  item: SolutionsCollectionItem
  index: string
}>()
</script>

<template>
  <div class="flex rounded-[10px] bg-gradient-to-b from-black to-[#2C3238]">
    <div class="rounded-[9px] m-[1px] bg-[#141414] flex flex-1">
      <div class="rounded-[9px] bg-[#1A1A1A] tracking-[-.05em] text-[25px] xl:text-[44.98px] py-[14px] xl:py-[18px] px-2.5 text-[#ffffff]/20 leading-[.75] shrink-0 w-[48px] xl:w-[75px] flex justify-center">
        {{ index }}
      </div>

      <div class="flex flex-col gap-y-1.5 xl:gap-y-[15px] py-[13px] xl:py-[24px] px-[15px]">
        <div class="text-[16px] xl:text-[27px] tracking-[-.07em] leading-[1.2]">
          {{ item.title }}
        </div>
        <p class="max-xl:font-light text-[14px] xl:text-[18px] tracking-[-.07em] leading-[1.3] text-[#676767] text-balance">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
