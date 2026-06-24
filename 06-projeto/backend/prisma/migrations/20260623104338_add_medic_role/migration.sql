-- Add MEDIC value to the Role enum (kept in sync with schema.prisma)
ALTER TYPE "Role" ADD VALUE IF NOT EXISTS 'MEDIC';
