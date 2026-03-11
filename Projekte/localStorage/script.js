let myData = ["Banana", "not Banana", "Apple"];

function init() {
  console.log(myData); // Gibt einfach nur das Objekt als Array aus
  console.log(JSON.stringify(myData)); // Wandelt das Objekt in einen JSON-String um
  // localStorage - Entwickler-Tools -> "Application" -> "Storage" -> "URL"
  // ( Hat immer "Key" und "Value" Pair)
  localStorage.setItem("myCat", "Tom");
  localStorage.setItem("myFriend", "Fayn");
  getFromLocalStorage();
  render();
}

function saveData() {
  let inputRef = document.getElementById("data_input");

  if (inputRef.value != "") {
    myData.push(inputRef.value);
  }

  saveToLocalStorage();

  render();
  inputRef.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("myData", JSON.stringify(myData));
  // speichert myData als JSON-Text im localStorage
  // Alles was nun im Input-Feld eigegeben und dem Array hinzugefügt wird, landet im localStorage
}

function getFromLocalStorage() {
  // holt den String aus dem localStorage und wandelt ihn mit JSON.parse() wieder in ein JavaScript-Objekt/Array um
  let myArr = JSON.parse(localStorage.getItem("myData"));
  if ((myArr = null)) {
    myData = myArr;
  }
  // speichert die geparsten Daten wieder in unserer Variable "myData"
}

function render() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let index = 0; index < myData.length; index++) {
    contentRef.innerHTML += `<p>${myData[index]}</p>`;
  }
}

// Info für mich:
// localStorage kann nur Strings speichern (JavaScript-Objekte sind kein Text/String).
// Mit JSON.stringify() wandeln wir unsere Daten (z.B. Objekte oder Arrays) in Strings um,
// damit sie im localStorage gespeichert werden können.
// Der String wird dann im localStorage gespeichert.

// Merkhilfe (Simple):
// Beim Speichern: Objekt → JSON.stringify() → String → localStorage
// Beim Lesen: localStorage → String → JSON.parse() → Objekt

// Merkhilfe (Lang):
// Speichern: Objekt mit JSON.stringify() in einen String umwandeln und im localStorage speichern
// Lesen: String aus dem localStorage holen und mit JSON.parse() wieder in ein Objekt umwandeln
