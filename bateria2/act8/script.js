"use script"

let nombre = prompt("Inserte su nombre");
let hora = Number (prompt("Inserte su hora en 24h"));
if(hora<=12){
    alert("Buenos días "+nombre);
}else if(hora<=18){
    alert("Buenas tardes " +nombre);
}else{
    alert("Buenas noches " +nombre);
}