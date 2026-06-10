import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MedicService } from './medic.service';
import { CreateUserDTO } from 'src/user/dto/user.dto';
import { CreateMedicDTO } from './dto/medic.dto';

@Controller('medic')
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
  async createMedic(@Body() userData: CreateUserDTO, medicData: CreateMedicDTO){
    return this.medicService.createMedic(userData, medicData);
  }
}
