"use strict"

let animo = prompt("selecciones su estado de ánimo: feliz, triste, cansado o emocionado");

switch(animo){
    case "feliz":
    alert("Felicidades está feliz!!");
    break;
    case"triste":
    alert("lo siento, estas triste");
    break;
    case"cansado":
    alert("Descansa un poco");
    break;
    case"emocionado":
    alert("Me alegro de su emoción");
    break;
    default: 
        console.warn("Por favor, introduce un valor de la lista");
}