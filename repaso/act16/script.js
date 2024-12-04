"use strict"

let nombre = prompt("Inserte su nombre");
let hora = Number (prompt("Indique la hora del día en formato 24h"));

if (hora<=12){
    alert("Buenos días "+ nombre);
}else if(hora<=18){
    alert("buenas tardes "+ nombre);
}else{
    alert("Buenas noches " + nombre);
}