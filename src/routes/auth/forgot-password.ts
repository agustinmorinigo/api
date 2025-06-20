import express from 'express';
import type { Request, Response } from 'express';

const forgotPasswordRoutes = express.Router();

forgotPasswordRoutes.post('/', (req: Request, res: Response) => {
  res.send("POST forgot-password.");
});

export default forgotPasswordRoutes;