<script setup lang="ts">
import type { SolutionsCollectionItem } from '@nuxt/content'

defineProps<{
  item: SolutionsCollectionItem
  index: string
}>()
</script>

<template>
  <div class="bg-[#141414] rounded-[10px] flex">
    <div class="rounded-[10px] bg-[#1A1A1A] tracking-[-.05em] text-[44.98px] py-[18px] px-2.5 text-[#ffffff]/20 leading-[.74] shrink-0 w-[75px] flex justify-center">
      {{ index }}
    </div>

    <div class="flex flex-col gap-y-[15px] pt-[24px] px-[15px]">
      <div class="text-[27px] tracking-[-.07em] leading-[.74]">
        {{ item.title }}
      </div>
      <p class="text-lg tracking-[-.07em] leading-[1.3] text-[#676767] text-balance">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
