// Ein Objekt ist eine Liste von "Key/Value" pairs
let myFancyObject = {
  age: 32, // Key + Value
  height: 173,
  name: function () {
    console.log("Ich bin Kevin");
  },
};

console.log(myFancyObject.height); // "height" ist hier der Key
console.log(myFancyObject["age"]);

let fullName = "Kevin";

// Mit "()" greifen wir auf Funktionen zu
console.log(myFancyObject.name());

// Merksatz! -> Fast alles in JavaScript ist ein Objekt
