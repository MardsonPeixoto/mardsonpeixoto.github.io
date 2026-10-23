import { Router } from "express";
import { 
    cadastrarPerfil, 
    buscarPerfil,
    buscarPerfilID,
    atualizarPerfil
} from "../controllers/perfilController.js";

const router = Router()

router.post("/", cadastrarPerfil)
router.get("/", buscarPerfil)
router.get("/:id", buscarPerfilID)
router.put("/:id", atualizarPerfil)

export default router