import { defineCollection, z } from "astro:content"
import { glob } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)")
      .optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})



const legal = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { blog, legal}
