const modal = document.getElementById("dialog");
const headlineH1 = document.getElementById("dialogTitle");
const imgContainer = document.querySelector(".imgContainer");
const btnCloseModal = document.getElementById("btnCloseModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const imageNumber = document.getElementById("imageNumber");
const arrowLeft = document.getElementById("imgArrowLeft");
const arrowRight = document.getElementById("imgArrowRight");

const imageArray = [
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

const imageTitle = [
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

const imageAlt = [
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

function initAllEventListeners() {
  btnCloseModal.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  arrowRight.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= imageArray.length) {
      currentIndex = 0;
    }
    showCurrentModalContent();
  });

  arrowRight.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      currentIndex++;
      if (currentIndex >= imageArray.length) {
        currentIndex = 0;
      }
      showCurrentModalContent();
    }
  });

  arrowLeft.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = imageArray.length - 1;
    }
    showCurrentModalContent();
  });

  arrowLeft.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imageArray.length - 1;
      }
      showCurrentModalContent();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imageArray.length - 1;
      }
      showCurrentModalContent();
      arrowLeft.focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      currentIndex++;
      if (currentIndex >= imageArray.length) {
        currentIndex = 0;
      }
      showCurrentModalContent();
      arrowRight.focus();
    }
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function imgToModal(event, index) {
  if (event.key === "Enter") {
    renderDialog(index);
  }
}

function renderImages() {
  headlineH1.innerHTML = "Your Personal photo album";
  imgContainer.innerHTML = "";

  for (let index = 0; index < imageArray.length; index++) {
    imgContainer.innerHTML += getHTMLForImage(index);
  }
}

function getHTMLForImage(index) {
  return `
    <div class="generatedImageContainer">
      <img src="./assets/img/img${imageArray[index]}.png"
           alt="${imageAlt[index]}"
           class="generatedImage"
           onclick="renderDialog(${index})"
           onkeydown="imgToModal(event, ${index})"
           tabindex="0">
    </div>`;
}

function renderDialog(index) {
  currentIndex = index;
  openModal();
  showCurrentModalContent();
}

function showCurrentModalContent() {
  modalTitle.innerHTML = imageTitle[currentIndex];
  modalImage.src = `./assets/img/img${imageArray[currentIndex]}.svg`;
  modalImage.alt = imageAlt[currentIndex];
  imageNumber.innerHTML = `${currentIndex + 1}/${imageArray.length}`;
}

function openModal() {
  modal.showModal();
  modal.classList.remove("d_none");
}

function closeModal() {
  modal.close();
  modal.classList.add("d_none");
}

initAllEventListeners();
