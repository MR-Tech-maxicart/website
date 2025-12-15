<script setup lang="ts">
import {Primitive, type PrimitiveProps, useForwardProps} from 'reka-ui'
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {NuxtLinkLocale} from "#components";

export type HomeCardAboutItemKey = 'zeroTrust' | 'gdpr' | 'apiFirst' | 'cloud'

export interface HomeAboutCardItemProps {
  title: string
  image: string
}

interface Props extends PrimitiveProps, HomeAboutCardItemProps {
  itemKey: HomeCardAboutItemKey
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: NuxtLinkLocale,
})

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    v-bind="forwardedProps"
    :class="cn('relative bg-[#141414] rounded-[10px] h-[500px]', $props.class)"
  >
    <div class="max-w-[268px] font-medium text-[35px] tracking-tighter relative z-10">
      {{ title }}
    </div>

    <UButton
      variant="outline"
      class="relative z-10 size-[50px] flex items-center justify-center bg-black"
    >
      <UIcon
        name="maxicart:arrow-right"
        class="size-6"
      />
    </UButton>

    <NuxtImg
      :src="image"
      :alt="title"
      :class="[
        'absolute bottom-0 right-0',
        ~['zeroTrust', 'gdpr'].indexOf(itemKey)
          ? 'w-full'
          : itemKey === 'cloud' ? 'h-[90%]' : 'h-[85%]'
      ]"
    />
  </Primitive>
</template>
