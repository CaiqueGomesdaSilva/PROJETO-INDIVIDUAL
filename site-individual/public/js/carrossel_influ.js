var arrayImagens = document.querySelectorAll(".estilo")
        var contador0 = 0;
        var contador1 = 1;
        var contador2 = 2;
        var contador3 = 3;
        var contador4 = 4;
        var contador5 = 5;
        var contador6 = 6;
        var contador7 = 7;

    function carrossel() {
        
        arrayImagens[contador0].classList.remove('i1');
        arrayImagens[contador0].classList.add('i2');
        contador0--
        arrayImagens[contador1].classList.remove('i2');
        arrayImagens[contador1].classList.add('i3');
        contador1--
        arrayImagens[contador2].classList.remove('i3');
        arrayImagens[contador2].classList.add('i4');
        contador2--
        arrayImagens[contador3].classList.remove('i4');
        arrayImagens[contador3].classList.add('i5');
        contador3--
        arrayImagens[contador4].classList.remove('i5');
        arrayImagens[contador4].classList.add('i6');
        contador4--
        arrayImagens[contador5].classList.remove('i6');
        arrayImagens[contador5].classList.add('i7');
        contador5--
        arrayImagens[contador6].classList.remove('i7');
        arrayImagens[contador6].classList.add('i8');
        contador6--
        arrayImagens[contador7].classList.remove('i8');
        arrayImagens[contador7].classList.add('i1');
        contador7--


        if(contador0 < 0) {
            contador0 = 7
        }
        if (contador1 < 0) {
            contador1 = 7
        }
        if (contador2 < 0) {
            contador2 = 7
        }
        if (contador3 < 0) {
            contador3 = 7
        }
        if (contador4 < 0) {
            contador4 = 7
        }
        if (contador5 < 0) {
            contador5 = 7
        }
        if (contador6 < 0) {
            contador6 = 7
        }
        if (contador7 < 0) {
            contador7 = 7
        }

        }
        setInterval(carrossel, 3500)