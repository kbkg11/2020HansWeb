var clockTarget = document.getElementById("clock");

function clock() {
  var date = new Date();

  var hours = date.getHours();

  var minutes = date.getMinutes();

  var seconds = date.getSeconds();

  clockTarget.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  clock();

  setInterval(clock, 1000);
}

init();
