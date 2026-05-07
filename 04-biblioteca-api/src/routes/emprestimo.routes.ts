import { Router } from "express";
import { emprestimoController } from "../container";
import { validate } from "../middlewares/validate.middleware";
import { CreateEmprestimoSchema } from "../dtos/emprestimo.dto";

const router = Router();

router.get('/', emprestimoController.listar);
router.get('/:id', emprestimoController.buscarPorId);
router.post('/', validate(CreateEmprestimoSchema), emprestimoController.criar);
router.patch('/:id/devolver', emprestimoController.devolver);

export default router;