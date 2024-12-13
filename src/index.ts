import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

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
