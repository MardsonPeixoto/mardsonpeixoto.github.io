import { Router } from "express";
import { 
    cadastrarUsuario 
} from "../controllers/perfilController.js";

const router = Router()

router.post("/", cadastrarUsuario)

export default router