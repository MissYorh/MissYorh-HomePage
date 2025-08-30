/* Show Code */
const codeBtn = document.getElementById("show-code");
const code = document.getElementById("code-menu");
const closeBtn = document.getElementById("close-code");

if (codeBtn && closeBtn) {
  codeBtn.addEventListener("click", () => {
    code.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    code.style.display = "none";
  });
}
/* /Show Code */





/* Resize Board */
const board = document.getElementById('board');
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const joystick = document.getElementById('joystick');
const text = document.getElementById("text");

function resizeBoard() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  if (width > height) {
    board.style.maxWidth = "auto";
    board.style.maxHeight = height * 0.8 + "px";
  } else if (height > width) {
    board.style.maxWidth = width;
    board.style.maxHeight = height * 0.8 + "px";
  }

  text.textContent = `${width}px, ${height}px`;
}

window.addEventListener("resize", resizeBoard);
resizeBoard();
/* /Resize Board */





/* Move */
const btns = joystick.getElementsByTagName("button");

let x = 50;
let y = 50;
ctx.fillStyle = 'skyblue';
ctx.fillRect(x, y, 100, 100);

[...btns].forEach((btn, i) => {
  btn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const press = setInterval(() => {
      move(i)
    }, 1);
    
    btn.addEventListener("touchend", () => {
      clearInterval(press);
    });
  });
});

function move(tlrb) {
  switch (tlrb) {
    case 0:   // Top
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, y, 100, 100);
      y -= 10;
      ctx.fillStyle = 'skyblue';
      ctx.fillRect(x, y, 100, 100);
      break;
    case 1:   // Left
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, y, 100, 100);
      x -= 10;
      ctx.fillStyle = 'skyblue';
      ctx.fillRect(x, y, 100, 100);
      break;
    case 2:   // Right
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, y, 100, 100);
      x += 10;
      ctx.fillStyle = 'skyblue';
      ctx.fillRect(x, y, 100, 100);
      break;
    case 3:   // Bottom
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, y, 100, 100);
      y += 10;
      ctx.fillStyle = 'skyblue';
      ctx.fillRect(x, y, 100, 100);
      break;
  }
}

function reset() {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(x, y, 100, 100);
  x = 950;
  y = 1450;
  ctx.fillStyle = 'skyblue';
  ctx.fillRect(x, y, 100, 100);
}
/* /Move */