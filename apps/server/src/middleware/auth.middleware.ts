// middleware/auth.middleware.ts

import { auth } from "@my-better-t-app/auth";
import type { Context, Next } from "hono";

export async function authMiddleware(c: Context, next: Next) {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    return c.json(
      {
        success: false,
        message: "Unauthorized",
      },
      401,
    );
  }

  c.set("user", session.user);
  c.set("session", session.session);

  await next();
}
