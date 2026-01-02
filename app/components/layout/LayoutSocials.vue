<script setup lang="ts">
import { type HTMLAttributes } from "vue"

defineProps<{
  linkClass?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']
}>()

const appSocials = useAppConfig().app.socials
</script>

<template>
  <div class="flex">
    <NuxtLink
      v-for="social in appSocials"
      :key="social.titleKey"
      :title="$t(social.titleKey)"
      :to="social.link"
      external
      :class="cn(
        'size-10 flex justify-center items-center rounded-full shadow-[0_0_6.6px_rgba(0,149,255,1)] hover:shadow-none hover:bg-white transition-colors group/btn',
        linkClass
      )"
    >
      <UIcon
        :class="cn(
          'size-[15px]',
          social.titleKey === 'instagram' ? '[&_path]:fill-primary' : 'group-hover/btn:[&_path]:fill-white',
          iconClass
        )"
        :name="social.icon"
      />
    </NuxtLink>
  </div>
</template>
