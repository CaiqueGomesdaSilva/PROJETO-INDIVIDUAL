var arrayTextos = document.querySelectorAll(".texto")
var i = 0;

function troca_texto() {
    
        if(i == 0) {
            arrayTextos[i].classList.add('opacidade1')
            i++
        } else if(i == 1) {
            arrayTextos[i].classList.add('opacidade')
            i++
        } else if (i == 2) {
            arrayTextos[1].classList.remove('opacidade')
            i++
        } else {
            arrayTextos[0].classList.remove('opacidade1')
            i = 0;
        }

    }

setInterval(troca_texto,3000)