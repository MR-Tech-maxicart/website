<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

defineProps<{
  menuItems: NavigationMenuItem[]
}>()
</script>

<template>
  <UNavigationMenu
    :items="menuItems"
    orientation="vertical"
    :ui="{
      link: 'text-[18px] font-light text-[#ffffff] capitalize'
    }"
  />
</template>
