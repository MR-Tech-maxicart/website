<script setup lang="ts">

</script>

<template>
  <div>
    <I18nT
      scope="global"
      keypath="home.hero.heading.title"
      tag="h1"
      class="text-[107px] font-medium tracking-tighter leading-none"
    >
      <span class="text-primary">{{ $t('home.hero.heading.titleHighlight') }}</span>
      <br />
    </I18nT>

<!--    <a href="/" data-reka-collection-item="" data-active="" aria-current="page" data-slot="link"-->
<!--       class="group w-full flex items-center gap-1.5 before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 before:hidden focus-visible:before:ring-inverted px-2.5 py-1.5 before:inset-x-px before:inset-y-0 before:bg-elevated relative text-lg font-light text-[#ffffff]">-->
<!--      &lt;!&ndash;[&ndash;&gt;&lt;!&ndash;[&ndash;&gt;&lt;!&ndash;[&ndash;&gt;&lt;!&ndash;v-if&ndash;&gt;&lt;!&ndash;]&ndash;&gt;<span data-slot="linkLabel" class="truncate">&lt;!&ndash;[&ndash;&gt;About us&lt;!&ndash;]&ndash;&gt;-->
<!--      &lt;!&ndash;v-if&ndash;&gt;</span>&lt;!&ndash;v-if&ndash;&gt;&lt;!&ndash;]&ndash;&gt;&lt;!&ndash;]&ndash;&gt;</a>-->

    <I18nT
      scope="global"
      keypath="home.hero.heading.subtitle"
      tag="p"
      class="mt-3 font-medium text-[28px] max-w-[840px] tracking-[-.09em] leading-[116%]"
      role="heading"
      aria-level="3"
    >
      <br />
    </I18nT>
  </div>
</template>
