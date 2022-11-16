function entrar() {
    // aguardar();

    var usernameVar = inputUser.value;
    var senhaVar = inputSenha.value;

    // if (userVar == "" || senhaVar == "") {
    //     cardErro.style.display = "block"
    //     mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
    //     finalizarAguardar();
    //     return false;
    // }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    console.log("FORM LOGIN: ", userVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameServer: usernameVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.USER_USUARIO = json.username;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.ID_PERFIL = json.idPerfil;

            setTimeout(function () {
              window.location = "./perfil.html";
            }, 1000); // apenas para exibir o loading
          });
        } else {
          alert("Seu usuário ou seu senha está incorreto");

          resposta.text().then((texto) => {
            console.error(texto);
            // finalizarAguardar(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

    return false;
  }