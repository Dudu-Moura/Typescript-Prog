import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MedicService } from './medic.service';
import { CreateUserDTO } from 'src/user/dto/user.dto';
import { CreateMedicDTO } from './dto/medic.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Roles, RolesGuard } from 'src/auth/guards/role.guard';

@Controller('medic')
@UseGuards(JwtGuard, RolesGuard)
export class MedicController {
  constructor(private readonly medicService: MedicService) {};

  @Get()
  async getMedics(){
    return this.medicService.getMedics();
  }

  @Get(':id')
  async getMedicById(@Param('id') id: string){
    return this.medicService.getMedicById(Number(id));
  }

  @Post()
  @Roles('ADMIN')
  async createMedic(@Body() userData: CreateUserDTO, medicData: CreateMedicDTO){
    return this.medicService.createMedic(userData, medicData);
  }
}
