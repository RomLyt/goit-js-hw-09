const bodyEl = document.querySelector('body');
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeColor() {
  let newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
};

startBtn.addEventListener("click", () => {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
});