var database = require("../database/config")

function entrar(username, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", username, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE username = '${username}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(username, nome, email, senha, contato) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", username, nome, email, senha, contato);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (username, senha, nome, email, telefone) VALUES ('${username}', '${senha}', '${nome}', '${email}', '${contato}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//FUNCÃO QUE EXECUTA A ALTERAÇÃO DAS INFORMAÇÕES NO BANCO DE DADOS
async function confirmar_user(username, idUsuario) {
    console.log("ACESSEI O Usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Usuario SET Usuario.username = '${username}'
    WHERE idUsuario = ${idUsuario}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

//FUNCÃO QUE EXECUTA A ALTERAÇÃO DAS INFORMAÇÕES NO BANCO DE DADOS
async function confirmar_senha(senha, idUsuario) {
    console.log("ACESSEI O Usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Usuario SET Usuario.senha = '${senha}'
    WHERE idUsuario = ${idUsuario}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

//FUNCÃO QUE EXECUTA A ALTERAÇÃO DAS INFORMAÇÕES NO BANCO DE DADOS
async function confirmar_telefone(telefone, idUsuario) {
    console.log("ACESSEI O Usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Usuario SET Usuario.telefone = '${telefone}'
    WHERE idUsuario = ${idUsuario}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

async function confirmar_email(email, idUsuario) {
    console.log("ACESSEI O Usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Usuario SET Usuario.telefone = '${telefone}'
    WHERE idUsuario = ${idUsuario}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

function listarDadosUsuario(idUsuario) {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarDadosUsuario()");
    var instrucao = `
        SELECT * FROM Usuario 
            WHERE idUsuario = ${idUsuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    confirmar_senha,
    confirmar_telefone,
    confirmar_user,
    confirmar_email,
    listarDadosUsuario
};