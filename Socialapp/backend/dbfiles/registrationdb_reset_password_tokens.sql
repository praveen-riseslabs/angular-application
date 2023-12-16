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
-- Table structure for table `reset_password_tokens`
--

DROP TABLE IF EXISTS `reset_password_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_password_tokens` (
  `Token_id` int(11) NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Token_id`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `reset_password_tokens_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `registration` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password_tokens`
--

LOCK TABLES `reset_password_tokens` WRITE;
/*!40000 ALTER TABLE `reset_password_tokens` DISABLE KEYS */;
INSERT INTO `reset_password_tokens` VALUES (1,'yqwUwmGuAs50Usx4FdQlH8oeZD0',18,'laxminarayana4343@gmail.com'),(2,'EVIZuMkmc0SB2Tau6qylITWnAoY',18,'laxminarayana4343@gmail.com'),(3,'IwreZlTFFugeC5HbT2nX6t0etMw',18,'laxminarayana4343@gmail.com'),(4,'yFjHE3WKzvYhVi1LEbuik5mfEmI',18,'laxminarayana4343@gmail.com'),(5,'ZrESwYYBQTm1Aaq-UIf2HN5Xyhg',18,'laxminarayana4343@gmail.com'),(6,'YqcLmB9SLI1JmjXysf_us0dO0jE',18,'laxminarayana4343@gmail.com'),(7,'wXtIO0OcoNHVD8E4gRl3c1ySQ-Y',18,'laxminarayana4343@gmail.com'),(8,'JHKN0C1rSJ00zMIMbPemMwimVU4',18,'laxminarayana4343@gmail.com'),(9,'GOxUKgw7J0t6FUO6Jqvf6dWk-X4',20,'srikanthkodam555@gmail.com'),(10,'mJkq7EVsxSR3lEv_uI9aX9xCMkY',21,'sirimallesaikrishna0533@gmail.com'),(11,'RYdiSBiGMfxy9FEszkz2txqygL0',21,'sirimallesaikrishna0533@gmail.com');
/*!40000 ALTER TABLE `reset_password_tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-16 18:05:07
