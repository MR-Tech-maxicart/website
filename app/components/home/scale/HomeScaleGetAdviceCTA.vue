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
  <div class="bg-[#141414] rounded-md py-[30px] px-[16px] md:p-1 flex md:flex-col-reverse items-center gap-x-3 justify-center md:gap-y-[10px] xl:gap-y-[17px]">
    <p class="text-[#888891] text-center xl:font-medium text-[16px] md:text-[10px] xl:text-[18px] leading-[1.3]">
      {{ $t('home.scale.cta.description') }}
    </p>

    <UButton
      :to="contactLink"
      class="shrink-0 py-[21px] md:py-2 xl:py-[17px] px-[26px] md:px-[19px] xl:px-[39px] text-[18px] md:text-[16px] xl:text-[22px] text-center"
    >
      {{ $t('home.scale.cta.getAdvice') }}
    </UButton>
  </div>
</template>
