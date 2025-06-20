import express from 'express';
import registerRoutes from '@/routes/auth/register';
import loginRoutes from '@/routes/auth/login';
import forgotPasswordRoutes from '@/routes/auth/forgot-password';
import resetPasswordRoutes from '@/routes/auth/reset-password';
import refreshTokenRoutes from '@/routes/auth/refresh-token';

const authRoutes = express.Router();

authRoutes.use('/register', registerRoutes);
authRoutes.use('/login', loginRoutes);
authRoutes.use('/forgot-password', forgotPasswordRoutes);
authRoutes.use('/reset-password', resetPasswordRoutes);
authRoutes.use('/refresh-token', refreshTokenRoutes);

export default authRoutes