"use strict"
let primerNum = Number(prompt("Inserte el primer número"));
let segundoNum = Number (prompt("Inserte el segundo número"));

let suma = primerNum+segundoNum;

if(isNaN(primerNum) || isNaN(segundoNum)){
    console.log("Porfavor introduce valores numéricos");
}else{
    console.log("La suma de los dos valores es: " +suma);
}

