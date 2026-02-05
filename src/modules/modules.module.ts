import { Module } from '@nestjs/common';
import { MasterModule } from './master/master.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [MasterModule, AuthModule],
})
export class ModulesModule {}
