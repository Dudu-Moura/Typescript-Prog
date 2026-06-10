import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client" 
import { CreateUserDTO, UpdateUserDTO } from "./dto/user.dto";


@Injectable()
export class UserRepository{
    constructor(private prisma: PrismaService){};

    async findAll(): Promise<User[]>{
        return this.prisma.user.findMany();
    };

    async findById(id: number): Promise<User | null>{
        return this.prisma.user.findUnique({
            where: { id }
        });
    };

    async findByCPF(cpf: string): Promise<User | null>{
        return this.prisma.user.findUnique({
            where: { cpf }
        })
    }

    async findByEmail(email: string): Promise<User | null>{
        return this.prisma.user.findUnique({
            where: { email }
        });
    }
    
    async create(user: CreateUserDTO): Promise<User> {
        return this.prisma.user.create({
            data: user
        });
    };

    async update(data: UpdateUserDTO): Promise<User> {
        const user = await this.findByCPF(data.cpf!);

        return await this.prisma.user.update({
            data: {...user, data}
        })
    }

    async delete(id: number): Promise<Boolean>{
        const before = (await this.findAll()).length;
         const user = await this.prisma.user.delete({
            where: { id }
        })
        const after = (await this.findAll()).length;
        return before > after;
    }
}