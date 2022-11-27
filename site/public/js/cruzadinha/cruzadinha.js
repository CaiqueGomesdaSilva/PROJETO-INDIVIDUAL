var arrayTabela = [
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x','x','x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', '4', 'x', 'x', 'x', 'x', 'x', 'x', 'x','x','x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'B', 'x', 'x', 'x', 'x', 'x', '8', 'x','x','x'],
    ['x', '2', 'x', 'x', 'x', 'x', 'x', 'Z', 'x', 'x', 'x', '7', 'x', 'V', 'x','x','x'],
    ['x', 'O', 'x', 'x', 'x', 'x', 'x', 'K', 'x', 'x', 'x', 'S', 'x', 'A', 'x','x','x'],
    ['3', 'P', 'A', 'N', 'C', 'A', 'D', 'A', 'x', 'x', 'x', 'A', '10', 'L', 'O','U','D'],
    ['x', 'T', 'x', 'x', '5', 'x', 'x', 'x', 'x', 'x', 'x', 'A', 'x', 'O', 'x','9','x'],
    ['1', 'I', 'N', 'F', 'L', 'U', 'E', 'N', 'C', 'I', 'A', 'D', 'O', 'R', 'E','S','x'],
    ['x', 'C', 'x', 'x', 'E', 'x', 'x', 'x', 'x', 'x', 'x', 'H', 'x', 'A', 'x','A','x'],
    ['x', 'x', '6', 'A', 'S', 'P', 'A', 'S', 'x', 'x', 'x', 'A', 'x', 'N', 'x','C','x'],
    ['x', 'x', 'x', 'x', 'S', 'x', 'x', 'x', 'x', 'x', 'x', 'K', 'x', 'T', 'x','Y','x']
];
var contadorId = 0;
var div_teste = document.getElementById("div_teste");
for (var l = 0; l <= 10; l++) {
    for (var c = 0; c <= 16; c++) {
        var posicao = arrayTabela[l][c]
        if (posicao == '1' || posicao == '2' || posicao == '3' || posicao == '4' || posicao == '5' || posicao == '6' || posicao == '7' || posicao == '8' || posicao == '9' || posicao == '10') {
            var button = document.createElement("button")
            button.className = "z"
            button.innerHTML = posicao;
            div_teste.appendChild(button);
        } else if (posicao != 'x') {
            var input = document.createElement("input");
            input.id = `a${contadorId}`;
            input.className = "x";
            div_teste.appendChild(input);
            input.setAttribute("oninput", "this.value = this.value.toUpperCase()")
            contadorId++
        } else {
            var inputVazia = document.createElement("input");
            inputVazia.className = "y"
            div_teste.appendChild(inputVazia);
        }
        if (c == 16) {
            div_teste.innerHTML += `<br>`
        }
    }
}

var div_titulo_dicas = document.getElementById("titulo-botao-dicas");
var botaoDica = document.createElement("button");

botaoDica.innerHTML = "Verificar Respostas";
div_titulo_dicas.appendChild(botaoDica);

botaoDica.setAttribute("Onclick", "validar()");


for(a = 1; a <= 10; a++) {
    var dicas = document.createElement("p");
    dicas.className = "dicas_texto";
    dicas.innerHTML = `${a}°`
    div_dicas.appendChild(dicas);

    if(a == 1) {
        dicas.innerHTML += ` PROFISSÃO DOS INTEGRANTES QUE PRODUZEM CONTEÚDO DIGITAL<br>
        R: <span class="span_resp" id=palavra${a}></span>`
        
    } else if (a == 2) {
        dicas.innerHTML += ` TIME QUE PERDEU PARA A LOUD NA FINAL<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 3) {
        dicas.innerHTML += ` JOGADOR QUE FAZ A FUNÇÃO DE CONTROLADOR<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 4) {
        dicas.innerHTML += ` TREINADOR DA EQUIPE DE VALORANT<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 5) {
        dicas.innerHTML += ` JOGADOR QUE FAZ A FUNÇÃO DE SENTINELA<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 6) {
        dicas.innerHTML += ` JOGADOR QUE FAZ A FUNÇÃO DE DUELISTA<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 7) {
        dicas.innerHTML += ` JOGADOR QUE FAZ A FUNÇÃO DE INICIADOR/CONTROLADOR<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 8) {
        dicas.innerHTML += ` JOGO NO QUAL A LOUD FOI CAMPEÃ MUNDIAL<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 9) {
        dicas.innerHTML += ` JOGADOR DA EQUIPE QUE MIGROU DE OUTRO JOGO PARA O VALORANT<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    } else if(a == 10) {
        dicas.innerHTML += ` EQUIPE QUE FOI CAMPEÃ MUNDIAL DE VALORANT<br>
        R: <span class="span_resp" id=palavra${a}></span>`
    }
}
function validar() {
    var influencer = a22.value + a23.value + a24.value + a25.value + a26.value + a27.value + a28.value + a29.value +
    a30.value + a31.value + a32.value + a33.value + a34.value + a35.value + a36.value;

    var optic = a3.value + a7.value + a19.value + a22.value + a37.value;

    var pancada = a7.value + a8.value + a9.value + a10.value + a11.value + a12.value + a13.value;

    var bzka = a0.value + a1.value + a4.value + a13.value;

    var less = a25.value + a38.value + a43.value + a50.value;

    var aspas = a42.value + a43.value + a44.value + a45.value + a46.value;

    var saadhak = a5.value + a14.value + a20.value + a32.value + a39.value + a47.value + a51.value;

    var valorant = a2.value + a6.value + a15.value + a21.value + a34.value + a40.value + a48.value + a52.value;

    var sacy = a36.value + a41.value + a49.value + a53.value;

    var loud = a15.value + a16.value + a17.value + a18.value;


    if (influencer == 'INFLUENCIADORES') {
        palavra1.innerHTML = "INFLUENCIADORES";
    }
    if( optic == "OPTIC") {
        palavra2.innerHTML = "OPTIC"
    }
    if( pancada == "PANCADA") {
        palavra3.innerHTML = "PANCADA"
    } 
    if( bzka == "BZKA") {
        palavra4.innerHTML = "BZKA"
    }
    if ( less == "LESS") {
        palavra5.innerHTML = "LESS"
    }
    if ( aspas == "ASPAS") {
        palavra6.innerHTML = "ASPAS"
    }
    if( saadhak == "SAADHAK") {
        palavra7.innerHTML = "SAADHAK"
    }
    if( valorant == "VALORANT") {
        palavra8.innerHTML = "VALORANT"
    }
    if( sacy == "SACY") {
        palavra9.innerHTML = "SACY"
    }
    if( loud == "LOUD") {
        palavra10.innerHTML = "LOUD"
    }
}

function trocarDiv() {

    var divInicial = document.getElementById('div_cruzadinha');
    var divCruzadinha = document.getElementById('container-filho');

    divInicial.classList.remove("conteudo");
    divInicial.classList.add('conteudo_display_none');
    divCruzadinha.classList.remove('filho')
    divCruzadinha.classList.add('cruzadinha_display_flex');
}