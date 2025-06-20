import express from 'express';
import type { Request, Response } from 'express';

const refreshTokenRoutes = express.Router();

refreshTokenRoutes.post('/', (req: Request, res: Response) => {
  res.send("POST refresh-token.");
});

export default refreshTokenRoutes;