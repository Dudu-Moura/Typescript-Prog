import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(private userRepository: UserRepository){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET ?? 'secret',
            ignoreExpiration: false
        })
    };
    async validate(payload: any){
        const user = await this.userRepository.findByEmail(payload.email);

        if(!user) throw new UnauthorizedException();
        
        return user;
    }
}