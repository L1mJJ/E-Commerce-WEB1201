function selectSize(button) {
    const buttons = document.querySelectorAll('.size-selector button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  }
  function selectColor(button) {
  const buttons = document.querySelectorAll('.color-selector button');
  buttons.forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  }

  function calculatePrice() {
    const selectedButton = document.querySelector('.size-selector button.selected');
    const quantity = parseInt(document.getElementById('quantity').value);
    const result = document.getElementById('total-price');

    if (!selectedButton) {
      result.textContent = "Please select a size.";
      return;
    }

    const pricePerUnit = parseFloat(selectedButton.getAttribute('data-price'));
    const total = pricePerUnit * quantity;

    result.textContent = `Total Price: RM ${total.toFixed(2)}`;
  }