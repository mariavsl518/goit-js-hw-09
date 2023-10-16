const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startButton.addEventListener('click', handleStart);
stopButton.addEventListener('click', handleStop);

function handleStart() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()}, 700);
  startButton.disabled = true;
  stopButton.disabled = false;
};

function handleStop() { 
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}