var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

router.post("/inserirtentativa/:idUsuario", function (req, res) {
    quizController.inserirtentativa(req, res);
})
module.exports = router;