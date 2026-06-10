import { Module } from '@nestjs/common';
import { MedicController } from './medic.controller';
import { MedicService } from './medic.service';
import { MedicRepository } from './medic.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [MedicController],
  providers: [MedicService, MedicRepository],
  imports: [UserModule],
  exports: [MedicService]
})
export class MedicModule {}
