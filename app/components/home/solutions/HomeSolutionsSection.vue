<script setup lang="ts">
const { data: solutions } = await useAsyncData('solutions', () => queryCollection('solutions').all())

const formatIndexString = (index: number) => String(index + 1).padStart(2, '0')
</script>

<template>
  <HomeSection
    :title="$t('home.solutions.title')"
    section-number="004"
    :section-key="$t('home.solutions.sectionKey')"
    section-description-key="home.solutions.sectionDescription"
    :section-sub-description="$t('home.solutions.sectionSubDescription')"
  >
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-1">
      <AppPicture
        class="xl:row-span-5"
        :images="[
          { src: 'home/solutions-mobile.png' },
          { src: 'home/solutions-tablet.png', minWidth: 640 },
          { src: 'home/solutions.png', minWidth: 1280 }
        ]"
        :img-attrs="{
          alt: $t('home.solutions.title'),
          class: 'w-full h-full object-fill',
          loading: 'lazy',
          decoding: 'async'
        }"
      />

      <div class="xl:col-span-2 bg-primary rounded-[10px] text-pretty max-xl:font-medium text-[14px] xl:text-[24px] leading-[1.5] flex max-xl:uppercase xl:items-center py-[16px] xl:py-6 px-[11px] xl:px-[14px] max-sm:order-12 xl:order-12">
        {{ $t('home.solutions.highlightText') }}
      </div>

      <HomeSolutionsListItem
        v-for="(solution, idx) in solutions"
        :key="idx"
        :item="solution"
        :index="formatIndexString(idx)"
      />
    </div>
  </HomeSection>
</template>
