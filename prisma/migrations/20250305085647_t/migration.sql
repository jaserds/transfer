/*
  Warnings:

  - You are about to drop the column `transferCars` on the `Route` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Route" DROP COLUMN "transferCars";

-- CreateTable
CREATE TABLE "TransferCarsOnRoutes" (
    "routeId" TEXT NOT NULL,
    "transferCarId" TEXT NOT NULL,

    CONSTRAINT "TransferCarsOnRoutes_pkey" PRIMARY KEY ("routeId","transferCarId")
);

-- AddForeignKey
ALTER TABLE "TransferCarsOnRoutes" ADD CONSTRAINT "TransferCarsOnRoutes_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferCarsOnRoutes" ADD CONSTRAINT "TransferCarsOnRoutes_transferCarId_fkey" FOREIGN KEY ("transferCarId") REFERENCES "TransferCars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
