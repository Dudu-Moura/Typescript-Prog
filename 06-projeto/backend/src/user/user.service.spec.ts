import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

describe('UserService', () => {
    let service: UserService;
    let repository: jest.Mocked<UserRepository>;

    // Mock de cada método do repository que o service usa.
    const userRepositoryMock = {
        findAll: jest.fn(),
        findById: jest.fn(),
        findByEmail: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                { provide: UserRepository, useValue: userRepositoryMock },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        repository = module.get(UserRepository);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getUsers', () => {
        it('deve retornar a lista de usuários', async () => {
            const users = [{ id: 1, name: 'Ana' }];
            repository.findAll.mockResolvedValue(users as never);

            const result = await service.getUsers();

            expect(result).toBe(users);
            expect(repository.findAll).toHaveBeenCalledTimes(1);
        });
    });

    describe('getUserById', () => {
        it('deve lançar NotFoundException quando o usuário não existe', async () => {
            repository.findById.mockResolvedValue(null);

            await expect(service.getUserById(99)).rejects.toThrow(
                NotFoundException,
            );
        });
    });
});
