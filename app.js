// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

const read = document.querySelector (".nav-toggle");
const washroom = document.querySelector (".toilet");

read.addEventListener("onmouseover", function () {
  washroom.classList.toggle(".cold");
});

read.addEventListener("onmouseover", function () {
  washroom.classList.toggle(".warm");
});

read.addEventListener("onmouseover", function () {
  washroom.classList.toggle(".hot");
});

read.addEventListener("onmouseover", function () {
  washroom.classList.toggle(".boil");
});

