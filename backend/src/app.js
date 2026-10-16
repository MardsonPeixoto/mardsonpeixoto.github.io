import express from "express";
import cors from "cors"
import turmaRoutes from "./routes/turmaRoutes.js"

const app = express()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}))

app.use(express.json())

app.use("/turma", turmaRoutes)

app.use((request, response) => {
    response.status(404).json({message: "rota não encontrada"})
})

export default app
