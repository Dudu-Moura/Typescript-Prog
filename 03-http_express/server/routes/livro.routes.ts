import { Router } from "express";
import { livroController } from "../container";

const router =  Router();

router.get('/', livroController.listar);
router.get('/:id', livroController.buscarPorId);
router.post('/', livroController.criar);
router.delete('/:id', livroController.delete)

export default router;
