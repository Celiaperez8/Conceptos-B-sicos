"use strict"

/* se le solicita al usuario su edad*/
let edad = Number(prompt("Inserte su edad"));

/* comprueba si es mayor o menor de edad */
if(edad<18){
    alert("Es menor de edad");
}else{
    alert("Es mayor de edad");
}
/* muestra una alerta por consola si es muy bajo o alto el valor */
if(edad<=0){
    console.warn("El valor ingresado es inualmente bajo");
}else if(edad>=130){
    console.warn("El valor ingresado el inusualmente alto");
}

