-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('admin', 'user');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ROLE";
