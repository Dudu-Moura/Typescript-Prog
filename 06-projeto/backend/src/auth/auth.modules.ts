import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MedicModule } from 'src/medic/medic.module';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './strategy/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, jwtStrategy], 
  exports: [AuthService],
  imports: [UserModule, MedicModule, PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'secret',
      signOptions: { expiresIn: '7d'}
    }),
  ],
})
export class AuthModule {}