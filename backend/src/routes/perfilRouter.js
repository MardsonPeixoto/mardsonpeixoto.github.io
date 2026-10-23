import { Router } from "express";
import { 
    cadastrarPerfil, 
    buscarPerfil,
    buscarPerfilID,
    atualizarPerfil,
    deletarPerfil
} from "../controllers/perfilController.js";

const router = Router()

router.post("/", cadastrarPerfil)
router.get("/", buscarPerfil)
router.get("/:id", buscarPerfilID)
router.put("/:id", atualizarPerfil)
router.delete("/:id", deletarPerfil)

export default router