import { Router } from "express";
import {
    cadastrarProfessor,
} from "../controllers/professorController.js"

const router = Router()

router.post("/", cadastrarProfessor)

export default router