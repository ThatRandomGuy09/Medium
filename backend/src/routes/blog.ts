import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.post("/", (c) => {
  return c.text("get blog route");
});

blogRouter.get("/", (c) => {
  return c.text("get blog route");
});

blogRouter.put("/", (c) => {
  return c.text("signin route");
});

blogRouter.get("/bulk", (c) => {
  return c.text("signin route");
});
