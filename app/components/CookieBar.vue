<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
<div class="bg-[#3D3C3C]/23 py-[61px] backdrop-blur-lg">
  <div class="container mx-auto">
    <div class="text-[35px] font-semibold tracking-[-.07em] leading-[1.2]">
      {{ $t('cookies.bar.title') }}
    </div>
    <div class="flex mt-6 gap-x-[35px]">
      <p class="text-[#676767] text-[18px] leading-[1.2]">
        {{ $t('cookies.bar.description') }}
      </p>

      <UFieldGroup>
        <UButton
          variant="outline"
          class="text-[27px] uppercase whitespace-nowrap font-semibold text-[var(--ui-text)] py-[17px] px-[31px]"
          :to="localePath({
            name: 'privacy-policy',
          })"
        >
          {{ $t('moreDetails') }}
        </UButton>

        <UButton
          class="text-[27px] uppercase font-semibold py-[17px] px-[31px]"
          @click="$emit('accept')"
        >
          {{ $t('accept') }}
        </UButton>
      </UFieldGroup>
    </div>
  </div>
</div>
</template>
