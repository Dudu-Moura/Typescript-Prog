import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '@prisma/client';
import { Logger } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import bcrypt from 'bcryptjs'

@Injectable()
export class UserService {
    constructor(private UserRepository: UserRepository){};
    private readonly logger = new Logger();


    async getUsers(): Promise<User[]>{
        this.logger.debug('Listing users: ');

        const users = await this.UserRepository.findAll();
        this.logger.log(`Users listed - ${users.length}`);
        return users;
    }

    async getUserById(id: number): Promise<Pick<User, 'name' | 'cpf' | 'email'> | null>{
        this.logger.debug(`Trying do get user: ${id}`);

        const user = await this.UserRepository.findById(id);
        if(!user) {
            this.logger.warn(`User ${id} not found`);
            throw new NotFoundException(`User not found!`)
        };

        this.logger.log(`User found - ${JSON.stringify(user)}` );
        return {
            name: user.name,
            cpf: user.cpf,
            email: user.email
        };
    }

    async getUserByCPF(cpf: string): Promise<User | null>{
        const user = await this.UserRepository.findByCPF(cpf);
        if (!user){
            throw new NotFoundException(`User not found`);
        }

        return user;
    }

    async getUserByEmail(email: string): Promise<User | null>{
        const user = await this.UserRepository.findByEmail(email);
        if (!user){
            throw new NotFoundException(`User not found`);
        }

        return user;
    }

    async createUser(data: CreateUserDTO): Promise<User>{
        this.logger.debug(`Creating user... ${data.name}`);

        const user = await this.UserRepository.findByCPF(data.cpf);
        
        if(user){
            this.logger.warn(`User is already registered in database`);
            throw new ConflictException(`User already registered`);
        }
        
        const password = await bcrypt.hash(data.password, 10);
        const createdUser = await this.UserRepository.create({...data, password}); 

        this.logger.log(`User created - ${createdUser.id, createdUser.email, createdUser.role}`);
        return createdUser;
    }
}
