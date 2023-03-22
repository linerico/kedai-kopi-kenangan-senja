// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Hamberger-menu clicked
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click outline sidebar
const hamburger = document.querySelector("#humberger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
