<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const menuItems = getFooterMenuItems(t, localePath)
</script>

<template>
<nav>
  <ul class="flex gap-x-2 -ml-0.5 items-center">
    <li
      v-for="(menuItem, idx) in menuItems"
      :key="idx"
      :class="[
        idx !== 0 ? `relative before:content-['·'] before:absolute before:-left-1.5 before:top-1/2 before:-translate-y-1/2 before:text-[#4A4A4A]` : ''
      ]"
    >
      <NuxtLink
        :to="menuItem.to"
        class="text-[#4A4A4A] p-1 block hover:text-primary transition-colors"
      >
        {{ menuItem.label }}
      </NuxtLink>
    </li>
  </ul>
</nav>
</template>
