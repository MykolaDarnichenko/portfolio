import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        title: z.string(),
        titleUa: z.string(),
        date: z.string(),
        dateUa: z.string(),
        topic: z.string(),
        topicUa: z.string(),
        description: z.string(),
        descriptionUa: z.string()
      })
    }),
    works: defineCollection({
      type: 'page',
      source: 'works/*.md',
      schema: z.object({
        title: z.string(),
        titleUa: z.string(),
        img: z.string(),
        date: z.string(),
        topic: z.string(),
        topicUa: z.string(),
        description: z.string(),
        descriptionUa: z.string()
      })
    }),
  }
})