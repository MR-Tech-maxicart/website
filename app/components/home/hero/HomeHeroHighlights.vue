<script setup lang="ts">

</script>

<template>
  <div class="flex gap-x-2.5">
    <HomeHeroHighlightsItem
      v-for="key in ['security', 'gdpr', 'siteGeneration']"
      :key="key"
      :text="$t(`home.hero.highlights.${key}`)"
    />
  </div>
</template>
