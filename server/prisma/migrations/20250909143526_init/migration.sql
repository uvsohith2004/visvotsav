-- CreateTable
CREATE TABLE "public"."Registration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "duNumber" TEXT NOT NULL,
    "participants" INTEGER NOT NULL,
    "participantDetails" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pushedToSheets" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registration_email_key" ON "public"."Registration"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_duNumber_key" ON "public"."Registration"("duNumber");
