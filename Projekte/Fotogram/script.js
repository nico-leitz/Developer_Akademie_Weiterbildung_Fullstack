// Idee für mich: Images dynamisch per index auslesen lassen. z.B: ./assets/img/img[0]

let modal = document.getElementById("dialog");
let headlineH1 = document.getElementById("dialogTitle");
let imgContainer = document.querySelector(".imgContainer");
let btnCloseModal = document.getElementById("btnCloseModal");
let btnOpenModal = document.getElementById("btnOpenModal");
let renderModalImg = document.getElementById("modalImg");

let imageArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

let imageTitle = [
  "A picture of a glacier",
  "Night City",
  "Cloudy Sky",
  "Birb png!",
  "hurricane?",
  "ice lake?",
  "A swimming duck",
  "man on boat!",
  "small birb",
  "cheeetaahh, but its a snow lion?",
  "mountains with snow",
  "A tree with snow",
];

function renderImages() {
  headlineH1.innerHTML = `Your Personal photo album`;
  for (let i = 0; i < imageArray.length; i++) {
    imgContainer.innerHTML += `
    <img src="./assets/img/img${imageArray[i]}.svg" class="imgCointainer"/>`;
  }
}

function renderImagesModal() {
  openModal();
}

// btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
imgContainer.addEventListener("click", openModal);

function openModal() {
  modal.showModal();
  modal.classList.remove("d_none");
}

function closeModal() {
  modal.close();
  modal.classList.add("d_none");
}
