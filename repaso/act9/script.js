"use strict"

let primerNum = Number (prompt("Inserte el primer número"));
let segundoNum =  Number (prompt("Inserte el segundo número"));
let suma = primerNum + segundoNum;

if (isNaN (primerNum) || isNaN(segundoNum)){
    console.error("Error, los valores ingresados no son números");
}else{
    console.log("La suma de " + primerNum + " y " + segundoNum + " es " +suma );
}

