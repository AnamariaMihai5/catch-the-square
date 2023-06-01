const box = document.querySelector("#box");
const square = document.querySelector("#square");
let score = document.querySelector("#score");

const screenHeight = Math.floor(visualViewport.height);
const screenWidth = Math.floor(visualViewport.width);

box.style.transitionDuration = "0.5s"; 
square.style.width = "80%";
square.style.height = "80%";
score.innerHTML = "0";

box.addEventListener('mouseenter', move);
square.addEventListener('mouseenter', nextLevel);


function move() {
    let randomH = Math.floor(Math.random() * screenHeight);
    let randomW = Math.floor(Math.random() * screenWidth);

    box.style.top = box.offsetTop + randomH + "px";
    box.style.left = box.offsetLeft + randomW + "px";

    if (parseInt(box.style.top) > screenHeight) {
        box.style.top = randomH + "px";
    }

    if (parseInt(box.style.left) > screenWidth) {
        box.style.left = randomW + "px";
    }
}


function nextLevel(event) {
  score.innerHTML = parseInt(score.innerHTML) + 1;

  let seconds = parseFloat(box.style.transitionDuration);
  let h = parseFloat(square.style.height);
  let w = parseFloat(square.style.width);

  if (seconds > 0.1) {
    seconds = (seconds - 0.1).toFixed(1);
    box.style.transitionDuration = seconds + "s";
  } else {
    seconds = 0.5;
    box.style.transitionDuration = seconds + "s";
    h -= 10;
    w -= 10;
    square.style.height = h + "%";
    square.style.width = w + "%";
  }

  if (parseInt(score.innerHTML) === 10) {
    score.innerHTML = "10 Wow";
  } else if (parseInt(score.innerHTML) === 20) {
    score.innerHTML = "20 Amazing";
  } else if (parseInt(score.innerHTML) === 30) {
    score.innerHTML = "30 Legendary";
  } else if (parseInt(score.innerHTML) >= 36 && parseInt(score.innerHTML) < 40) {
    score.innerHTML = `${score.innerHTML} UNSTOPPABLE`;
  } else if (parseInt(score.innerHTML) === 40) {
    score.innerHTML = `${score.innerHTML} Where is it? 🤨`;
  }
}