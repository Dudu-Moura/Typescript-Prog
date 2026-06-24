import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MedicService } from './medic.service';
import { CreateUserDTO } from 'src/user/dto/user.dto';
import { CreateMedicDTO, MedicList } from './dto/medic.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Roles, RolesGuard } from 'src/auth/guards/role.guard';
import { RegisterDTO } from 'src/auth/dto/auth.dto';

@Controller('medic')
@UseGuards(JwtGuard, RolesGuard)
export class MedicController {
  constructor(private readonly medicService: MedicService) {};

  @Get()
  async getMedics(): Promise<MedicList[]>{
    const medics = await this.medicService.getMedics();
    return medics.map(medic => ({
      name: medic.name,
      crm: medic.crm,
      specialty: medic.specialty
    }))
  }

  @Get(':id')
  async getMedicById(@Param('id') id: string): Promise<MedicList>{
    const medic = await this.medicService.getMedicById(Number(id));
    return { name: medic.name, crm: medic.crm, specialty: medic.specialty };
  }
  
}
