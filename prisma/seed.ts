import { prisma } from '../lib/prisma.js'
import { seedUsers } from './seeders/user.seeder.js'

async function main() {
    await seedUsers(prisma)
}

try {
    await main()
    await prisma.$disconnect()
} catch (e) {
    console.error('❌ Seed gagal:', e)
    await prisma.$disconnect()
    process.exit(1)
}
