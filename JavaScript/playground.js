let imgChange = document.querySelector(".img");
let playMusic = document.getElementById("music");
let headline = document.getElementById("headline");
let audioBox = document.getElementById("audioBox");

let originalText = headline.textContent;

playMusic.addEventListener("play", function () {
  imgChange.src = "./assets/party.gif";
  imgChange.classList.add("img2");
  headline.classList.add("headline");
  audioBox.classList.add("audioPlay");
  headline.textContent = "WOW, THAT'S FUN!";
});

playMusic.addEventListener("pause", function () {
  imgChange.src = "./assets/bored.gif";
  imgChange.classList.remove("img2");
  headline.classList.remove("headline");
  audioBox.classList.remove("audioPlay");
  headline.textContent = originalText;
});
