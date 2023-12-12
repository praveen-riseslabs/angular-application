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
-- Table structure for table `saveuserfriends`
--

DROP TABLE IF EXISTS `saveuserfriends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saveuserfriends` (
  `UserFriendID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `FriendName` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Contact` bigint(20) NOT NULL,
  `Profession` varchar(50) NOT NULL,
  `Filepath` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserFriendID`),
  KEY `FK_UserFriends` (`UserID`),
  CONSTRAINT `FK_UserFriends` FOREIGN KEY (`UserID`) REFERENCES `registration` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saveuserfriends`
--

LOCK TABLES `saveuserfriends` WRITE;
/*!40000 ALTER TABLE `saveuserfriends` DISABLE KEYS */;
INSERT INTO `saveuserfriends` VALUES (3,2,'kittu','hyderabad',9878787677,'doctor',NULL),(4,2,'aslam','dubai',9878766765,'civil engineer',NULL),(5,2,'srikanth','hyderabad',9876678878,'app developer',NULL),(6,3,'arun','siriclla',9898989898,'meeseva',NULL),(7,3,'mahesh','karimnagar',8787878787,'clerk',NULL),(8,2,'karthik','hyd',9798798798,'cameraman',NULL),(9,18,'srihari','nirmal',9876565654,'driver',NULL),(10,2,'laxman','siricilla',9666787567,'it empolyee','E:iendfiles\\C_fakepath_5481485_2762372.jpg'),(11,2,'laxman','siricilla',9876543213,'it empolyee','uploads\\Screenshot (1).png'),(12,2,'sai','siricilla',9876543213,'own business','uploads\\VID-20200331-WA0019.mp4'),(13,2,'raju','vizag',9876767677,'clerk','https://riseslabs.s3.ap-south-1.amazonaws.com/Screenshot (1).png'),(14,2,'prashanth','siricilla',9876767676,'clerk','https://riseslabs.s3.ap-south-1.amazonaws.com/DetailedAdvtCRP_Clerks_IX.pdf'),(15,2,'prashanth','siricilla',9876767676,'clerk','https://riseslabs.s3.ap-south-1.amazonaws.com/wallpaperVideo1593962912957.mp4'),(16,2,'vikas','siricilla',9876769676,'business','https://riseslabs.s3.ap-south-1.amazonaws.com/ultra-practice-aptitude-bundle-pdf-sbi-po-prelims-exam(1).pdf'),(17,2,'arun','hyd',98767676767,'poilet','https://riseslabs.s3.ap-south-1.amazonaws.com/formf 1.pdf'),(18,2,'kalyan','hyd',87676767678,'business','https://riseslabs.s3.ap-south-1.amazonaws.com/picture1.jpg');
/*!40000 ALTER TABLE `saveuserfriends` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-12 12:35:33
