var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

router.post("/inserirtentativa/:idUsuario", function (req, res) {
    quizController.inserirtentativa(req, res);
})

router.get("/listarRanking", function (req, res) {
    quizController.listarRanking(req, res);
});

router.get("/listarAvaliacao", function (req, res) {
    quizController.listarAvaliacao(req, res);
});

module.exports = router;