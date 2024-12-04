"use strict"

let nombre = prompt("Inserte su nombre");
let años = Number (prompt("Inserte su edad"));
let correo = prompt("Inserte su correo");

let usuario = [
    {"nombre": nombre, "edad": años, "email": correo },

];

console.table(usuario);

