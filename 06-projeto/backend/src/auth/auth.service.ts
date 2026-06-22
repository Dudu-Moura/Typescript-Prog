import { UserService } from "src/user/user.service";
import { LoginDTO, RegisterDTO } from "./dto/auth.dto";
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from "src/user/dto/user.dto";
import bcrypt from "bcryptjs";
import { CreateMedicDTO } from "src/medic/dto/medic.dto";
import { MedicService } from "src/medic/medic.service";

@Injectable()
export class AuthService{
    constructor(private userService: UserService, private medicService: MedicService,private jwtService: JwtService){};
    private readonly logger = new Logger();

    async register(data: RegisterDTO): Promise<{ token: string }> {
        this.logger.debug(`Register attempt - EMAIL: ${data.user.email} NAME: ${data.user.name}`);

        const user = await this.userService.createUser(data.user);
        const payload = { id: user.id, role: user.role, email: user.email}

        const token = await this.jwtService.sign(payload);
        this.logger.log(`Token generated - ${token}`);
        return { token }
    };

    async registerMedic(data: RegisterDTO): Promise<{ token: string }> {
        this.logger.debug(`Medic register attempt - EMAIL: ${data.user.email} NAME: ${data.user.name} CRM: ${data.medic!.crm}`);

        const {user, medic} = await this.medicService.createMedic(data.user, data.medic!);
        const payload = { id: user.id, role: user.role, email: user.email, medicId: medic.id };

        const token = await this.jwtService.sign(payload);
        this.logger.log(`Token generated - ${token}`);
        return { token }
    };

    async login(data: LoginDTO): Promise<{ token: string }>{
        this.logger.debug(`Login attempt - EMAIL: ${data.email}`);

        const user = await this.userService.getUserByEmail(data.email);
        if(!user) throw new UnauthorizedException(`Email or password incorrect`);

        const userPassword = await bcrypt.compare(data.password, user.password);
        if(!userPassword) throw new UnauthorizedException(`Email or password incorrect`);

        const payload = { id: user.id, role: user.role, email: user.email };
        const token = await this.jwtService.sign(payload);
        this.logger.log(`Token generated - ${token}`);
        return { token }
    };
}   
