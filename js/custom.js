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

    let email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(nombre.length > 5) {
        alert("El nombre no puede tener más de 20 caracteres");
    
    if(tlf.length < 9 && tlf.length > 9){
        alert("Teléfono inválido");
    }

    /* COMPROBAR SI LA PRIMERA SÍLABA ES 6,7 O 9
    if(tlf.charAt(0) != "9" || tlf.charAt(0) != "6" || tlf.charAt(0) != "7"){
        alert("El teléfono no existe.");
    }*/

    if((email.test(mail.value))){
    }else{
        alert("Email inválido");
    }
    
    };
}

    window.onload = function(){
        validacion();
    };
}

//------------- AVISO DE QUEJA -----------------------------------------

function queja() {
    
    alert("No te quejes tanto...");
    document.getElementById("contacto").value = "";
  }