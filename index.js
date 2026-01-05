function openModal() {
  document.querySelector(".modal").classList.add("modal--open");
}

function closeModal() {
  console.log("close")
}

document.querySelector(".open-btn").addEventListener("click", openModal);

// function closeModal() {
//   document.querySelector(".modal").classList.remove("modal--open");
// }

// document.querySelector(".close-btn").addEventListener("click", closeModal);
