// lib/prisma.ts – Prisma client singleton for the application
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // In production we can reuse a single PrismaClient instance
  prisma = new PrismaClient();
} else {
  // In development we attach the client to the global object to prevent hot‑reload issues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalAny = global as any;
  if (!globalAny.__prisma) {
    globalAny.__prisma = new PrismaClient();
  }
  prisma = globalAny.__prisma;
}

export default prisma;
