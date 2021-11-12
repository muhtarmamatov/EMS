-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee_certificate_tracking`
--

DROP TABLE IF EXISTS `employee_certificate_tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employee_certificate_tracking` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `certificate_assign_date` date DEFAULT NULL,
  `certificate_expiration_date` date DEFAULT NULL,
  `certificate_fk` bigint(20) DEFAULT NULL,
  `employee_fk` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `certificate_fk` (`certificate_fk`),
  KEY `employee_fk` (`employee_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_certificate`
--

DROP TABLE IF EXISTS `t_certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_certificate` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `certificate_name` varchar(255) DEFAULT NULL,
  `certificate_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_contact`
--

DROP TABLE IF EXISTS `t_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_contact` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `name_ru` varchar(255) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_id` (`employee_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_department`
--

DROP TABLE IF EXISTS `t_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_department` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `department_name_en` varchar(255) DEFAULT NULL,
  `department_name_ru` varchar(255) DEFAULT NULL,
  `department_short_name` varchar(255) DEFAULT NULL,
  `manager_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manager_id` (`manager_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_designation`
--

DROP TABLE IF EXISTS `t_designation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_designation` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `position_description` varchar(255) DEFAULT NULL,
  `position_name_en` varchar(255) DEFAULT NULL,
  `position_name_ru` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_employee`
--

DROP TABLE IF EXISTS `t_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_employee` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `account_status` varchar(255) DEFAULT NULL,
  `activation_code` varchar(255) DEFAULT NULL,
  `birth_day` date DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `gender_type` varchar(255) DEFAULT NULL,
  `hired_date` date DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `full_name_en` varchar(255) DEFAULT NULL,
  `full_name_ru` varchar(255) DEFAULT NULL,
  `phone_extension` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `designation_id` bigint(20) DEFAULT NULL,
  `manager_id` bigint(20) DEFAULT NULL,
  `vacation_days_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  KEY `designation_id` (`designation_id`),
  KEY `manager_id` (`manager_id`),
  KEY `vacation_days_id` (`vacation_days_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_role`
--

DROP TABLE IF EXISTS `t_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_role` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_vacation`
--

DROP TABLE IF EXISTS `t_vacation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_vacation` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `send_email` bit(1) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `vacation_status` varchar(255) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_id` (`employee_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_vacation_days`
--

DROP TABLE IF EXISTS `t_vacation_days`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `t_vacation_days` (
  `id` bigint(20) NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `last_modified` datetime DEFAULT NULL,
  `earned_days` int(11) DEFAULT NULL,
  `extra_days` float DEFAULT NULL,
  `spent_days` int(11) DEFAULT NULL,
  `total_days` float DEFAULT NULL,
  `vacation_days` float DEFAULT NULL,
  `work_experience` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_role` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  KEY `role_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 14:18:27
