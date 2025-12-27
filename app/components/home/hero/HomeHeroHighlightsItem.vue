<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <UButton
    as="span"
    variant="outline"
    color="neutral"
    class="cursor-default px-2.5 py-3 h-max text-[#5E5E5E] max-w-[125px] bg-[#D7D7D7]/10 active:bg-primary ring-[#8D8D8D] font-medium text-base leading-[107%] tracking-tighter hover:bg-primary hover:text-white hover:ring-primary transition-colors normal-case"
  >
    {{ text }}
  </UButton>
</template>
