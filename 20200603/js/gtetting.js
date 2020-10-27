const form = document.querySelector("form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value; //값 넣기
  console.log(currentValue);
  paintGreeting(currentValue); //paintGreeting 텍스트를 currentValue값으로 변경
  saveName(currentValue); //saveName에 currentValue내용 저장
}

function askForName() {
  form.classList.remove("form"); //클래스form 지우기
  form.classList.add(SHOWING_CN); //클래스showing 추가
  form.addEventListener("submit", handleSubmit); //값을 입력하면 handleSubmit실행
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  form.classList.add("form"); //showing지우고 form추가
  greeting.classList.add(SHOWING_CN); //greeting에 showing추가
  greeting.classList.remove("greetings"); //greeting안에 greetings를 삭제
  greeting.innerText = `Hello ${text}`; //greeting에 텍스트를 `Hello ${text}`로 대체
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //currentUser에 localStorage값넣기
  if (currentUser == null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
