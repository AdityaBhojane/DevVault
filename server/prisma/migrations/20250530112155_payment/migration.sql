/*
  Warnings:

  - Added the required column `orderId` to the `CoursePurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signature` to the `CoursePurchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoursePurchase" ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "signature" TEXT NOT NULL;
