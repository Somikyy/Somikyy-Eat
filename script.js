let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const cartButton = document.getElementById('cart-button');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((cartItem, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `${cartItem.item} - $${cartItem.price} <button class="button" onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(cartItemElement);
        totalPrice += cartItem.price;
        totalItems += 1;
    });

    totalPriceContainer.innerText = totalPrice;
    checkoutButton.disabled = cart.length === 0;
    cartButton.innerText = `Voir le panier (${totalItems} items, $${totalPrice})`;
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'block' : 'none';
}

function checkout() {
    alert("Ajouter le mode de paiement.");
}

function searchMenu() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('span').textContent.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
