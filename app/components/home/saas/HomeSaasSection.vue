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
    container-class="sm:gap-0 gap-0"
  >
    <ul class="grid grid-cols-18 gap-1 mt-24">
      <HomeSaasItem
        v-for="(item, idx) in saasSolutions"
        :key="item.key"
        :item="item"
        :order="formatIndexString(idx)"
        :class="[
          idx === 3
            ? 'col-span-6'
            : (idx === 7 || idx === 8)
              ? 'col-span-3'
              : 'col-span-4'
        ]"
      />
    </ul>

    <div class="bg-primary rounded-[10px] uppercase leading-[1.2] text-[37px] mt-1 py-[53px] text-center">
      {{ $t('home.saas.highlightText') }}
    </div>
  </HomeSection>
</template>
