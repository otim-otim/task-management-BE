import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Ensure the Prisma Client is only instantiated once in development.
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], 
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;


export default prisma