import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: process.env.SEED_MAIL },
    update: {
      email: process.env.SEED_MAIL || 'admin@admin.com',
      username: process.env.SEED_USERNAME || 'Admin',
      password: await bcrypt.hash(process.env.SEED_PASSWORD || 'admin123', 10),
    },
    create: {
      email: process.env.SEED_MAIL || 'admin@admin.com',
      username: process.env.SEED_USERNAME || 'Admin',
      password: await bcrypt.hash(process.env.SEED_PASSWORD || 'admin123', 10),
    },
  });

  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });