import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private UserRepository: UserRepository){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET ?? 'secret',
            ignoreExpiration: false
        });
    }

    async validate(payload: any) {
        const user = await this.UserRepository.findByEmail(payload.email);

        if(!user) throw new UnauthorizedException();

        return user;
    }
}