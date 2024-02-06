const onHideFilterTab = () => {
  const filterTab = document.getElementById("filter-tab");
  const currentDisplay = filterTab.style.width;
  filterTab.style.width = currentDisplay === "0px" ? "30%" : "0px";

  const programList = document.getElementById("program-list");
  programList.style.width = currentDisplay === "0px" ? "70%" : "100%";
};

const onHideFilterType = (filterType, idArrow) => {
  const filterTypeElement = document.getElementById(filterType);

  const currentDisplay = filterTypeElement.style.display;
  filterTypeElement.style.display = currentDisplay === "none" ? "flex" : "none";

  const currentArrowTransform =
    document.getElementById(idArrow).style.transform;
  document.getElementById(idArrow).style.transform =
    currentArrowTransform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
};

// LOGIN FORM
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const checkLoginForm = () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const checkEmail = emailRegex.test(email);

  if (email === "" || password === "" || !checkEmail) {
    loginBtn.style.backgroundColor = "#d3d3d3";
    loginBtn.style.cursor = "not-allowed";
    loginBtn.disabled = true;
  } else {
    loginBtn.style.backgroundColor = "#3f72af";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  }
};

checkLoginForm();

const onSubmitLoginForm = (e) => {
  e.preventDefault();
  alert("Welcome, you are logged in! HIHIHI");
};

const formElement = document.getElementById("login-form");
formElement.addEventListener("submit", onSubmitLoginForm);
