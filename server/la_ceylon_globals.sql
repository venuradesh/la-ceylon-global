-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 14, 2022 at 08:36 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `la_ceylon_globals`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `quantityAvailable` int(11) NOT NULL,
  `coverImage` varchar(200) NOT NULL,
  PRIMARY KEY (`itemId`),
  UNIQUE KEY `itemId` (`itemId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`itemId`, `name`, `price`, `quantityAvailable`, `coverImage`) VALUES
(1, 'T shirt white', 'Rs. 800/-', 25, 'la_ceylon_globals_1.jpg'),
(2, 'T shirt black', 'Rs. 800/-', 25, 'la_ceylon_globals_2.jpg'),
(3, 'Frock', 'Rs. 1500/-', 25, 'la_ceylon_globals_3.jpg'),
(4, 'Blouse', 'Rs. 1600/-', 25, 'la_ceylon_globals_4.jpg'),
(5, 'Saree', 'Rs. 10000/-', 25, 'la_ceylon_globals_5.jpg'),
(6, 'Denim black', 'Rs. 3500/-', 25, 'la_ceylon_globals_6.jpg'),
(7, 'Cotton Trouser', 'Rs. 3000/-', 25, 'la_ceylon_globals_7.jpg'),
(8, 'Denim Blue', 'Rs. 4500/-', 25, 'la_ceylon_globals_8.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `id_brp` varchar(200) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `userName` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `id_brp` (`id_brp`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `name`, `id_brp`, `postalCode`, `phoneNumber`, `userName`, `password`, `image`) VALUES
(1, 'venura', '123456', 20500, '0771771893', 'venura', '14516121', '1660453986917_la_ceylon_globals..jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
