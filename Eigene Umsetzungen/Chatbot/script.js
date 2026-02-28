let nameRef = document.getElementById("nameInput");
let messageRef = document.getElementById("messageInput");
let sendBtn = document.getElementById("sendBtn");
let outputDiv = document.getElementById("outputDiv");

sendBtn.addEventListener("click", function () {
  let name = nameRef.value.trim();
  let message = messageRef.value.trim();

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

    nameRef.value = "";
    messageRef.value = "";
  }
});
