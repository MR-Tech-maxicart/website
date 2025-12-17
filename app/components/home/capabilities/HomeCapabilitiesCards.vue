<script setup lang="ts">
import type {CapabilitiesCollectionItem} from "@nuxt/content";

defineProps<{
  cards: CapabilitiesCollectionItem[]
}>()

</script>

<template>
  <div class="grid grid-cols-3 gap-1">
    <div class="col-span-2 grid grid-cols-2 grid-rows-3 gap-1">
      <HomeCapabilitiesCardItem
        v-for="(card, _key) in cards"
        :key="_key"
        :card="card"
      />
    </div>

    <HomeCapabilitiesBigCard />
  </div>
</template>
