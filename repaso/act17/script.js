"use strict"

let precio = Number (prompt("Inserte el precio"));
let precioIva = (precio*0.21)+precio;

alert("El precio con IVA es " + precioIva.toFixed(2));