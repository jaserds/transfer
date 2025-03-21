/*
  Warnings:

  - The `price` column on the `TransferCarsOnRoutes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TransferCarsOnRoutes" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION;
