let nameRef = document.getElementById("nameInput");
let messageRef = document.getElementById("messageInput");
let sendBtn = document.getElementById("sendBtn");
let outputDiv = document.getElementById("outputDiv");
let errorMessageName = document.createElement("p");
let errorMessageMessage = document.createElement("p");

sendBtn.addEventListener("click", function () {
  let name = nameRef.value;
  let message = messageRef.value;

  let newPTag = document.createElement("p");
  outputDiv.appendChild(newPTag);

  if (name.length >= 3 && message.length >= 5) {
    newPTag.innerHTML = `${name}: ${message}`;
  } else if (name.length <= 2) {
    errorMessageName.innerHTML = `Name needs to be at least 3 letters long`;
    errorMessageName.style.color = "red";
    outputDiv.appendChild(errorMessageName);
  } else if (message.length <= 4) {
    errorMessageMessage.innerHTML = `Message needs to be at least 5 letters long`;
    errorMessageMessage.style.color = "red";
    outputDiv.appendChild(errorMessageMessage);
  } else {
    errorMessageName.innerHTML = `Name needs to be at least 3 letters long`;
    errorMessageName.style.color = "red";
    outputDiv.appendChild(errorMessageName);
    errorMessageMessage.innerHTML = `Message needs to be at least 5 letters long`;
    errorMessageMessage.style.color = "red";
    outputDiv.appendChild(errorMessageMessage);
  }
});
