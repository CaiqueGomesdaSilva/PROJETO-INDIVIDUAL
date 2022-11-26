function limpardiv() {
  if (sessionStorage.TENTATIVAS >= 3) {
    alert("Você atingiu o limite máximo de tentativas!");
  } else {
    var div = document.getElementById("div_quiz");
    div.innerHTML = "";
    iniciarquiz();
  }
}

function removerDivGrafico() {
    var divGrafico = document.getElementById("div_grafico_barra");

    divGrafico.remove();
}

function mostrarRanking() {
  var div = document.getElementById("div_quiz");
  div.classList.remove("conteudo");
  div.classList.add("conteudo_dois");
  div.innerHTML = `<div class="div_retornar_ranking">
  <img src="./Assets/icones/seta-voltar.png" height="40vh" onclick=" removerDivGrafico(), ExibirResultado()"/>
  <h1 class="titulo_ranking">RANKING</h1>
  </div>
    <table class="tabela">
    <thead>
      <tr class="tr_table">
        <th class="th_table">ID</th>
        <th class="th_table">NOMES</th>
        <th class="th_table">PONTOS</th>
      </tr>
    </thead>
    <tbody id="tbody_table">

    </tbody>
  </table>`;

  verRanking();
  graficoPontuacao();
  
}

var certas = 0;
function RespostaCerta() {
  certas += 10;
}

var erradas = 0;
function RespostaErrada() {
  erradas += 1;
}

var tentativa = 0;
var contadorResposta = 0;
function iniciarquiz() {
  if (sessionStorage.TENTATIVAS >= 3) {
    alert("Você atingiu o limite máximo de tentativas!");
  } else {
    fetch("/quiz/listar")
      .then(function (resposta) {
        if (resposta.ok) {
          if (resposta.status == 204) {
            alert("Nenhum resultado encontrado.");
          }
          resposta.json().then(function (resposta) {
            var quiz = document.getElementById("div_quiz");
            console.log("Dados recebidos: ", JSON.stringify(resposta));
            for (let i = 0; i <= contadorResposta; i++) {
              quiz.innerHTML = "";
              var perguntas = resposta[i];

              if (i == 11) {
                quiz.innerHTML = "";
                tentativa += 1;
                ExibirResultado();
                sessionStorage.TENTATIVAS = tentativa;
              } else {
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
                var texto5 = document.createElement("p");

                titulo.className = "pergunta";
                resposta1.className = "box-resposta";
                resposta2.className = "box-resposta";
                resposta3.className = "box-resposta";
                resposta4.className = "box-resposta";
                resposta5.className = "box-resposta";

                resposta1.id = "divResposta1";
                resposta2.id = "divResposta2";
                resposta3.id = "divResposta3";
                resposta4.id = "divResposta4";
                resposta5.id = "divResposta5";

                texto1.innerHTML = `A . `;
                texto2.innerHTML = `B . `;
                texto3.innerHTML = `C . `;
                texto4.innerHTML = `D . `;
                texto5.innerHTML = `E . `;

                if (i == 0) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `Rodrigo Goulart`;
                  texto2.innerHTML += `Roberta Coelho`;
                  texto3.innerHTML += `Jaime Padua`;
                  texto4.innerHTML += `Felippe Martins`;
                  texto5.innerHTML += perguntas.resposta;
                } else if (i == 1) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `lazer, diversão, cultura, sabedoria`;
                  texto2.innerHTML += perguntas.resposta;
                  texto3.innerHTML += `games, entretenimento visual, música, diversão`;
                  texto4.innerHTML += `festas, tiktok, samba, entretenimento casual`;
                  texto5.innerHTML += `música, conteúdo visual, entretenimento casual, diversão`;
                } else if (i == 2) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `VCT 2022: Game Changers Championship`;
                  texto2.innerHTML += `VALORANT Campeonato de Elite - Stage #2`;
                  texto3.innerHTML += `Valorant National League 2022`;
                  texto4.innerHTML += `Coupe De France 2022`;
                  texto5.innerHTML += perguntas.resposta;
                } else if (i == 3) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `Fortnite`;
                  texto2.innerHTML += `Crossfire`;
                  texto3.innerHTML += perguntas.resposta;
                  texto4.innerHTML += `Overwatch`;
                  texto5.innerHTML += `League of Legends`;
                } else if (i == 4) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `G2`;
                  texto2.innerHTML += `KRU E-Sports`;
                  texto3.innerHTML += perguntas.resposta;
                  texto4.innerHTML += `Leviatan`;
                  texto5.innerHTML += `Fnatic`;
                } else if (i == 5) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `dois`;
                  texto2.innerHTML += `quatro`;
                  texto3.innerHTML += perguntas.resposta;
                  texto4.innerHTML += `cinco`;
                  texto5.innerHTML += `um`;
                } else if (i == 6) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `Ascent`;
                  texto2.innerHTML += `Breeze`;
                  texto3.innerHTML += `Icebox`;
                  texto4.innerHTML += perguntas.resposta;
                  texto5.innerHTML += `Split`;
                } else if (i == 7) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `Saadhak`;
                  texto2.innerHTML += `Sacy`;
                  texto3.innerHTML += `Less`;
                  texto4.innerHTML += `Pancada`;
                  texto5.innerHTML += perguntas.resposta;
                } else if (i == 8) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `13x8`;
                  texto2.innerHTML += `13x3`;
                  texto3.innerHTML += perguntas.resposta;
                  texto4.innerHTML += `13x10`;
                  texto5.innerHTML += `13x4`;
                } else if (i == 9) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += perguntas.resposta;
                  texto2.innerHTML += `Pancada`;
                  texto3.innerHTML += `Sacy`;
                  texto4.innerHTML += `Yay`;
                  texto5.innerHTML += `Less`;
                } else if (i == 10) {
                  titulo.innerHTML = perguntas.pergunta;
                  texto1.innerHTML += `2 milhões`;
                  texto2.innerHTML += `1 milhão`;
                  texto3.innerHTML += `500 mil`;
                  texto4.innerHTML += `750 mil`;
                  texto5.innerHTML += perguntas.resposta;
                }
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

                divResposta1.setAttribute(
                  "Onclick",
                  " iniciarquiz(), RespostaErrada()"
                );
                divResposta2.setAttribute(
                  "Onclick",
                  " iniciarquiz(), RespostaErrada()"
                );
                divResposta3.setAttribute(
                  "Onclick",
                  " iniciarquiz(), RespostaErrada()"
                );
                divResposta4.setAttribute(
                  "Onclick",
                  " iniciarquiz(), RespostaErrada()"
                );
                divResposta5.setAttribute(
                  "Onclick",
                  " iniciarquiz(), RespostaErrada()"
                );

                AtribuirRespostaCerta();
              }
            }
            contadorResposta++;
          });
        } else {
          throw "Houve um erro na API!";
        }
      })
      .catch(function (resposta) {
        console.error(resposta);
      });
  }
}

function AtribuirRespostaCerta() {
  for (var a = 0; a <= contadorResposta; a++) {
    if (a == 0 || a == 2 || a == 7) {
      divResposta5.setAttribute("Onclick", "iniciarquiz(), RespostaCerta()");
      divResposta1.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
      divResposta2.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
      divResposta4.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
    } else if (a == 1) {
      divResposta2.setAttribute("Onclick", "iniciarquiz(), RespostaCerta()");
      divResposta5.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
    } else if (a == 3 || a == 4 || a == 5 || a == 8) {
      divResposta3.setAttribute("Onclick", "iniciarquiz(), RespostaCerta()");
      divResposta5.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
    } else if (a == 6) {
      divResposta4.setAttribute("Onclick", "iniciarquiz(), RespostaCerta()");
      divResposta3.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
    } else if (a == 9) {
      divResposta1.setAttribute("Onclick", "iniciarquiz(), RespostaCerta()");
      divResposta3.setAttribute("Onclick", "iniciarquiz(), RespostaErrada()");
    } else if (a == 10) {
      divResposta1.setAttribute(
        "Onclick",
        "RespostaErrada(),iniciarquiz(), InserirResultado()"
      );
      divResposta2.setAttribute(
        "Onclick",
        "RespostaErrada(),iniciarquiz(), InserirResultado()"
      );
      divResposta3.setAttribute(
        "Onclick",
        "RespostaErrada(),iniciarquiz(), InserirResultado()"
      );
      divResposta4.setAttribute(
        "Onclick",
        "RespostaErrada(),iniciarquiz(), InserirResultado()"
      );
      divResposta5.setAttribute(
        "Onclick",
        "RespostaCerta(),iniciarquiz(), InserirResultado()"
      );
    }
  }
}

function InserirResultado() {
  var respostas_certas = certas;
  var idUsuario = sessionStorage.ID_PERFIL;

  fetch(`/quiz/inserirtentativa/${idUsuario}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      RespostaCertaServer: respostas_certas,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log("Tentativa inserida com sucesso");
      } else {
        alert("Houve um erro ao tentar inserir a  tentativa!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function ExibirResultado() {
  fetch("/quiz/listarAvaliacao")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          alert("Nenhum resultado encontrado.");
        }
        resposta.json().then(function (resposta) {
          var quiz = document.getElementById("div_quiz");
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          for (let c = 0; c <= resposta.length; c++) {
            quiz.innerHTML = "";
            var quiz = document.getElementById("div_quiz");
            var tituloResultado = document.createElement("p");
            var containerPontos = document.createElement("div");
            var divPontos = document.createElement("div");
            var divBotoes = document.createElement("div");
            var textoAcertos = document.createElement("p");
            var textoErros = document.createElement("p");
            var desempenho = document.createElement("p");
            var tentativasQuiz = document.createElement("p");
            var botaoVerRanking = document.createElement("button");
            var botaoTentarNovamente = document.createElement("button");
            var textoBotaoVR = document.createElement("p");
            var textoBotaoTN = document.createElement("p");

            quiz.innerHTML = "";
            quiz.classList.remove("conteudo_dois");
            quiz.classList.add("conteudo");
            tituloResultado.className = "tituloResultado";
            containerPontos.classList = "container-pontos";
            divPontos.className = "pontos";
            divBotoes.className = "botoes";
            botaoTentarNovamente.className = "estilo-botao";
            botaoVerRanking.className = "estilo-botao";
            desempenho.className = "estilo-desempenho";

            tituloResultado.innerHTML = `RESULTADO QUIZ`;
            textoAcertos.innerHTML = `ACERTOS: ${certas / 10}`;
            textoErros.innerHTML = `ERROS: ${erradas}`;
            tentativasQuiz.innerHTML = `TENTATIVAS:${tentativa}`;
            var porcentagem = (certas / 110) * 100;
            if (porcentagem >= 0 && porcentagem <= 27.27) {
              desempenho.innerHTML = `VOCÊ ACERTOU ${porcentagem.toFixed(
                2
              )}% DO QUIZ E SEU DESEMPENHO FOI:<h1 class="avaliacao_texto" style="color: red; text-align: center">${
                resposta[3].avaliacao
              }</h1>`;
            } else if (porcentagem <= 54.54) {
              desempenho.innerHTML = `VOCÊ ACERTOU ${porcentagem.toFixed(
                2
              )}% DO QUIZ E SEU DESEMPENHO FOI:<h1 class="avaliacao_texto" style="color: yellow">${
                resposta[2].avaliacao
              }</h1>`;
            } else if (porcentagem <= 81.81) {
              desempenho.innerHTML = `VOCÊ ACERTOU ${porcentagem.toFixed(
                2
              )}% DO QUIZ E SEU DESEMPENHO FOI:<h1 class="avaliacao_texto" style="color:rgb(127, 221, 127)">${
                resposta[1].avaliacao
              }</h1>`;
            } else if (porcentagem <= 100) {
              desempenho.innerHTML = `VOCÊ ACERTOU ${porcentagem.toFixed(
                2
              )}% DO QUIZ E SEU DESEMPENHO FOI:<h1 class="avaliacao_texto" style="color:rgb(127, 221, 127)">${
                resposta[0].avaliacao
              }</h1>`;
            }

            textoBotaoVR.innerHTML = `RANKING`;
            textoBotaoTN.innerHTML = `Tentar Novamente`;
            quiz.appendChild(tituloResultado);
            quiz.appendChild(containerPontos);
            quiz.appendChild(desempenho);
            containerPontos.appendChild(divPontos);
            containerPontos.appendChild(divBotoes);
            divPontos.appendChild(textoAcertos);
            divPontos.appendChild(textoErros);
            divPontos.appendChild(tentativasQuiz);
            divBotoes.appendChild(botaoVerRanking);
            divBotoes.appendChild(botaoTentarNovamente);
            botaoTentarNovamente.appendChild(textoBotaoTN);
            botaoVerRanking.appendChild(textoBotaoVR);

            botaoVerRanking.id = "botaoVR";
            botaoTentarNovamente.id = "botaoTN";

            if (tentativa == 3) {
              botaoTentarNovamente.setAttribute("Onclick", "iniciarquiz()");
            } else {
              botaoTentarNovamente.setAttribute(
                "Onclick",
                "zerarContadores(), iniciarquiz()"
              );
            }

            botaoVerRanking.setAttribute("Onclick", "mostrarRanking()");
          }
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}

function zerarContadores() {
  certas = 0;
  erradas = 0;
  contadorResposta = 0;
}

function verRanking() {
  fetch("/quiz/listarRanking")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          alert("Nenhum resultado encontrado.");
        }
        resposta.json().then(function (resposta) {
          var corpoRanking = document.getElementById("tbody_table");
          for (let b = 0; b < resposta.length; b++) {
            var ranking = resposta[b];

            var linhaTabela = document.createElement("tr");
            var colunaTabela1 = document.createElement("td");
            var colunaTabela2 = document.createElement("td");
            var colunaTabela3 = document.createElement("td");

            colunaTabela1.innerHTML = ranking.idUsuario;
            colunaTabela2.innerHTML = ranking.nome;
            colunaTabela3.innerHTML = ranking.pontuacao;

            linhaTabela.className = "tr_table";
            colunaTabela1.className = "td_table";
            colunaTabela2.className = "td_table";
            colunaTabela3.className = "td_table";
            linhaTabela.appendChild(colunaTabela1);
            linhaTabela.appendChild(colunaTabela2);
            linhaTabela.appendChild(colunaTabela3);
            corpoRanking.appendChild(linhaTabela);
          }
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}

// class="sessao-grafico-canvas" id="barra_fluxo_produtos_semana"

var labels_nomes = [];

var qtd_pontos = [];

function limparDivGrafico() {
    console.log("limpando div");
    var limparDiv = document.getElementById("div_grafico_barra");
    limparDiv.innerHTML = "";
}

function graficoPontuacao() {
    console.log("chamando função obter dados gráfico");
    var div = document.getElementById("container");
    var divGrafico = document.createElement("div");

    divGrafico.classList = "div_grafico";
    divGrafico.id = "div_grafico_barra";
    div.appendChild(divGrafico);

    fetch("/grafico/grafico").then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                for (let d = 0; d < resposta.length; d++) {
                    labels_nomes.push(resposta[d].username);
                    qtd_pontos.push(resposta[d].pontuacaoUsuario);
                }
                limparDivGrafico();
                criarGrafico();
            });

        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function criarGrafico() {
    var div = document.getElementById("div_grafico_barra");
    var tituloGrafico = document.createElement("h1");
    var canvas = document.createElement('canvas');
    canvas.className = 'graficos-canvas';
    tituloGrafico.className = 'titulo_ranking';
    tituloGrafico.innerHTML = `PONTUAÇÃO TOTAL`;
    canvas.id = 'barra_grafico_pontuacao_total';
    div.appendChild(tituloGrafico);
    div.appendChild(canvas);

    
    
    const data_pontuacao_total = {
        labels: labels_nomes,
        datasets: [{
            label: 'Pontuação Total do Jogador',
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: qtd_pontos,
        }
        ]
    };
    
    const config_grafico_pontuacao_total = {
        type: 'bar',
        data: data_pontuacao_total,
        options: {}
    };
    
    const grafico_barra_fluxo_produtos_semana = new Chart(
        document.getElementById('barra_grafico_pontuacao_total'),
        config_grafico_pontuacao_total
    );
}