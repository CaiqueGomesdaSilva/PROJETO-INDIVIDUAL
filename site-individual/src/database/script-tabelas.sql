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


CREATE TABLE Respostas (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
resposta VARCHAR(150),
pontos INT
);


CREATE TABLE Perguntas (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(200),
fkResposta INT,
FOREIGN KEY (fkResposta) REFERENCES Respostas(idResposta)
);

CREATE TABLE TentativaQuiz (
idTentativa INT AUTO_INCREMENT,
fkUsuario INT,
fkPergunta INT,
pontuacao INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
FOREIGN KEY (fkPergunta) REFERENCES Perguntas(idPergunta),
PRIMARY KEY (idTentativa,fkUsuario,fkPergunta)
);



