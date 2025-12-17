<script setup lang="ts">
import { type PrimitiveProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"

export type HomeCardAboutItemKey = 'zeroTrust' | 'gdpr' | 'apiFirst' | 'cloud'

export interface HomeAboutCardItemProps {
  titleKey: string
  image: string
}

interface Props extends PrimitiveProps, HomeAboutCardItemProps {
  itemKey: HomeCardAboutItemKey
  class?: HTMLAttributes["class"]
}

defineProps<Props>()
</script>

<template>
  <NuxtLinkLocale
    :to="{ name: 'index' }"
    :class="cn('relative bg-[#141414] rounded-md cursor-pointer group/card', $props.class)"
  >
    <div class="max-w-[295px] font-medium text-[35px] tracking-tighter leading-[1.1715] relative z-10 ml-10 mt-10">
      <I18nT
        :keypath="titleKey"
        scope="global"
      >
        <br />
      </I18nT>
    </div>

    <span
      class="rounded-md absolute z-10 size-[50px] flex items-center justify-center border border-[#AAAAAA]/35 bg-black/35 bottom-10 left-10 transition shadow-[0_0_48px_0_#0E34B4] group-hover/card:bg-primary"
    >
      <UIcon
        name="maxicart:arrow-right"
        class="size-6 fill-white"
      />
    </span>

    <NuxtImg
      :src="image"
      :alt="$t(titleKey)"
      :class="[
        'absolute bottom-0 right-0',
        ~['zeroTrust', 'gdpr'].indexOf(itemKey)
          ? 'w-full'
          : itemKey === 'cloud' ? 'h-[90%]' : 'h-[85%]'
      ]"
    />
  </NuxtLinkLocale>
</template>
