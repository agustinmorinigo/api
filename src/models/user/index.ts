import prisma from 'prisma';
import { RegisterData } from 'schemas/auth/register';
import { Prisma as PrismaT, User } from '@prisma/client';

export const createUser = async (userData: RegisterData): Promise<User> => {
  try {
    return await prisma.user.create({
      data: userData
    })
  } catch (error) {
    if (error instanceof PrismaT.PrismaClientKnownRequestError) {
      throw error
    }

    throw new Error('Failed to create user.')
  }
}