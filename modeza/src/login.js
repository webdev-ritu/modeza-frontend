// DOM Elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginWrapper = document.querySelector('.login-wrapper');
const signupWrapper = document.querySelector('.signup-wrapper');

// Toggle between login and signup
showSignup.addEventListener('click', () => {
  loginWrapper.style.display = 'none';
  signupWrapper.style.display = 'block';
});

showLogin.addEventListener('click', () => {
  signupWrapper.style.display = 'none';
  loginWrapper.style.display = 'block';
});

// Function to show toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.querySelector('.toast-body').textContent = message;
  toast.style.display = 'block';

  // Automatically hide the toast after 4 seconds
  setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}

// Handle Login Form Submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulated login validation
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    showToast('Login successful!');
    setTimeout(() => {
      window.location.href = 'index.html'; // Redirect to home page
    }, 2000);
  } else {
    alert('Invalid email or password.');
  }
});

// Handle Signup Form Submission
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Save user to localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Signup successful! Please log in.');
  signupWrapper.style.display = 'none';
  loginWrapper.style.display = 'block';
});

  