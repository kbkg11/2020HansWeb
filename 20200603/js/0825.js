function handlemousedown() {
  const title = document.querySelector("#title");
  title.innerHTML = "커서감지.";
}
function handleResize() {
  const title = document.querySelector("#title");
  title.style.color = "red";
}
function handleClick() {
  const title = document.querySelector("#title");
  title.innerHTML = "감지.";
}

var clockTarget = document.getElementById("clock");

function clock() {
  var date = new Date(); //날짜객체받아오기
  var clockDate = date.getDate(); //일
  var hours = date.getHours(); //시간
  var minutes = date.getMinutes(); //분
  var seconds = date.getSeconds(); //초
  clockTarget.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  var today = new Date("2020-09-01 11:00:00");
  var Christmas = new Date("2020-12-25 00:00:00");
  var difiDay = date.Christmas() - date.today();
}

function init() {
  clock();
  setInterval(clock, 1000);
}

init();

window.addEventListener("resize", handleResize);
