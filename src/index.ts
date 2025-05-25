import express from 'express';
import prisma from "@/script.js"

// Config.
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/create", async (req, res) => {
  console.log("ENTRÓ ACÁ.");
  try {
    const user = await prisma.user.create({
      data: {
        email: "aguuuu@agu4.com",
        name: "Aguuuuu4",
        posts: {
          create: {
            title: "Título del post 4444",
            content: "Hola soy el contenidooo.",
            published: false,
          }
        }
      }
    })

    console.log("USERRRRRR: ", user);
    res.send({ status: 201, message: "Usuario creado" })

  } catch (error) {
    console.log("EERROR: ", error);
    res.send({ status: 400, message: "Algo salió MAL........" })
  }
})

app.get("/users", async (req, res) => {

  try {
    const users = await prisma.user.findMany()
    res.send({ status: 200, description: { users } })
  } catch (error) {
    res.send({ status: 400, message: "Algo salió MAL........" })
  }

})

// Run app.
app.listen(PORT)