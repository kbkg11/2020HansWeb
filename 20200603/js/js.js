const date = new Date();
console.log(date);

let a = 221;
let b = a - 5;
const c = 4; //상수
const what = "Nicoles"; //String
const wat = true; //boolean
const daysOfWeek = [1, 2, 3, 4, 5]; //배열
function sayHello(name, age) {
  alert("안녕하세요! " + name + "님. " + age + " 살이시군요.");
}

sayHello("김도일", 18);
const title = document.getElementById("title");
//const title = document.querySelector("#title");
title.innerHTML = "JS!!";
title.style.color = "red";
function handleResize() {
  console.log("I have been resized");
}
window.addEventListener("resize", handleResize);
