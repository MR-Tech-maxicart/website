<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent, FormErrorEvent } from '@nuxt/ui'

defineProps<{
  id?: string
  showSubmitButton?: boolean
}>()

const emit = defineEmits<{
  formProcessed: []
}>()

const { t } = useI18n()

const schema = v.object({
  fullName: v.pipe(v.string(), v.minLength(2), v.maxLength(50)),
  email: v.optional(v.pipe(v.string(), v.email())),
  phone: v.optional(v.string()),
  message: v.optional(v.string()),
  consent: v.literal(true, t('forms.checkConsent'))
})

type Schema = v.InferOutput<typeof schema>
const state = reactive<Schema>({
  fullName: '',
  email: undefined,
  phone: undefined,
  message: undefined,
  consent: true
})

const disabled = defineModel<boolean>('disabled', {
  default: false
})
async function onSubmit(event: FormSubmitEvent<Schema>) {
  disabled.value = true
  await $fetch('/api/form-submit', {
    method: 'POST',
    body: event.data
  })

  disabled.value = false
  emit('formProcessed')
}

async function onError(event: FormErrorEvent) {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <UForm
    :id="id"
    :schema="schema"
    :state="state"
    :validate-on="['blur', 'change']"
    class="flex flex-col gap-y-[30px] max-w-[516px]"
    :disabled="disabled"
    @submit="onSubmit"
    @error="onError"
  >
    <FormField
      :label="$t('fullName')"
      name="fullName"
    >
      <FormInput
        v-model="state.fullName"
      />
    </FormField>

    <div class="grid grid-cols-2 gap-x-1.5">
      <FormField
        :label="$t('email')"
        name="email"
      >
        <FormInput
          v-model="state.email"
          type="email"
        />
      </FormField>

      <FormField
        :label="$t('phone')"
        name="phone"
      >
        <FormInput
          v-model="state.phone"
          type="tel"
        />
      </FormField>
    </div>

    <FormField
      :label="$t('forms.message')"
      name="message"
    >
      <FormInput
        v-model="state.message"
      />
    </FormField>

    <UFormField
      name="consent"
      class="-mt-2"
    >
      <UCheckbox
        v-model="state.consent"
        :label="$t('forms.consent')"
        :ui="{
          base: `data-[state=checked]:ring-primary ring-2 ring-[#606060]`,
          label: 'text-[16px] leading-[1.3] text-[#606060]',
          indicator: 'bg-transparent text-primary',
          icon: 'size-[85%]'
        }"
      />
    </UFormField>

    <UButton
      v-if="showSubmitButton !== false"
      type="submit"
      :label="$t('forms.submit')"
      :ui="{
        base: 'justify-center font-semibold text-[27px] leading-[1.2] py-3'
      }"
      :loading="disabled"
      loading-icon="i-lucide-loader"
    />
  </UForm>
</template>
