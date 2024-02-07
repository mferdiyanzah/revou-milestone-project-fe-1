// Login Form
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const disableLoginButton = () => {
  loginBtn.style.backgroundColor = "#d3d3d3";
  loginBtn.style.cursor = "not-allowed";
  loginBtn.disabled = true;
};

const enableLoginButton = () => {
  loginBtn.style.backgroundColor = "#3f72af";
  loginBtn.style.cursor = "pointer";
  loginBtn.disabled = false;
};

const checkLoginForm = () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const isValidEmail = emailRegex.test(email);

  if (email === "" || password === "" || !isValidEmail) {
    disableLoginButton();
  } else {
    enableLoginButton();
  }
};

const onSubmitLoginForm = (e) => {
  e.preventDefault();
  alert("Welcome, you are logged in! HIHIHI");
};

const formElement = document.getElementById("login-form");
formElement.addEventListener("submit", onSubmitLoginForm);

checkLoginForm();
