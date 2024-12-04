"use strict"
let usuario = prompt("Seleccione (piedra, papel o tijera)");
let aleatorio = Math.floor(Math.random()*opciones.length());

let opciones = (piedra, papel, tijera);


console.log(aleatorio);

if(usuario ==="piedra" && aleatorio ==="tijera"){
    alert("Gana "+usuario);
}else if (usuario ==="tijera"&& aleatorio ==="papel"){
    alert("Gana " + usuario);
}if(usuario ==="papel"&& aleatorio ==="piedra"){
    alert("Gana " + usuario);
}
 
 

