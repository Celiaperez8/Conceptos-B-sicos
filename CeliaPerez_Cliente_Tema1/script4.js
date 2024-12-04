"use strict"
/*pide por consola la temperatura de cada ciudad */
let ciudad1 = prompt("Inserte la temperatura de la ciudad 1");
let ciudad2 = prompt("Inserte la temperatura de la ciudad 2");
let ciudad3 = prompt("Inserte la temperatura de la ciudad 3");
let ciudad4 = prompt("Inserte la temperatura de la ciudad 4");
let ciudad5 = prompt("Inserte la temperatura de la ciudad 5");

/** Genera la tabla */
let ciudad= [
    {"Ciudad 1": ciudad1, 
     "Ciudad 2": ciudad2, 
     "Ciudad 3": ciudad3, 
     "Ciudad 4": ciudad4, 
     "Ciudad 5": ciudad5}
];
console.table(ciudad);
