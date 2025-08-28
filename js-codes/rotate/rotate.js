/* Show Code */
const codeBtn = document.getElementById("show-code");
const code = document.getElementById("code-menu");
const closeBtn = document.getElementById("close-code");

codeBtn.addEventListener("click", () => {
  code.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  code.style.display = "none";
});
/* /Show Code */





const widthTXT = document.getElementById("width-txt");
const heightTXT = document.getElementById("height-txt");
  
function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  widthTXT.textContent = `width = ${width}px`;
  heightTXT.textContent = `height = ${height}px`;
}
window.addEventListener("resize", resize);
resize();