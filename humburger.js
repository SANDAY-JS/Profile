export { humbergerBackground, menu, wholePage, headerSection };

// --------DOMs--------------//
const humbergerBackground = document.querySelector(".hamburger-background");
const menu = document.querySelector(".menu");
const wholePage = document.querySelector(".whole-page");
const headerSection = document.querySelector(".header-section");

const toPageTop = document.querySelector(".toPageTop");

// -------- Methods --------------//

//--Hamburger--//
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

//--To the Top Btn--//
const addShowClass = () => {
  if (window.pageYOffset >= 100) {
    toPageTop.classList.add("show");
  } else {
    toPageTop.classList.remove("show");
  }
};

const toTheTop = () => {
  window.scrollTo({
    top: 90,
    left: 0,
    behavior: "smooth",
  });
};

// --------  Events --------------//
function toggleNav() {
  menuOpen();
  menuClose();
}

toggleNav();

window.addEventListener("scroll", addShowClass);
toPageTop.addEventListener("click", toTheTop);

// --------- Christmas Special Update-------------//
const generate = () => {
  //Generating an ID so the flake can be removed later
  let id = "id" + Date.now(); //i.e. "id1606322064360"

  //Creating flake to be added to DOM
  const flake = document.createElement("i");
  flake.classList.add("flake");
  flake.classList.add("far");
  flake.classList.add("fa-snowflake");
  flake.classList.add(id);

  //Random positioning and animation duration
  flake.style.left = Math.random() * 100 + "%";
  flake.style.animationDuration = Math.floor(Math.random() * 5) + 1 + "s";

  //Adding flake to DOM
  headerSection.appendChild(flake);

  //Remove flake from DOM after 5 seconds
  setTimeout(function () {
    let flakeToRemove = document.querySelector(`.${id}`);
    flakeToRemove.remove();
  }, 2000);
};

//Run every 2s
setInterval(generate, 350);
