"use stript"
let maxIntentos = 3;
let intentos = 0;
let aleatorio = Math.floor(Math.random() * 10) + 1;

console.log(aleatorio);
let numero = Number (prompt("Ingrese un número del 1 al 10"));

if (numero === aleatorio){
    alert("Felicidades adivinaste el número");
}

