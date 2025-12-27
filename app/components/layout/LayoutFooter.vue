<script setup lang="ts">

</script>

<template>
  <UFooter
    :ui="{
      top: 'container mx-auto justify-between',
      bottom: 'container mx-auto flex gap-x-4 justify-between',
      left: 'hidden',
      right: 'hidden',
      center: 'justify-between w-full items-start py-12 border-t',
      container: 'lg:py-0 py-0 lg:px-[20px] px-4'
    }"
  >
    <template #top>
      <I18nT
        keypath="footer.readyToWork"
        tag="div"
        scope="global"
        class="text-[107px] leading-[1] tracking-[-.07em]"
      >
        <br>
      </I18nT>

      <ContactForm />
    </template>

    <AppLogo />

    <LayoutFooterMainMenu />

    <template #bottom>
      <LayoutFooterMenu />

      <p class="text-[#4A4A4A]">
        {{ $t('footer.gdprText') }}
      </p>
    </template>
  </UFooter>
</template>
