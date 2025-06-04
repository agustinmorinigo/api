import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import prisma from "@/script.js";

const authRoutes = express.Router();

// Midleware.
const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware executed.");
  next();
};

authRoutes.use(middleware);

// Login.
authRoutes.post("/login", (req: Request, res: Response, next: NextFunction) => {
  res.send("Post login 333.");
});

export default authRoutes