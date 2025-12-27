<template>
  <article class="relative overflow-hidden rounded-2xl bg-white/5 text-[#ffffff] px-[25px] pt-[42px] pb-[47px]">
    <NuxtImg
      src="home/capability-card-bg.avif"
      :alt="$t('home.capabilities.bigCard.label')"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />

    <div class="relative z-10 flex h-full flex-col gap-y-9">
      <div class="text-sm text-[#ffffff] leading-[1.2] font-light tracking-[-.07em]">
        {{ $t('home.capabilities.bigCard.label') }}
      </div>

      <I18nT
        scope="global"
        keypath="home.capabilities.bigCard.title"
        class="text-[34px] font-semibold leading-[1.13] tracking-[-.07em] text-balance"
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
