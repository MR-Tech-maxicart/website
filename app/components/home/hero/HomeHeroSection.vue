<script setup lang="ts">

</script>

<template>
  <UPageSection
    :ui="{
      root: 'static min-h-[calc(100vh-var(--ui-header-height))]',
      container: 'py-0 lg:py-0 xl:py-24 sm:gap-24 relative z-10'
    }"
  >
    <template #top>
      <NuxtImg
        src="home/hero-bg.avif"
        class="absolute top-0 left-0 min-h-dvh min-w-dvw"
      />
    </template>

    <div class="flex gap-4 justify-between">
      <div class="border-l-3 pl-3 text-base max-w-[120px] h-max font-medium">
        {{ $t('home.hero.innovate_automate') }}
      </div>

      <HomeHeroHeadingGroup class="w-5/6" />
    </div>

    <div class="flex items-center justify-between gap-4">
      <HomeHeroSocials />

      <div class="flex gap-x-6 gap-y-28 w-5/6">
        <HomeHeroCTAButtons class="flex-1" />

        <HomeHeroHighlights />
      </div>
    </div>
  </UPageSection>
</template>
