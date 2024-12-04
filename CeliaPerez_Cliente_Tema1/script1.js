"use strict"

/* pide al usuario que introduzca el precio total de la factura y la propina*/
let factura = Number (prompt("Indique el importe de la factura"));
let propina = Number(prompt("Indique el porcentaje de propina que desea aportar"));

/* se declara la variable para calcular el precio de la factura con propina */
let facturaTotal = ((factura*propina)/100)+factura;

/* se muestra al usuario y por consola */
alert("El importe total es " + facturaTotal);
console.log("El importe de la factura es " +factura +" y el porcentaje de propina "+ propina + "% total de " + facturaTotal);