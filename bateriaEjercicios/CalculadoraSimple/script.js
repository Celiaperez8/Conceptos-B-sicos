"Use strict"
 
let primernumero = Number (prompt("Inserte el primer número"));
let segundonumero = Number (prompt("Inserte el  segundo número"));

let suma = primernumero+segundonumero;


if ( isNaN (primernumero) || isNaN(segundonumero) ){
    console.log("Error, los valores ingresados no son números");
    } else {
        console.log("La suma de los dos números es: ", suma);}
