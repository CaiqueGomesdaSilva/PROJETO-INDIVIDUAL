var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});


router.get("/listarDadosUsuario/:idUsuario", function (req, res) {
    usuarioController.listarDadosUsuario(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/entrar", function (req, res) {
    usuarioController.entrar(req, res);
});




router.put("/confirmar_senha/:user", function (req, res) {
    usuarioController.confirmar_senha(req, res);
});

router.put("/confirmar_user/:user", function (req, res) {
    usuarioController.confirmar_user(req, res);
});


router.put("/confirmar_email/:user", function (req, res) {
    usuarioController.confirmar_email(req, res);
});


router.put("/confirmar_telefone/:user", function (req, res) {
    usuarioController.confirmar_telefone(req, res);
});


router.delete("/deletarTentativa/:idUsuario", function (req, res) {
    usuarioController.deletarTentativa(req, res);
});

router.delete("/deletarPerfil/:idUsuario", function (req, res) {
    usuarioController.deletarPerfil(req, res);
});

module.exports = router;