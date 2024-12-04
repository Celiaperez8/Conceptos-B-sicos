"use strict"

let aleatorio =  Math.floor(Math.random()*10)+1;

let numeroUser = Number (prompt("Elija un número del 1 al 10"));
let intentos = 3;
console.log(aleatorio);

for  (let i = 0; i<intentos; i++) {
    let numeroUser = Number (prompt("Elija un número del 1 al 10"));
if(numeroUser === aleatorio){
        alert("¡Lo has adivinado!"); i= 3;
}else{
        alert("Lo siento, has fallado");
if(i==2){
    console.warn("Has agotado los intentos");
}
}
}

