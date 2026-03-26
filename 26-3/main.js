"use strict";

console.log("Konichiwa isekai");
// EJERCICIO 1
// Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta” en palabras con mayúscula “miCadenaCorta”.

// Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula
 


function camelize(str) {
    return str
        .split('-')
        .map(
        
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
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