import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.post.create({
    data: {
      title: 'Title of a post',
      content: 'Content of a post',
      published: true,
      author: {
        connect: { id: 1 },
      },
    },
  });
}
main().catch((e) => console.error(e));