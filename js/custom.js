"use strict"

//------------- PANTALLA COMPLETA ---------------------------------------------

//activa la pantalla completa (se desactiva con la tecla ESC)
function pantallaCompleta(element) {

    if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

//------------- VALIDACIÓN FORMULARIO -----------------------------------------

function validacion() {
    document.getElementById("formulario").onsubmit = function(){

    let nombre = document.getElementById("nombre");
    let tlf = document.getElementById("tlf");
    let mail = document.getElementById("mail");

    if(nombre.length <= 4) {
        alert("El nombre no puede tener menos 5 caracteres");
    }
    
    if(tlf.length !== 9){
        alert("Teléfono inválido");
    }

    /* COMPROBAR SI LA PRIMERA SÍLABA ES 6,7 O 9
    if(tlf.charAt(0) != "9" || tlf.charAt(0) != "6" || tlf.charAt(0) != "7"){
        alert("El teléfono no existe.");
    }*/
    };
}

window.onload = function(){
    validacion();
};