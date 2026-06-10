import { Test, TestingModule } from '@nestjs/testing';
import { MedicController } from './medic.controller';
import { MedicService } from './medic.service';

describe('MedicController', () => {
  let controller: MedicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicsController],
      providers: [MedicsService],
    }).compile();

    controller = module.get<MedicsController>(MedicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
