"use strict"

//------------- PANTALLA COMPLETA ---------------------------------------------

//activa la pantalla completa (se desactiva con la tecla ESC)
function pantallaCompleta(element){

    if(element.webkitRequestFullScreen){
        element.webkitRequestFullScreen();
    }
}
