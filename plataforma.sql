-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Set-2022 às 03:24
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `plataforma`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastros`
--

CREATE TABLE `cadastros` (
  `id_cadastro` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `sobrenome` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(60) NOT NULL,
  `url_avatar` varchar(50) NOT NULL DEFAULT 'https://teste/avatar.png',
  `data_criacao` varchar(11) NOT NULL DEFAULT current_timestamp(),
  `cidade` varchar(20) DEFAULT NULL,
  `site` varchar(60) DEFAULT NULL,
  `biografia` varchar(200) DEFAULT NULL,
  `bloqueio_acesso` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `email_autor` varchar(30) NOT NULL,
  `mensagem` text NOT NULL,
  `data_postagem` int(55) NOT NULL,
  `imagem` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `posts`
--

CREATE TABLE `posts` (
  `id_post` int(20) NOT NULL,
  `email_autor` varchar(100) NOT NULL,
  `conteudo` text NOT NULL,
  `data_postagem` datetime NOT NULL DEFAULT current_timestamp(),
  `cdn_img` varchar(50) DEFAULT NULL,
  `likes` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `relacoes`
--

CREATE TABLE `relacoes` (
  `email_usuario` varchar(100) NOT NULL,
  `email_relacao` varchar(100) NOT NULL,
  `bloqueio` tinyint(1) NOT NULL DEFAULT 0,
  `id_relacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `seguidores`
--

CREATE TABLE `seguidores` (
  `email_usuario` varchar(100) NOT NULL,
  `follow` varchar(100) NOT NULL,
  `id_follow` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastros`
--
ALTER TABLE `cadastros`
  ADD PRIMARY KEY (`id_cadastro`),
  ADD UNIQUE KEY `id_email` (`email`) USING BTREE;

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `email_fk` (`email_autor`),
  ADD KEY `id_post_fk` (`id_post`) USING BTREE;

--
-- Índices para tabela `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `email_autor_fk` (`email_autor`);

--
-- Índices para tabela `relacoes`
--
ALTER TABLE `relacoes`
  ADD PRIMARY KEY (`id_relacao`),
  ADD KEY `email_relacao_usuario_fk` (`email_usuario`),
  ADD KEY `email_relacao_fk` (`email_relacao`);

--
-- Índices para tabela `seguidores`
--
ALTER TABLE `seguidores`
  ADD PRIMARY KEY (`id_follow`),
  ADD KEY `email_usuario_fk` (`email_usuario`),
  ADD KEY `email_follow_fk` (`email_usuario`),
  ADD KEY `follow_fk` (`follow`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastros`
--
ALTER TABLE `cadastros`
  MODIFY `id_cadastro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de tabela `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT de tabela `relacoes`
--
ALTER TABLE `relacoes`
  MODIFY `id_relacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id_follow` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `email_fk` FOREIGN KEY (`email_autor`) REFERENCES `cadastros` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_post_fk` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id_post`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `email_autor_fk` FOREIGN KEY (`email_autor`) REFERENCES `cadastros` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `relacoes`
--
ALTER TABLE `relacoes`
  ADD CONSTRAINT `email_relacao_fk` FOREIGN KEY (`email_relacao`) REFERENCES `cadastros` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `email_relacao_usuario_fk` FOREIGN KEY (`email_usuario`) REFERENCES `cadastros` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `seguidores`
--
ALTER TABLE `seguidores`
  ADD CONSTRAINT `email_usuario_fk` FOREIGN KEY (`email_usuario`) REFERENCES `cadastros` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `follow_fk` FOREIGN KEY (`follow`) REFERENCES `cadastros` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
