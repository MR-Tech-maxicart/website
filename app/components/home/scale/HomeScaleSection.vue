<script setup lang="ts">
const { data: scales } = await useAsyncData('scaleItems', () => queryCollection('scaleItems').all())
</script>

<template>
  <HomeSection
    :title="$t('home.scale.title')"
    section-number="003"
    section-key="home.scale.sectionKey"
    section-description-key="home.scale.sectionDescription"
  >
    <template #sectionIdAndKey="{ sectionKey, sectionNumber }">
      <HomeSectionIdxAndKey
        :index="sectionNumber"
        class="w-1/4 sm:w-1/6 shrink-0"
      >
        <template #sectionKey>
          <I18nT
            :keypath="sectionKey"
            scope="global"
            tag="span"
            class="text-muted text-[19px] tracking-[-.07em]"
          >
            <br>
          </I18nT>
        </template>
      </HomeSectionIdxAndKey>
    </template>

    <HomeScaleCarouselWrapper
      v-if="scales"
      :items="scales"
    />
  </HomeSection>
</template>
