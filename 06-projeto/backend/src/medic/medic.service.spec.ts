import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { MedicService } from './medic.service';
import { MedicRepository } from './medic.repository';
import { UserService } from '../user/user.service';

describe('MedicService', () => {
    let service: MedicService;
    let repository: jest.Mocked<MedicRepository>;
    let userService: jest.Mocked<UserService>;

    const medicRepositoryMock = {
        findAll: jest.fn(),
        findById: jest.fn(),
        findByCRM: jest.fn(),
        findByUser: jest.fn(),
        create: jest.fn(),
    };

    const userServiceMock = {
        getUsers: jest.fn(),
        getUserById: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedicService,
                { provide: MedicRepository, useValue: medicRepositoryMock },
                { provide: UserService, useValue: userServiceMock },
            ],
        }).compile();

        service = module.get<MedicService>(MedicService);
        repository = module.get(MedicRepository);
        userService = module.get(UserService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getMedics', () => {
        it('deve combinar médicos com o nome do usuário', async () => {
            repository.findAll.mockResolvedValue([
                { id: 1, userId: 10, crm: '123', specialty: 'Cardio' },
            ] as never);
            userService.getUsers.mockResolvedValue([
                { id: 10, name: 'Dr. House' },
            ] as never);

            const result = await service.getMedics();

            expect(result[0]).toMatchObject({ id: 1, name: 'Dr. House' });
        });
    });

    describe('getMedicById', () => {
        it('deve lançar NotFoundException quando o médico não existe', async () => {
            repository.findById.mockResolvedValue(null);

            await expect(service.getMedicById(99)).rejects.toThrow(
                NotFoundException,
            );
        });
    });
});
