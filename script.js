let timerRunning = false;
let interval;
var r = document.querySelector(":root");

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  document.querySelector("button").disabled = true;

  var tim = document.querySelector(".number").value;

  const qminutes = Math.floor(tim / 60);
  const qseconds = tim - qminutes * 60;
  const qfinalTime =
    str_pad_left(qminutes, "0", 2) + ":" + str_pad_left(qseconds, "0", 2);
  document.querySelector(".timer").innerHTML = qfinalTime;
  document.title = qfinalTime;
  interval = setInterval(function () {
    tim -= 1;
    const minutes = Math.floor(tim / 60);
    const seconds = tim - minutes * 60;
    const finalTime =
      str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
    document.querySelector(".timer").innerHTML = finalTime;
    document.title = finalTime;
    if (tim <= 0) {
      clearInterval(interval);
      document.querySelector(".popup").style.display = "flex";
      document.querySelector(".result").innerHTML = "Timer Ended!";
      document.getElementById("aud").play();
      timerRunning = false;
      document.querySelector("button").disabled = false;
    }
  }, 1000);
}

function stopTimer() {
  if (!timerRunning) return;

  clearInterval(interval);
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".result").innerHTML = "Timer Stopped!";
  timerRunning = false;
  document.querySelector("button").disabled = false;
}
function closePop() {
  document.querySelector(".popup").style.display = "none";
  document.getElementById("aud").fastSeek(0);
  document.getElementById("aud").pause();
}

function closePopup() {
  document.querySelector(".popup2").className = "nodisp";
  document.querySelector(".hide").className = "settings";
}

function Popup() {
  document.querySelector(".nodisp").className = "popup2";
  document.querySelector(".settings").className = "hide";
}
function switchSound(asrc) {
  document.getElementById("aud").src = asrc;
  closePopup();
}
function whiteTheme() {
  r.style.setProperty("--bg", "#fff");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function blackTheme() {
  r.style.setProperty("--bg", "#000");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function blueTheme() {
  r.style.setProperty("--bg", "#023e8a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function redTheme() {
  r.style.setProperty("--bg", "#8a0202");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#fff");
}
function greenTheme() {
  r.style.setProperty("--bg", "#028a02");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function orangeTheme() {
  r.style.setProperty("--bg", "#ff5c00");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function yellowTheme() {
  r.style.setProperty("--bg", "#fff200");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function purpleTheme() {
  r.style.setProperty("--bg", "#55028a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function latoFont() {
  r.style.setProperty("--fnt", "'Lato', sans-serif");
}
function notoFont() {
  r.style.setProperty("--fnt", "'Noto Serif', serif");
}
function robFont() {
  r.style.setProperty("--fnt", "'Roboto Mono', monospace");
}
function ralFont() {
  r.style.setProperty("--fnt", "'Raleway', sans-serif");
}
function pacFont() {
  r.style.setProperty("--fnt", "'Pacifico', sans-serif");
}
function nabFont() {
  r.style.setProperty("--fnt", "'Nabla', sans-serif");
}
function pirFont() {
  r.style.setProperty("--fnt", "'Pirata One', sans-serif");
}
function aluFont() {
  r.style.setProperty("--fnt", "'Alumni Sans Pinstripe', sans-serif");
}
