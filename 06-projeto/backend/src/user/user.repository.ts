import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client" 
import { CreateUserDTO } from "./dto/user.dto";


@Injectable()
export class UserRepository{
    constructor(private prisma: PrismaService){};

    async findAll(){
        return this.prisma.user.findMany({
            omit: { password: true }
        });
    };

    async findById(id: number){
        return this.prisma.user.findUnique({
            where: { id },
            omit: { password: true }
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