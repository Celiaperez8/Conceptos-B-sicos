"use strict" 

let frase = prompt("Introduce una frase y el programa te dirá cuantas palabras has usado");
let contarPalabras = frase.split(" ");

alert("La frase tiene " + contarPalabras.length + " palabras.");