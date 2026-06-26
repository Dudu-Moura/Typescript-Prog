import { Test, TestingModule } from '@nestjs/testing';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentRepository } from './appointment.repository';
import { UserService } from '../user/user.service';
import { MedicService } from '../medic/medic.service';

describe('AppointmentService', () => {
    let service: AppointmentService;
    let repository: jest.Mocked<AppointmentRepository>;
    let userService: jest.Mocked<UserService>;
    let medicService: jest.Mocked<MedicService>;

    const appointmentRepositoryMock = {
        findAll: jest.fn(),
        findByMedic: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        updateStatus: jest.fn(),
        cancelAppointment: jest.fn(),
    };

    const userServiceMock = {
        getUsers: jest.fn(),
        getUserByEmail: jest.fn(),
    };

    const medicServiceMock = {
        getMedics: jest.fn(),
        getMedicById: jest.fn(),
        getMedicByCRM: jest.fn(),
        getMedicByUser: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppointmentService,
                {
                    provide: AppointmentRepository,
                    useValue: appointmentRepositoryMock,
                },
                { provide: UserService, useValue: userServiceMock },
                { provide: MedicService, useValue: medicServiceMock },
            ],
        }).compile();

        service = module.get<AppointmentService>(AppointmentService);
        repository = module.get(AppointmentRepository);
        userService = module.get(UserService);
        medicService = module.get(MedicService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAllAppointments', () => {
        it('deve retornar todos os agendamentos', async () => {
            const appointments = [{ id: 1, status: 'PENDING' }];
            repository.findAll.mockResolvedValue(appointments as never);

            const result = await service.getAllAppointments();

            expect(result).toBe(appointments);
            expect(repository.findAll).toHaveBeenCalledTimes(1);
        });
    });

    describe('updateStatus', () => {
        it('deve lançar NotFoundException quando o agendamento não existe', async () => {
            repository.findById.mockResolvedValue(null);

            await expect(
                service.updateStatus(99, 'CONFIRMED', 'ADMIN', 1),
            ).rejects.toThrow(NotFoundException);
        });

        it('deve lançar ForbiddenException quando o paciente não é o dono', async () => {
            repository.findById.mockResolvedValue({
                id: 1,
                status: 'PENDING',
                userId: 2,
            } as never);

            // PATIENT id=99 tentando mexer em agendamento do userId=2
            await expect(
                service.updateStatus(1, 'CONFIRMED', 'PATIENT', 99),
            ).rejects.toThrow(ForbiddenException);
            expect(repository.updateStatus).not.toHaveBeenCalled();
        });

        it('deve lançar ConflictException em transição inválida', async () => {
            // COMPLETED não permite nenhuma transição (VALID_TRANSITIONS = null)
            repository.findById.mockResolvedValue({
                id: 1,
                status: 'COMPLETED',
                userId: 1,
            } as never);

            await expect(
                service.updateStatus(1, 'CONFIRMED', 'ADMIN', 1),
            ).rejects.toThrow('Cannot change status');
            expect(repository.updateStatus).not.toHaveBeenCalled();
        });

        it('deve atualizar o status em transição válida (PENDING -> CONFIRMED)', async () => {
            repository.findById.mockResolvedValue({
                id: 1,
                status: 'PENDING',
                userId: 1,
            } as never);
            const updated = { id: 1, status: 'CONFIRMED', userId: 1 };
            repository.updateStatus.mockResolvedValue(updated as never);

            const result = await service.updateStatus(
                1,
                'CONFIRMED',
                'ADMIN',
                1,
            );

            expect(result).toBe(updated);
            expect(repository.updateStatus).toHaveBeenCalledWith(
                1,
                'CONFIRMED',
            );
        });
    });

    describe('cancelAppointment', () => {
        it('deve lançar NotFoundException quando o agendamento não existe', async () => {
            repository.findById.mockResolvedValue(null);

            await expect(
                service.cancelAppointment(99, 'ADMIN', 1),
            ).rejects.toThrow(NotFoundException);
        });

        it('deve lançar ConflictException ao cancelar um já finalizado/cancelado', async () => {
            repository.findById.mockResolvedValue({
                id: 1,
                status: 'CANCELLED',
                userId: 1,
            } as never);

            await expect(
                service.cancelAppointment(1, 'ADMIN', 1),
            ).rejects.toThrow('Cannot change status');
            expect(repository.cancelAppointment).not.toHaveBeenCalled();
        });

        it('deve cancelar um agendamento em estado válido', async () => {
            repository.findById.mockResolvedValue({
                id: 1,
                status: 'PENDING',
                userId: 1,
            } as never);
            const cancelled = { id: 1, status: 'CANCELLED', userId: 1 };
            repository.cancelAppointment.mockResolvedValue(cancelled as never);

            const result = await service.cancelAppointment(1, 'ADMIN', 1);

            expect(result).toBe(cancelled);
            expect(repository.cancelAppointment).toHaveBeenCalledWith(1);
        });
    });

    describe('getAppointmentById', () => {
        it('deve lançar NotFoundException quando o agendamento não existe', async () => {
            repository.findById.mockResolvedValue(null);

            await expect(
                service.getAppointmentById(99, 1, 'ADMIN'),
            ).rejects.toThrow(NotFoundException);
        });

        it('deve retornar o agendamento com nome e especialidade do médico', async () => {
            const appointment = {
                id: 1,
                status: 'PENDING',
                userId: 1,
                medicId: 10,
            };
            repository.findById.mockResolvedValue(appointment as never);
            medicService.getMedicById.mockResolvedValue({
                name: 'Dr. House',
                specialty: 'Clínico',
            } as never);

            const result = await service.getAppointmentById(1, 1, 'ADMIN');

            expect(result).toEqual({
                ...appointment,
                name: 'Dr. House',
                specialty: 'Clínico',
            });
        });
    });

    describe('createAppointment', () => {
        // Dados base reutilizados pelos testes. userId(1) != medic.userId(2) de propósito,
        // pra não cair no guard de "marcar consulta consigo mesmo" sem querer.
        const user = {
            id: 1,
            email: 'test@test.com',
            name: 'test',
            cpf: '11111111111',
        };
        const medic = { id: 10, userId: 2, crm: '152365', specialty: 'test' };
        const futureDate = new Date('2030-01-20T10:00:00');

        const buildDto = (scheduledAt: Date) => ({
            scheduledAt,
            notes: 'Consulta de rotina',
            crm: medic.crm,
        });

        it('deve lançar ConflictException ao marcar consulta consigo mesmo (paciente é o médico)', async () => {
            // medic.userId == user.id -> dispara o primeiro guard
            userService.getUserByEmail.mockResolvedValue({
                ...user,
                id: medic.userId,
            } as never);
            medicService.getMedicByCRM.mockResolvedValue(medic);

            await expect(
                service.createAppointment(
                    buildDto(futureDate),
                    user.email,
                    medic.crm,
                ),
            ).rejects.toThrow('Cannot create an appontment to a doctor');

            expect(repository.create).not.toHaveBeenCalled();
        });

        it('deve lançar ConflictException com data no passado', async () => {
            userService.getUserByEmail.mockResolvedValue(user as never);
            medicService.getMedicByCRM.mockResolvedValue(medic);

            await expect(
                service.createAppointment(
                    buildDto(new Date('2020-01-20')),
                    user.email,
                    medic.crm,
                ),
            ).rejects.toThrow('Invalid date - Select a future date');

            expect(repository.create).not.toHaveBeenCalled();
        });

        it('deve lançar ConflictException quando já existe consulta na mesma janela de 30 min', async () => {
            userService.getUserByEmail.mockResolvedValue(user as never);
            medicService.getMedicByCRM.mockResolvedValue(medic);
            // consulta existente 10 min depois do horário pedido -> dentro dos 30 min
            repository.findByMedic.mockResolvedValue([
                {
                    id: 99,
                    status: 'CONFIRMED',
                    scheduledAt: new Date(
                        futureDate.getTime() + 10 * 60 * 1000,
                    ),
                },
            ] as never);

            await expect(
                service.createAppointment(
                    buildDto(futureDate),
                    user.email,
                    medic.crm,
                ),
            ).rejects.toThrow('There is already an appointment');

            expect(repository.create).not.toHaveBeenCalled();
        });

        it('NÃO deve considerar conflito com consultas canceladas no mesmo horário', async () => {
            userService.getUserByEmail.mockResolvedValue(user as never);
            medicService.getMedicByCRM.mockResolvedValue(medic);
            // mesma janela, mas CANCELLED -> deve ser ignorada
            repository.findByMedic.mockResolvedValue([
                { id: 99, status: 'CANCELLED', scheduledAt: futureDate },
            ] as never);
            const created = {
                id: 1,
                status: 'PENDING',
                scheduledAt: futureDate,
            };
            repository.create.mockResolvedValue(created as never);

            const result = await service.createAppointment(
                buildDto(futureDate),
                user.email,
                medic.crm,
            );

            expect(result).toBe(created);
            expect(repository.create).toHaveBeenCalledTimes(1);
        });

        it('deve criar o agendamento', async () => {
            userService.getUserByEmail.mockResolvedValue(user as never);
            medicService.getMedicByCRM.mockResolvedValue(medic);
            repository.findByMedic.mockResolvedValue([] as never); // médico sem agenda -> sem conflito
            const created = {
                id: 1,
                status: 'PENDING',
                scheduledAt: futureDate,
            };
            repository.create.mockResolvedValue(created as never);

            const dto = buildDto(futureDate);
            const result = await service.createAppointment(
                dto,
                user.email,
                medic.crm,
            );

            expect(result).toBe(created);
            // confere que o service repassa userId e medicId corretos pro repository
            expect(repository.create).toHaveBeenCalledWith(
                dto,
                user.id,
                medic.id,
            );
        });
    });
});
