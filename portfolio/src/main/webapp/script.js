/* Preloader */
var preloader = document.querySelector(".preloader")
window.addEventListener("load", vanish);
function vanish() {
  preloader.classList.add("disappear");
}

/* Side Navigation Menu*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("side-nav-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("side-nav-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* Dark Mode Toggle */
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}
