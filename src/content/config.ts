// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const writingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default('Eric Howey'),
    authorLink: z.string().url().default('https://twitter.com/erchwy'),
    categories: z.array(z.string()),
    date: z.any(),
    updated: z.any().optional(),
    published: z.boolean(),
    description: z.string().max(160),
    excerpt: z.string().max(400),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  writing: writingCollection,
}
