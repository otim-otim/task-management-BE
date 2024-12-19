/*
  Warnings:

  - Made the column `color` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Task` MODIFY `color` ENUM('RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'GRAY') NOT NULL DEFAULT 'GRAY';
