import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { DeleteUserDto } from './dto/delete-user.dto.js';
import { AuthGuard } from '../../../common/guards/auth.guard.js';
import { PermissionGuard } from '../../../common/guards/permission.guard.js';

@Controller('user')
@UseGuards(AuthGuard, PermissionGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get('list')
  findAll() {
    return this.userService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string, @Body() deleteUserDto: DeleteUserDto) {
    return this.userService.remove(+id, deleteUserDto);
  }
}
