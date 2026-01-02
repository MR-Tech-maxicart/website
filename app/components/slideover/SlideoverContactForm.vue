<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()

const disabled = ref<boolean>(false)

const close = () => emit('close')
</script>

<template>
  <USlideover
    :title="$t('slideover.contact.title')"
    :description="$t('slideover.contact.description')"
    :ui="{
      content: 'bg-[#141414]',
      footer: 'justify-end gap-3'
    }"
  >
    <template #body>
      <ContactForm
        id="slideover-contact-form"
        v-model:disabled="disabled"
        :show-submit-button="false"
        @form-processed="close"
      />
    </template>

    <template #footer>
      <UButton
        variant="ghost"
        :label="$t('dismiss')"
        size="lg"
        @click="close"
      />

      <UButton
        form="slideover-contact-form"
        type="submit"
        color="primary"
        :label="$t('forms.submit')"
        :loading="disabled"
        loading-icon="i-lucide-loader"
        size="lg"
      />
    </template>
  </USlideover>
</template>
