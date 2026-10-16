import { Router } from "express";
import {
    cadastrarTurma,
    listarTurma
} from "../controllers/turmaController.js"

const router = Router()

router.post("/", cadastrarTurma)
router.get("/", listarTurma)

export default router