import { Router } from "express";
import { emprestimoController } from "../container";
import { validate } from "../middlewares/validate.middleware";
import { CreateEmprestimoSchema } from "../dtos/emprestimo.dto";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get('/', authenticate, emprestimoController.listar);
router.get('/:id', authenticate, emprestimoController.buscarPorId);
router.post('/', authenticate, validate(CreateEmprestimoSchema), emprestimoController.criar);
router.patch('/:id/devolver', authenticate, emprestimoController.devolver);

export default router;