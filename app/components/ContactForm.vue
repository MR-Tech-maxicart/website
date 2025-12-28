<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent, FormErrorEvent } from '@nuxt/ui'

const { t } = useI18n()

const schema = v.object({
  fullName: v.pipe(v.string(), v.minLength(2), v.maxLength(50)),
  email: v.optional(v.pipe(v.string(), v.email())),
  phone: v.optional(v.string()),
  message: v.optional(v.string()),
  consest: v.literal(true, t('forms.checkConsest'))
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
    :validateOn="['blur', 'change']"
    class="flex flex-col gap-y-[30px] max-w-[516px]"
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
          type="email"
          v-model="state.email"
        />
      </FormField>

      <FormField
        :label="$t('phone')"
        name="phone"
      >
        <FormInput
          type="tel"
          v-model="state.phone"
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
      name="consest"
      class="-mt-2"
    >
      <UCheckbox
        :label="$t('forms.consest')"
        v-model="state.consest"
        :ui="{
          base: `data-[state=checked]:ring-primary ring-2 ring-[#606060]`,
          label: 'text-[16px] leading-[1.3] text-[#606060]',
          indicator: 'bg-transparent text-primary',
          icon: 'size-[85%]'
        }"
      />
    </UFormField>

    <UButton
      type="submit"
      :label="$t('forms.submit')"
      :ui="{
        base: 'justify-center font-semibold text-[27px] leading-[1.2] py-3',
      }"
    />
  </UForm>
</template>
