
console.log( "  konichiwa sekai kakkoi" ); 
import type { Product } from "./interface";

const form = document.getElementById("productForm") as HTMLFormElement;
const productList = document.getElementById("productList") as HTMLDivElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const priceInput = document.getElementById("price") as HTMLInputElement;
  const descrInput = document.getElementById("descr") as HTMLInputElement;

  const product: Product = {
    name: nameInput.value,
    price: Number(priceInput.value),
    descr: descrInput.value,
  };
   console.log(product);

  
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("product-card");

  tarjeta.innerHTML = `
    <h3>${product.name}</h3>
    <p><strong>${product.price}€</strong></p>
    <p>${product.descr}</p>
    <button class="eliminar">🗑️</button>
  `;

  
  const deleteBtn = tarjeta.querySelector(".eliminar") as HTMLButtonElement;
  deleteBtn.addEventListener("click", () => {
    tarjeta.remove();
  });

  
  productList.appendChild(tarjeta);

  
  form.reset();
});