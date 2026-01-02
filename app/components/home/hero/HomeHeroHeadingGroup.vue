<script setup lang="ts">

</script>

<template>
  <div>
    <I18nT
      scope="global"
      keypath="home.hero.heading.title"
      tag="h1"
      class="text-[50px] md:text-[61px] xl:text-[107px] font-medium tracking-[-0.05em] leading-none"
    >
      <span class="text-primary">{{ $t('home.hero.heading.titleHighlight') }}</span>
    </I18nT>

    <I18nT
      scope="global"
      keypath="home.hero.heading.subtitle"
      tag="p"
      class="mt-6 xl:mt-3 text-pretty font-medium text-[18px] md:text-[20px] xl:text-[28px] xl:max-w-[840px] tracking-[-.07em] md:tracking-[-.09em] leading-[1.3] xl:leading-[116%]"
      role="heading"
      aria-level="3"
    />
  </div>
</template>
