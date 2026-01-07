<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  totalItems: number
  index: number
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex gap-x-1', $props.class)">
    <div
      v-for="i in totalItems"
      :key="i"
      class="h-[11.33px] md:h-[7px] lg:h-3 rounded-xl"
      :class="[
        index === i - 1 ? 'w-[36px] md:w-[23px] lg:w-[39px] bg-primary' : 'w-[11.33px] md:w-[7px] lg:w-3 bg-[#888891]'
      ]"
    />
  </div>
</template>
