<script setup lang="ts">
import type { ClassValue } from 'clsx'
import type { CapabilitiesCollectionItem } from '@nuxt/content'

interface CapabilityCard extends CapabilitiesCollectionItem {
  id: string
  badgeKey?: string
}

defineProps<{
  indexString: string
  indexClass: ClassValue
  card: CapabilityCard
}>()

const isActive = defineModel<boolean>('isActive', {
  default: false
})
</script>

<template>
  <article
    class="group/card relative overflow-hidden rounded-[10px] transition-colors cursor-default max-xl:break-inside-avoid select-none flex h-full flex-col gap-y-5 xl:gap-y-7 px-[13px] xl:px-[17px] py-8 xl:py-7 xl:justify-around"
    :class="[
      isActive
        ? 'bg-primary text-[#ffffff]'
        : 'bg-white/5 text-[#ffffff]/65'
    ]"
    @mouseenter="isActive = true"
    @touchstart.passive="isActive = true"
    @mouseleave="isActive = false"
    @touchend.passive="isActive = false"
  >
    <div
      class="leading-[.9] border-b-2 border-b-[#ffffff]/20 w-max transition-colors"
      :class="[
        isActive ? 'text-[#ffffff]/50' : 'text-[#ffffff]/20',
        indexClass
      ]"
    >
      <span class="xl:relative xl:left-1 max-xl:font-medium">{{ indexString }}</span>
    </div>

    <div class="flex flex-col gap-y-1">
      <h5
        class="text-[25px] md:text-[22px] xl:text-[28px] leading-[1.2] font-medium tracking-[-.07em] xl:tracking-[-.09em] transition-colors"
        :class="[isActive ? 'text-[#ffffff]' : 'text-muted']"
      >
        {{ $t(card.titleKey) }}
      </h5>

      <p
        class="text-[16px] xl:text-[18px] leading-[1.3] transition-colors tracking-[-.07em] font-light"
        :class="[isActive ? 'text-[#ffffff]' : 'text-muted']"
      >
        {{ $t(card.descriptionKey) }}
      </p>
    </div>
  </article>
</template>
