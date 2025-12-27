<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent, FormErrorEvent } from '@nuxt/ui'

const { t } = useI18n()

const schema = v.object({
  fullName: v.string(),
  email: v.optional(v.pipe(v.string(), v.email())),
  phone: v.optional(v.string()),
  message: v.optional(v.string()),
  consest: v.literal(true, t('forms.checkConsest') )
})

type Schema = v.InferOutput<typeof schema>
const state = reactive<Schema>({
  fullName: '',
  email: undefined,
  phone: undefined,
  message: undefined,
  consest: true
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event)
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
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    @error="onError"
  >
    <UFormField
      :label="$t('fullName')"
      name="fullName"
    >
      <UInput
        v-model="state.fullName"
      />
    </UFormField>

    <div class="grid grid-cols-2">
      <UFormField
        :label="$t('email')"
        name="email"
      >
        <UInput
          v-model="state.email"
        />
      </UFormField>

      <UFormField
        :label="$t('phone')"
        name="phone"
      >
        <UInput
          v-model="state.phone"
        />
      </UFormField>
    </div>

    <UFormField
      :label="$t('forms.message')"
      name="message"
    >
      <UInput
        v-model="state.message"
      />
    </UFormField>

    <UFormField
      name="consest"
    >
      <UCheckbox
        :label="$t('forms.consest')"
        v-model="state.consest"
      />
    </UFormField>


    <UButton
      type="submit"
      :label="$t('forms.submit')"
    />
  </UForm>
</template>
