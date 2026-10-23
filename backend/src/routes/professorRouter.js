import { Router } from "express";
import {
    atualizarProfessor,
    buscarProfessorID,
    cadastrarProfessor,
    deletarProfessor,
    listarProfessor,
} from "../controllers/professorController.js"

const router = Router()

router.post("/", cadastrarProfessor)
router.get("/", listarProfessor)
router.get("/:id", buscarProfessorID)
router.put("/:id", atualizarProfessor)
router.delete("/:id", deletarProfessor)

export default router