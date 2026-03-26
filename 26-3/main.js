"use strict";

// https://es.javascript.info/array-methods#resumen

 console.log("Konichiwa isekai");
// EJERCICIO 1
// Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta” en palabras con mayúscula “miCadenaCorta”.

// Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula
 


function camelize(str) {
    return str
        .split('-')
        .map(
        
            (paraula, index) => index === 0 ? paraula : paraula[0].toUpperCase() + paraula.slice(1)
        )
        .join('');
}
console.log(camelize("hola-que-tal")); 



//Ejercicio 2

// Escribe una función filterRange(arr, a, b) que obtenga un array arr, busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.

// La función no debe modificar el array. Debe devolver un nuevo array.

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); 

console.log ( arr ); 



//Ejercicio 3
// Escribe una función filterRangeInPlace(arr, a, b) que obtenga un array arr y remueva del mismo todos los valores excepto aquellos que se encuentran entre a y b. El test es: a ≤ arr[i] ≤ b.

// La función solo debe modificar el array. No debe devolver nada.

function filterRangeInPlace(arrr, a, b) {
    for (let i = arrr.length - 1; i >= 0; i--) {
        if (arrr[i] < a || arrr[i] > b) {
            arrr.splice(i, 1);
        }
    }
}
let arrr = [5, 3, 8, 1];

filterRangeInPlace(arrr, 1, 4); 

console.log( arrr ); // [3, 1]


// ejercicio 4
// Ordenar en orden decreciente
// El método .sort() por defecto ordena los elementos como cadenas de texto (strings), lo cual daría errores con números negativos o cifras de varios dígitos. Por eso usamos una función de comparación:

let array = [5, 2, 1, -10, 8];
array.sort((a, b) => b - a);
console.log( array ); // 8, 5, 2, 1, -10


//ejercicio 5
// Copia y ordena un array
// Supongamos que tenemos un array orden. Nos gustaría tener una copia ordenada del mismo, pero mantener orden sin modificar.
// Crea una función copySorted(orden) que devuelva esa copia.