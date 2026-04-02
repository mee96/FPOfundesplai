console.log("  konichiwa sekai kakkoi");
const form = document.getElementById("productForm");
const productList = document.getElementById("productList");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const descrInput = document.getElementById("descr");
    const product = {
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
    const deleteBtn = tarjeta.querySelector(".eliminar");
    deleteBtn.addEventListener("click", () => {
        tarjeta.remove();
    });
    productList.appendChild(tarjeta);
    form.reset();
});
export {};
//# sourceMappingURL=main.js.map