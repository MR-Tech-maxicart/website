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
    <div class="grid grid-cols-3 grid-rows-5 gap-1">
      <NuxtImg
        class="row-span-5 w-full h-full object-fill"
        src="home/solutions.png"
      />

      <HomeSolutionsListItem
        v-for="(solution, idx) in solutions"
        :key="idx"
        :item="solution"
        :index="formatIndexString(idx)"
      />

      <div class="col-span-2 bg-primary rounded-[10px] text-pretty text-2xl leading-[1.5] flex items-center px-[14px]">
        {{ $t('home.solutions.highlightText') }}
      </div>
    </div>
  </HomeSection>
</template>
