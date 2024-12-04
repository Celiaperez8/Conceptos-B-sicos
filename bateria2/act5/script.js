"use strict"

let anyoNacimiento = Number(prompt("inserte su año de nacimiento"));
let anyo = 2050-anyoNacimiento;
let anyoActual = new Date().getFullYear;

alert("usted tendrá en 2050: " +anyo +" años.");
console.info(anyoActual);