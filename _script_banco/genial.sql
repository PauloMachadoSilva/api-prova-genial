-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: mysql762.umbler.com
-- Generation Time: 01-Jul-2018 às 19:53
-- Versão do servidor: 5.6.38-log
-- PHP Version: 5.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fideliu`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `genial`
--

CREATE TABLE IF NOT EXISTS `genial` (
  `id` int(11) NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `texto` varchar(5000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `genial`
--

INSERT INTO `genial` (`id`, `imagem`, `titulo`, `texto`) VALUES
(1, '1.jpg', 'pregão ao vivo', 'Acompanhe as análises dos ativos ao vivo pela a nossa equipe e fique por dentro das melhores oportunidades de trades, recomendações de compra e venda e outros negócios.'),
(2, '2.jpg', 'plataformas inteligentes', 'Acesso via Internet ou aplicativo a uma das plataformas mais robustas do mercado, com direito a ferramenta de análise técnica que reÃºne dados dos mercados BM&F Bovespa.'),
(3, '3.jpg', 'fórum de mercado', 'Faça parte da nossa comunidade e tenha Á  discussões relacionadas Ás duas grandes escolasdo mercado: a gráfica e a fundamentalista.'),
(4, '4.jpg', 'carteira recomendada', 'Sugerimos uma carteira de investimentos em empresas de primeira linha na Bolsa de Valores, com base nas análises de fundamentos e valores feitas por nossos profissionais capacitados.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `genial`
--
ALTER TABLE `genial`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `genial`
--
ALTER TABLE `genial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
