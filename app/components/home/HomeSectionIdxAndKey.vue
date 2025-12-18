<script setup lang="ts">
defineProps<{
  index: string | number
  sectionKey: string
}>()
</script>

<template>
<div class="border-l-3 flex flex-col pl-3.5 tracking-[-.09em] leading-[1.0214] h-max">
  <span class="font-medium text-[28px]">
    {{ index }}
  </span>
  <span class="text-muted lowercase text-[19px]">
    {{ sectionKey }}
  </span>
</div>
</template>
