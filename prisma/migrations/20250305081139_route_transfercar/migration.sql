-- AlterTable
ALTER TABLE "TransferCars" ADD COLUMN     "routeId" TEXT;

-- AddForeignKey
ALTER TABLE "TransferCars" ADD CONSTRAINT "TransferCars_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;
