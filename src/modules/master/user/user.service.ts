import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { DeleteUserDto } from './dto/delete-user.dto.js';
import { prisma } from '../../../../lib/prisma.js';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  private readonly prisma = prisma;

  create(createUserDto: CreateUserDto) {
    const hashedPassword = bcrypt.hashSync('Inalum2026#', 10) ?? '';
    const user = this.prisma.user.create({
      data: {
        username: createUserDto.username,
        name: createUserDto.name,
        email: createUserDto.email,
        password: hashedPassword,
        phone: createUserDto.phone,
        idOrganization: createUserDto.idOrganization,
        createdBy: createUserDto.requestedBy,
        createdAt: new Date(),
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
      },
    });
    return user;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id: id, isDeleted: false },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.prisma.user.update({
      where: { id: id },
      data: {
        username: updateUserDto.username,
        name: updateUserDto.name,
        email: updateUserDto.email,
        phone: updateUserDto.phone,
        idOrganization: updateUserDto.idOrganization,
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
      },
    });
    return user;
  }

  remove(id: number, deleteUserDto: DeleteUserDto) {
    const user = this.prisma.user.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedBy: deleteUserDto.requestedBy,
        deletedAt: new Date(),
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
      },
    });
    return user;
  }

  findByUsername(username: string) {
    return this.prisma.user.findFirst({
      where: { username: username, isDeleted: false },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phone: true,
        idOrganization: true,
        password: true,
      },
    });
  }
}
