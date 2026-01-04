<script setup lang="ts">

</script>

<template>
  <UFooter
    :ui="{
      top: 'py-11 lg:py-[68px] px-4 sm:px-16 lg:px-4',
      left: 'hidden',
      right: 'hidden',
      center: 'container mx-auto justify-between w-full items-start py-12 border-t gap-x-4',
      container: 'lg:py-0 py-0',
      root: 'bg-[#141414]',
      bottom: 'px-4'
    }"
  >
    <template #top>
      <div class="container mx-auto flex max-md:flex-col gap-y-7 justify-between max-xl:gap-x-14">
        <I18nT
          keypath="footer.readyToWork"
          tag="div"
          scope="global"
          class="text-[50px] md:text-[61px] xl:text-[107px] max-xl:font-semibold leading-[1] tracking-[-.05em] xl:tracking-[-.07em]"
        >
          <br>
        </I18nT>

        <ContactForm class="xl:mt-9" />
      </div>
    </template>

    <div class="flex flex-col gap-y-4">
      <AppLogo />

      <LayoutSocials
        class="gap-x-6"
        link-class="size-[26px]"
        icon-class="size-[12px]"
      />
    </div>

    <LayoutFooterMainMenu />

    <template #bottom>
      <div class="container mx-auto flex gap-x-4 justify-between">
        <LayoutFooterMenu />

        <p class="text-[#4A4A4A] max-md:text-xs max-lg:text-right max-md:max-w-[200px] max-lg:max-w-[330px]">
          {{ $t('footer.gdprText') }}
        </p>
      </div>
    </template>
  </UFooter>
</template>
