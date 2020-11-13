export { humbergerBackground, menu, wholePage, headerSection };

// DOM
const humbergerBackground = document.querySelector(".hamburger-background");
const menu = document.querySelector(".menu");
const wholePage = document.querySelector(".whole-page");
const headerSection = document.querySelector(".header-section");

// Methods
const menuOpen = () => {
  // Humburger Click -> add classLists
  humbergerBackground.addEventListener("click", () => {
    wholePage.classList.toggle("transparent");
    headerSection.classList.toggle("click");
  });
};
const menuClose = () => {
  // remove classLists when you touch other spaces.
  wholePage.addEventListener("click", () => {
    wholePage.classList.remove("transparent");
    headerSection.classList.remove("click");
  });
};

// Events
function toggleNav() {
  menuOpen();
  menuClose();
}

toggleNav();
