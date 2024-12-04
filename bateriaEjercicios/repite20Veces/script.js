"Use strict"


let count = 0;
for  (let i = 0; i<20; i++) {
    let respuesta = prompt("¿Acepta las condiciones de la oferta?");

    if(respuesta === "si"){
        count++;
    }
}

alert("Has acertado las condiciones " + count +  " veces");

