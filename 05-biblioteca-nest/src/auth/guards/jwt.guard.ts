import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
    canActivate(context: any) {
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any) {
    const error = err || info;
    if (error || !user) {
      throw error || new UnauthorizedException('Token inválido ou expirado');
    }
    return user;
  }

}