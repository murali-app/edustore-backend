import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash('superadmin123', 10);

  // Create SUPERADMIN user if not exists
  const superadmin = await prisma.user.upsert({
    where: { email: 'superadmin@edustore.com' },
    update: {},
    create: {
      username: 'superadmin',
      email: 'superadmin@edustore.com',
      phone: '9999999999',
      password: hashedPassword,
      role: 'SUPERADMIN',
    },
  });

  console.log('Seeded SUPERADMIN:', superadmin.email);
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
