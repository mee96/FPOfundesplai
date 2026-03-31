'use strict';

const inputname = document.querySelector(".js-name");
const inputapellido = document.querySelector(".js-apellido");
const button = document.querySelector(".btn-submit");
const bdaydate = document.querySelector(".js-bday");
const saludo = document.querySelector(".js-saludo");


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

function handleClick(ev) {
  console.log("ha clickado");

  formData.name = inputname.value;
  formData.lastname = inputapellido.value;
  formData.birthday = bdaydate.value;

  console.log(`El nombre es: ${formData.name} ${formData.lastname} y la fecha de nacimiento es: ${formData.birthday}`);
  
  saludar(formData.name);

  localStorage.setItem("datosFormulario", JSON.stringify(formData));
}

function saludar(string) {
  saludo.innerHTML = "Hola " + string;
}

button.addEventListener("click", handleClick);

const datosGuardados = localStorage.getItem("datosFormulario");

if (datosGuardados) {
  
  const datosParseados = JSON.parse(datosGuardados);
  
  inputname.value = datosParseados.name;
  inputapellido.value = datosParseados.lastname;
  bdaydate.value = datosParseados.birthday;
  
  saludar(datosParseados.name);
}