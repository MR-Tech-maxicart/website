<script setup lang="ts">
const header = shallowRef<HTMLElement | null>(null)
const sentinel = useTemplateRef('sentinel')

const { isSticky } = useStickyObserver({
  element: header,
  sentinel
}, '-24px 0px 0px 0px')

onMounted(() => {
  if (import.meta.client) {
    header.value = document.querySelector('header') as HTMLHeadingElement
  }
})

const { t } = useI18n()
const localePath = useLocalePath()

const menuItems = getMainMenuItems(t, localePath)
</script>

<template>
  <div
    ref="sentinel"
    class="sm:mt-6 lg:mt-8"
  />
  <UHeader
    :ui="{
      root: 'border-none py-4 lg:py-7 sticky top-0' + (isSticky ? '' : ' backdrop-blur-none bg-[none]'),
      toggle: 'fill-primary [&>svg]:!size-8',
      right: 'lg:flex-0 xl:flex-1'
      // center: 'lg:hidden'
    }"
    mode="drawer"
    :menu="{

    }"
  >
    <template #left>
      <AppLogo class="max-lg:w-[120px]" />
    </template>

    <LayoutHeaderMenu :menu-items="menuItems" />

    <template #right>
      <ButtonsHeaderContact class="hidden xl:inline-flex" />
    </template>

    <template #body>
      <LayoutHeaderMobileMenu :menu-items="menuItems" />
    </template>
  </UHeader>
</template>
