import { z } from 'zod'

export const tagSchema = z.object({
  name: z.string().min(2).max(15),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
})

export const postSchema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(10),
  tags: z.array(tagSchema).min(1).max(5),
  publishDate: z.string().datetime(),
})

