function validateForm() {
  let valid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const namePattern = /^[A-Za-z\s]+$/; 
  if (!name) {
    document.getElementById("nameError").innerText = "Please enter your name.";
    valid = false;
  } else if (!namePattern.test(name)) {
    document.getElementById("nameError").innerText = "Name can only contain letters and spaces.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById("emailError").innerText = "Please enter your email.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Please enter a valid email address.";
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
    valid = false;
  }
  return valid;
}

document.getElementById("yourFormId").addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});