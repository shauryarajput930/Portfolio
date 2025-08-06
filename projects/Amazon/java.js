
const cartTotal = document.getElementById('cartTotal');
const buttons = document.querySelectorAll('#cart');
const cartItems = document.querySelectorAll('.cart-item');
const cartItemPrices = document.querySelectorAll('.cart-item-price');   
const cartItemQuantities = document.querySelectorAll('.cart-item-quantity');
const cartItemTotals = document.querySelectorAll('.cart-item-total');

cart.forEach(cart => {
  cart.addEventListener('click', () => {
     Pushcart(cart);
  });
});


// Functionality for dynamic cart updates can be added here
// For example, updating the total price or removing items

function updateCartTotal() {
    // Example: Update the cart total dynamically
    const cartTotal = document.getElementById('cartTotal');
    cartTotal.textContent = '₹7,834.00'; // This can be dynamic based on cart items
}

// Example: Add event listeners for buttons
document.querySelectorAll('.item-actions button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Action: ${button.textContent}`);
    });
});

// Initialize cart total
updateCartTotal();