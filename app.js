const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//toggle method used for navbar
const washroom = document.querySelector (".toilet");

links.addEventListener("click", function () {
  washroom.classList.toggle("cold");
});

