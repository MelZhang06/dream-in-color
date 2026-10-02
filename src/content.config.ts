import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({ title: z.string(), lang: z.enum(['en', 'zh']), translationKey: z.string(), excerpt: z.string(), order: z.number() })
});
const dreams = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dreams' }),
  schema: z.object({ title: z.string(), titleZh: z.string(), number: z.string(), image: z.string(), alt: z.string(), memoryZh: z.string(), order: z.number() })
});
export const collections = { writing, dreams };
