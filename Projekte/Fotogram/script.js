// Idee für mich: Images dynamisch per index auslesen lassen. z.B: ./assets/img/img[0]

let modal = document.getElementById("dialog");
let btnCloseModal = document.getElementById("btnCloseModal");
let btnOpenModal = document.getElementById("btnOpenModal");

let imageArray1 = [
  "./assets/img/img1",
  "./assets/img/img2",
  "./assets/img/img3",
  "./assets/img/img4",
  "./assets/img/img5",
  "./assets/img/img6",
];

let imageArray2 = [
  "./assets/img/img7",
  "./assets/img/img8",
  "./assets/img/img9",
  "./assets/img/img10",
  "./assets/img/img11",
  "./assets/img/img12",
];

let imageTitle1 = [
  "A picture of a glacier",
  "Night City",
  "Cloudy Sky",
  "Birb png!",
  "hurricane?",
  "ice lake?",
];

let imageTitle2 = [
  "A swimming duck",
  "man on boat!",
  "small birb",
  "cheeetaahh, but its a snow lion?",
  "mountains with snow",
  "A tree with snow",
];

btnCloseModal.addEventListener("click", closeModal);
btnOpenModal.addEventListener("click", openModal);

function openModal() {
  modal.openModal();
  modal.classList.remove("d_none");
}

function closeModal() {
  modal.close();
  modal.classList.add("d_none");
}
