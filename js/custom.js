"use strict"

//------------- PANTALLA COMPLETA ---------------------------------------------

//activa la pantalla completa
function pantallaCompleta(element){

    if(element.webkitRequestFullScreen){
        element.webkitRequestFullScreen();
    }
}

//quita la pantalla completa
function pantallaNormal(){

    if(document.cancelFullScreen){
        document.cancelFullScreen();

    }else if(document.mozCancelFullScreen){
        document.mozCancelFullScreen();

    }else if(document.webkitCancelFullScreen){
        document.webkitCancelFullScreen();
    }
}