import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UsersModule],
})
export class AppModule { }
