<script setup lang="ts">
import type {HomeAboutCardItemProps, HomeCardAboutItemKey} from "~/components/home/about/HomeAboutCardItem.vue";

const { t } = useI18n()

const items: Record<HomeCardAboutItemKey, HomeAboutCardItemProps> = {
  zeroTrust: {
    title: t('home.about.cards.zeroTrust.title'),
    image: 'home/about/zero-trust.avif',
  },
  gdpr: {
    title: t('home.about.cards.gdpr.title'),
    image: 'home/about/gdpr.avif',
  },
  apiFirst: {
    title: t('home.about.cards.apiFirst.title'),
    image: 'home/about/api-first.avif',
  },
  cloud: {
    title: t('home.about.cards.cloud.title'),
    image: 'home/about/cloud.avif',
  },
};
</script>

<template>
<HomeSection
  :title="$t('home.about.title')"
  section-number="001"
  :section-key="$t('home.about.sectionKey')"
  :section-description="$t('home.about.sectionDescription')"
  :section-sub-description="$t('home.about.sectionSubDescription')"
>
  <div class="grid lg:grid-cols-[346fr_346fr_330fr_516fr] gap-x-1">
    <HomeAboutCardItem
      v-for="(item, key) in items"
      :key="key"
      :item-key="key"
      v-bind="item"
      class="flex-1"
    />
  </div>
</HomeSection>
</template>
