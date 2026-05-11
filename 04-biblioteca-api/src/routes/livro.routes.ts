import { Router } from "express";
import { livroController } from "../container";
import { validate } from "../middlewares/validate.middleware";
import { CreateLivroSchema } from "../dtos/livro.dto";
import { authenticate } from "../middlewares/auth.middleware";

const router =  Router();

router.get('/', livroController.listar);
router.get('/:id', livroController.buscarPorId);
router.post('/', authenticate, validate(CreateLivroSchema),livroController.criar);
router.delete('/:id', authenticate, livroController.delete)

export default router;
