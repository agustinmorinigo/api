import prisma from '../../script.js';
import { RegisterData } from '../../schemas/auth/register.js';
import { Prisma as PrismaT, User } from '@prisma/client';

export const createUser = async (userData: RegisterData): Promise<User> => {
  try {
    return await prisma.user.create({
      data: userData
    })
  } catch (error) {
    console.log("error: ", error);

    if (error instanceof PrismaT.PrismaClientKnownRequestError) {
      throw new Error(error.message)
    }

    throw new Error('Failed to create user.')
  }
}