import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export function validate(schema: ZodSchema){
    return (req: Request, res: Response, next: NextFunction): void => {
        const resultado = schema.safeParse(req.body);

        if(!resultado.success){
            res.status(400).json({
                erro: 'Dados Inválidos',
                detalhes: resultado.error.issues.map(e => ({
                    campo: e.path.join('.'),
                    mensagem: e.message
                }))
            })
            return;
        }

        req.body = resultado.data
        next();
    }
}