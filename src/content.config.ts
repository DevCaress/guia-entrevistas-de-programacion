import { defineCollection, z } from "astro:content";

const referenceSchema = z.object({
  label: z.string().min(1),
  url: z.string().url()
});

const exampleSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  language: z.string().min(1).optional()
}).refine((example) => example.title || example.description, {
  message: "Examples must include a title or description"
});

const guide = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(180),
    category: z.string().min(1),
    section: z.string().min(1).optional(),
    sidebar: z.object({
      label: z.string().min(1).optional(),
      order: z.number()
    }),
    references: z.array(referenceSchema),
    examples: z.array(exampleSchema).optional()
  })
});

export const collections = { guide };
