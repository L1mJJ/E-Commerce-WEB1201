function loadCheckoutCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("checkout-content");
  let subtotal = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("subtotal").textContent = "RM0.00";
    document.getElementById("total").textContent = "RM0.00";
    return;
  }

  container.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = item.unitPrice * item.quantity;
    subtotal += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <div class="cart-details">
        <strong>${item.productName}</strong><br>
        Quantity: ${item.quantity}<br>
        Price: RM${item.unitPrice.toFixed(2)}
      </div>
      <div class="price">RM${itemTotal.toFixed(2)}</div>
    `;
    container.appendChild(itemDiv);
  });

  document.getElementById("subtotal").textContent = `RM${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `RM${(subtotal + 5).toFixed(2)}`;
}

function placeOrder() {
  const name = document.getElementById("fullname").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^\d+$/;

  if (!name || !address || !phone) {
    alert("Please fill in all shipping details.");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("Name must contain only letters and spaces.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Phone number must contain digits only.");
    return;
  }

  alert("Order placed successfully! Thank you.");
  localStorage.removeItem("cart");
  window.location.reload();
}

loadCheckoutCart();