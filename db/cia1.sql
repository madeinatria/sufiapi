-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: cia
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event_details`
--

DROP TABLE IF EXISTS `event_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `event_details` (
  `event_id` varchar(30) NOT NULL,
  `event_name` varchar(30) DEFAULT NULL,
  `organizer_name` varchar(30) DEFAULT NULL,
  `description` text,
  `event_date` date DEFAULT NULL,
  `event_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_details`
--

LOCK TABLES `event_details` WRITE;
/*!40000 ALTER TABLE `event_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_details`
--

DROP TABLE IF EXISTS `forum_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `forum_details` (
  `user_id` varchar(30) DEFAULT NULL,
  `project_id` varchar(30) DEFAULT NULL,
  `question_id` varchar(30) NOT NULL,
  `question` text,
  `answer` text,
  `question_date` date DEFAULT NULL,
  `question_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`question_id`),
  KEY `project_id` (`project_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `forum_details_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project_details` (`project_id`) ON DELETE SET NULL,
  CONSTRAINT `forum_details_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_details`
--

LOCK TABLES `forum_details` WRITE;
/*!40000 ALTER TABLE `forum_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_details`
--

DROP TABLE IF EXISTS `item_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `item_details` (
  `item_id` varchar(30) NOT NULL,
  `item_name` varchar(30) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  `sub_category` varchar(30) DEFAULT NULL,
  `description` text,
  `image` text,
  `url` text,
  `specs` tinytext,
  `hsn` tinytext,
  `quantity` int(11) DEFAULT NULL,
  `manufacturer` varchar(30) DEFAULT NULL,
  `model_id` varchar(30) DEFAULT NULL,
  `data_sheet_link` varchar(50) DEFAULT NULL,
  `tutorials_link` varchar(50) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `location_cabinet` varchar(30) DEFAULT NULL,
  `location_cupboard` varchar(30) DEFAULT NULL,
  `location_room` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_details`
--

LOCK TABLES `item_details` WRITE;
/*!40000 ALTER TABLE `item_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_trans`
--

DROP TABLE IF EXISTS `item_trans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `item_trans` (
  `time_stamp` timestamp NULL DEFAULT NULL,
  `txn_type` varchar(30) DEFAULT NULL,
  `user_id` varchar(30) DEFAULT NULL,
  `project_id` varchar(30) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `gst` int(11) DEFAULT NULL,
  `valuee` int(11) DEFAULT NULL,
  `vendor_id` varchar(30) DEFAULT NULL,
  `invoice_id` varchar(30) NOT NULL,
  `invoice_image_url` varchar(100) DEFAULT NULL,
  `budget` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `item_id` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`invoice_id`),
  KEY `item_id` (`item_id`),
  KEY `vendor_id` (`vendor_id`),
  CONSTRAINT `item_trans_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item_details` (`item_id`) ON DELETE SET NULL,
  CONSTRAINT `item_trans_ibfk_2` FOREIGN KEY (`vendor_id`) REFERENCES `vendor_details` (`vendor_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_trans`
--

LOCK TABLES `item_trans` WRITE;
/*!40000 ALTER TABLE `item_trans` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_trans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_details`
--

DROP TABLE IF EXISTS `project_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `project_details` (
  `project_id` varchar(30) NOT NULL,
  `project_name` varchar(30) DEFAULT NULL,
  `user_id` varchar(30) DEFAULT NULL,
  `description` text,
  `item_id` varchar(30) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `started_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `budget` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  KEY `user_id` (`user_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `project_details_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item_details` (`item_id`) ON DELETE SET NULL,
  CONSTRAINT `project_details_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`) ON DELETE SET NULL,
  CONSTRAINT `project_details_ibfk_3` FOREIGN KEY (`item_id`) REFERENCES `item_details` (`item_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_details`
--

LOCK TABLES `project_details` WRITE;
/*!40000 ALTER TABLE `project_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_details` (
  `user_id` varchar(30) NOT NULL,
  `user_name` varchar(30) DEFAULT NULL,
  `user_type` varchar(5) DEFAULT NULL,
  `credit_points` int(11) DEFAULT NULL,
  `user_email` tinytext,
  `user_facebook` tinytext,
  `user_ph` varchar(20) DEFAULT NULL,
  `user_password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_details`
--

DROP TABLE IF EXISTS `vendor_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vendor_details` (
  `vendor_id` varchar(30) NOT NULL,
  `store_name` varchar(30) DEFAULT NULL,
  `gst` int(11) DEFAULT NULL,
  `telephone` varchar(12) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_details`
--

LOCK TABLES `vendor_details` WRITE;
/*!40000 ALTER TABLE `vendor_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-19 14:54:56
