import express from 'express';
import authRoutes from "@/routes/auth/index.js";

// Config.
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/auth', authRoutes)

// Run app.
app.listen(PORT)