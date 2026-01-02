<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex gap-x-2.5', $props.class)">
    <HomeHeroHighlightsItem
      v-for="key in ['security', 'gdpr', 'siteGeneration']"
      :key="key"
      :text="$t(`home.hero.highlights.${key}`)"
    />
  </div>
</template>
