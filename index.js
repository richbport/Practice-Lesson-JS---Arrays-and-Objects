function openModal() {
  document.querySelector(".modal").classList.add("modal--open");
}

function closeModal() {
  console.log("close")
}

document.querySelector(".open-btn").addEventListener("click", openModal);
document.querySelector(".close-btn").addEventListener("click", closeModal);