<script setup lang="ts">
defineProps<{
  title: string
  description: string
  headline?: string
}>()
</script>

<template>
  <section class="container mx-auto lg:px-[20px] px-4 py-16 lg:py-24">
    <UPageHero
      :title="title"
      :description="description"
      :headline="headline"
      :ui="{
        title: 'text-[#ffffff]'
      }"
    />
  </section>
</template>
