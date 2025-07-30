function showSignIn() {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab')[0].classList.add('active');
    document.getElementById('signInForm').classList.add('active');
    document.getElementById('signUpForm').classList.remove('active');
}

function showSignUp() {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab')[1].classList.add('active');
    document.getElementById('signUpForm').classList.add('active');
    document.getElementById('signInForm').classList.remove('active');
}

function isValidName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}

function restrictToAlphabets(inputElement) {
    inputElement.addEventListener('input', function(e) {
      
        const originalValue = this.value;
        const cleanedValue = this.value.replace(/[^a-zA-Z\s]/g, '');
        
      
        if (originalValue !== cleanedValue) {
            alert('Only alphabetic characters are allowed in name fields!');
            this.value = cleanedValue;
        }
    });

    inputElement.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/[a-zA-Z\s]/.test(char)) {
            alert('Only alphabetic characters are allowed in name fields!');
            e.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('signUpFirstName');
    const lastNameInput = document.getElementById('signUpLastName');
    
    restrictToAlphabets(firstNameInput);
    restrictToAlphabets(lastNameInput);
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign In form submitted!');
    this.reset();
});

document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('signUpFirstName').value.trim();
    const lastName = document.getElementById('signUpLastName').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!isValidName(firstName)) {
        alert('First name can only contain alphabetic characters and spaces.');
        return;
    }
    
    if (!isValidName(lastName)) {
        alert('Last name can only contain alphabetic characters and spaces.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        document.getElementById('confirmPassword').value = '';
        return;
    }
    alert('Sign Up form submitted successfully!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const passwordInput = document.getElementById(targetId);
      const isPassword = passwordInput.type === 'password';
      
      passwordInput.type = isPassword ? 'text' : 'password';
      this.textContent = isPassword ? 'Show' : 'Hide';
      this.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });
});