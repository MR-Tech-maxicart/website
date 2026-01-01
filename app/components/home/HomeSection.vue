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
      container: cn('lg:py-32 sm:gap-24', containerClass),
      title: 'text-[50px] sm:text-[61px] lg:text-[107px] font-semibold lg:font-normal tracking-tighter leading-none text-muted text-left',
      body: 'mt-[80px] flex'
    }"
    :title="title"
  >
    <template #body>
      <slot
        v-if="$slots.sectionIdAndKey"
        name="sectionIdAndKey"
        :section-number="sectionNumber"
        :section-key="sectionKey"
      />
      <HomeSectionIdxAndKey
        v-else
        class="w-1/6"
        :index="sectionNumber"
        :section-key="sectionKey"
      />

      <I18nT
        :keypath="sectionDescriptionKey"
        scope="global"
        tag="div"
        class="text-[#f8f8f8] text-[48px] leading-[1.2] font-medium tracking-[-.08em] text-balance"
        :class="[
          sectionSubDescription?.length ? 'max-w-[calc(100%-36.6667%)]' : 'max-w-[70%]'
        ]"
      >
        <br>
      </I18nT>

      <p
        v-if="sectionSubDescription?.length"
        class="w-[20%] text-muted text-lg tracking-[-.09em] leading-[1.3] font-light shrink-0 ml-auto"
      >
        {{ sectionSubDescription }}
      </p>
    </template>

    <slot />
  </UPageSection>
</template>
