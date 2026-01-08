<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  title: string
  sectionNumber: string
  sectionKey: string
  sectionDescriptionKey: string
  sectionSubDescription?: string
  containerClass?: HTMLAttributes['class']
}>()

defineSlots<{
  sectionIdAndKey?: (props: { sectionNumber: string, sectionKey: string }) => VNode
  default: VNode
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: cn('py-[50px] sm:py-16 lg:py-32 sm:gap-[50px] lg:gap-24', containerClass),
      title: 'text-[50px] sm:text-[61px] lg:text-[107px] font-medium md:font-normal tracking-[-0.05em] leading-none text-muted text-left',
      body: 'mt-[57px] lg:mt-[80px] flex'
    }"
    :title="title"
  >
    <template #body>
      <HomeSectionIdxAndKey
        class="w-1/4 sm:w-1/6"
        :index="sectionNumber"
        :section-key="sectionKey"
      />

      <div class="flex max-xl:flex-wrap">
        <I18nT
          :keypath="sectionDescriptionKey"
          scope="global"
          tag="div"
          class="xl:mr-2 text-[20px] sm:text-[35px] lg:text-[48px] leading-[1.2] text-[#f8f8f8] font-medium tracking-[-.08em] text-balance"
          :class="[
            'xl:max-w-[70%]'
          ]"
        />

        <p
          v-if="sectionSubDescription?.length"
          class="max-xl:mt-5 xl:w-1/5 xl:ml-auto text-muted text-[16px] lg:text-[18px] tracking-[-.09em] leading-[1.3] font-light"
        >
          {{ sectionSubDescription }}
        </p>
      </div>
    </template>

    <slot />
  </UPageSection>
</template>
