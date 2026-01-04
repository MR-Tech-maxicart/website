<script setup lang="ts">
import type { HomeAboutCardItemProps, HomeCardAboutItemKey } from '~/components/home/about/HomeAboutCardItem.vue'
import type { HTMLAttributes } from 'vue'

defineProps<{
  containerClass?: HTMLAttributes['class']
}>()

const items: Record<HomeCardAboutItemKey, HomeAboutCardItemProps> = {
  zeroTrust: {
    titleKey: 'home.about.cards.zeroTrust.title',
    image: 'home/about/zero-trust.avif',
    imageTablet: 'home/about/zero-trust-tablet.png',
    imageMobile: 'home/about/zero-trust-mobile.png'
  },
  gdpr: {
    titleKey: 'home.about.cards.gdpr.title',
    image: 'home/about/gdpr.avif',
    imageTablet: 'home/about/gdpr-tablet.png',
    imageMobile: 'home/about/gdpr-mobile.png'
  },
  apiFirst: {
    titleKey: 'home.about.cards.apiFirst.title',
    image: 'home/about/api-first.avif',
    imageTablet: 'home/about/api-first-tablet.png',
    imageMobile: 'home/about/api-first-mobile.png'
  },
  cloud: {
    titleKey: 'home.about.cards.cloud.title',
    image: 'home/about/cloud.avif',
    imageTablet: 'home/about/cloud-tablet.png',
    imageMobile: 'home/about/cloud-mobile.png'
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
    <div class="md:grid md:grid-cols-[346fr_346fr_330fr_516fr] md:gap-x-1 max-md:space-y-1">
      <HomeAboutCardItem
        v-for="(item, key) in items"
        :key="key"
        :item-key="key"
        v-bind="item"
        class="block md:flex-1 h-[358px] md:h-[222px] lg:h-[500px]"
      />
    </div>
  </HomeSection>
</template>
