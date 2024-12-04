"Use strict"

let nombre = prompt("Inserte su nombre");
let hora = prompt("Hora del día con formato:00");

if(hora <= 12 ){
    alert("Buenos días "+nombre);
}else if (hora <= 18){
    alert("Buenas tardes "+nombre);
}else{
    alert("Buenas noches " +  nombre);
}
