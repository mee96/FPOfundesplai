console.log("hola calculadora");

function obtenerValores() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  return { n1, n2 };
}

function mostrarResultado(valor) {
  document.getElementById("resultado").textContent = valor;
}


document.getElementById("sumar").addEventListener("click", () => {
  const { n1, n2 } = obtenerValores();
  mostrarResultado(n1 + n2);
});

document.getElementById("restar").addEventListener("click", () => {
  const { n1, n2 } = obtenerValores();
  mostrarResultado(n1 - n2);
});

document.getElementById("multiplicar").addEventListener("click", () => {
  const { n1, n2 } = obtenerValores();
  mostrarResultado(n1 * n2);
});

document.getElementById("dividir").addEventListener("click", () => {
  const { n1, n2 } = obtenerValores();

  if (n2 === 0) {
    mostrarResultado("Nos pot divir entre 0 INDETERMINACIOOO");
    return;
  }

  mostrarResultado(n1 / n2);
});

