"Use strict"

let aleatorio = Math.floor(Math.random() * 10) + 1;


let numero = Number (prompt("Elija un número del 1 al 10"));
let intentos = 3;
console.log(aleatorio);


for(let i= 0; i<intentos; i++){
    let numero = Number (prompt("Elija un número del 1 al 10"));
if(numero === aleatorio){
    alert("Has acertado"); i=3;
}else{
    alert("Has fallado");
if(i==2) {
    console.warn("Has agotado los intentos");
}
}
}

  


