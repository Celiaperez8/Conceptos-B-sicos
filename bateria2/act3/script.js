"use script"

let nombre = prompt("inserte su nombre");
let edad = Number (prompt("Inserte su edad"));
let correo = prompt("inserte su correo");

let usuario=[
    {"nombre":nombre, "edad":edad, "correo":correo}
];
console.table(usuario);