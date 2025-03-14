-- CreateTable
CREATE TABLE "TransferCarsTranslation" (
    "id" TEXT NOT NULL,
    "transferCarId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TransferCarsTranslation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TransferCarsTranslation" ADD CONSTRAINT "TransferCarsTranslation_transferCarId_fkey" FOREIGN KEY ("transferCarId") REFERENCES "TransferCars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
