const checkbox=document.getElementById("checkbox");
let navBar=document.querySelector(".navbar-container");
let gridContainer=document.querySelector(".grid-container");
checkbox.addEventListener("change", () => {               document.body.classList.toggle("dark");
navBar.classList.toggle("darkred");
gridContainer.classList.toggle("container-dark");                                                       });

var hamburger=document.getElementById("hamburger");
var navUL=document.getElementById("navbar");

hamburger.addEventListener("click", () => {
                           navUL.classList.toggle("show");
                           });

var x=document.getElementById("navbutton1");
function myFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}