<script setup lang="ts">
import type {CapabilitiesCollectionItem} from "@nuxt/content";

defineProps<{
  cards: CapabilitiesCollectionItem[]
}>()

const activeCard = ref<number>(0)

const formatIndexString = (index: number) => String(index + 1).padStart(2, '0')
</script>

<template>
  <div class="grid grid-cols-3 gap-1">
    <div class="col-span-2 grid grid-cols-2 grid-rows-3 gap-1">
      <HomeCapabilitiesCardItem
        v-for="(card, _key) in cards"
        :key="_key"
        :card="card"
        :index-string="formatIndexString(_key)"
        :index-class="_key === 0 ? 'text-[63.13px]' : 'text-[36.98px]'"
        :is-active="activeCard === _key"
        @update:isActive="(val: boolean) => {
          if (val) {
            activeCard = _key
          }
        }"
      />
    </div>

    <HomeCapabilitiesBigCard />
  </div>
</template>
