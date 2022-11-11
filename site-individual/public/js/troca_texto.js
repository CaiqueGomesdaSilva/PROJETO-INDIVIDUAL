function troca_texto() {

    var arrayTextos = document.querySelectorAll(".texto")

    for(var i = 0; i < arrayTextos.length; i++) {

        if(i == 0) {

            arrayTextos[i].classList.add('opacidade')
        } else if(i == 1) {
            arrayTextos[0].classList.remove('opacidade')
            arrayTextos[i].classList.add('opacidade')
        } else if (i == 2){
            arrayTextos[1].classList.remove('opacidade')
            arrayTextos[i].classList.add('opacidade')
        }
    }
}
setInterval(troca_texto,3000)