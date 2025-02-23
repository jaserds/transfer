/*
  Warnings:

  - You are about to drop the column `name` on the `Route` table. All the data in the column will be lost.
  - Added the required column `inRoute` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toRoute` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "Route" DROP COLUMN "name",
ADD COLUMN     "inRoute" TEXT NOT NULL,
ADD COLUMN     "toRoute" TEXT NOT NULL;
