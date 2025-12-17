<template>
  <article class="relative overflow-hidden rounded-2xl bg-white/5 text-white">
    <NuxtImg
      src="home/capability-card-bg.avif"
      :alt="$t('home.capabilities.bigCard.label')"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />

    <div class="absolute inset-0 bg-black/55" />

    <div class="relative flex h-full flex-col gap-6 p-8">
      <div class="text-sm text-white/80">
        {{ $t('home.capabilities.bigCard.label') }}
      </div>

      <p class="text-4xl font-semibold leading-tight tracking-tight">
        {{ $t('home.capabilities.bigCard.title') }}
      </p>

      <div class="mt-auto text-sm text-white/80">
        {{ $t('home.capabilities.bigCard.caption') }}
      </div>
    </div>
  </article>
</template>
