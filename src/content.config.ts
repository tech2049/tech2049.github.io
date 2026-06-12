import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.string().optional(), // تبدیل به اختیاری شد
  }),
});

export const collections = { blog };