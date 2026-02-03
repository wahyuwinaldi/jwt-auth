import type { prisma as prismaInstance } from '../../lib/prisma.js'
import bcrypt from 'bcrypt'

type PrismaClient = typeof prismaInstance

export async function seedUsers(prisma: PrismaClient) {
    // Hapus semua data user dan reset ID ke 1
    await prisma.$executeRawUnsafe('TRUNCATE TABLE users RESTART IDENTITY CASCADE')

    // Hash password dengan bcrypt
    const hashedPassword = await bcrypt.hash('123456', 10)

    // Data users yang akan di-seed
    const usersData = [
        {
            username: 'developer',
            email: 'developer@gmail.com',
            name: 'Developer',
            password: hashedPassword,
            phone: '081234567890',
            idOrganization: null,
            roleCode: 'ADMIN',
            isDeleted: false,
            deletedBy: null,
            deletedAt: null,
        },
        {
            username: 'admin',
            email: 'admin@gmail.com',
            name: 'Administrator',
            password: hashedPassword,
            phone: '081234567891',
            idOrganization: null,
            roleCode: 'ADMIN',
            isDeleted: false,
            deletedBy: null,
            deletedAt: null,
        },
        {
            username: 'user',
            email: 'user@gmail.com',
            name: 'User',
            password: hashedPassword,
            phone: '081234567892',
            idOrganization: null,
            roleCode: 'USER',
            isDeleted: false,
            deletedBy: null,
            deletedAt: null,
        },
    ]

    // Buat multiple users sekaligus
    await prisma.user.createMany({
        data: usersData,
    })

    console.log(`✅ Seed users berhasil! ${usersData.length} user telah dibuat.`)
}
