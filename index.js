// selectors
let menu = document.querySelector(".menu");
let nav = document.querySelectorAll("li");
let ul = document.querySelectorAll("ul");
let navbar = document.querySelector("nav");

let title = document.querySelector(".nom");
let curs = document.querySelector(".cursor");
// let pic = document.querySelector("img");

// let light = document.querySelector(".light");
// let dark = document.querySelector(".dark");

let check = document.querySelector(".check");
let epiph = check.querySelector("video");
let mywork = check.querySelector(".myworks");

// event listeners
menu.addEventListener("click", dropdown);
navbar.addEventListener("mouseleave", dropup);
navbar.addEventListener("mouseenter", dropdown);
// light.addEventListener("click", lighten);
// dark.addEventListener("click", darken);

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = x - 22 + "px";
  curs.style.top = y - 22 + "px";
});

document.addEventListener("mouseleave", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = x - 22 + "px";
  curs.style.top = y - 22 + "px";
});

// pic.addEventListener("mouseover", difference);
// pic.addEventListener("mouseout", indifference);
// functions

function dropdown() {
  nav[0].style.visibility = "visible";
  nav[1].style.visibility = "visible";
  nav[2].style.visibility = "visible";
}

function dropup() {
  nav[0].style.visibility = "hidden";
  nav[1].style.visibility = "hidden";
  nav[2].style.visibility = "hidden";
}

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 1200,
  triggerElement: check,
  triggerHook: 0,
})
  .setPin(check)
  .addTo(controller);

scene.on("enter", (e) => {
  epiph.play();
  console.log(check.scrollPos);
});

scene.on("change", (e) => {
  epiph.pause();
});
