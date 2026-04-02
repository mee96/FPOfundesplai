"use strict";

console.log("supercalculadora");

// Guardar l’operació (string tipus "12+3*5")
// Mostrar-la a .escrit
// Quan cliquis =, calcular-la

//Cada vez que clique, se pinte en .escrit cada cosa que clique


const pantalla = document.querySelector('.escrit');
const resultado = document.querySelector('.resultado');

let operacion = "";

// Quan cliques qualsevol botó
//.eval() fa les operacions
document.querySelectorAll("button").forEach(boton => {
  boton.onclick = () => {

    const valor = boton.textContent;

    if (valor === "=") {
      resultado.textContent = eval(operacion);
    } else {
      operacion += valor;
      pantalla.textContent = operacion;
    }

  };
});


