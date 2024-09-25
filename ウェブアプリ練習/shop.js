document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const products = [
        { name: '商品1', price: 1000, image: 'images/product1.jpg' },
        { name: '商品2', price: 2000, image: 'images/product2.jpg' },
        { name: '商品3', price: 3000, image: 'images/product3.jpg' }
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        const productPrice = document.createElement('p');
        productPrice.textContent = `¥${product.price}`;
        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productList.appendChild(productItem);
    });
});
