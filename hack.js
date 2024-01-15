const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
const cartInfo = document.querySelector(".cart-info");
const totalItemsSpan = document.getElementById("total-items");
const totalCostSpan = document.getElementById("total-cost");

// Sample cart data
const cart = []; // An array to store cart items

// Function to add items to the cart
function addItemToCart(item) {
  cart.push(item);
  updateCartInfo();
}

// Function to update cart information
function updateCartInfo() {
  totalItemsSpan.textContent = cart.length;

  const totalCost = cart.reduce((total, item) => total + item.price, 0);
  totalCostSpan.textContent = `₹${totalCost}`;
}
// Initialize cart variables
let cartItemCount = 0;
let cartTotalAmount = 0;

// Function to update cart summary
function updateCartSummary() {
  const itemCountElement = document.getElementById('cartItemCount');
  const totalAmountElement = document.getElementById('cartTotalAmount');
  
  itemCountElement.textContent = cartItemCount;
  totalAmountElement.textContent = cartTotalAmount.toFixed(2); // Assuming cartTotalAmount is a floating-point number
}

// Add event listeners to "ADD TO CART" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productPrice = parseFloat(this.dataset.productPrice); // Assuming each button has a data attribute for product price
    cartItemCount++;
    cartTotalAmount += productPrice;
    updateCartSummary();
  });
});
// Your existing code here...

// Add event listener to the "Submit" button
const submitAddressButton = document.getElementById('submitAddress');
submitAddressButton.addEventListener('click', function() {
  const addressInput = document.getElementById('addressInput').value;
  if (addressInput) {
    // Process the address here, e.g., store it or use it for further actions
    alert('Address submitted: ' + addressInput);
  } else {
    alert('Please enter an address.');
  }
});

