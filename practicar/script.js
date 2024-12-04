"use script"

let operacion = prompt("Indica que operación quieres hacer (suma, resta, división y multiplicación)");
let primerNumero = Number (prompt("Inserte el primer número"));
let segundoNumero = Number (prompt("Inserte el segundo número"));

if(isNaN(primerNumero) || isNaN(segundoNumero)){
    console.warn("Introduce valores numéricos");
}else{
let suma = primerNumero+segundoNumero;
let resta = primerNumero-segundoNumero;
let multiplicacion = primerNumero*segundoNumero;
let division = primerNumero/segundoNumero;

switch(operacion){
    case "suma":
        console.log("La suma de " + primerNumero + " y " + segundoNumero + " es " + suma);
        break;
    case "resta":
        console.log("La resta de " + primerNumero +  " y " +segundoNumero + " es "+ resta);
        break;
    case "multiplicacion":
        console.log("La multiplicacion de " +primerNumero+ " y " + segundoNumero + " es " + multiplicacion);
        break;
    case "division":
        console.log("La division de "+primerNumero + " y "+ segundoNumero + " es " + division);
        break;
    default: 
    console.warn("Operación no reconocina");
    break;
}}