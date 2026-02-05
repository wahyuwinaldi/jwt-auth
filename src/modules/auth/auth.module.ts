import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../master/user/user.module.js';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../common/guards/auth.guard.js';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ]
})
export class AuthModule { }
