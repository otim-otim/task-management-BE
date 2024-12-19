/*
  Warnings:

  - You are about to alter the column `color` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Task` MODIFY `color` ENUM('red', 'blue', 'green', 'yellow', 'purple', 'orange', 'gray') NOT NULL DEFAULT 'gray';
