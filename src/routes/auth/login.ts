import express from 'express';
import type { Request, Response } from 'express';

const loginRoutes = express.Router();

loginRoutes.post('/', (req: Request, res: Response) => {
  res.send("POST login.");
});

export default loginRoutes;