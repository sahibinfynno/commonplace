import { Hono } from "hono";
import { authMiddleware } from "@/middleware/auth.middleware";

const protectedRoutes = new Hono();

protectedRoutes.get("/secure-data", authMiddleware, (c) => {
  return c.json({
    message: "This is a secure route",
    success: true,
  });
});

export default protectedRoutes;
