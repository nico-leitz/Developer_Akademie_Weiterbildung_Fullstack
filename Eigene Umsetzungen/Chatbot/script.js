let nameRef = document.getElementById("nameInput");
let messageRef = document.getElementById("messageInput");
let sendBtn = document.getElementById("sendBtn");
let outputDiv = document.getElementById("outputDiv");
let errorDiv = document.querySelector(".errorDiv");
let lightDarkBtn = document.getElementById("lightDarkBtn");

sendBtn.addEventListener("click", sendMessage);
lightDarkBtn.addEventListener("click", toggleLightDark);

function sendMessage() {
  let name = nameRef.value.trim();
  let message = messageRef.value.trim();

  let randomBotAnswers = [
    "Haha, that's funny!",
    "Hmm, interesting point!",
    "I see what you did there!",
    "That's pretty clever!",
    "Oh, nice one!",
    "You really know how to make me laugh!",
    "Well played!",
    "That's a good one!",
    "Haha, got me there!",
    "Classic move!",
  ];

  let isValidName = true;
  let isValidMessage = true;

  if (name.length < 3) {
    let errorName = document.createElement("p");
    errorName.textContent = `Name has to be at least 3 letters long`;
    errorName.style.color = "red";
    outputDiv.appendChild(errorName);
    isValidName = false;
  }

  if (message.length < 5) {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = `Message has to be at least 5 letters long`;
    errorMessage.style.color = "red";
    outputDiv.appendChild(errorMessage);
    isValidMessage = false;
  }

  if (isValidName && isValidMessage) {
    let newPTag = document.createElement("p");
    newPTag.textContent = `${name}: ${message}`;
    outputDiv.appendChild(newPTag);

    setTimeout(() => {
      let botPTag = document.createElement("p");
      botPTag.textContent =
        randomBotAnswers[Math.floor(Math.random() * randomBotAnswers.length)];
      outputDiv.appendChild(botPTag);
    }, 3000);
  }
}

function toggleLightDark() {
  document.body.classList.toggle("lightDarkMode");
}
