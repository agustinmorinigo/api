import { createUser } from '../../models/user/index.js';
import { RegisterData, RegisterSchema } from '../../schemas/auth/register.js';
import express from 'express';
import type { Request } from 'express';
import { parse, isValiError } from 'valibot';

const registerRoutes = express.Router();

// Esta función vendrá de controllers/
registerRoutes.post('/', async (req: Request<{}, {}, RegisterData>, res: any) => {
  try {
    const data = parse(RegisterSchema, req.body);
    // Acá me falta hashear la pw.
    const user = await createUser(data)
    console.log("USER: ", user);
    res.status(201).json({ message: 'User created successfully', description: { ...user } });
  } catch (err) {
    if (isValiError(err)) {
      console.log(err)
      return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default registerRoutes;