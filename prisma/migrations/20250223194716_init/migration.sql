/*
  Warnings:

  - Added the required column `imageUrl` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_cityId_fkey";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
