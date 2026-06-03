// Ejercicio D1 - Acceso a un sistema
let usuario = "admin";
let contrasena = "1234";

if (usuario === "admin" && contrasena === "1234") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

//Ejercicio D2 – Precio de entradas al cine
let edad = 15;

if (edad < 12) {
  console.log("Entrada infantil: $5.000");
} else if (edad <= 17) {
  console.log("Entrada juvenil: $8.000");
} else {
  console.log("Entrada adulto: $10.000");
}

//Ejercicio D3 – Permiso de conducción
let edad = 20;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("Puede conducir");
} else {
  console.log("No puede conducir");
}

