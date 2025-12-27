<script setup lang="ts">

</script>

<template>
  <div>
    <I18nT
      scope="global"
      keypath="home.hero.heading.title"
      tag="h1"
      class="text-[107px] font-medium tracking-tighter leading-none"
    >
      <span class="text-primary">{{ $t('home.hero.heading.titleHighlight') }}</span>
      <br>
    </I18nT>

    <I18nT
      scope="global"
      keypath="home.hero.heading.subtitle"
      tag="p"
      class="mt-3 font-medium text-[28px] max-w-[840px] tracking-[-.09em] leading-[116%]"
      role="heading"
      aria-level="3"
    >
      <br>
    </I18nT>
  </div>
</template>
