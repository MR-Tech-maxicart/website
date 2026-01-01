<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

defineProps<{
  menuItems: NavigationMenuItem[]
}>()
</script>

<template>
  <UNavigationMenu
    :items="menuItems"
    color="neutral"
    :ui="{
      list: 'gap-x-3',
      link: 'text-lg font-light text-[#ffffff] capitalize'
    }"
  />
</template>
