<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  class: HTMLAttributes['class']
}

withDefaults(
  defineProps<Props>(),
  { as: 'div' }
)
</script>

<template>
  <Component
    :is="$props.as"
    :class="cn('bg-primary rounded-[10px] uppercase leading-[1.2] text-[14px] xl:text-[37px] mt-1 py-[25px] xl:py-[53px] text-center', $props.class)"
  >
    {{ $t('home.saas.highlightText') }}
  </Component>
</template>
