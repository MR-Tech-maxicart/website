<script lang="ts" setup>
import { en } from '@nuxt/ui/locale'

const cookieAccepted = useCookie<boolean>('cookie-accepted')
</script>

<template>
  <UApp :locale="en">
    <NuxtLoadingIndicator />
    <LayoutHeader />

    <UMain class="hidden xl:block">
      <slot />
    </UMain>

    <LayoutFooter />

    <CookieBar
      v-if="!cookieAccepted"
      class="fixed bottom-0 left-0 right-0"
      @accept="cookieAccepted = true"
    />
  </UApp>
</template>
