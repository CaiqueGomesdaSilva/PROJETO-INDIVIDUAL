/* Validando os campos */
var validar_usuario = false;
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

var validar_nome = false;
function validarNome() {
  var nome = inputNome.value;
  /* Devolve a quantidade de nomes em numeros Ex: Sherlock Homes -> vai retornar 2 */
  const nomeCompleto = nome.split(" ");
  /* Verifica se a quantidade de nomes é menor que 1, pois ninguém tem um nome completo de um nome apenas */
  if (nomeCompleto.length <= 1) {
    validar_nome = false;
    inputNome.classList.add("active");
    alert("Nome Inválido");
  } else {
    inputNome.classList.remove("active");
    validar_nome = true;
  }
  /* Faz a substituição das primeiras letras dos nomes caso o usuário coloque a primeira leta do nome minuscula */
  for (let i = 0; i < nomeCompleto.length; i++) {
    nomeCompleto[i] =
      nomeCompleto[i][0].toUpperCase() + nomeCompleto[i].substr(1);
  }
  /* Junta os nomes novamente */
  nomeCompleto.join(" ");
}

var validar_email = false;
function validarEmail() {
  var email = inputEmail.value;
  var validacao = /\S+@\S+\.\S+/;
  /* Qualquer tipo de texto:
  Seguida por um caractere @ (que é obrigatório em e-mails);
  Seguido por algum outro texto, o domínio/provedor;
  E então temos a presença de um ponto, que também é obrigatório;
  E por fim mais um texto, validando tanto emails .com quanto .com.br, e outros que tenham terminologias diferentes */
  if (!validacao.test(email)) {
    inputEmail.classList.add("active");
    alert("E-mail Inválido");
    validar_email = false;
  } else {
    inputEmail.classList.remove("active");
    validar_email = true;
  }
}

var validar_contato = false;
function validarContato() {
  var contato = inputTel.value;
  if (contato.length > 11) {
    // Valida números telefones celulares para contato
    inputTel.classList.add("active");
    alert("Contato Inválido");
    validar_contato = false;
  } else {
    inputTel.classList.remove("active");
    validar_contato = true;
  }
}

function validar_cadastro() {
  if (validar_usuario && validar_senha && validar_nome && validar_email) {
    alert(`Cadastro realizado com sucesso!`);
    cadastrar();
  } else {
    alert("Autentificação inválida");
  }
}



function cadastrar() {

  window.location.href = "login.html";

  var usernameVar = inputUser.value;
  var senhaVar = inputSenha.value;
  var nomeVar = inputNome.value;
  var emailVar = inputEmail.value;
  var contatoVar = inputContato.value;

  if (usernameVar == "" || senhaVar == "" || nomeVar == "" || emailVar == "") {
    alert("Preencha os campos corretamente!");
    return false;
  } else {
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        usernameServer: userVar,
        senhaServer: senhaVar,
        nomeServer: nomeVar,
        emailServer: emailVar,
        contatoServer: contatoVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert(
            "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
          );

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
          // finalizarAguardar();
        } else {
          alert("Houve um erro ao tentar realizar o cadastro!");
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    return false;
  }
}
