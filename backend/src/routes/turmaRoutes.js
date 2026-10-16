import { Router } from "express";
import {
    buscarTurmaID,
    cadastrarTurma,
    atualizarTurma,
    deletarTurma,
    listarTurma
} from "../controllers/turmaController.js"

const router = Router()

router.post("/", cadastrarTurma)
router.get("/", listarTurma)
router.get("/:id", buscarTurmaID)
router.put("/:id", atualizarTurma)
router.delete("/:id", deletarTurma)

export default router