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

const onEmailInput = () => {
  const emailErrorIdElement = document.getElementById("email-error");
  const email = emailInput.value;

  if (email === "") {
    emailInput.classList.add("error");
    emailErrorIdElement.textContent = "Email tidak boleh kosong";
  } else if (!emailRegex.test(email)) {
    emailInput.classList.add("error");
    emailErrorIdElement.textContent = "Email tidak valid";
  } else {
    emailInput.classList.remove("error");
    emailErrorIdElement.innerHTML = "&nbsp;";
  }
};
emailInput.addEventListener("input", onEmailInput);

const onPasswordInput = () => {
  const passwordErrorIdElement = document.getElementById("password-error");
  const password = passwordInput.value;

  if (password === "") {
    passwordInput.classList.add("error");
    passwordErrorIdElement.textContent = "Kata sandi tidak boleh kosong";
  } else {
    passwordInput.classList.remove("error");
    passwordErrorIdElement.innerHTML = "&nbsp;";
  }
};
passwordInput.addEventListener("input", onPasswordInput);

const onSubmitLoginForm = (e) => {
  e.preventDefault();
  alert("Welcome, you are logged in! HIHIHI");
};

const formElement = document.getElementById("login-form");
formElement.addEventListener("submit", onSubmitLoginForm);

checkLoginForm();
