"Use strict"
let nacimiento = Number (prompt("Inserte su año de nacimiento"));
let edad = 2050 - nacimiento;
let anyo = new Date().getFullYear();
alert(edad);

console.log("Actualmente usted tiene " + edad +" es la resta de 2050 a su año de nacimiento.");

console.info("El año actual es "  + anyo);
