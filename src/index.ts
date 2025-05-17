import express from 'express';
import authRoutes from './routes/auth/index.js';

// Config.
const app = express();
const PORT = process.env.PORT || 3000;

// Auth routes.
// app.use('/login', authRoutes)            // TO DO: loginRoutes.
app.post('/login', (req, res) => { res.send("jeeeeeeeeeeeeeee") })            // TO DO: loginRoutes.
// app.use('/register', authRoutes)         // TO DO: registerRoutes.
// app.use('/recover-password', authRoutes) // TO DO: recoveryPasswordRoutes.
// app.use('/logout', authRoutes)           // TO DO: logoutRoutes.

// Run app.
app.listen(PORT)