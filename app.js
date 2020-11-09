// export { humbergerBackground, menu, wholePage, headerSection, toggleNav };

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

// Copied
let slideIndex = 0;

function carousel() {
  let i;
  let x = document.getElementsByClassName("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1; //reset
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3500); // Change image every 2 seconds
}

carousel();
