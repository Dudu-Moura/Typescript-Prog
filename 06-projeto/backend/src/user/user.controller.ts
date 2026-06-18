import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';

@Controller('user')
@UseGuards(JwtGuard, RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(){
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserId(@Param('id') id: string){
    return this.userService.getUserById(Number(id));
  }

  @Post()
  async create(@Body() data: CreateUserDTO){
    return this.userService.createUser(data);
  }
}
