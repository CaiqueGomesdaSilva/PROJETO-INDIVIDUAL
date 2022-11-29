var password = document.getElementById('password_botao');
var username = document.getElementById('username_botao');
var email = document.getElementById('email_botao');
var tel = document.getElementById('tel_botao');
var usuario = document.getElementById('usuario_botao')

var validar_user = false;
function validarUsuario() {
  var usuario = inputUser.value;
  /* Verifica se o usuario tem mais de 2 caractéres */
  if (usuario.length < 2) {
    inputUser.classList.add("red");
    inputUser.classList.remove("green");
    validar_user = false;
  } else {
    inputUser.classList.remove("red");
    inputUser.classList.add("green");
    validar_user = true;
  }
}
//Validando Senha do Usuario
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
    inputSenha.classList.remove("red");
    inputSenha.classList.add("green");
    validar_senha = true;
  } else {
    inputSenha.classList.add("red");
    inputSenha.classList.remove("green");
    validar_senha = false;
  }
}

//Validando Contato do Usuario
var validar_contato = false;
function validarContato() {
  var contato = inputTel.value;
  if (contato.length <= 7 || contato.length >= 12){
    // Valida números telefones celulares para contato
    inputTel.classList.add("red");
    inputTel.classList.remove("green");
    validar_contato = false;
  } else {
    inputTel.classList.remove("red");
    inputTel.classList.add("green");
    validar_contato = true;
  }
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
    inputEmail.classList.add("red");
    inputEmail.classList.remove("green");
  } else {
    inputEmail.classList.remove("red");
    inputEmail.classList.add("green");
    validar_email = true;
  }
}



function validar_atualizacao_func_user() {
  if (validar_user) {
    confirmar_user();
  } else {
    alert("Usuário inválido. Deve conter mais de 2 letras.");
  }
}
function validar_atualizacao_func_senha() {
  if (validar_senha) {
    confirmar_senha();
  } else {
    alert("Senha inválida. Deve conter no mínimo 1 letra maiúscula, 1 caracter especial e 1 número.");
  }
}
function validar_atualizacao_func_contato() {
  if (validar_contato) {
    confirmar_telefone();
  } else {
    alert("Telefone inválido. Deve conter de 8 a 11 dígitos");
  }
}

function validar_atualizacao_func_email() {
  if (validar_email) {
    confirmar_email();
  } else {
    alert("Email inválido. Deve conter @ e finalizar com .com ou .com.br");
  }
}

function alterar_password() {
    btn_senha.remove();

    password.innerHTML += `<div id="div_change_pass" class="div_input">
    <label for="change_pass"></label>
    <input class="input_user_pass_telefone" id="inputSenha" onkeyup="validarSenha()" type="text">
    <button onclick="validar_atualizacao_func_senha()" >Confirmar</button>
    <button onclick="cancelar_senha()" >Cancelar</button>
</div>`
}

function cancelar_senha() {
    div_change_pass.remove();
    
    password.innerHTML += `
    <button onclick="alterar_password()" id="btn_senha">
        ALTERAR SENHA
    </button>
    `;
  }


function alterar_user() {
    btn_user.remove();

    username.innerHTML += `
    <div id="div_change_user" class="div_input">
        <label for="change_user"></label>
        <input class="input_user_pass_telefone" id="inputUser" onkeyup="validarUsuario()" type="text">
        <button onclick="validar_atualizacao_func_user()">Confirmar</button>
        <button onclick="cancelar_user()" >Cancelar</button>
    </div>
    `;
}

function cancelar_user() {
    div_change_user.remove();
    
    username.innerHTML += `
    <button onclick="alterar_user()" id="btn_user">
        ALTERAR USERNAME
    </button>
    `;
  }

function alterar_email() {
    btn_email.remove();

    email.innerHTML += `
    <div id="div_change_email" class="div_input">
    <label for="change_email"></label>
    <input class="input_user_pass_telefone" id="inputEmail" onkeyup="validarEmail()" type="text">
    <button onclick="validar_atualizacao_func_email()" >Confirmar</button>
    <button onclick="cancelar_email()" >Cancelar</button>
</div>`
}

function cancelar_email() {
    div_change_email.remove();
    
    email.innerHTML += `
    <button onclick="alterar_email()" id="btn_email">
        ALTERAR EMAIL
    </button>
    `;
  }

function alterar_tel() {
    btn_tel.remove();

    tel.innerHTML += `
    <div id="div_change_telefone" class="div_input">
        <label for="change_telefone"></label>
        <input class="input_user_pass_telefone" id="inputTel" onkeyup="validarContato()" type="number">
        <button onclick="validar_atualizacao_func_contato()" >Confirmar</button>
        <button onclick="cancelar_telefone()">Cancelar</button>
    </div>
    `
}

function cancelar_telefone() {
    div_change_telefone.remove();
    
    tel.innerHTML += `
    <button onclick="alterar_tel()" id="btn_tel">
        ALTERAR TELEFONE
    </button>
    `;
  }


  function confirmar_user() {

    var usernameUsuario = document.getElementById('username');

    fetch(`/usuarios/confirmar_user/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: inputUser.value,
        idUsuario: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Username atualizado com sucesso");
        window.location = "./configuracoes_perfil.html";
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
    
    usernameUsuario.innerHTML = inputUser.value;
    div_change_user.remove();

    username.innerHTML += `
    <button onclick="alterar_user()" id="btn_user">
        ALTERAR USERNAME
    </button>
    `;
  }

  function confirmar_senha() {

    var senhaUsuario = document.getElementById('senha');

    fetch(`/usuarios/confirmar_senha/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        senha: inputSenha.value,
        idUsuario: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Senha atualizada com sucesso");
        window.location = "./configuracoes_perfil.html";
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

    senhaUsuario.innerHTML = inputSenha.value;

    div_change_pass.remove();

    password.innerHTML += `
    <button onclick="alterar_password()" id="btn_senha">
        ALTERAR SENHA
    </button>
    `;
  }

  function confirmar_telefone() {

    var telUsuario = document.getElementById('telefone');

    fetch(`/usuarios/confirmar_telefone/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        telefone: Number(inputTel.value),
        idUsuario: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Telefone atualizado com sucesso");
        window.location = "./configuracoes_perfil.html";
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

    telUsuario.innerHTML = Number(inputTel.value);

    div_change_telefone.remove();

    div_content_telefone.innerHTML += `
    <button onclick="alterar_tel()" id="btn_tel">
        ALTERAR TELEFONE
    </button>
    `;
  }


  function confirmar_email() {

    var emailUsuario = document.getElementById('email');

    fetch(`/usuarios/confirmar_email/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: inputEmail.value,
        idUsuario: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Email atualizado com sucesso");
        window.location = "./configuracoes_perfil.html";
        
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

    emailUsuario.innerHTML = inputEmail.value;

    div_change_email.remove();

    email.innerHTML += `
    <button onclick="alterar_email()" id="btn_email">
        ALTERAR EMAIL
    </button>
    `;
  }


 function buscarDadosUsuario() {
  
  var idUsuario = sessionStorage.ID_PERFIL;

  fetch(`/usuarios/listarDadosUsuario/${idUsuario}`)
  .then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        alert("Nenhum resultado encontrado.");
      }
      var nome = document.getElementById('nome')
      var username = document.getElementById('username');
      var senha = document.getElementById('senha');
      var email = document.getElementById('email');
      var telefone = document.getElementById('telefone');
      
      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));
       
          nome.innerHTML = resposta[0].nome        
          username.innerHTML = resposta[0].username;
          senha.innerHTML = resposta[0].senha
          email.innerHTML = resposta[0].email;
          telefone.innerHTML = resposta[0].telefone;
      });
    } else {
      throw "Houve um erro na API!";
    }
  })
  .catch(function (resposta) {
    console.error(resposta);
  });
 }



 function excluir_perfil() {
  btn_usuario.remove();

  usuario.innerHTML += `
  <div id="div_change_usuario">
      <label for="change_telefone"></label>
      <button onclick="deletarTentativa(), deletarPerfil()" >Confirmar</button>
      <button onclick="cancelar_perfil()">Cancelar</button>
  </div>
  `
}


function cancelar_perfil() {
  div_change_usuario.remove();
  
  usuario.innerHTML += `
  <button id="btn_usuario" onclick="excluir_perfil()">REMOVER PERFIL</button>
  `;
}



function deletarTentativa() {

  var idUsuario = sessionStorage.ID_PERFIL;
  
  fetch(`/usuarios/deletarTentativa/${idUsuario}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  }).then(function (resposta) {

      if (resposta.ok) {
      } else if (resposta.status == 404) {
          window.alert("Deu 404!");
      } else {
          throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
  });
}


function deletarPerfil() {

  var idUsuario = sessionStorage.ID_PERFIL;
  
  fetch(`/usuarios/deletarPerfil/${idUsuario}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  }).then(function (resposta) {

      if (resposta.ok) {
          alert('Você excluiu o seu perfil!')
          window.location = "/index.html"
          sessionStorage.clear();
      } else if (resposta.status == 404) {
          window.alert("Deu 404!");
      } else {
          throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
  });
}
