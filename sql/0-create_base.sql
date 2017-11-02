-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 26 Octobre 2017 à 15:30
-- Version du serveur :  10.1.8-MariaDB
-- Version de PHP :  5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `butterflight`
--

-- --------------------------------------------------------

--
-- Structure de la table `butterfly`
--

CREATE TABLE `butterfly` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `catchphrase` text,
  `hp` int(11) NOT NULL,
  `attack` int(11) NOT NULL,
  `defense` int(11) NOT NULL,
  `luck` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `mortality` int(11) NOT NULL,
  `unique_skill` int(11) DEFAULT NULL,
  `unique_passive` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `passive`
--

CREATE TABLE `passive` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `effect` varchar(255) NOT NULL,
  `base_activation` int(11) NOT NULL,
  `rate_activation` int(11) NOT NULL,
  `is_unique` tinyint(1) NOT NULL COMMENT 'indicate if the passive is for a unique butterfly'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `picture`
--

CREATE TABLE `picture` (
  `id` int(11) NOT NULL,
  `path` text NOT NULL,
  `color` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `skill`
--

CREATE TABLE `skill` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `effect` varchar(70) NOT NULL,
  `base_attack` int(11) NOT NULL,
  `rate_attack` varchar(20) NOT NULL,
  `rate_priority` varchar(20) NOT NULL,
  `rate_fail` varchar(20) NOT NULL,
  `rate_effect` varchar(20) NOT NULL,
  `base_priority` int(11) NOT NULL COMMENT 'base priority number of the skill',
  `base_effect` int(11) NOT NULL COMMENT 'base rate of activation for the effect',
  `base_fail` int(11) NOT NULL COMMENT 'base fail number of the skill',
  `is_unique` tinyint(1) NOT NULL COMMENT 'indicate if the skill is for a unique butterfly'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `butterfly`
--
ALTER TABLE `butterfly`
  ADD PRIMARY KEY (`id`),
  ADD KEY `unique_skill` (`unique_skill`);

--
-- Index pour la table `passive`
--
ALTER TABLE `passive`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `butterfly`
--
ALTER TABLE `butterfly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `butterfly`
--
ALTER TABLE `butterfly`
  ADD CONSTRAINT `butterfly_ibfk_1` FOREIGN KEY (`unique_skill`) REFERENCES `skill` (`id`);
ALTER TABLE `butterfly`
  ADD CONSTRAINT `butterfly_ibfk_2` FOREIGN KEY (`unique_passive`) REFERENCES `passive` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
