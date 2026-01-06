<script setup lang="ts">
import type { CapabilitiesCollectionItem } from '@nuxt/content'

defineProps<{
  cards: CapabilitiesCollectionItem[]
}>()

const activeCard = ref<number>(0)

const formatIndexString = (index: number) => String(index + 1).padStart(2, '0')
</script>

<template>
  <div class="grid xl:grid-cols-3 gap-1">
    <div class="xl:col-span-2 grid md:grid-cols-3 xl:grid-cols-2 xl:grid-rows-3 gap-1">
      <HomeCapabilitiesCardItem
        v-for="(card, _key) in cards"
        :key="_key"
        :card="card"
        :index-string="formatIndexString(_key)"
        :index-class="_key === 0 ? 'text-[50.65px] xl:text-[63.13px]' : 'text-[37.46px] xl:text-[36.98px] h-[45px] '"
        :is-active="activeCard === _key"
        @update:is-active="(val: boolean) => {
          if (val) {
            activeCard = _key as number
          }
        }"
      />
    </div>

    <HomeCapabilitiesBigCard class="max-md:h-[638px] max-xl:h-[348px]" />
  </div>
</template>
