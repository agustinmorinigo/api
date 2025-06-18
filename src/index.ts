import express from 'express';
import authRoutes from "./routes/auth/index.js";
// import prisma from "../../script.js";

// TO DO: Permitir trabajar con paths en TS. Falla en el build.

// Config.
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/auth', authRoutes)

// Run app.
app.listen(PORT)