var sessaoLogada = false;
function mudarheader() {
    var sessao = sessionStorage.ID_PERFIL
    if(sessao != undefined) {
        sessaoLogada = true;
        
        var listaHeader = document.getElementById('textos_header')
        var Acadastro = document.getElementById('a_cadastro_index');
        var LIcadastro = document.getElementById('li_cadastro_index');
        var Alogin = document.getElementById('a_login_index');
        var LIlogin = document.getElementById('li_login_index');
        var APerfil = document.createElement('a');
        var LIPerfil = document.createElement('li');


        Acadastro.remove();
        LIcadastro.remove();
        Alogin.remove();
        LIlogin.remove();

        APerfil.href = "perfil_quiz.html"
        LIPerfil.innerHTML = `${sessionStorage.NOME_USUARIO.toUpperCase()}<img class="icone_sessao" src="./Assets/icones/icone-logado.png" width="30px" />` 

        listaHeader.appendChild(APerfil);
        APerfil.appendChild(LIPerfil);
    }
}