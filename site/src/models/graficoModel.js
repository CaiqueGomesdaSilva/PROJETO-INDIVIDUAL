var database = require("../database/config")

function grafico() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function grafico()");
    var instrucao = 
    `SELECT Usuario.username, sum(pontuacao) as pontuacaoUsuario FROM TentativaQuiz
    JOIN Usuario on idUsuario = fkUsuario
    group by fkUsuario;`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    grafico
}