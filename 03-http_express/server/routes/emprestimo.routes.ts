import { Router } from "express";
import { emprestimoController } from "../container";

const router = Router();

router.get('/', emprestimoController.listar);
router.get('/:id', emprestimoController.buscarPorId);
router.post('/', emprestimoController.criar);
router.patch('/:id/devolver', emprestimoController.devolver);

export default router;