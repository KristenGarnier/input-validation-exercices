import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { userSchema } from './models/User.js'
import { postSchema } from './models/Post.js'
import { eventSchema } from './models/Event.js'


const app = new Hono()

// Ecercice 1

app.post('/users', zValidator('json', userSchema), async (c) => {
  try {
    const user = c.req.valid("json")
    return c.json({ success: true, user }, 201)
  } catch (error) {
    return c.json({ success: false, message: 'Internal Server Error' }, 500)
  }
})

// Exercice 2

app.post('/posts', zValidator('json', postSchema), async (c) => {
  try {
    const post = c.req.valid('json')
    return c.json({ success: true, post }, 201)
  } catch (error) {
    return c.json({ success: false, message: 'Internal Server Error' }, 500)
  }
})

// Exercice 3

app.post('/events', zValidator('json', eventSchema), async (c) => {
  try {
    const event = c.req.valid("json")

    // Transformation après validation
    const enrichedEvent = {
      ...event,
      processedAt: new Date().toISOString(),
    }

    return c.json({ success: true, event: enrichedEvent }, 201)
  } catch (error) {
    return c.json({ success: false, message: 'Internal Server Error' }, 500)
  }
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})


/*
// Exemple pour /users
fetch('/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: "john_doe",
    email: "john@example.com",
    age: 25
  })
})

// Exemple pour /posts
fetch('/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Mon premier article",
    content: "Contenu de l'article...",
    tags: [
      { name: "tech", color: "#FF5733" },
      { name: "web", color: "#33FF57" }
    ],
    publishDate: "2024-12-13T12:00:00Z"
  })
})

// Exemple pour /events
fetch('/events', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: "123e4567-e89b-12d3-a456-426614174000",
    timestamp: "2024-12-13T12:00:00Z",
    type: "user",
    action: "login",
    userId: "user123"
  })
})
*/
