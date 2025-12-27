<script setup lang="ts">
import type { ScaleItemsCollectionItem } from '@nuxt/content'

defineProps<{
  item: ScaleItemsCollectionItem
  totalItems: number
  index: number
}>()
</script>

<template>
  <NuxtImg
    :alt="item.title.replace('<br/>', '')"
    :src="item.icon"
    class="col-span-2 row-span-3 w-full h-full object-fill"
  />

  <div class="col-span-3 row-span-1 bg-[#141414] rounded-md px-[53px] py-[63px] flex justify-between items-center gap-x-2">
    <div
      v-sane-html="item.title"
      class="text-[35px] leading-[1.05] w-max text-balance"
    />

    <div class="flex gap-x-1">
      <div
        v-for="i in totalItems"
        :key="i"
        class="h-3 rounded-xl"
        :class="[
          index === i - 1 ? 'w-[39px] bg-primary' : 'w-3 bg-[#888891]'
        ]"
      />
    </div>
  </div>
  <div class="col-span-3 row-span-2 bg-[#141414] rounded-md px-[53px] py-12 flex flex-col justify-between">
    <p
      v-sane-html="item.description"
      class="text-[24px] leading-[1.3] text-[#888891] text-balance max-w-[480px]"
    />

    <div
      v-sane-html="item.highlight"
      class="text-[#888891] text-[18px] leading-[1.3] [&_span]:leading-[1.05] [&_span]:text-[52px] [&_span]:block [&_span]:font-semibold [&_sup]:text-[18px] [&_sup]:font-medium [&_sup]:top-[-1.3em] [&_sub]:text-[18px] [&_sub]:font-medium [&_sub]:bottom-[.4em] [&_sub]:left-[-.59em]"
    />
  </div>
</template>
