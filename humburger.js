export { humbergerBackground, menu, wholePage, headerSection };

const humbergerBackground = document.querySelector(".hamburger-background");
const menu = document.querySelector(".menu");
const wholePage = document.querySelector(".whole-page");
const headerSection = document.querySelector(".header-section");

function toggleNav() {
  // Humburger Click -> add classLists
  humbergerBackground.addEventListener("click", () => {
    wholePage.classList.toggle("transparent");
    headerSection.classList.toggle("click");
  });
  // remove classLists when you touch other spaces.
  wholePage.addEventListener("click", () => {
    wholePage.classList.remove("transparent");
    headerSection.classList.remove("click");
  });
}

toggleNav();
