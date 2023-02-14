/*
  Warnings:

  - You are about to drop the column `sort_name` on the `test` table. All the data in the column will be lost.
  - You are about to drop the `user_reoprt` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `short_name` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_reoprt" DROP CONSTRAINT "user_reoprt_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "user_reoprt" DROP CONSTRAINT "user_reoprt_test_id_fkey";

-- AlterTable
ALTER TABLE "test" DROP COLUMN "sort_name",
ADD COLUMN     "short_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "user_reoprt";

-- CreateTable
CREATE TABLE "user_report" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "test_id" INTEGER NOT NULL,
    "test_result" JSONB NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_report" ADD CONSTRAINT "user_report_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_report" ADD CONSTRAINT "user_report_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
