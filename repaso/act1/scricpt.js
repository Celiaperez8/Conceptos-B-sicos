"use strict"

let nombre = prompt("Inserte su nombre");

if (nombre ===  null) {
    nombre =  "Anónimo";
}else if(nombre === ""){   
    nombre = "User";
}

alert("Bienvenido/a, " + nombre);