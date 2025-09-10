

let numeroSecreto = generarNumeroSecreto();
let numeroDeIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroDeIntentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(
            'p',
            `🎉 Acertaste el número secreto en ${numeroDeIntentos} ${(numeroDeIntentos === 1 ? 'vez' : 'veces')}`
        );

        // Habilitar el botón de reinicio
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no adivinó el número secreto
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', '🔼 El número secreto es mayor');
        } else {
            asignarTextoElemento('p', '🔽 El número secreto es menor');
        }

        numeroDeIntentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ha sorteamos todos los numeros 
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se han generado todos los números posibles, ¡Juego terminado!');

    } else {

        //Si el numero generado ya se encuentra en la lista, se genera otro numero
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}



function condicionesIniciales() {

    // Inicializar el juego
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al ${numeroMaximo}');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    //Generar el numero aleatorio 
    //Inicializar el numero de intentos 
    condicionesIniciales();
    //Deshabilitar  el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disable', 'true')



}

condicionesIniciales();








