<script setup lang="ts">
const emit = defineEmits<{
  prev: [event: PointerEvent]
  next: [event: PointerEvent]
}>()

const handlePrevClick = (e: PointerEvent) => emit('prev', e)
const handleNextClick = (e: PointerEvent) => emit('next', e)
</script>

<template>
  <div class="bg-[#141414] rounded-md px-3 py-[70px] flex items-center gap-x-12 justify-center">
    <UButton
      variant="ghost"
      class="cursor-pointer"
      @click="(e) => handlePrevClick(e as PointerEvent)"
    >
      <UIcon
        name="maxicart:arrow-left-long"
        class="[&_path]:fill-primary size-12"
      />
    </UButton>

    <UButton
      variant="ghost"
      class="cursor-pointer"
      @click="(e) => handleNextClick(e as PointerEvent)"
    >
      <UIcon
        name="maxicart:arrow-right-long"
        class="[&_path]:fill-primary size-12"
      />
    </UButton>
  </div>
</template>
