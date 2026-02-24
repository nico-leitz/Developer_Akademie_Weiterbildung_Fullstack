//////---------------Spielwiese--------------///////
let imgChange = document.querySelector(".img");
let playMusic = document.getElementById("music");
let headline = document.getElementById("headline");

playMusic.addEventListener("play", function () {
  imgChange.src = "./assets/party.gif";
  imgChange.classList.add("img2");
  headline.classList.add("headline");
});

playMusic.addEventListener("pause", function () {
  imgChange.src = "./assets/bored.gif";
  imgChange.classList.remove("img2");
  headline.classList.remove("headline");
});
