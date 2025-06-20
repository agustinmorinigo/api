import { createUser } from '../../models/user/index.js';
import { RegisterData, RegisterSchema } from '../../schemas/auth/register.js';
import express from 'express';
import type { Request } from 'express';
import { parse, isValiError } from 'valibot';
import { Prisma as PrismaT } from '@prisma/client';
import bcrypt from "bcrypt"

const registerRoutes = express.Router();

// Esta función vendrá de controllers/
registerRoutes.post('/', async (req: Request<{}, {}, RegisterData>, res: any) => {
  try {
    const data = parse(RegisterSchema, req.body);
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    const newUser = {
      ...data,
      password: hashedPassword
    }

    const user = await createUser(newUser)
    const { password, ...userWithoutPassword } = user
    res.status(201).json({ message: 'User created successfully', description: { ...userWithoutPassword } });
  } catch (err) {
    if (isValiError(err)) {
      return res.status(400).json({ message: err.message });
    }

    if (err instanceof PrismaT.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return res.status(400).json({ message: 'There is a unique constraint violation, a new user cannot be created with this email' });
      }
    }

    return res.status(500).json({ message: 'Failed to create user.' });
  }
});

export default registerRoutes;