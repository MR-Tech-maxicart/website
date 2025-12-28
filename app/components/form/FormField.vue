<script setup lang="ts">
import { Label } from 'reka-ui'
import {
  formErrorsInjectionKey,
  formFieldInjectionKey,
  formInputsInjectionKey,
  inputIdInjectionKey
} from '#imports'

const props = defineProps<{
  label?: string
  name?: string
  description?: string
  help?: string
  error?: string | boolean
  id?: string
}>()

const generatedId = useId()
const inputId = ref(props.id ?? (props.name ? `field-${props.name}` : generatedId))

watch(
  () => [props.id, props.name],
  ([explicitId, fieldName]) => {
    inputId.value = explicitId ?? (fieldName ? `field-${fieldName}` : generatedId)
  }
)

const formErrors = inject(formErrorsInjectionKey, null)
const formInputs = inject(formInputsInjectionKey, undefined)

const resolvedError = computed(() => {
  if (props.error !== undefined && props.error !== false) {
    return props.error
  }

  if (!props.name) {
    return undefined
  }

  return formErrors?.value?.find(error => error.name === props.name)?.message
})

const errorMessage = computed(() => typeof resolvedError.value === 'string' ? resolvedError.value : undefined)

watch(
  () => ({
    name: props.name,
    id: inputId.value
  }), (current) => {
    if (!formInputs?.value) {
      return
    }

    if (current.name) {
      formInputs.value[current.name] = { id: current.id }
    }
  },
  { immediate: true }
)

provide(inputIdInjectionKey, inputId)
provide(formFieldInjectionKey, computed(() => ({
  error: resolvedError.value,
  name: props.name,
  description: props.description,
  help: props.help,
  ariaId: inputId.value
})))

const errorId = computed(() => errorMessage.value ? `${inputId.value}-error` : undefined)
</script>

<template>
  <div class="flex flex-col-reverse justify-end">
    <slot
      :error="resolvedError"
    />

    <Label
      v-if="label?.length"
      :for="inputId"
      class="text-lg font-medium text-white translate-y-[36px] peer-[:not(:placeholder-shown)]:translate-y-2 peer-focus:translate-y-2 transition"
    >
      {{ label }}
    </Label>

    <p
      v-if="errorMessage"
      :id="errorId"
      class="text-sm text-error -order-1 mt-1.5"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
