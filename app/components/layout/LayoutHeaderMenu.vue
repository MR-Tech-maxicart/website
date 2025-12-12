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
      link: 'group/link relative text-lg',
      // linkTrailing: 'absolute top-[40%] left-[calc(100%-var(--spacing))] opacity-0 transition-opacity duration-200 group-hover/link:opacity-100',
    }"
  >
<!--    <template #item-trailing>-->
<!--      <UIcon-->
<!--        name="maxicart:checkmark"-->
<!--        class="size-3"-->
<!--      />-->
<!--    </template>-->
  </UNavigationMenu>
</template>
