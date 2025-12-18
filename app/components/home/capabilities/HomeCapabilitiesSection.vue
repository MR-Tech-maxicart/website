<script setup lang="ts">
const { data: cards } = await useAsyncData('capabilities', () => queryCollection('capabilities').all())
</script>

<template>
  <HomeSection
    :title="$t('home.capabilities.title')"
    section-number="002"
    :section-key="$t('home.capabilities.sectionKey')"
    section-description-key="home.capabilities.sectionDescription"
  >
    <HomeCapabilitiesCards
      v-if="cards"
      :cards="cards"
    />
  </HomeSection>
</template>
