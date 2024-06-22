let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemnto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemnto('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')  
    } else {
        //Usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto('p', 'El numero secreto es menor')
        }else {
            asignarTextoElemnto('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;     
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemnto('P', 'Ya se sortearon todos los números posibles')
    } else {

        // Si el numero generadoesta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemnto('h1', 'Juego del número secreto');
    asignarTextoElemnto('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
  
}

function iniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();



