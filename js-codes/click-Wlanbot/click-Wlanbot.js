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





/* Timer */
const timer = document.getElementById("time");

let countUp;
function startCountUp() {
  let ml = 0;
  let sc = 0;
  let mn = 0;
  let hr = 0;
  let dy = 0;

  countUp = setInterval(function () {
    ml += 1;

    if (ml >= 100) {
      sc += 1;
      ml = 0;
    }

    if (sc >= 60) {
      mn += 1;
      sc = 0;
    }

    if (mn >= 60) {
      hr += 1;
      mn = 0;
    }

    if (hr >= 24) {
      dy += 1;
      hr = 0;
    }


    const p = (n, len = 2) => String(n).padStart(len, '0');


    let text = '';
    if (dy > 0) {
      text = `Time : ${p(dy)}::${p(hr)}:${p(mn)}:${p(sc)}:${p(ml)}`;
    } else if (hr > 0) {
      text = `Time : ${p(hr)}:${p(mn)}:${p(sc)}:${p(ml)}`;
    } else if (mn > 0) {
      text = `Time : ${p(mn)}:${p(sc)}:${p(ml)}`;
    } else if (sc > 0) {
      text = `Time : ${p(sc)}:${p(ml)}`;
    } else if (ml >= 0) {
      text = `Time : 00:${p(ml)}`;
    }

    timer.textContent = text;
  }, 10);
}
/* /Timer */





/* Difficulty */
const difficulty = document.getElementById("difficulty");
const easyBtn = document.getElementById("easy");
const normalBtn = document.getElementById("normal");
const hardBtn = document.getElementById("hard");
const nightmareBtn = document.getElementById("nightmare");
let speed = 400;

function easy() {
  speed = 800;
  easyBtn.classList.add("select");
  normalBtn.classList.remove("select");
  hardBtn.classList.remove("select");
  nightmareBtn.classList.remove("select");
}

function normal() {
  speed = 400;
  easyBtn.classList.remove("select");
  normalBtn.classList.add("select");
  hardBtn.classList.remove("select");
  nightmareBtn.classList.remove("select");
}

function hard() {
  speed = 200;
  easyBtn.classList.remove("select");
  normalBtn.classList.remove("select");
  hardBtn.classList.add("select");
  nightmareBtn.classList.remove("select");
}

function nightmare() {
  speed = 100;
  easyBtn.classList.remove("select");
  normalBtn.classList.remove("select");
  hardBtn.classList.remove("select");
  nightmareBtn.classList.add("select");
}
/* /Difficulty */





/* Game Over */
function gameOver() { 
  let block = 0;
  for (let i = 0; i < wlanImgs.length; i++) {
    if (getComputedStyle(wlanImgs[i]).display === "block") {
      block++;
    }
  }
  
  if (block == 9) {
    clearInterval(countUp);
    clearInterval(addImg);
    startBtn.textContent = "Try Again";
    start.firstElementChild.textContent = "Game Over!";
    setTimeout(() => {
      reset();
    }, 200);  
  }
}
/* /Game Over */





/* RandomImg */
const wlanImgs = document.getElementsByClassName("imgs");

let addImg;
function randomImg() {
  addImg = setInterval(() => {
    let picknone = [];
    for (let j = 0; j < wlanImgs.length; j++) {
      if (getComputedStyle(wlanImgs[j]).display === "none") {
        picknone.push(j);
      }
    }
    
    let randomIndex = Math.floor(Math.random() * picknone.length);
    let aa = picknone[randomIndex];
    
    wlanImgs[aa].style.display = "block";

    gameOver();
  }, speed);
};
/* /RandomImg */





/* ClickImg */
const score = document.getElementById("score");

let point = 0;
[...wlanImgs].forEach(wlanImg => {
  wlanImg.addEventListener('click', () => {
    wlanImg.src = "../Wlanbot-Invert.png";
    setTimeout(() => {
      wlanImg.style.display = "none";
      wlanImg.src = "../Wlanbot.png";
    }, 200);

    point++;
    score.textContent = "Score : " + point;
  });
});
/* /ClickImg */





/* Start */
const start = document.getElementById("start");
const startBtn = document.getElementById("start-btn");
const countDown = document.getElementById("start-count-down");

function startGame() {
  difficulty.style.display = "none";
  start.style.display = "none";
  countDown.style.display = "block";

  let num = 2;
  const startCountDown = setInterval(() => {
    countDown.textContent = num;
    num--;
  }, 1000);

  setTimeout(() => {
    clearInterval(startCountDown);
    countDown.style.display = "none";
    startCountUp();
    randomImg();
  }, 3000);
}
/* /Start */





/* Reset */
function reset() {
  [...wlanImgs].forEach(wlanImg => {
    wlanImg.style.display = "none";
  });
  point = 0;
  score.textContent = "Score : 000";
      
  start.style.display = "flex";
  difficulty.style.display = "flex";

  countDown.textContent = 3;
  
  timer.textContent = "Time : 00:00";
}
/* /Reset */
