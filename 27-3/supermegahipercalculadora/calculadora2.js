"use strict";

console.log("supercalculadora2");

// Guardar l’operació (string tipus "12+3*5")
// Mostrar-la a .escrit
// Quan cliquis =, calcular-la

let operacion = "";

//pinta cada numero cada vegada que se clique

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    operacion += i;
    document.querySelector(".escrit").innerText = operacion;
  });
}

//pinta el simbol cuan vegada que se clique

const operadores = ["sumar", "restar", "multiplicar", "dividir"];
const simbolos = ["+", "-", "*", "/"];

for (let i = 0; i < operadores.length; i++) {
  document.getElementById(operadores[i]).addEventListener("click", function () {
    operacion += simbolos[i];
    document.querySelector(".escrit").innerText = operacion;
  });
}


