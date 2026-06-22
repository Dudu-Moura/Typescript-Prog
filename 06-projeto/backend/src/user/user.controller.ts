import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Roles, RolesGuard } from 'src/auth/guards/role.guard';
import { CurrentUser } from 'src/decorators/current_user.decorator';
import type { User } from '@prisma/client';

@Controller('user')
@UseGuards(JwtGuard, RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Roles('ADMIN')
  async getUsers(){
    const users = await this.userService.getUsers();
    return users.map(user => ({
      name: user.name,
      cpf: user.cpf,
      email: user.email
    }));
  }

  @Get(':id')
  async getUserId(@Param('id') id: string){
    const user = await this.userService.getUserById(Number(id));
    return {
      name: user!.name,
      cpf: user!.cpf,
      email: user!.email
    }
  }

  @Patch()
  async update(@CurrentUser() user: User, @Body() data: Partial<CreateUserDTO>){
    const updatedUser = await this.userService.updateUser(user.email, data);
    return {
      name: updatedUser.name,
      email: updatedUser.email,
      cpf: updatedUser.cpf
    };
  };

  @Delete()
  @Roles('ADMIN')
  async delete(@CurrentUser() user: User){
    return this.userService.deleteUser(Number(user.id));
  }
  
};
