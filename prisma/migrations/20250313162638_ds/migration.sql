-- CreateTable
CREATE TABLE "CountryTranslation" (
    "id" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CountryTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountryTranslation_countryId_locale_key" ON "CountryTranslation"("countryId", "locale");

-- AddForeignKey
ALTER TABLE "CountryTranslation" ADD CONSTRAINT "CountryTranslation_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
