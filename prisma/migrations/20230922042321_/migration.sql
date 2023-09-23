/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Project_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Project_description_key" ON "Project"("description");
