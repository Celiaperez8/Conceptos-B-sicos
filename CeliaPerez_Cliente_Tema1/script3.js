"use script"
/** Pide el peso y la altura al usuario */
let peso = Number (prompt("Inserte su peso"));
let altura = Number (prompt("Inserte su altura"));
/** Fórmula IMC */
let altura2 = altura*altura
let imc = (peso/altura2);

alert("Su Indice de Masa Corporal es "+imc);
console.info("Su peso es " +peso+"kg su altura es " + "cm. Su índice de masa corporal(IMC) es " +imc);