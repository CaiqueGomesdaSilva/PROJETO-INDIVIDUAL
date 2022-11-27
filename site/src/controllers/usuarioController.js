var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function entrar(req, res) {
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu username está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(username, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Username e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var contato = req.body.contatoServer;

    // Faça as validações dos valores
    if (username == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(username, nome, email, senha, contato)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function confirmar_user(req, res) {
    var user = req.body.username;
    var idUsuario = req.body.idUsuario;
    if (user == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else {
        usuarioModel.confirmar_user(user, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

// FUNÇÃO QUE PEGA OS VALORES SETADOS EM PERFIL-CONFIG
function confirmar_senha(req, res) {
    var senha = req.body.senha;
    var idUsuario = req.body.idUsuario;
    if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.confirmar_senha(senha, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}


// FUNÇÃO QUE PEGA OS VALORES SETADOS EM PERFIL-CONFIG
function confirmar_telefone(req, res) {
    var telefone = req.body.telefone;
    var idUsuario = req.body.idUsuario;
    if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {
        usuarioModel.confirmar_telefone(telefone, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

function confirmar_email(req, res) {
    var email = req.body.email;
    var idUsuario = req.body.idUsuario;
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        usuarioModel.confirmar_email(email, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}


function listarDadosUsuario(req, res) {

    var idUsuario = req.params.idUsuario

    usuarioModel.listarDadosUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    entrar,
    cadastrar,
    testar,
    confirmar_senha,
    confirmar_telefone,
    confirmar_user,
    confirmar_email,
    listarDadosUsuario
}