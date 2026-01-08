<script setup lang="ts">
const { data: saasSolutions } = await useAsyncData('saasSolutions', () =>
  queryCollection('saasSolutions').all()
)

const formatIndexString = (index: number) => String(index + 1).padStart(3, '0')
</script>

<template>
  <HomeSection
    :title="$t('home.saas.title')"
    section-number="005"
    :section-key="$t('home.saas.sectionKey')"
    section-description-key="home.saas.sectionDescription"
    :section-sub-description="$t('home.saas.sectionSubDescription')"
    container-class="gap-0 sm:gap-0 lg:gap-0"
  >
    <ul class="grid grid-cols-2 md:grid-cols-20 xl:grid-cols-18 gap-1 mt-24">
      <HomeSaasItem
        v-for="(item, idx) in saasSolutions"
        :key="item.key"
        :item="item"
        :order="formatIndexString(idx)"
        :class="[
          idx === 3
            ? 'xl:col-span-6'
            : (idx === 7 || idx === 8)
              ? 'xl:col-span-3'
              : 'xl:col-span-4',
          idx < 4 ? 'md:col-span-5' : 'md:col-span-4'
        ]"
      />

      <HomeSaasHighlightText class="flex items-center md:hidden text-[20px] px-2" />
    </ul>

    <HomeSaasHighlightText class="hidden md:block" />
  </HomeSection>
</template>
