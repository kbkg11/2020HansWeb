const openBtn = document.getElementById("open");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
