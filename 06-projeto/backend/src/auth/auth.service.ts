import { UserService } from "src/user/user.service";
import { LoginDTO } from "./dto/auth.dto";
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from "src/user/dto/user.dto";
import bcrypt from "bcryptjs";

@Injectable()
export class AuthService{
    constructor(private userService: UserService, private jwtService: JwtService){};
    private readonly logger = new Logger();


    async register(data: CreateUserDTO): Promise<{ token: string }> {
        this.logger.debug(`Register attempt - EMAIL: ${data.email} NAME: ${data.name}`);

        const user = await this.userService.createUser(data);
        const payload = { id: user.id, role: user.role, email: user.email}

        const token = await this.jwtService.sign(payload);
        this.logger.log(`Token generated - ${token}`);
        return { token }
    };

    async login(data: LoginDTO): Promise<{ token: string }>{
        this.logger.debug(`Register attempt - EMAIL: ${data.email}`);

        const user = await this.userService.getUserByEmail(data.email);
        if(!user) throw new UnauthorizedException(`Email or password incorrect`);

        const userPassword = await bcrypt.compare(data.password, user.password);
        if(!userPassword) throw new UnauthorizedException(`Email or password incorrect`);

        const payload = { id: user.id, role: user.role, email: user.email};
        const token = await this.jwtService.sign(payload);
        this.logger.log(`Token generated - ${token}`);
        return { token }
    };
}   
