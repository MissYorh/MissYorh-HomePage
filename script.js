const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close-btn");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("open");
});





const links = document.getElementById("links");
[...links.children].forEach(i => {
  i.addEventListener("click", () => {
    burgerMenu.classList.remove("open");
  });
});