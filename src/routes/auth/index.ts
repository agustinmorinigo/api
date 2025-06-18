import express from 'express';
import registerRoutes from './register.js';
import loginRoutes from './login.js';
import forgotPasswordRoutes from './forgot-password.js';
import resetPasswordRoutes from './reset-password.js';
import refreshTokenRoutes from './refresh-token.js';

const authRoutes = express.Router();

authRoutes.use('/register', registerRoutes);
authRoutes.use('/login', loginRoutes);
authRoutes.use('/forgot-password', forgotPasswordRoutes);
authRoutes.use('/reset-password', resetPasswordRoutes);
authRoutes.use('/refresh-token', refreshTokenRoutes);

export default authRoutes