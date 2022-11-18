CREATE DATABASE projetoindividual;
USE projetoindividual;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(45),
senha VARCHAR(45),
nome VARCHAR(45),
email VARCHAR(45),
telefone VARCHAR(45)
);


CREATE TABLE TentativaQuiz (
idTentativa INT AUTO_INCREMENT,
fkUsuario INT,
fkQuiz INT,
pontuacao INT,
avaliacaoUsuario VARCHAR(45),
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
PRIMARY KEY (idTentativa,fkUsuario,fkQuiz)
);

CREATE TABLE Quiz (
idQuiz int primary key AUTO_INCREMENT
);


CREATE TABLE Perguntas (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(200),
resposta VARCHAR(200),
pontos INT,
fkQuiz INT,
FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
);

CREATE TABLE Avaliacao (
idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
avaliacao VARCHAR(45),
fkQuiz int,
FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
);




