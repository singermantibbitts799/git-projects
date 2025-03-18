import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Example query
async function example() {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });

  console.log(user);
}

example();