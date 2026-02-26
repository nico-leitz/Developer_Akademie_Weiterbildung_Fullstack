let myList = [12, "Banana", true];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let singletestVar = fruits.push("Kiwi");
fruits.pop();
console.log(fruits);

// First come first serve ist bei Arrays ein wichtiges konzept

function initArrays() {
  myList[0] = "No Banana";
  console.log(myList[0]);
  console.log(fruits);
}
let allFruits = [];

function initArrays2() {
  let divElement = document.createElement("div");

  for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
    allFruits.push(fruits[index]);

    let pTag = document.createElement("p");
    pTag.textContent = fruits[index];
    divElement.appendChild(pTag);
    pTag.style.color = "Red";
  }

  document.body.appendChild(divElement);
}

initArrays2();
console.log(allFruits);
console.log(`Moin! ${allFruits}`);

// let pTag = document.getElementById("debugger_log");
// let pTag2 = document.getElementById("debugger_log2");
// let testInput = document.getElementById("test_input");
// let div = document.getElementById("createElements");

// function logToConsole() {
//   pTag.textContent = testInput.value;
//   console.log(testInput.value);
// }

// testInput.addEventListener("input", function () {
//   let newImage = document.createElement("img");
//   div.appendChild(newImage);
//   newImage.src = "./assets/bored.gif";
//   pTag.textContent = testInput.value;
//   pTag2.textContent = testInput.value;
// });
