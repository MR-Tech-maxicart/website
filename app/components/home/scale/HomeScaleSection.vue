<script setup lang="ts">
const { data: scales } = await useAsyncData('scaleItems', () => queryCollection('scaleItems').all())
</script>

<template>
  <HomeSection
    :title="$t('home.scale.title')"
    section-number="003"
    :section-key="$t('home.scale.sectionKey')"
    section-description-key="home.scale.sectionDescription"
  >
    <HomeScaleCarouselWrapper
      v-if="scales"
      :items="scales"
    />
  </HomeSection>
</template>
