import express from 'express';
import type { Request, Response } from 'express';

const registerRoutes = express.Router();

registerRoutes.post('/', (req: Request, res: Response) => {
  res.send("POST register.");
});

export default registerRoutes;