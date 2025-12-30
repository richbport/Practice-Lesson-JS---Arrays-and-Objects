function openModal() {
  const modal = document.querySelector(".modal")
  console.log("modal")
}

function closeModal() {
  document.querySelector(".modal").classList.remove("modal--open");
}

document.querySelector(".open-btn").addEventListener("click", openModal);
document.querySelector(".close-btn").addEventListener("click", closeModal);