"use strict"
let aleatorio = Math.floor(Math.random() * 10) + 1;

console.log(aleatorio);
let numero = Number (prompt("Elige un número del 1 al 10"));

if(numero === aleatorio){
    alert("Adivinaste el número!!");
}else{
    alert("lo siento, fallaste");
}
