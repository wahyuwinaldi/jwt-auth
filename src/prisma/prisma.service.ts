import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { prisma } from '../../lib/prisma.js';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  get user() {
    return prisma.user;
  }

  async onModuleInit() {
    // Optional: bisa tambahkan koneksi test di sini
  }

  async onModuleDestroy() {
    await prisma.$disconnect();
  }
}
