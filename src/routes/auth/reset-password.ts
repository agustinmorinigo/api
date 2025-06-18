import express from 'express';
import type { Request, Response } from 'express';

const resetPasswordRoutes = express.Router();

resetPasswordRoutes.post('/', (req: Request, res: Response) => {
  res.send("POST reset-password.");
});

export default resetPasswordRoutes;