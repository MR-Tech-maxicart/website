<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const menuItems = getMainMenuItems(t, localePath)
</script>

<template>
  <nav>
    <ul class="grid grid-cols-[max-content_max-content] md:grid-cols-[max-content_max-content_max-content] gap-rows-3 grid-flow-row gap-y-[15px] md:gap-y-2 lg:gap-y-[13px] gap-x-[15px] md:gap-x-10 lg:gap-x-20">
      <li
        v-for="(menuItem, idx) in menuItems"
        :key="idx"
        class="max-md:max-w-min min-w-[70px]"
      >
        <NuxtLink
          :to="menuItem.to"
          class="font-medium text-sm md:text-[18px]"
        >
          {{ menuItem.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
