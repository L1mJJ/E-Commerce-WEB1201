 function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-content");

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    let table = `
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Size</th>
            <th>Color</th>
            <th>Quantity</th>
            <th>Unit Price (RM)</th>
            <th>Total Price (RM)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
    `;

    cart.forEach((item, index) => {
  table += `
    <tr>
      <td>${item.productName}</td>
      <td>${item.size}</td>
      <td>${item.color || '-'}</td> <!-- NEW -->
      <td>${item.quantity}</td>
      <td>${item.unitPrice.toFixed(2)}</td>
      <td>${item.totalPrice.toFixed(2)}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
    </tr>
  `;
});


    table += `
        </tbody>
      </table>
    `;

    cartContainer.innerHTML = table;
  }

  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
  }
  loadCart();