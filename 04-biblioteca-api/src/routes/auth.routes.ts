import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { AuthController } from "../controller/auth.controller";
import { AuthService } from "../service/auth.service";
import { UsuarioRepository } from "../repository/usuario.repository";

const repo = new UsuarioRepository()
const service = new AuthService(repo)
const controller = new AuthController(service)

const router = Router();

router.post('/registrar', validate, controller.registrar);
router.post('/login', validate, controller.login);

export default router;