'use strict';

const inputname = document.querySelector(".js-name")
const button = document.querySelector(".btn-submit")

function handleClick (ev){
    console.log("ha clickado")

    const name = inputname.value
    console.log(name);
}

button.addEventListener("click" , handleClick)