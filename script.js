// CART ARRAY
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART FUNCTION
function addToCart(name, price) {
  let product = { name, price };
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// DISPLAY CART ITEMS
function loadCart() {
  let cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div>
        <p>${item.name} - ₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// SEARCH FUNCTION
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let text = products[i].innerText.toLowerCase();

    if (text.includes(input)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

// PAGE LOAD
window.onload = function () {
  loadCart();
};