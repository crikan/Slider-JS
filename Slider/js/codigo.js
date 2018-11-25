var contador;
var botonPrev;
var botonSig;
var botonera = [];

function inicializar(){
    contador = 0;
    
    botonPrev = document.getElementById("prev");
    botonSig = document.getElementById("sig");
    
    botonera[0] = document.getElementById('dot0');
	botonera[1] = document.getElementById('dot1');
	botonera[2] = document.getElementById('dot2');
	botonera[3] = document.getElementById('dot3');
    botonera[contador].checked = true; 
}

function siguiente(){
    if (contador < 3 ){
        contador ++;
        document.imagen.src = "img/" + contador + ".jpg";
        botonera[contador].checked = true;       
    } else {
        contador = 0
        document.imagen.src = "img/" + contador + ".jpg";
        botonera[contador].checked = true;
    }   
}

function previa(){
    if (contador > 0){
        contador --;
        document.imagen.src = "img/" + contador + ".jpg";
        botonera[contador].checked = true;
    } else {
        contador = 3;
        document.imagen.src = "img/" + contador + ".jpg";
        botonera[contador].checked = true;
    } 
}

function posicionar(n){
    document.imagen.src = "img/" + n + ".jpg";
}

window.onload = function(){
    inicializar();
    setInterval(siguiente, 4000);
    botonPrev.addEventListener('click', previa);
    botonSig.addEventListener('click', siguiente);
}

