
const button = document.getElementById('loadBtn');
const container = document.getElementById('productContainer');

button.addEventListener('click', () => {
  
  container.innerHTML = ''; 

  
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      
      const topThree = data.products.slice(26, 29);
      console.log('Productes carregats:', topThree);

      topThree.forEach(product => {
    
        const box = document.createElement('div');
        box.className = 'product-box';
        const discountRounded = Math.round(product.discountPercentage);

        box.innerHTML = `
          <div class="discount-badge">-${discountRounded}%</div>
          
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p class="price">$${product.price}</p>
          
        `;

        container.appendChild(box);
      });
    })
    .catch(err => {
      console.error('Error al carregar productes:', err);
      container.textContent = 'Opps! S\'ha produït un error al carregar els productes.';
    });
});