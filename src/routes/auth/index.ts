import { Router } from 'express'

const authRoutes = Router()

// Login.
authRoutes.post("/login", (req, res) => {
  res.send("Post login.")
})

// // Register.
// authRoutes.post("/register", (req, res) => {
//   res.send("Post register.")
// })

// // Recover password.
// authRoutes.post("/recover-password", (req, res) => {
//   res.send("Post recover-password.")
// })

// // Logout.
// authRoutes.post("/logout", (req, res) => {
//   res.send("Post logout.")
// })

export default authRoutes