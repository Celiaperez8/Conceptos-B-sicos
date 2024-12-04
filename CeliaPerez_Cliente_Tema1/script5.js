"use strict"

/*Solicita un */
let contrasena= prompt("¿Qué tipo de contraseña quieres para tu cuenta(alta, media o baja)?");

let contrasalta = Math.floor(Math.random() * 99999)+1000;
let media = Math.floor(Math.random()* 999)+10;
let baja = Math.floor(Math.random()* 9)+1;

/* muestra la opción que selecciona el usuario*/
switch (contrasena){
    case("alta"):
    alert("Su contraseña es " + alta);
    break;

    case("media"):
    alert("Su contraseña es " + media);
    break;

    case("baja"):
    alert("Su contraseña es " + baja);
    break;

    default:
        alert("Introduce un tipo de contraseña(alta, media o baja)")
}

