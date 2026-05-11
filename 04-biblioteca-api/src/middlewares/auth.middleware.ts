import { NextFunction, Request, Response } from "express"
import { UnauthorizedError } from "../errors/AppError"
import * as jwt from 'jsonwebtoken';
import { env } from "../config/env";


interface TokenPayload{
    id: number,
    email: string
}

declare global {
    namespace Express {
        interface Request {
            usuario?: TokenPayload
        }
    }
}

export function authenticate(req: Request, res: Response, next: NextFunction): void{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return next(new UnauthorizedError('Token não fornecido'));
    }

    const token = authHeader?.split(' ')[1];

    try{
        const payload = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
        req.usuario = payload;
        next();
    }
    catch(ex){
        throw new UnauthorizedError('Token inválido ou expirado');
    }
}
