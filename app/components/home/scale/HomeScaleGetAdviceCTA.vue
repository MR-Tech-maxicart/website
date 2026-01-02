<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()

const contactLink = ref<string>('')

watch(
  route,
  newRoute => contactLink.value = getPopupLink('contact', localePath, newRoute),
  { immediate: true }
)
</script>

<template>
  <div class="bg-[#141414] rounded-md p-3 flex flex-col items-center justify-center gap-y-[17px]">
    <UButton
      :to="contactLink"
      class="py-[17px] px-[39px] text-[22px]"
    >
      {{ $t('home.scale.cta.getAdvice') }}
    </UButton>

    <p class="text-[#888891] text-center font-medium text-[18px] leading-[1.3]">
      {{ $t('home.scale.cta.description') }}
    </p>
  </div>
</template>
