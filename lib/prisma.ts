// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Это предотвратит создание нового клиента при каждом запросе.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;