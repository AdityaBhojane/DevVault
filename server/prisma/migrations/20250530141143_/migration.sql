/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `CoursePurchase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CoursePurchase_orderId_key" ON "CoursePurchase"("orderId");
