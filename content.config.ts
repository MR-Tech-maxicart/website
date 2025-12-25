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
      }),
    }),
    scaleItems: defineCollection({
      type: 'data',
      source: 'scales/**.yml',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        icon: z.string(),
        highlight: z.string(),
      }),
    }),
    solutions: defineCollection({
      type: 'data',
      source: 'solutions/**.yml',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
      }),
    }),
    saasSolutions: defineCollection({
      type: 'data',
      source: 'saas-solutions/**.yml',
      schema: z.object({
        key: z.string(),
        title: z.string(),
        order: z.number().int().positive(),
      }),
    }),
  },
})
