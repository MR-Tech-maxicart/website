<script setup lang="ts">
type Variant = 'primary' | 'muted'

type CapabilityCard = {
  id: string
  key: string
  icon?: string
  variant?: Variant
  titleKey: string
  descriptionKey: string
  badgeKey?: string
}

const props = defineProps<{
  card: CapabilityCard
}>()

const isActive = defineModel<boolean>('isActive', {
  default: false,
})

const { t } = useI18n()
</script>

<template>
  {{card}}

<!--  <article-->
<!--    class="group/card relative overflow-hidden rounded-2xl transition-colors"-->
<!--    :class="[-->
<!--      isActive-->
<!--        ? 'bg-primary text-white'-->
<!--        : 'bg-white/5 text-white/65 hover:bg-white/7'-->
<!--    ]"-->
<!--  >-->
<!--    <div-->
<!--      class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset transition"-->
<!--      :class="[isPrimary ? 'ring-white/0' : 'ring-white/8 group-hover/card:ring-white/12']"-->
<!--    />-->

<!--    <div class="flex h-full flex-col gap-4 p-6">-->
<!--      <div class="flex items-start gap-3">-->
<!--        <div-->
<!--          class="text-4xl font-medium tracking-tight leading-none"-->
<!--          :class="[isPrimary ? 'text-white/35' : 'text-white/18']"-->
<!--        >-->
<!--          {{ card.id }}-->
<!--        </div>-->

<!--        <div class="mt-3 h-px flex-1"-->
<!--             :class="[isPrimary ? 'bg-white/25' : 'bg-white/10']"-->
<!--        />-->
<!--      </div>-->

<!--      <h3-->
<!--        class="text-2xl font-medium leading-tight"-->
<!--        :class="[isPrimary ? 'text-white' : 'text-white/60 group-hover/card:text-white/70']"-->
<!--      >-->
<!--        {{ t(card.titleKey) }}-->
<!--      </h3>-->

<!--      <p-->
<!--        class="text-sm leading-relaxed"-->
<!--        :class="[isPrimary ? 'text-white/85' : 'text-white/40 group-hover/card:text-white/45']"-->
<!--      >-->
<!--        {{ t(card.descriptionKey) }}-->
<!--      </p>-->
<!--    </div>-->
<!--  </article>-->
</template>
