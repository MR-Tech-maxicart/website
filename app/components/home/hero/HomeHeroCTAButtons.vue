<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const menuItems = getMainMenuItems(t, localePath)
const platformLink = menuItems.find(item => item.key === 'platform')?.to
const infraLink = menuItems.find(item => item.key === 'services')?.to
</script>

<template>
<div class="flex gap-x-6">
  <UButton
    :to="platformLink"
    class="px-[15px] py-[9px] text-[22px] gap-3 relative z-10 hover:shadow-[0_0_48px_rgba(14,52,180,0.55)] hover:bg-primary group/btn"
  >
    <span class="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl hidden group-hover/btn:block" />

    {{ $t('home.hero.cta.platform') }}

    <template #trailing>
      <UIcon
        name="maxicart:arrow-external"
        class="fill-white size-[18px]"
      />
    </template>
  </UButton>

  <UButton
    :to="infraLink"
    variant="outline"
    class="px-[15px] py-[9px] text-[22px] text-white relative z-10 hover:bg-primary shadow-[0_0_48px_rgba(14,52,180,0.55)]"
  >
    <span class="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />

    {{ $t('home.hero.cta.explore') }}
  </UButton>
</div>
</template>
