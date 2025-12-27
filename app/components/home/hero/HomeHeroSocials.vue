<script setup lang="ts">
const appSocials = useAppConfig().app.socials
</script>

<template>
  <div class="flex gap-x-[11px]">
    <NuxtLink
      v-for="social in appSocials"
      :key="social.titleKey"
      :title="$t(social.titleKey)"
      :to="social.link"
      external
      class="size-10 flex justify-center items-center rounded-full shadow-[0_0_6.6px_rgba(0,149,255,1)] hover:shadow-none hover:bg-white transition-colors group/btn"
    >
      <UIcon
        class="size-[15px]"
        :class="social.titleKey === 'instagram' ? '[&_path]:fill-primary' : 'group-hover/btn:[&_path]:fill-white'"
        :name="social.icon"
      />
    </NuxtLink>
  </div>
</template>
