-- CreateTable
CREATE TABLE "RouteTranslation" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "inRoute" TEXT NOT NULL,
    "toRoute" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "RouteTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RouteTranslation_routeId_locale_key" ON "RouteTranslation"("routeId", "locale");

-- AddForeignKey
ALTER TABLE "RouteTranslation" ADD CONSTRAINT "RouteTranslation_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;
