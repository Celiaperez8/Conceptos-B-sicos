"use strict"

let estadoAnimo = prompt("Indica su estado de ánimo:  (feliz, triste, cansado, o emocionado)");

switch(estadoAnimo){
    case"feliz":
    alert("Enhorabuena esta feliz!!");
    break;
    case"triste":
    alert("Lo siento, espero que mejore");
    break;
    case"cansado":
    alert("Descansa un rato");
    break;
    case"emocionado":
    alert("Estoy emocionado por ti");
    break;
    default:
        console.warn("Introduce uan opción de la lista");
}