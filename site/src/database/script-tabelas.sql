CREATE DATABASE projetoindividual;
USE projetoindividual;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(45) NOT NULL,
senha VARCHAR(45) NOT NULL,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
telefone VARCHAR(45) 
);

CREATE TABLE Quiz (
idQuiz int primary key AUTO_INCREMENT,
nome VARCHAR(45)
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

INSERT INTO Quiz(nome) VALUES
('Quiz LOUD');

INSERT INTO Perguntas(pergunta,resposta,pontos,fkQuiz) VALUES
('Quem é o fundador da LOUD?','Bruno Bittecourt',10,1),
('Quais são os pilares da LOUD?','esports, games, lifestyle, música e entretenimento digital',30,1),
('Qual dos campeonatos a loud se consagrou campeã mundial?','Valorant Champions',30,1),
('Em qual modalidade a LOUD foi campeã Mundial?','Valorant',15,1),
('Qual time que a LOUD venceu na final do Mundial de Valorant?','optic',20,1),
('A LOUD venceu quantos mapas contra a optic?','três',20,1),
('Qual foi o ultimo mapa do confronto entre LOUD e Optic?','Haven',10,1),
('Quem executou o ultimo player da optic no ultimo round da final?','Aspas',30,1),
('Qual foi o resultado do mapa haven entre LOUD x Optic?','13x5',25,1),
('Qual jogador foi eleito MVP da Final?','Aspas',20,1),
('Qual foi o pico de audiência na final do Valorant Champions?','1,4 Milhão',20,1);

INSERT INTO Avaliacao(avaliacao,fkQuiz) VALUES
('Ótimo',1),
('Bom',1),
('Razoável',1),
('Ruim',1);


SELECT * FROM Perguntas;

SELECT * FROM Avaliacao as AVA
	JOIN Quiz as Q on AVA.fkQuiz = Q.idQuiz;


