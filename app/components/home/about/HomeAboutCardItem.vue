<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type HomeCardAboutItemKey = 'zeroTrust' | 'gdpr' | 'apiFirst' | 'cloud'

export interface HomeAboutCardItemProps {
  titleKey: string
  image: string
  imageTablet: string
  imageMobile: string
  link?: RouteLocationRaw
}

interface Props extends PrimitiveProps, HomeAboutCardItemProps {
  itemKey: HomeCardAboutItemKey
  class?: HTMLAttributes['class']
}

defineProps<Props>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtLinkLocale
    :to="localePath(link ?? { name: 'index' })"
    :class="cn('relative bg-[#141414] rounded-md cursor-pointer select-none group/card', $props.class)"
  >
    <I18nT
      :keypath="titleKey"
      scope="global"
      tag="div"
      class="max-w-[315px] text-[25px] md:text-[16px] lg:text-[35px] tracking-[-0.05em] leading-[1.1715] relative z-10 ml-[37px] max-md:pt-[37px] md:ml-4 md:mt-4 lg:ml-10 lg:mt-10"
    >
      <br>
    </I18nT>

    <span
      class="rounded-md absolute z-10 size-[60px] md:size-[36px] lg:size-[50px] flex items-center justify-center border border-[#AAAAAA]/35 bg-black/35 left-[37px] bottom-[37px] md:bottom-4 md:left-4 lg:bottom-10 lg:left-10 transition shadow-[0_0_48px_0_#0E34B4] group-hover/card:bg-primary"
    >
      <UIcon
        name="maxicart:arrow-right"
        class="size-6 fill-white"
      />
    </span>

    <AppPicture
      :images="[
        { src: imageMobile },
        { src: imageTablet, minWidth: 768 },
        { src: image, minWidth: 1024 }
      ]"
      :img-attrs="{
        alt: $t(titleKey),
        class: [
          'absolute bottom-0 right-0',
          ['zeroTrust', 'gdpr'].includes(itemKey)
            ? 'w-full max-h-full lg:w-auto'
            : (itemKey === 'cloud' ? 'h-full lg:h-[90%]' : 'h-[85%]')
        ].join(' ')
      }"
    />
  </NuxtLinkLocale>
</template>
