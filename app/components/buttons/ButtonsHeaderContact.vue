<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()

const contactLink = ref<string>()
watch(route, (newRoute) => contactLink.value = localePath({
  ...newRoute,
  query: {
    ...newRoute.query,
    popup: 'contact'
  }
}), { immediate: true })
</script>

<template>
  <UButton
    :to="contactLink"
    variant="outline"
    class="relative inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-[22px] font-medium text-primary hover:text-white shadow-[0_0_48px_rgba(14,52,180,0.55)] ring-1 ring-primary/60"
    :ui="{ base: 'inline-flex items-center gap-3 hover:bg-primary group/btn' }"
  >
    <span class="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />

    {{ $t('contact') }}

    <template #trailing>
      <span class="flex size-10 items-center justify-center rounded-full bg-primary group-hover/btn:bg-white">
        <UIcon
          name="maxicart:phone"
          mode="svg"
          class="size-4 fill-white group-hover/btn:fill-primary"
        />
      </span>
    </template>
  </UButton>
</template>
