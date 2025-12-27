<script setup lang="ts">
import type { SaasSolutionsCollectionItem } from '@nuxt/content'

defineProps<{
  item: SaasSolutionsCollectionItem
  order: string
}>()
</script>

<template>
  <li class="p-[1px] bg-gradient-to-b from-black to-[#2C3238] rounded-[10px]">
    <div class="bg-[#141414] rounded-[9px] h-full w-full flex flex-col gap-y-[50px] p-[19px]">
      <div class="text-[#888891] text-[29px] leading-[1.2] tracking-[-.07em] font-light">
        {{ order }}
      </div>

      <div class="text-[29px] tracking-[-.07em] leading-[1.2] font-medium">
        {{ item.title }}
      </div>
    </div>
  </li>
</template>
