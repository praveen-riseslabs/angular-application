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
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(50) NOT NULL,
  `Lastname` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Age` int(11) DEFAULT NULL,
  `Phonenumber` bigint(20) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'laxminarayana','sirimalla','laxminarayana@gmail.com','laxmi@123',NULL,NULL,NULL),(2,'sai','ram','sai@gmail.com','Sai@1234',26,9879898987,'siricilla getha nagar'),(3,'hari','jindam','hari@gmail.com','hari@123',25,9878787870,'H.NO 6-6-14, laxmipur, siricilla'),(4,'srikanth','kodam','srikanth@gmail.com','srikatb@133',NULL,NULL,NULL),(5,'chowki','rama','chowki@gamil.com','choko225',NULL,NULL,NULL),(6,'priya','kodi','priya@gmail.com','priya@1224',NULL,NULL,NULL),(7,'lokesh','kana','lokesh@gmail.com','loki@123',NULL,NULL,NULL),(9,'vani','myna','vani@gmail.com','vani@123',NULL,NULL,NULL),(10,'ram','banoth','ram@gmail.com','ram@123',NULL,NULL,NULL),(11,'sathwik','jakkani','sathwik@gmail.com','sathwik@123',NULL,NULL,NULL),(13,'prashanth','sama','Prashanth@gmail.com','Prashanth@123',NULL,NULL,NULL),(14,'anjali','jindam','anjali@gmail.com','$2b$12$w9G0sjaaZUvaQbe8MwtTiuVBG01.6Uc1tWw0wvv9Wnv',NULL,NULL,NULL),(17,'kavya','jindam','kavya@gmail.com','$2b$12$MVIuBZ6zBRnKC1Hm6EqOie.SzqVDesianHoMZXpPkYi',NULL,NULL,NULL),(18,'laxminarayana','jindam','laxminarayana4343@gmail.com','$2b$12$YOKq1.dZ/gewnhHMeysQtuFC44KavErPtOyyd.l3cME',27,9878787987,'H.no: 6-6-14, geetha nagar, siricilla '),(19,'shravya','myana','shravyamyana22@gmail.com','$2b$12$RPwu6LiN1iPu6YBnWXv1I.2uxzDxry6SBH9PR0JjFcd',NULL,NULL,NULL),(20,'Srikanth','kodam','srikanthkodam555@gmail.com','$2b$12$VVz.kfJCrS9.XpqW49Fe0.Q5JqbdhsZXcrYyQW8zKiW',NULL,NULL,NULL),(21,'saikrishna','sirimalle','sirimallesaikrishna0533@gmail.com','$2b$12$nv.ZO7UKX2ncTyEBZcjWj.I01KyuUFNpaGSOWHxOzO.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-12 12:35:32
