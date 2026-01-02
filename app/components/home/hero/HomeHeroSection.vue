<script setup lang="ts">

</script>

<template>
  <UPageSection
    :ui="{
      root: 'sm:bottom-[calc(var(--ui-header-height)+var(--spacing)*6)] sm:pt-[calc(var(--ui-header-height)+var(--spacing)*8)] lg:bottom-[calc(var(--ui-header-height)+var(--spacing)*8)] lg:pt-[calc(var(--ui-header-height)+var(--spacing)*8)] min-h-[calc(100vh-var(--ui-header-height))]',
      container: 'py-0 py-16 md:py-20 lg:py-24 sm:gap-24 relative z-10'
    }"
  >
    <template #top>
      <AppPicture
        picture-class="absolute inset-0 w-full h-full"
        img-class="w-full h-full object-cover"
        :img-attrs="{ 'alt': '', 'aria-hidden': 'true', 'loading': 'eager', 'decoding': 'async' }"
        sizes="100vw"
        :images="[
          { src: '/home/hero/mobile-bg.png', widths: [360, 430, 640, 750] },
          { src: '/home/hero/tablet-bg.png', minWidth: 768, widths: [768, 1024] },
          { src: '/home/hero/hero-bg.avif', minWidth: 1024, widths: [1024, 1536, 1920, 2560] }
        ]"
      />
    </template>

    <div class="flex max-lg:flex-col gap-y-10 lg:gap-x-4 lg:justify-between">
      <div class="border-l-3 pl-3 text-base max-w-[120px] h-max font-medium">
        {{ $t('home.hero.innovate_automate') }}
      </div>

      <HomeHeroHeadingGroup class="lg:w-5/6" />
    </div>

    <div class="flex flex-wrap items-center justify-between gap-y-26">
      <HomeHeroCTAButtons class="xl:flex-1 xl:order-1 w-full xl:w-auto" />

      <LayoutSocials class="gap-x-[11px] xl:w-1/6 xl:order-0 hidden sm:flex" />

      <HomeHeroHighlights class="order-2 hidden sm:flex" />
    </div>
  </UPageSection>
</template>
