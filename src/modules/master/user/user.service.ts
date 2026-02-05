import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../../../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const password = bcrypt.hashSync('Inalum2026#', 10);

    return this.prisma.user.create({
      data: {
        username: createUserDto.username,
        name: createUserDto.name,
        email: createUserDto.email,
        phone: createUserDto.phone,
        idOrganization: createUserDto.idOrganization,
        roleCode: createUserDto.roleCode,
        password: password,
        createdBy: createUserDto.requestedBy,
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
        roleCode: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id: id },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
        roleCode: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        username: updateUserDto.username,
        name: updateUserDto.name,
        email: updateUserDto.email,
        phone: updateUserDto.phone,
        idOrganization: updateUserDto.idOrganization,
        roleCode: updateUserDto.roleCode,
        updatedBy: updateUserDto.requestedBy,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
        roleCode: true,
      },
    });
  }

  remove(id: number, requestedBy: string) {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        isDeleted: true,
        deletedBy: requestedBy,
        deletedAt: new Date(),
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
        roleCode: true,
      },
    });
  }

  findByUsername(username: string) {
    return this.prisma.user.findFirst({
      where: {
        username: username,
        isDeleted: false,
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
        roleCode: true,
        password: true,
      },
    });
  }
}
