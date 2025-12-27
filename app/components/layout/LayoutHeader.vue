<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h3'
})

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    v-bind="forwardedProps"
    :class="cn('text-[50px] font-semibold tracking-tighter leading-none text-muted', $props.class)"
  >
    <slot />
  </Primitive>
</template>
