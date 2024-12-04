"use strict"

let primernumero =  prompt("Ingrese el primer número");
let segundonumero = prompt("Introduce el segundo número");

primernumero = Number(primernumero);
segundonumero = Number(segundonumero);



if (isNaN(primernumero) || isNaN(segundonumero)){
    console.error("Introduce solo números");
}else{
    let suma=primernumero+segundonumero
    console.log("La suma de los dos números es: " + suma);
}
