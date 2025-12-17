import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    capabilities: defineCollection({
      type: 'data',
      source: 'capabilities/**.yml',
      schema: z.object({
        key: z.string(),
        icon: z.string().optional(),
        titleKey: z.string(),
        descriptionKey: z.string(),
        badgeKey: z.string().optional()
      })
    })
  },
})
