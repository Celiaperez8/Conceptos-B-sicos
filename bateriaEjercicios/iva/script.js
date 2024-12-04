"Use strict"

let precio = Number (prompt("Introduce el precio y calcularemos el final 21% IVA"));

let iva = 0.21;

let precioFinal = (precio*iva) + precio;

alert("El precio final será " + precioFinal.toFixed(2));