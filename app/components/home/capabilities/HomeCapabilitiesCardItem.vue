<script setup lang="ts">
import type { ClassValue } from "clsx";

type CapabilityCard = {
  id: string
  key: string
  icon?: string
  titleKey: string
  descriptionKey: string
  badgeKey?: string
}

defineProps<{
  indexString: string
  indexClass: ClassValue
  card: CapabilityCard
}>()

const isActive = defineModel<boolean>('isActive', {
  default: false,
})
</script>

<template>
  <article
    class="group/card relative overflow-hidden rounded-[10px] transition-colors cursor-default select-none"
    :class="[
      isActive
        ? 'bg-primary text-white'
        : 'bg-white/5 text-white/65'
    ]"
    @mouseenter="isActive = true"
    @touchstart.passive="isActive = true"
    @mouseleave="isActive = false"
    @touchend.passive="isActive = false"
  >
    <div class="flex h-full flex-col gap-4 p-6 justify-around">
      <div class="flex items-start gap-3 text-xs uppercase tracking-[0.2em]">
        <div
          class="leading-[.95] transition border-b-2 border-b-[#ffffff]/20"
          :class="[
            isActive ? 'text-white/50' : 'text-white/20',
            indexClass,
          ]"
        >
          {{ indexString }}
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h5
          class="text-[28px] leading-[1.2] font-medium tracking-[-.09em] transition-colors"
          :class="[isActive ? 'text-white' : 'text-muted']"
        >
          {{ $t(card.titleKey) }}
        </h5>

        <p
          class="text-lg leading-[1.3] transition-colors tracking-[-.07em] font-light"
          :class="[isActive ? 'text-white' : 'text-muted']"
        >
          {{ $t(card.descriptionKey) }}
        </p>
      </div>
    </div>
  </article>
</template>
