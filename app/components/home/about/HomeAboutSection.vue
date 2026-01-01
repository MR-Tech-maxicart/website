<script setup lang="ts">
import type { HomeAboutCardItemProps, HomeCardAboutItemKey } from '~/components/home/about/HomeAboutCardItem.vue'
import type { HTMLAttributes } from 'vue'

defineProps<{
  containerClass?: HTMLAttributes['class']
}>()

const items: Record<HomeCardAboutItemKey, HomeAboutCardItemProps> = {
  zeroTrust: {
    titleKey: 'home.about.cards.zeroTrust.title',
    image: 'home/about/zero-trust.avif'
  },
  gdpr: {
    titleKey: 'home.about.cards.gdpr.title',
    image: 'home/about/gdpr.avif'
  },
  apiFirst: {
    titleKey: 'home.about.cards.apiFirst.title',
    image: 'home/about/api-first.avif'
  },
  cloud: {
    titleKey: 'home.about.cards.cloud.title',
    image: 'home/about/cloud.avif'
  }
}
</script>

<template>
  <HomeSection
    :title="$t('home.about.title')"
    section-number="001"
    :section-key="$t('home.about.sectionKey')"
    section-description-key="home.about.sectionDescription"
    :section-sub-description="$t('home.about.sectionSubDescription')"
    :container-class="containerClass"
  >
    <div class="grid lg:grid-cols-[346fr_346fr_330fr_516fr] gap-x-1">
      <HomeAboutCardItem
        v-for="(item, key) in items"
        :key="key"
        :item-key="key"
        v-bind="item"
        class="flex-1 h-[500px]"
      />
    </div>
  </HomeSection>
</template>
