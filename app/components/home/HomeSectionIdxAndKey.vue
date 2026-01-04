<script setup lang="ts">
defineProps<{
  index: string | number
  sectionKey?: string
}>()
</script>

<template>
  <div class="border-l-[1.5px] lg:border-l-3 flex flex-col gap-y-1 pl-3.5 leading-[1.0214] h-max">
    <span class="font-medium text-[16px] sm:text-[20px] lg:text-[28px] tracking-[-.07em]">
      {{ index }}
    </span>
    <slot
      v-if="$slots.sectionKey"
      name="sectionKey"
    />
    <span
      v-else
      class="text-muted text-[13px] lg:text-[19px] tracking-[-.07em]"
    >
      {{ sectionKey }}
    </span>
  </div>
</template>
