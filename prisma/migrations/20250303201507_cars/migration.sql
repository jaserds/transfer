-- CreateTable
CREATE TABLE "trancsfer_cars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "cars" TEXT NOT NULL,
    "qtyPerson" INTEGER NOT NULL,
    "qtyBags" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "trancsfer_cars_pkey" PRIMARY KEY ("id")
);
