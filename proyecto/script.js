"use strict"
alert("Bienvenidos!!");

let nombreUsuario = prompt("Introduce su nombre");

if(nombreUsuario ==""){
    alert("Hola, user")
}else if(nombreUsuario == null){
    alert("hola, Anónimo");

}else{
alert("Hola, " + nombreUsuario);
}