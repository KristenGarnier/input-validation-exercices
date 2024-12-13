import { z } from 'zod'

export const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().int().min(18).max(120),
})

export type User = z.infer<typeof userSchema> 
