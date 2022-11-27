"use strict"

//------------- PANTALLA COMPLETA ---------------------------------------------

//activa la pantalla completa (se desactiva con la tecla ESC)
function pantallaCompleta(element) {

    if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

//------------- VALIDACIÓN FORMULARIO ------------------------------------------

function validacion() {

    let nombre = document.getElementById("nombre");
    let tlf = document.getElementById("tlf");
    let mail = document.getElementById("mail");

    //el .length < 2 es por si es algún usuario con nombre extranjero
    if (nombre.length < 1 || nombre.length > 20) {
        alert("Debe de haber entre 2 y 19 caracteres en el nombre.");
    }

    if(tlf.length != 9){
        alert("Teléfono inválido");
    }

    /*for(let i = 0; i > tlf.length; i++){
        if(tlf[0] != "9" || tlf[0] != "6" || tlf[0] != "7"){
            alert("El teléfono no existe.");
        }
    }*/
}

