import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // Aktifkan ValidationPipe untuk validasi DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Hapus property yang tidak ada di DTO
      forbidNonWhitelisted: true, // Throw error jika ada property yang tidak diizinkan
      transform: true, // Transform payload ke DTO instance
    })
  );


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
