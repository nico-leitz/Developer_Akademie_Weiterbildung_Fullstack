let nameRef = document.getElementById("nameInput");
let messageRef = document.getElementById("messageInput");
let sendBtn = document.getElementById("sendBtn");
let outputDiv = document.getElementById("outputDiv");
let errorDiv = document.getElementById("errorMessage");

sendBtn.addEventListener("click", function () {
  let name = nameRef.value;
  let message = messageRef.value;

  let newPTag = document.createElement("p");
  outputDiv.appendChild(newPTag);

  if (name === "Max") {
    newPTag.innerHTML = `${name}: ${message}`;
    newPTag.style.color = "red";
  } else {
    newPTag.innerHTML = `${name}: ${message}`;
    newPTag.style.color = "green";
  }

  console.log(name, message);
});
