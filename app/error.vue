<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <NuxtLayout>
    <UError :error="error" />
  </NuxtLayout>
</template>
