<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { useFormField } from "#imports";

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  modelValue?: string | number | null
  type?: string
  placeholder?: string
  autocomplete?: string
  disabled?: boolean
  required?: boolean
  autofocus?: boolean
  class?: HTMLAttributes['class']
}>(), {
  type: 'text',
  autocomplete: 'off'
})

const emits = defineEmits<{
  'update:modelValue': [value: string | number | null | undefined]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  change: [event: Event]
  input: [event: Event]
}>()

const modelValue = useVModel(props, 'modelValue', emits, { passive: true })

const {
  id,
  name,
  disabled: formDisabled,
  emitFormBlur,
  emitFormInput,
  emitFormChange,
  emitFormFocus,
  ariaAttrs
} = useFormField(props)

const isDisabled = computed(() => formDisabled.value ?? props.disabled)

function updateValue(value: string) {
  modelValue.value = value
  emitFormInput()
}

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  updateValue(target.value)
  emits('input', event)
}

function onChange(event: Event) {
  emitFormChange()
  emits('change', event)
}

function onBlur(event: FocusEvent) {
  emitFormBlur()
  emits('blur', event)
}

function onFocus(event: FocusEvent) {
  emitFormFocus()
  emits('focus', event)
}
</script>

<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="modelValue ?? ''"
    :placeholder="placeholder ?? ' '"
    :autocomplete="autocomplete"
    :disabled="isDisabled"
    :required="required"
    :autofocus="autofocus"
    v-bind="{ ...$attrs, ...ariaAttrs }"
    :class="[
      'peer pb-[13px] pt-[8px] text-lg font-medium appearance-none w-full bg-transparent text-white border-b focus:border-b-primary transition-colors rounded-none focus-visible:outline-none',
      props.class
    ]"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
    @focus="onFocus"
  >
</template>
