

function carrossel() {
    
    var arrayImagens = document.querySelectorAll(".estilo")
    var contador = 0;
   while (contador <= arrayImagens.length){

    if (contador == 0) {

        arrayImagens[contador].classList.remove('i1');
        arrayImagens[contador].classList.add('i2');
        contador--
    } else if (contador == 1) {
        arrayImagens[contador].classList.remove('i2');
        arrayImagens[contador].classList.add('i3');
        contador--
    } else if (contador == 2) {
        arrayImagens[contador].classList.remove('i3');
        arrayImagens[contador].classList.add('i4');
        contador--
    } else if (contador == 3) {
        arrayImagens[contador].classList.remove('i4');
        arrayImagens[contador].classList.add('i5');
        contador--
    } else if (contador == 4) {
        arrayImagens[contador].classList.remove('i5');
        arrayImagens[contador].classList.add('i6');
        contador--
    } else if (contador == 5) {
        arrayImagens[contador].classList.remove('i6');
        arrayImagens[contador].classList.add('i7');
        contador--
    } else if (contador == 6) {
        arrayImagens[contador].classList.remove('i7');
        arrayImagens[contador].classList.add('i8');
        contador--
    } else if (contador == 7) {
        arrayImagens[contador].classList.remove('i8');
        arrayImagens[contador].classList.add('i1');
        contador--
    } 
    contador += 2;

    
}
}
setInterval(carrossel, 3500)