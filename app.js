const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

const minuteSpan = document.querySelector("#minute");
const secondSpan = document.querySelector("#second");
const milisecondSpan = document.querySelector("#milisecond");

let seconds = 0;
let minutes = 0;
let miliseconds = 0;
let dongu;

const startStopWatch = () => {
  clearInterval(dongu);
  dongu = setInterval(timer, 10);
};

let count = 0;
const timer = () => {
  if (count == 100) {
    count = 0;
    seconds++;
  }
  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }
  milisecondSpan.innerText = `${count}`;
  secondSpan.innerText = `${seconds}`;
  minuteSpan.innerText = `${minutes}`;

  count++;
  console.log(count);
};

window.addEventListener("load", () => {
  minuteSpan.innerText = `${minutes}`;
  secondSpan.innerText = `${seconds}`;
  milisecondSpan.innerText = `${miliseconds}`;
});

stop.addEventListener("click", () => {
  clearInterval(dongu);
});
start.addEventListener("click", () => {
  startStopWatch();
});
reset.addEventListener("click", () => {
  clearInterval(dongu);
  minuteSpan.innerText = 0;
  secondSpan.innerText = 0;
  milisecondSpan.innerText = 0;
});
