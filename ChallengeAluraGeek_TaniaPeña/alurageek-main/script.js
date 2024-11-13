document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.add-product-form');
    const productContainer = document.querySelector('.products-section .product-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capturar los valores del formulario
        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productImage = document.getElementById('productImage').value;

        // Crear elementos HTML para el nuevo producto
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const img = document.createElement('img');
        img.src = productImage;
        img.alt = productName;

        const h2 = document.createElement('h2');
        h2.textContent = productName;

        const p = document.createElement('p');
        p.textContent = `$ ${productPrice.toFixed(2)}`;

        // Agregar elementos al producto
        productItem.appendChild(img);
        productItem.appendChild(h2);
        productItem.appendChild(p);

        // Agregar el nuevo producto al contenedor de productos
        productContainer.appendChild(productItem);

        // Limpiar el formulario
        form.reset();
    });
});
