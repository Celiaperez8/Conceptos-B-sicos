"use strict"
let aleatorio = Math.floor(Math.random() *10)+1;

console.log(aleatorio);
let numero = Number (prompt("Inserte un número del 1 al 10"));

if (numero ===aleatorio){
    alert("Felicidades, acertaste!!");
}else{
    alert("Lo siento, no acertaste");
}