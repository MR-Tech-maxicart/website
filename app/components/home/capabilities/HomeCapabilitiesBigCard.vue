<template>
  <article class="relative overflow-hidden rounded-2xl bg-white/5 text-[#ffffff] px-[25px] pt-[42px] pb-[29px] md:pb-[14px] xl:pb-[47px]">
    <AppPicture
      :images="[
        { src: 'home/capability-card-bg-mobile.png' },
        { src: 'home/capability-card-bg-tablet.png', minWidth: 768 },
        { src: 'home/capability-card-bg.avif', minWidth: 1280 }
      ]"
      :img-attrs="{
        alt: $t('home.capabilities.bigCard.label'),
        class: 'absolute bottom-0 right-0 xl:inset-0 max-md:w-full md:h-[85%] xl:h-full xl:w-full xl:object-cover',
        loading: 'lazy',
        decoding: 'async'
      }"
    />

    <div
      class="absolute top-0 left-0 right-0 -bottom-10 bg-gradient-to-t from-[#141414] to-[#141414]/0"
    />

    <div class="relative z-10 flex h-full flex-col gap-y-9">
      <div class="text-sm text-[#ffffff] leading-[1.2] font-light tracking-[-.07em]">
        {{ $t('home.capabilities.bigCard.label') }}
      </div>

      <I18nT
        scope="global"
        keypath="home.capabilities.bigCard.title"
        class="text-[25px] md:text-[30px] xl:text-[34px] font-semibold leading-[1.13] tracking-[-.07em] text-balance"
        tag="p"
      >
        <br>
      </I18nT>

      <div class="mt-auto text-sm leading-[1.2] font-light tracking-[-.07em]">
        {{ $t('home.capabilities.bigCard.caption') }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
</script>
