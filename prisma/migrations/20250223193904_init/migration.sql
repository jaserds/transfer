/*
  Warnings:

  - Added the required column `description` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pointsGoogleMap` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "pointsGoogleMap" JSONB NOT NULL;
