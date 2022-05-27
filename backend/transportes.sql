-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-05-2022 a las 14:52:31
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Gallardo: “Lo único que rescato es la victoria”', 'El Muñeco dijo que sólo se quedó con el gol de Suárez, pero que a la vez terminó disconforme con “las formas” que llevaron a River a ganar.', 'Ese oasis de juego en pleno flujo desértico fue lo que llevó al Muñeco a terminar quedándose con algo más que los tres puntos. Con un éxito conceptual. “Fue un partido difícil de jugar, incómodo, con muchos errores...”, observó. “Me voy contento con el resultado pero no con las formas. Lo único que rescato es la victoria y el gol de Suárez, que demuestra nuestra jerarquía”, resaltó, valorando ese intento de combinación que fue ajeno al juego de un River que este domingo careció de la intensidad constante que acostumbra mostrar y que, por ende, permite doblegar por tensión a los equipos a los que se enfrenta.\r\n\r\n“A veces no se puede ganar siempre siendo muy superior a los rivales”, planteó Gallardo. Un razonamiento lógico pero que no deja de tener una doble lectura: esta clase de éxitos deben ser una rareza y no una regla.', NULL),
(2, '“Lo único que rescato es la victoria” prueba', 'cambio subtitulo', 'modifico este texto dkjfbdlgdsbjsbd', NULL),
(4, 'sdfds', 'dsfdfdf', 'gdsdfgdfsdf', 'u6tixvlhz1irxtbpxnwq'),
(5, 'prueba', 'lalalla', 'lksdnfkjadsbfuiasdhflijsdnkjsad', 'qp6n28fyn2h1lfn3q4rt');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'nicolas', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'leandro', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'florencia', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
