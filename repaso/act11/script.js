"use strict"

let nombre = prompt("Introduzca su nombre");
let edad = Number (prompt("Introduce su edad"));
let mail = prompt("Introduzca su mail");

let usuario = [
    {nombre: nombre, edad:edad, mail:mail}
]
console.table(usuario);