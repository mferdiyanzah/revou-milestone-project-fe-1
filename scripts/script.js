// Navbar
const navbarToggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");

const toggleNavbar = () => {
  const isNavbarVisible =
    navbar.style.display === "none" || navbar.style.display === "";

  navbar.style.display = isNavbarVisible ? "flex" : "none";
  navbarToggle.innerHTML = isNavbarVisible ? "&#10005;" : "&#9776;";
};

navbarToggle.addEventListener("click", toggleNavbar);

// Sidebar
const hideTopic = (containerId, idArrow) => {
  const filterTypeElement = document.getElementById(containerId);
  filterTypeElement.classList.toggle("hidden");

  const arrowId = document.getElementById(idArrow);
  arrowId.classList.toggle("rotate");
};

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
let currentContentType = 0;

const contentType = [
  {
    id: "video-content",
    type: "video",
    done: false,
  },
  {
    id: "article-content",
    type: "article",
    done: false,
  },
  {
    id: "pdf-content",
    type: "pdf",
    done: false,
  },
];

const changeContent = (type) => {
  const currentCheckbox = document.getElementById(
    `topic-${currentContentType + 1}`
  );
  currentCheckbox.checked = true;

  const currentTopicTitle = document.getElementById(
    `topic-title-${currentContentType + 1}`
  );
  currentTopicTitle.classList.remove("active");

  const nextTopicTitle = document.getElementById(`topic-title-${type + 1}`);
  nextTopicTitle.classList.add("active");
  currentContentType = type;

  contentType.forEach((content, index) => {
    const contentElement = document.getElementById(content.id);
    contentElement.style.display = index === type ? "block" : "none";

    if (content === "video-content") {
      const videoElement = document.getElementById("video-content");
      videoElement.pause();
    }
  });
};
