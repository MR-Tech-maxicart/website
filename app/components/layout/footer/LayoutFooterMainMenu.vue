<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const menuItems = getMainMenuItems(t, localePath)
</script>

<template>
  <nav>
    <ul class="grid grid-cols-3 gap-rows-3 grid-flow-row gap-y-[13px] gap-x-20">
      <li
        v-for="(menuItem, idx) in menuItems"
        :key="idx"
      >
        <NuxtLink
          :to="menuItem.to"
          class="font-medium text-lg"
        >
          {{ menuItem.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
