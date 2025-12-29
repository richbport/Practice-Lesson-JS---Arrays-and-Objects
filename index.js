function openModal() {
  document.querySelector(".modal").classList.add("modal--open");
}

function closeModal() {
  document.querySelector(".modal").classList.remove("modal--open");
}

document.querySelector(".open-btn").addEventListener("click", openModal);
document.querySelector(".close-btn").addEventListener("click", closeModal);