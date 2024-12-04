"Use strict"

let primerNum = Number(prompt("Inserte el primer número"));
let segundoNum = Number (prompt("Inserte el segundo número"));

if(primerNum === segundoNum){
    console.log("Son iguales")
}else if (primerNum <= segundoNum){
    console.log(primerNum+ " es menor que " + segundoNum);
}else{
    console.log(primerNum+ " es mayor que "+ segundoNum);
}
