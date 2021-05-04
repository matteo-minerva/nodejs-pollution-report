-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 04, 2021 alle 18:10
-- Versione del server: 10.4.18-MariaDB
-- Versione PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_matteo_minerva`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `pollution`
--

CREATE TABLE `pollution` (
  `id` int(11) NOT NULL,
  `location` varchar(100) NOT NULL,
  `photographSrc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `pollution`
--

INSERT INTO `pollution` (`id`, `location`, `photographSrc`) VALUES
(1, 'Milan, Italy', 'photograph_1620141676601.jpg'),
(2, 'Ghaziabad, India', 'photograph_1620142327323.jpg'),
(3, 'Hotan, China', 'photograph_1620142348381.jpg'),
(4, 'Lahore, Pakistan', 'photograph_1620142373978.jpg'),
(5, 'Manikganj, Bangladesh', 'photograph_1620142395956.jpg'),
(6, 'Pai, Thailand', 'photograph_1620142420134.jpg');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `pollution`
--
ALTER TABLE `pollution`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `pollution`
--
ALTER TABLE `pollution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
