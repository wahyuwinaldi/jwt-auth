import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './modules/master/user/user.module.js';
import { AuthModule } from './modules/auth/auth.module.js';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
