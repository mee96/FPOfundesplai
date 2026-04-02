let operacion = "";

console.log("calculadora4")





// Números
for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    operacion += i;
    document.querySelector(".escrit").innerText = operacion;
  });
}

// Operadores
const operadores = ["sumar", "restar", "multiplicar", "dividir"];
const simbolos = ["+", "-", "*", "/"];

for (let i = 0; i < operadores.length; i++) {
  document.getElementById(operadores[i]).addEventListener("click", function () {

    //si no hi ha numero al final res
    if (operacion === "") return;

    // no mes simbols si hi ha un simbol
    let ultimo = operacion[operacion.length - 1];
    if (["+", "-", "*", "/"].includes(ultimo)) return;

    operacion += simbolos[i];
    document.querySelector(".escrit").innerText = operacion;
  });
}


document.getElementById("igual").addEventListener("click", function () {

  // No se pot "=" si  lultimo es operador
  let ultimo = operacion[operacion.length - 1];
  if (["+", "-", "*", "/"].includes(ultimo) || operacion === "") {
    document.querySelector(".advertencia").innerHTML = "Falta número para completar la operación";

    return;
  }

  // Separar números y operadores
  let numeros = operacion.split(/[\+\-\*\/]/).map(Number);
  let ops = operacion.match(/[\+\-\*\/]/g) || [];

  //Control de división por 0
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "/" && numeros[i + 1] === 0) {
      document.querySelector(".advertencia").innerHTML = "No se puede dividir entre 0";
      return;
    }
  }

  // Calcular
  let resultado = numeros[0];
  for (let i = 0; i < ops.length; i++) {
    let num = numeros[i + 1];
    if (ops[i] === "+") resultado += num;
    else if (ops[i] === "-") resultado -= num;
    else if (ops[i] === "*") resultado *= num;
    else if (ops[i] === "/") resultado /= num;
  }

  document.querySelector(".resultado").innerText = resultado;
});