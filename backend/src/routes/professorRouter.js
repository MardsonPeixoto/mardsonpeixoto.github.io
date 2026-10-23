import { Router } from "express";
import {
    buscarProfessorID,
    cadastrarProfessor,
    listarProfessor,
} from "../controllers/professorController.js"

const router = Router()

router.post("/", cadastrarProfessor)
router.get("/", listarProfessor)
router.get("/:id", buscarProfessorID)

export default router