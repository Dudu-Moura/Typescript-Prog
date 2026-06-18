import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MedicModule } from 'src/medic/medic.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService], 
  exports: [AuthService],
  imports: [UserModule, MedicModule]
})
export class UserModule {}