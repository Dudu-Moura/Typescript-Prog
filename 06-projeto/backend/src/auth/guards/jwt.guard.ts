import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtGuard extends AuthGuard('jwt'){
    canActivate(context: any){
        return super.canActivate(context);
    }

    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser {
        const error = err || info;
        if(error || !user){
            throw new UnauthorizedException(`Token inválido ou expirado`);
        }
        return user;
    }
}