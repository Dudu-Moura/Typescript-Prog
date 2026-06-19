import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client" 
import { CreateUserDTO, UpdateUserDTO } from "./dto/user.dto";
import { Roles } from "src/auth/guards/role.guard";


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

    async update(email: string, data: Partial<User>): Promise<User> {
        const user = await this.findByEmail(data.email!);

        return await this.prisma.user.update({
            where: { email },
            data
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