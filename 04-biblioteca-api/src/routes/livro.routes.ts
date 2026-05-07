import { Router } from "express";
import { livroController } from "../container";
import { validate } from "../middlewares/validate.middleware";
import { CreateLivroSchema } from "../dtos/livro.dto";

const router =  Router();

router.get('/', livroController.listar);
router.get('/:id', livroController.buscarPorId);
router.post('/', validate(CreateLivroSchema),livroController.criar);
router.delete('/:id', livroController.delete)

export default router;
