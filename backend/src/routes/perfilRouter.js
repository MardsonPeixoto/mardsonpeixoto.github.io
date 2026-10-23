import { Router } from "express";
import { 
    cadastrarPerfil, 
    buscarPerfil,
    buscarPerfilID
} from "../controllers/perfilController.js";

const router = Router()

router.post("/", cadastrarPerfil)
router.get("/", buscarPerfil)
router.get("/:id", buscarPerfilID)

export default router