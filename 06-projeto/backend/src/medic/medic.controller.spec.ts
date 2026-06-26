import { Test, TestingModule } from '@nestjs/testing';
import { MedicController } from './medic.controller';
import { MedicService } from './medic.service';
import { MedicRepository } from './medic.repository';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';

describe('MedicController', () => {
    let controller: MedicController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MedicController],
            providers: [
                MedicService,
                MedicRepository,
                UserService,
                UserRepository,
                { provide: PrismaService, useValue: {} },
            ],
        }).compile();

        controller = module.get<MedicController>(MedicController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
