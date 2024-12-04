"use strict"

let anyoNacimiento = Number (prompt("Indica su año de nacimiento"));
let edad = 2050-anyoNacimiento;
let anyoActual = new Date().getFullYear();

alert(edad);

console.log("Si fuera 2050 su edad sería " + edad);
console.info("Ahora mismo estamos en el año " + anyoActual );