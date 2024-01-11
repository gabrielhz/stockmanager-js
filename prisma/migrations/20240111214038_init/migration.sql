-- CreateTable
CREATE TABLE `sector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NULL,
    `office_id` INTEGER NULL,

    INDEX `office_id`(`office_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manufacturer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(150) NULL,
    `since` INTEGER NULL,

    UNIQUE INDEX `type`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `office` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NULL,
    `number` VARCHAR(10) NULL,
    `street` VARCHAR(300) NULL,
    `neighborhood` VARCHAR(300) NULL,
    `city` VARCHAR(300) NULL,
    `state` VARCHAR(300) NULL,
    `zipcode` VARCHAR(20) NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(150) NULL,
    `acquisition` DATE NULL,
    `status_id` INTEGER NULL,
    `item_id` INTEGER NULL,
    `manufacturer_id` INTEGER NULL,
    `date` DATETIME(0) NULL,

    UNIQUE INDEX `code`(`code`),
    INDEX `manufacturer_id`(`manufacturer_id`),
    INDEX `item_id`(`item_id`),
    INDEX `status_id`(`status_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(150) NULL,
    `password` VARCHAR(150) NULL,
    `first_name` VARCHAR(150) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sector` ADD CONSTRAINT `sector_ibfk_1` FOREIGN KEY (`office_id`) REFERENCES `office`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_ibfk_3` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
