"use strict"

let aleatorio = Math.floor(Math.random()*10)+1;

let  numero = Number (prompt("Introduce un número del 1 al 10 "));
let intentos = 3;
console.log(aleatorio)

for(let i=0; i<intentos; i++){
    let numero = Number (prompt("Inserte un número aleatorio del 1 al 10"));
if(numero===aleatorio){
    alert("Felicidades has acertado el número aleatorio");i=3;
}else{
    alert("Lo siento lo has fallado");
if(i==2){
    ("has agotado los intentos");
}
}
}