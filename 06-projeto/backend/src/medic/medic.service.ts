import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { MedicRepository } from './medic.repository';
import { Medic, User } from '@prisma/client';
import { CreateUserDTO } from 'src/user/dto/user.dto';
import { CreateMedicDTO } from './dto/medic.dto';
import bcrypt from 'bcryptjs'
import { UserService } from 'src/user/user.service';

@Injectable()
export class MedicService {
    constructor(private medicRepository: MedicRepository, private userService: UserService){};
    private readonly logger = new Logger();

    async getMedics(){
        this.logger.debug(`Listing all medics: `);

        const medics = await this.medicRepository.findAll();

        this.logger.log(`Medics listed - ${medics.length}`);
        
        const users = await this.userService.getUsers();
        const usersMap = new Map(users.map(user => [user.id, user.name]));

        return medics.map(medic => ({
            ...medic,
            name: usersMap.get(medic.userId)!
        }));
    }

    async getMedicById(id: number){
        this.logger.debug(`Listing medic by id: ${id}`);

        const medic = await this.medicRepository.findById(id);
        
        if(!medic){
            this.logger.warn(`Medic not found - ${id}`);
            throw new NotFoundException(`Medic not found`);
        };

        const userData = await this.userService.getUserById(medic.userId);

        this.logger.log(`Medic ${id} listed - CRM ${medic.crm}, SPECIALITY: ${medic.specialty}`);
        return { ...medic, name: userData!.name }
    }

    async getMedicByCRM(crm: string): Promise<Medic | null> {
        const medic = await this.medicRepository.findByCRM(crm);

        if(!medic){
            throw new NotFoundException(`Medic not found`);
        };

        return medic;
    }

    async createMedic(userData: CreateUserDTO, medicData: CreateMedicDTO): Promise<{user: User, medic: Medic}>{
        this.logger.debug(`Creating medic - ${medicData.crm}, ${userData.email}`);

        const medicDB = await this.medicRepository.findByCRM(medicData.crm);

        if(medicDB){
            this.logger.warn(`Medic already registered - ${medicDB.crm}, ${userData.email}`);
            throw new ConflictException(`Medic already registered in database`);
        }

        const password = await bcrypt.hash(userData.password, 10);
        const { user, medic } = await this.medicRepository.create({...userData, password}, medicData);
        
        this.logger.log(`Medic created - ID: ${medic.id}, CRM: ${medic.crm}`);
        return { user, medic };
    }
}
