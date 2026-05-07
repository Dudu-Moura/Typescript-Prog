import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function errorMiddleware(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if(error instanceof AppError){
        res.status(error.statusCode).json({ erro: error.message });
        return
    }

    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro interno no servidor "});
}