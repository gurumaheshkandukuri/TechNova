-- TechNova Solutions — Canonical MySQL Database Schema
-- Specification: TechNova Solutions PDR (Section 31 & 32)
-- Database Engine: MySQL 8.4+ (InnoDB, utf8mb4)
-- Target Database: technova

-- =============================================================================
-- Table 1: enquiries
-- Captures project enquiries from start-project.html and general enquiries
-- from contact.html. Status values: New, Contacted, Qualified, Proposal Sent,
-- Converted, Closed (PDR Section 32).
-- =============================================================================
CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `company` VARCHAR(150) DEFAULT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) DEFAULT NULL,
  `service` VARCHAR(100) DEFAULT NULL,
  `budget` VARCHAR(50) DEFAULT NULL,
  `timeline` VARCHAR(50) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'New',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- =============================================================================
-- Table 2: newsletter_subscribers
-- Stores verified newsletter subscription email addresses captured across
-- all corporate website pages (PDR Section 24 & 32).
-- =============================================================================
CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(150) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- =============================================================================
-- Table 3: job_applications
-- Stores candidate job applications submitted via job-details.html including
-- the associated job title and server relative resume path (PDR Section 18 & 19).
-- =============================================================================
CREATE TABLE IF NOT EXISTS `job_applications` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_title` VARCHAR(150) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `resume_path` VARCHAR(255) NOT NULL,
  `linkedin` VARCHAR(255) DEFAULT NULL,
  `portfolio` VARCHAR(255) DEFAULT NULL,
  `cover_letter` TEXT DEFAULT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'New',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
