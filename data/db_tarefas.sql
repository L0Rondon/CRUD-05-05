
CREATE DATABASE IF NOT EXISTS db_tarefas;
USE db_tarefas;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE responsaveis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_entrega DATE,
    responsavel_id INT,
    status ENUM('completa', 'incompleta') DEFAULT 'incompleta',
    FOREIGN KEY (responsavel_id) REFERENCES responsaveis(id)
);
