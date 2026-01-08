<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  prev: [event: PointerEvent]
  next: [event: PointerEvent]
}>()

const handlePrevClick = (e: PointerEvent) => emit('prev', e)
const handleNextClick = (e: PointerEvent) => emit('next', e)
</script>

<template>
  <div
    :class="cn('flex bg-[#141414] rounded-[10px] px-3 md:py-[33px] lg:py-[70px] items-center gap-x-4 md:gap-x-6 lg:gap-x-12 justify-center', $props.class)"
  >
    <UButton
      variant="ghost"
      class="cursor-pointer"
      @click="(e) => handlePrevClick(e as PointerEvent)"
    >
      <UIcon
        name="maxicart:arrow-left-long"
        class="[&_path]:fill-primary size-[31px] md:size-6 lg:size-12"
      />
    </UButton>

    <UButton
      variant="ghost"
      class="cursor-pointer"
      @click="(e) => handleNextClick(e as PointerEvent)"
    >
      <UIcon
        name="maxicart:arrow-right-long"
        class="[&_path]:fill-primary size-[31px] md:size-6 lg:size-12"
      />
    </UButton>
  </div>
</template>
