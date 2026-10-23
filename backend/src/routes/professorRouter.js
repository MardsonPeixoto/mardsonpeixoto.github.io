import { Router } from "express";
import {
    cadastrarProfessor,
    listarProfessor,
} from "../controllers/professorController.js"

const router = Router()

router.post("/", cadastrarProfessor)
router.get("/", listarProfessor)

export default router