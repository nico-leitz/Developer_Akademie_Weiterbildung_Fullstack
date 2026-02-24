console.log("Hello World");

// Variablen

let meineVariable = 27;
meineVariable = "Ich kann jederzeit überschrieben und somit verändert werden";

const cantBeChanged = "Ich kann nachträglich nicht mehr verändert werden";

// Datentypen

let myString = "Strings are a text"; // Strings sind texte
let myNumber = 32; // Integer sind zahlen
let myfloat = 32.0; // Float ist eine Kommazahl
let myBoolean = true; // True oder False
let myArray = [2, 5, "hello", false]; // Eine Liste
let myObject = { age: 32, height: 177 }; // Liste aus Key-/Value paaren

// Numbers
let myDivision = 10 / 5;
let myMulti = 10 * 5;
let myAdd = 10 + 5;
let mySub = 10 - 5;
let myPow = 2 ** 6;

// Strings
let myConcat = "hello" + "world";

// Strings + Numbers
let myCombination = "5" + 5; // = 10 weil er die Zahl zu einem String umwandelt

//
let myTestString = "Hallo    ";
console.log(myTestString.length); // "length" gibt die Länge des Strings als Zahl (Integer-Wert) aus

myTestString = myTestString.trim(); // "trim" entfernt am "Anfang" und am "Ende" alle "Leerzeichen"

console.log(myTestString); // Länge ist jetzt "5" statt "10"
