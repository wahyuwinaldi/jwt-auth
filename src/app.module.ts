import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ModulesModule } from './modules/modules.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ModulesModule],
})
export class AppModule {}
