// Idee für mich: Images dynamisch per index auslesen lassen. z.B: ./assets/img/img[0]

let modal = document.getElementById("dialog");
let headlineH1 = document.getElementById("dialogTitle");
let imgContainer = document.querySelector(".imgContainer");
let generatedImage = document.querySelector(".generatedImage");
let btnCloseModal = document.getElementById("btnCloseModal");
let btnOpenModal = document.getElementById("btnOpenModal");
let renderModalImg = document.getElementById("modalImg");
let modalTitle = document.getElementById("modalTitle");
let modalImage = document.getElementById("modalImage");
let imageNumber = document.getElementById("imageNumber");
let arrowLeft = document.getElementById("imgArrowLeft");
let arrowRight = document.getElementById("imgArrowRight");

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

let imageAlt = [
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

let currentIndex = 0;

btnCloseModal.addEventListener("click", closeModal);

function renderImages() {
  headlineH1.innerHTML = `Your Personal photo album`;
  for (let index = 0; index < imageArray.length; index++) {
    imgContainer.innerHTML += `
    <img src="./assets/img/img${imageArray[index]}.svg" class="generatedImage" onclick="renderDialog(${index})"/>`;
  }
}

function renderDialog(index) {
  openModal();
  getIndexNumber(index);
  nextImage(index);
  previousImage(index);
}

function nextImage() {
  arrowRight.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= imageArray.length) {
      currentIndex = 0;
    }
    getIndexNumber(currentIndex);
  });
}

function previousImage() {
  arrowLeft.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = imageArray.length - 1;
    }
    getIndexNumber(currentIndex);
  });
}

function getIndexNumber(index) {
  modalTitle.innerHTML = imageTitle[index];
  modalImage.src = `./assets/img/img${imageArray[index]}.svg`;
  modalImage.alt = imageAlt[index];
  imageNumber.innerHTML = `${index + 1}/12`;
}

function openModal() {
  modal.showModal();
  modal.classList.remove("d_none");
}

function closeModal() {
  modal.close();
  modal.classList.add("d_none");
}
