import { Router } from "express";
import { 
    cadastrarPerfil, 
    listarPerfil
} from "../controllers/perfilController.js";

const router = Router()

router.post("/", cadastrarPerfil)
router.get("/", listarPerfil)

export default router