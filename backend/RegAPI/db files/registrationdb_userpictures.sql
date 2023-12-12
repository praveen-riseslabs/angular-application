CREATE DATABASE  IF NOT EXISTS `registrationdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `registrationdb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: registrationdb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `userpictures`
--

DROP TABLE IF EXISTS `userpictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userpictures` (
  `PictureId` int(11) NOT NULL AUTO_INCREMENT,
  `Picture` varchar(255) NOT NULL,
  `UserID` int(11) NOT NULL,
  PRIMARY KEY (`PictureId`),
  KEY `fk_userpictures_userid` (`UserID`),
  CONSTRAINT `fk_userpictures_userid` FOREIGN KEY (`UserID`) REFERENCES `registration` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userpictures`
--

LOCK TABLES `userpictures` WRITE;
/*!40000 ALTER TABLE `userpictures` DISABLE KEYS */;
INSERT INTO `userpictures` VALUES (2,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture3.jpg',2),(3,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture2.jpg',2),(4,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture3.jpg',2),(5,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture4.jpg',2),(6,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture5.jpg',2),(7,'https://riseslabs.s3.ap-south-1.amazonaws.com/VINU2526.JPG',2),(8,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture7.jpg',2),(9,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture2.jpg',2),(10,'https://riseslabs.s3.ap-south-1.amazonaws.com/picture6.jpg',2);
/*!40000 ALTER TABLE `userpictures` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-12 12:35:34
