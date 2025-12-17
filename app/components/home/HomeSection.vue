<script setup lang="ts">
defineProps<{
  title: string
  sectionNumber: string
  sectionKey: string
  sectionDescription: string
  sectionSubDescription?: string
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'lg:py-40 sm:gap-[50px]',
      title: 'text-[50px] sm:text-[61px] lg:text-[107px] font-semibold lg:font-medium tracking-tighter leading-none text-muted text-left',
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

      <div class="max-w-[calc(100%-36.6667%)] text-[#f8f8f8] text-[48px] leading-[120%] font-semibold text-balance">
        {{ sectionDescription }}
      </div>

      <div
        v-if="sectionSubDescription?.length"
        class="w-[20%] text-muted text-lg tracking-[-0.07em] leading-[1.3] shrink-0 text-balance"
      >
        {{ sectionSubDescription }}
      </div>
    </template>
    <slot />
  </UPageSection>
</template>
