const title = document.querySelector("#title");

function handleResize() {
  title.style.color = "red";
}
function handleClick() {
  title.innerHTML = "클릭감지.";
}

function handlemousedown() {
  title.innerHTML = "커서감지.";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
title.addEventListener("mouseover", handlemousedown);
