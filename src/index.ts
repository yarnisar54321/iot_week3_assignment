import { Hono } from "hono";
import { cors } from "hono/cors";
import apiRouter from "./api/api.js";
import { handle } from "hono/vercel";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowHeaders: ["Content-Type"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.route("/api", apiRouter);

export const config = {
  runtime: "edge",
};

export default handle(app);
// export default app

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);