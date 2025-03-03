/*
  Warnings:

  - You are about to drop the `transfer_cars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "transfer_cars";

-- CreateTable
CREATE TABLE "TransferCars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "cars" TEXT NOT NULL,
    "qtyPerson" INTEGER NOT NULL,
    "qtyBags" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TransferCars_pkey" PRIMARY KEY ("id")
);
