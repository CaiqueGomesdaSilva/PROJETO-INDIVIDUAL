function validarUsuario() {
  var usuario = inputUser.value;
  /* Verifica se o usuario tem mais de 6 caractéres */
  if (usuario.length < 6) {
    inputUser.classList.add("active");
    alert("Nome Inválido");
    validar_usuario = false;
  } else {
    inputUser.classList.remove("active");
    validar_usuario = true;
  }
}
var validar_senha = false;
function validarSenha() {
  var senha = inputSenha.value;
  var fortificador =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])([0-9a-zA-Z!$*&@#]){8,}$/;
  /*
    
  (?=.*\d)         // deve conter ao menos um dígito
  (?=.*[a-z])      // deve conter ao menos uma letra minúscula
  (?=.*[A-Z])      // deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#!])    // deve conter ao menos um caractere especial

  ([0-9a-zA-Z$*&@#]): é uma classe de caracteres contendo números, 
  letras e os caracteres especiais que você está considerando. 
  Eles estão dentro de parênteses para formar um grupo de captura

*/
  /* Verifica se a senha está com as requisições acima */
  if (fortificador.test(senha)) {
    inputSenha.classList.remove("active");
    validar_senha = true;
  } else {
    validar_senha = false;
    inputSenha.classList.add("active");
    var texto = `Senha inválida
    Sua senha deve ter no mínimo:
    8 caracteres
    Uma letra maiúscula
    Uma letra Minuscula
    Um caracter especial`;
    alert(texto);
  }
}



function entrar() {
    // aguardar();

    var usernameVar = inputUser.value;
    var senhaVar = inputSenha.value;

    console.log("FORM LOGIN: ", usernameVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/entrar", {
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
          alert("Login efetuado com sucesso!")
          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.USER_USUARIO = json.username;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.ID_PERFIL = json.idUsuario;

            setTimeout(function () {
              window.location = "./perfil_quiz.html";
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

  function voltarPagina() {
    window.history.back();
  }