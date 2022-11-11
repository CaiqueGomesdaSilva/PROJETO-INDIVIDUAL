

function carrossel() {
    
    var arrayImagens = document.querySelectorAll(".estilo")
    var contador = 0;
   while (contador <= arrayImagens.length){

        arrayImagens[contador].classList.remove('i1');
        arrayImagens[contador].classList.add('i2');
        contador--
        arrayImagens[contador].classList.remove('i2');
        arrayImagens[contador].classList.add('i3');
        contador--
        arrayImagens[contador].classList.remove('i3');
        arrayImagens[contador].classList.add('i4');
        contador--
        arrayImagens[contador].classList.remove('i4');
        arrayImagens[contador].classList.add('i5');
        contador--
        arrayImagens[contador].classList.remove('i5');
        arrayImagens[contador].classList.add('i6');
        contador--
        arrayImagens[contador].classList.remove('i6');
        arrayImagens[contador].classList.add('i7');
        contador--
        arrayImagens[contador].classList.remove('i7');
        arrayImagens[contador].classList.add('i8');
        contador--
        arrayImagens[contador].classList.remove('i8');
        arrayImagens[contador].classList.add('i1');
        contador--
    } 
    contador += 2;

    if(contador != arrayImagens.length) {
        contador = 0;
    }
}
setInterval(carrossel, 3500)