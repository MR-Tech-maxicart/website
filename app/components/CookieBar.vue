<script setup lang="ts">
defineEmits<{
  accept: []
}>()

const localePath = useLocalePath()
</script>

<template>
  <div class="bg-[#3D3C3C]/23 py-8 lg:py-[61px] px-4 backdrop-blur-lg">
    <div class="container mx-auto">
      <div class="text-[24px] lg:text-[35px] font-semibold tracking-[-.07em] leading-[1.2]">
        {{ $t('cookies.bar.title') }}
      </div>
      <div class="flex max-lg:flex-col max-lg:gap-y-6 mt-6 lg:gap-x-[35px]">
        <p class="text-[#676767] text-[16px] lg:text-[18px] leading-[1.2]">
          {{ $t('cookies.bar.description') }}
        </p>

        <UFieldGroup>
          <UButton
            variant="outline"
            size="xl"
            class="lg:text-[27px] uppercase whitespace-nowrap font-semibold text-[var(--ui-text)] lg:py-[17px] lg:px-[31px]"
            :to="localePath({
              name: 'privacy-policy'
            })"
          >
            {{ $t('moreDetails') }}
          </UButton>

          <UButton
            class="lg:text-[27px] uppercase font-semibold lg:py-[17px] lg:px-[31px]"
            size="xl"
            @click="$emit('accept')"
          >
            {{ $t('accept') }}
          </UButton>
        </UFieldGroup>
      </div>
    </div>
  </div>
</template>
