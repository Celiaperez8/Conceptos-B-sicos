"use strict"

let emocion = prompt("Selecciones una emoción de la lista: feliz, triste, cansado o emocionado");

switch(emocion){
    case"feliz":
    console.log("Cachorro Feliz");
    break;

    case"triste":
    console.log("gatito cansado");
    break;

    case"cansado":
    console.log("ctriste");
    break;

    case"emocionado":
    console.log("emocionado");
    break;

    default:
        console.warn("introduce una opción que esté en la lista");
}
