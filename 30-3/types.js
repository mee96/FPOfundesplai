'use strict';

const inputname = document.querySelector(".js-name")
const inputapellido = document.querySelector(".js-apellido")
const button = document.querySelector(".btn-submit")
const bdaydate =document.querySelector(".js-bday")
const saludo = document.querySelector(".js-saludo")

function handleClick (ev){
    console.log("ha clickado")

    const name = inputname.value
    const apellido = inputapellido.value
    const cumple = bdaydate.value
    console.log(`El nombre es: ${name} ${apellido} y la fecha de nacimiento es: ${cumple}`);
    saludar(name);   
    localStorage.setItem("nombre",name)
}

function saludar (string){
    saludo.innerHTML = ("Hola " + string)
}

button.addEventListener("click" , handleClick)

const nombreGuardado = localStorage.getItem("nombre");

if (nombreGuardado) {
    inputname.value = nombreGuardado;
     saludar(nombreGuardado)
}



// -------objeto---------


const formData = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  birthday: "",
  checkbox1: false,
  checkbox2: false,
  description: ""
};