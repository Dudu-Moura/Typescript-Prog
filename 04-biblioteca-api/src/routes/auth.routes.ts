import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { AuthController } from "../controller/auth.controller";
import { AuthService } from "../service/auth.service";
import { UsuarioRepository } from "../repository/usuario.repository";
import { LoginSchema, RegisterSchema } from "../dtos/auth.dto";
import { authController } from "../container";

const router = Router();

router.post('/registrar', validate(RegisterSchema), authController.registrar);
router.post('/login', validate(LoginSchema), authController.login);

export default router;