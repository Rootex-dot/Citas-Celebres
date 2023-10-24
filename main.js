const imgAutor = document.getElementById('imgAutor');
const frase = document.getElementById('frase');
const btn = document.getElementById('btn');
const autor = document.getElementById('autor');
const fraseActual = document.getElementById('fraseActual');
const frasesTotales = document.getElementById('frasesTotales');


//Variable para cambiar las frases, es la pocisión dentro del array.
let contador = 0;


//Variable para cambiar el valor dinamico del contador frases.
let contadorDeFrases = 1;
let longitudDeFrases = frases.length;
frasesTotales.textContent = longitudDeFrases; 
fraseActual.textContent = contadorDeFrases ;





function cambiarContador(){
    if(contadorDeFrases == longitudDeFrases){
        contadorDeFrases = 0;
    }
        contadorDeFrases += 1;
        fraseActual.textContent = contadorDeFrases ;
    }




frase.textContent = frases[contador].frase;
autor.textContent = frases[contador].autor;
imgAutor.style.backgroundImage = frases[contador].rutaImagen;

function cambiarCita(){
    imgAutor.classList.add('imgAutor');     
    valorBTN();
    cambiarContador();
    contador+=1;

    if(contador >= frases.length ){
        contador = 0;

    }
    
frase.textContent = frases[contador].frase;
autor.textContent = frases[contador].autor;
imgAutor.style.backgroundImage = frases[contador].rutaImagen;

imgAutor.addEventListener('animationend', () => {
    imgAutor.classList.remove('imgAutor');
});
}

function valorBTN() {
if(btn.value == 'Generar cita'){
    btn.value = 'Otra cita';
}
}



btn.addEventListener('click', cambiarCita);





//Aplicación hecha por LDaniel GarcíaA :)