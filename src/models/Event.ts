import { z } from 'zod'

export const baseEventSchema = z.object({
  id: z.string().uuid(),
  timestamp: z.string().datetime(),
})

export const userEventSchema = baseEventSchema.extend({
  type: z.literal('user'),
  action: z.enum(['login', 'logout', 'register']),
  userId: z.string(),
})

export const systemEventSchema = baseEventSchema.extend({
  type: z.literal('system'),
  severity: z.enum(['info', 'warning', 'error']),
  message: z.string(),
})

export const eventSchema = z.discriminatedUnion('type', [
  userEventSchema,
  systemEventSchema,
])

