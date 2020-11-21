let title = document.querySelector(".nom");
let curs = document.querySelector(".cursor");
let pic = document.querySelector(".pic");

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

pic.addEventListener("mouseover", difference);

function difference() {
  curs.style.transform = "scale(1.5)";
}
