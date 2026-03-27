let operacion = "";

// pinta mis numeritos
for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    operacion += i;
    document.querySelector(".escrit").innerText = operacion;
  });
}

// pinta l'operador
const operadores = ["sumar", "restar", "multiplicar", "dividir"];
const simbolos = ["+", "-", "*", "/"];

for (let i = 0; i < operadores.length; i++) {
  document.getElementById(operadores[i]).addEventListener("click", function () {
    operacion += simbolos[i];
    document.querySelector(".escrit").innerText = operacion;
  });
}

// cuan aprete a = me pinte el resultat y lo faigue de cada operador

document.getElementById("igual").addEventListener("click", function () {

  let numeros = operacion.split(/[\+\-\*\/]/).map(Number);
  console.log('numeros entre operacion' + operacion.split(/[\+\-\*\/]/).map(Number));

  let ops = operacion.match(/[\+\-\*\/]/g);
  console.log('el simbol es:' + operacion.match(/[\+\-\*\/]/g))

  let resultado = numeros[0];

  for (let i = 0; i < ops.length; i++) {
    let num = numeros[i + 1];

    if (ops[i] === "+") {
      resultado += num;
    } else if (ops[i] === "-") {
      resultado -= num;
    } else if (ops[i] === "*") {
      resultado *= num;
    } else if (ops[i] === "/") {
      resultado /= num;
    }
  }

  document.querySelector(".resultado").innerText = resultado;
});


// que no se divix entre 0, que no se sumen operandos, si lultim insertat e sun operador no se pot psoar unaltre operador, si lultim es un operando no puc donar al igual perqe em falt anumero, y que el primer string sigue un numero 

