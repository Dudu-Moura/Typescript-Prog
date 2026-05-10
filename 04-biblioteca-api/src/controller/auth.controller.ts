import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/auth.service";
import { Register } from "../dtos/auth.dto";
import { Login } from "../dtos/auth.dto";


export class AuthController{
    constructor(private AuthService: AuthService){};

    registrar = async (req: Request<{}, {}, Register>, res: Response, next: NextFunction): Promise<void> => {
        try{
            const tokenRegistro = await this.AuthService.registrar(req.body);

            res.status(201).json({ message: 'Usuário Criado!', token: { tokenRegistro }})
        }
        catch(ex){
            next(ex);
        }
    }

    login = async (req: Request<{}, {}, Login>, res: Response, next: NextFunction): Promise<void> => {
        try {
            const token = await this.AuthService.login(req.body);

            res.status(200).json({ message: 'Logado', token: { token } });
        } catch (ex) {
            next(ex);
        }
    }
}