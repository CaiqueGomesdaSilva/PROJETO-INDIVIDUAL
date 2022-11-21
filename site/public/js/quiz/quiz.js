var div = document.getElementById("div_quiz")

function limpardiv() {
div.innerHTML = "";
    iniciarquiz();
}


function iniciarquiz() {
    fetch("/quiz/listar").then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    alert("Nenhum resultado encontrado.")
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));
                    var quiz = document.getElementById("div_quiz");
                    for (let i = 0; i <= 0; i++) {
                        quiz.innerHTML = "";
                        var perguntas = resposta[i];
                            var titulo = document.createElement("p");
                            var resposta1 = document.createElement("div");
                            var resposta2 = document.createElement("div");
                            var resposta3 = document.createElement("div");
                            var resposta4 = document.createElement("div");
                            var resposta5 = document.createElement("div");
                            var texto1 = document.createElement("p");
                            var texto2 = document.createElement("p");
                            var texto3 = document.createElement("p");
                            var texto4 = document.createElement("p");
                            var texto5 = document.createElement("p")


                            titulo.className = "pergunta";
                            resposta1.className = "box-resposta";
                            resposta2.className = "box-resposta";
                            resposta3.className = "box-resposta";
                            resposta4.className = "box-resposta";
                            resposta5.className = "box-resposta";


                            quiz.appendChild(titulo);
                            quiz.appendChild(resposta1);
                            quiz.appendChild(resposta2);
                            quiz.appendChild(resposta3);
                            quiz.appendChild(resposta4);
                            quiz.appendChild(resposta5);
                            resposta1.appendChild(texto1);
                            resposta2.appendChild(texto2);
                            resposta3.appendChild(texto3);
                            resposta4.appendChild(texto4);
                            resposta5.appendChild(texto5);

                            resposta1.id = "divResposta1"
                            resposta2.id = "divResposta2"
                            resposta3.id = "divResposta3"
                            resposta4.id = "divResposta4"
                            resposta5.id = "divResposta5"

                            if(i == 0) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `Rodrigo Goulart`;
                                texto2.innerHTML = `Roberta Coelho`;
                                texto3.innerHTML = `Jaime Padua`;
                                texto4.innerHTML = `Felippe Martins`;
                                texto5.innerHTML = perguntas.resposta;
                            } else if (i == 1) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `lazer, diversão, cultura, sabedoria`;
                                texto2.innerHTML = perguntas.resposta;
                                texto3.innerHTML = `games, entretenimento visual, música, diversão`;
                                texto4.innerHTML = `festas, tiktok, samba, entretenimento casual`;
                                texto5.innerHTML = `música, conteúdo visual, entretenimento casual, diversão`;
                            } else if (i == 2) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `Rodrigo Goulart`;
                                texto2.innerHTML = `Roberta Coelho`;
                                texto3.innerHTML = `Jaime Padua`;
                                texto4.innerHTML = `Felippe Martins`;
                                texto5.innerHTML = perguntas.resposta;
                            } else if(i == 3) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `VCT 2022: Game Changers Championship`;
                                texto2.innerHTML = `VALORANT Campeonato de Elite - Stage #2`;
                                texto3.innerHTML = perguntas.resposta;
                                texto4.innerHTML = `Valorant National League 2022`;
                                texto5.innerHTML = `Coupe De France 2022`;
                            } else if(i == 4) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `Crossfire`;
                                texto2.innerHTML = `League of Legends`;
                                texto3.innerHTML = perguntas.resposta;
                                texto4.innerHTML = `Fortnite`;
                                texto5.innerHTML = `Overwatch`;
                            } else if(i == 5) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `VCT 2022: Game Changers Championship`;
                                texto2.innerHTML = `VALORANT Campeonato de Elite - Stage #2`;
                                texto3.innerHTML = perguntas.resposta;
                                texto4.innerHTML = `Valorant National League 2022`;
                                texto5.innerHTML = `Coupe De France 2022`;
                            } else if(i == 6) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `dois`;
                                texto2.innerHTML = `cinco`;
                                texto3.innerHTML = `quatro`
                                texto4.innerHTML = perguntas.resposta;
                                texto5.innerHTML = `um`;
                            } else if(i == 7) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `Ascent`;
                                texto2.innerHTML = `Breeze`;
                                texto3.innerHTML = `Icebox`;
                                texto4.innerHTML = `Split`;
                                texto5.innerHTML = perguntas.resposta;
                                
                            } else if(i == 8) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `Saadhak`;
                                texto2.innerHTML = `Sacy`;
                                texto3.innerHTML = perguntas.resposta;
                                texto4.innerHTML = `Less`;
                                texto5.innerHTML = `Pancada`;
                            } else if(i == 9) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = perguntas.resposta;
                                texto1.innerHTML = `13x8`;
                                texto2.innerHTML = `13x3`;
                                texto3.innerHTML = `13x10`;
                                texto4.innerHTML = `13x7`;
                            } else if(i == 10) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `Pancada`;
                                texto2.innerHTML = `Sacy`;
                                texto3.innerHTML = `Yay`;
                                texto4.innerHTML = `Less`;
                                texto5.innerHTML = perguntas.resposta;
                            } else if(i == 11) {
                                titulo.innerHTML = perguntas.pergunta;
                                texto1.innerHTML = `2 milhões`;
                                texto2.innerHTML = `1 milhão`;
                                texto3.innerHTML = perguntas.resposta;
                                texto4.innerHTML = `500 mil`;
                                texto5.innerHTML = `750 mil`;
                            }
                        }
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
        });
}