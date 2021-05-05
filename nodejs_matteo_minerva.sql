-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 05, 2021 alle 13:59
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
(1, 'Milan, Italy', 'photograph_f55bdb9b-6c78-4497-970e-809f6664edb0.jpg'),
(2, 'Ghaziabad, India', 'photograph_39d376b1-c47b-4acc-b34c-b1915ffbfbe6.jpg'),
(3, 'Hotan, China', 'photograph_90a00497-3510-421c-8ab3-b485f7c80483.jpg'),
(4, 'Lahore, Pakistan', 'photograph_8d01045d-3659-45d7-a89a-2170cadf9f5c.jpg'),
(5, 'Manikganj, Bangladesh', 'photograph_9a126f08-75c3-4f1e-b105-f0967fdc4d18.jpg'),
(6, 'Pai, Thailand', 'photograph_c0437ed3-2b17-44ef-b446-2f68b703c179.jpg');

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
