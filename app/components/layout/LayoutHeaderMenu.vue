<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const menuItems = getMainMenuItems(t, localePath)
</script>

<template>
  <UNavigationMenu
    :items="menuItems"
    color="neutral"
    :ui="{
      list: 'gap-x-3',
      link: 'relative text-lg font-light text-[#ffffff] capitalize',
    }"
  />
</template>
