import { Injectable } from "@nestjs/common";
import { Medic, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMedicDTO } from "./dto/medic.dto";
import { UserRepository } from "src/user/user.repository";
import { CreateUserDTO } from "src/user/dto/user.dto";

@Injectable()
export class MedicRepository{
    constructor(private prisma: PrismaService, private userRepo: UserRepository){};

    async findAll(): Promise<Medic[]>{
        return this.prisma.medic.findMany();
    }

    async findById(id: number): Promise<Medic | null>{
        return this.prisma.medic.findUnique({
            where: { id }
        });
    }

    async findByCRM(crm: string): Promise<Medic | null>{
        return this.prisma.medic.findUnique({
            where: { crm }
        });
    }

    async create(userData: CreateUserDTO, medicData: CreateMedicDTO): Promise<{user: User, medic: Medic}>{
        const user = await this.prisma.user.create({
            data: userData
        });

        const userId = user.id;
        
        const medic = await this.prisma.medic.create({
            data: {...medicData, userId}
        });

        return { user , medic };
    }
}