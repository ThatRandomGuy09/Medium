import { Hono } from 'hono'

const app = new Hono()

app.post('/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/signin', (c) => {
  return c.text('Hello Hono!')
})

export default app
