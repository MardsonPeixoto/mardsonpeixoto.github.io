import { Router } from "express";
import {
    cadastrarTurma
} from "../controllers/turmaController.js"

const router = Router()

router.post("/", cadastrarTurma)

export default router