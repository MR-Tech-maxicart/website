<script setup lang="ts">
defineProps<{
  title: string
  sectionNumber: string
  sectionKey: string
  sectionDescriptionKey: string
  sectionSubDescription?: string
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'lg:py-32 sm:gap-[50px]',
      title: 'text-[50px] sm:text-[61px] lg:text-[107px] font-semibold lg:font-normal tracking-tighter leading-none text-muted text-left',
      body: 'mt-[50px] flex',
    }"
    :title="title"
  >
    <template #body>
      <HomeSectionIdxAndKey
        class="w-1/6"
        :index="sectionNumber"
        :section-key="sectionKey"
      />

      <I18nT
        :keypath="sectionDescriptionKey"
        scope="global"
        tag="div"
        class="text-[#f8f8f8] text-[48px] leading-[120%] font-medium tracking-[-.08em] text-balance"
        :class="[
          sectionSubDescription?.length ? 'max-w-[calc(100%-36.6667%)]' : 'max-w-[67%]',
        ]"
      >
        <br />
      </I18nT>

      <p
        v-if="sectionSubDescription?.length"
        class="w-[20%] text-muted text-lg tracking-[-.09em] leading-[1.3] font-light shrink-0 ml-auto"
      >
        {{ sectionSubDescription }}
      </p>
    </template>
    <slot />
  </UPageSection>
</template>
