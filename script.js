// Navbar
const navbarToggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");

const toggleNavbar = () => {
  const isNavbarVisible = navbar.style.display === "none" || navbar.style.display === "";

  navbar.style.display = isNavbarVisible ? "flex" : "none";
  navbarToggle.innerHTML = isNavbarVisible ? "&#10005;" : "&#9776;";
};

navbarToggle.addEventListener("click", toggleNavbar);

// Filter Tab
const filterTab = document.getElementById("filter-tab");
const programList = document.getElementById("program-list");

const hideFilterTab = () => {
  filterTab.style.width = filterTab.style.width === "0px" ? "30%" : "0px";
  programList.style.width = filterTab.style.width === "0px" ? "70%" : "100%";
};

const hideFilterType = (filterType, idArrow) => {
  const filterTypeElement = document.getElementById(filterType);
  const isHidden = filterTypeElement.style.display === "none";

  filterTypeElement.style.display = isHidden ? "flex" : "none";
  document.getElementById(idArrow).style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
};

// Sidebar
const sidebar = document.getElementById("sidebar-hamburger");
const sidebarHeader = document.getElementById("sidebar-header");
const sidebarContent = document.getElementById("sidebar-content");
const learningSidebar = document.getElementById("learning-sidebar");
const learningContent = document.getElementById("learning-content");

const toggleSidebar = () => {
  sidebar.classList.toggle("active");
  sidebarHeader.classList.toggle("hidden");
  sidebarContent.classList.toggle("hidden");
  learningSidebar.classList.toggle("hidden");
  learningContent.classList.toggle("larger");
};

const resizeOnWindow = () => {
  const windowWidth = window.innerWidth;
  navbar.style.display = windowWidth > 980 ? "flex" : "none";

  if (windowWidth < 1200) {
    sidebar.classList.remove("active");
    sidebarHeader.classList.remove("hidden");
    sidebarContent.classList.remove("hidden");
    learningSidebar.classList.remove("hidden");
    learningContent.classList.remove("larger");
  }
};

window.addEventListener("resize", resizeOnWindow);

// Content Type
const contentType = ['video-content', 'pdf-content', 'article-content'];

const changeContent = (type) => {
  contentType.forEach((content, index) => {
    const contentElement = document.getElementById(content);
    contentElement.style.display = index === type ? 'block' : 'none';

    if (content === 'video-content') {
      const videoElement = document.getElementById('video-content');
      videoElement.pause();
    }
  });
};

// Login Form
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

const onSubmitLoginForm = (e) => {
  e.preventDefault();
  alert("Welcome, you are logged in! HIHIHI");
};

const formElement = document.getElementById("login-form");
formElement.addEventListener("submit", onSubmitLoginForm);

// Initial setup
toggleNavbar();
resizeNavbarOnWindow();
checkLoginForm();
