import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: z.object({
      category: z.string(),
      lastVerified: z.coerce.date(),
      sourceCommit: z.string().regex(/^[0-9a-f]{40}$/),
      sourceFiles: z.array(z.string()).min(1),
      gameVersion: z.string().optional(),
      status: z.enum(['verified', 'partially verified', 'unverified']),
    }),
  }),
});

export const collections = { docs };
