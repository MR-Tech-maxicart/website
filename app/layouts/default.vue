<script lang="ts" setup>
const header = shallowRef<HTMLElement | null>(null)
const sentinel = useTemplateRef('sentinel')

const { isSticky } = useStickyObserver({
  element: header,
  sentinel,
}, '-24px 0px 0px 0px')

onMounted(() => {
  if (import.meta.client) {
    header.value = document.querySelector('header') as HTMLHeadingElement
  }
})
</script>

<template>
  <UApp>
    <div
      ref="sentinel"
      class="mt-6"
    />
    <UHeader
      :ui="{
        root: 'border-none py-7 sticky top-0' + (isSticky ? '' : ' backdrop-blur-none bg-[none]'),
      }"
    >
      <template #left>
        <AppLogo class="" />
      </template>

      <LayoutHeaderMenu />

      <template #right>
        <ButtonsHeaderContact />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>

    </UFooter>
  </UApp>
</template>
