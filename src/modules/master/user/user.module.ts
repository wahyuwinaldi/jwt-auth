import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { PermissionGuard } from '../../../common/guards/permission.guard.js';

@Module({
  controllers: [UserController],
  providers: [UserService, PermissionGuard],
  exports: [UserService],
})
export class UserModule { }
