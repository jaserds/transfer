/*
  Warnings:

  - You are about to drop the column `routeId` on the `TransferCars` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TransferCars" DROP CONSTRAINT "TransferCars_routeId_fkey";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "transferCars" TEXT[];

-- AlterTable
ALTER TABLE "TransferCars" DROP COLUMN "routeId";
