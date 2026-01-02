<script setup lang="ts">

</script>

<template>
  <UPageSection
    :ui="{
      root: 'sm:bottom-[calc(var(--ui-header-height)+var(--spacing)*6)] sm:pt-[calc(var(--ui-header-height)+var(--spacing)*8)] lg:bottom-[calc(var(--ui-header-height)+var(--spacing)*8)] lg:pt-[calc(var(--ui-header-height)+var(--spacing)*8)] min-h-[calc(100vh-var(--ui-header-height))]',
      container: 'py-0 md:py-20 lg:py-24 sm:gap-24 relative z-10'
    }"
  >
    <template #top>
      <NuxtImg
        src="home/hero-bg.avif"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
    </template>

    <div class="flex max-xl:flex-col gap-y-10 xl:gap-x-4 xl:justify-between">
      <div class="border-l-3 pl-3 text-base max-w-[120px] h-max font-medium">
        {{ $t('home.hero.innovate_automate') }}
      </div>

      <HomeHeroHeadingGroup class="w-5/6" />
    </div>

    <div class="flex items-center justify-between gap-4">
      <LayoutSocials class="gap-x-[11px]" />

      <div class="flex gap-x-6 gap-y-28 w-5/6">
        <HomeHeroCTAButtons class="flex-1" />

        <HomeHeroHighlights />
      </div>
    </div>
  </UPageSection>
</template>
