import { Module } from '@nestjs/common';
import { MedicsController } from './medics.controller';
import { MedicsService } from './medics.service';

@Module({
  controllers: [MedicsController],
  providers: [MedicsService],
  exports: [MedicsService],
})
export class MedicsModule {}
