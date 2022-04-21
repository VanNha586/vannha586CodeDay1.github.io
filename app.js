const bar = document.querySelector(".icon-bar");
const navMenu = document.getElementById("nav");

bar.onclick = function () {
  navMenu.classList.toggle("toggle");
};
