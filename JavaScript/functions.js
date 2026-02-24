let discount = 50;
let price = 500;

console.log((price - discount) * 1.19);
// Berechnung direkt im Script: (Preis - Rabatt) * 1.19 Umsatzsteuer

// Funktions-Aufruf
calculatePrice();
logCalculatedPrice(30, 300);
// Aufruf der Funktionen. Funktionen können vor ihrer Definition aufgerufen werden, weil sie "gehoistet" werden.

// Funktionsdefinition
function calculatePrice() {
  console.log((price - discount) * 1.19);
  // Berechnung innerhalb der Funktion. Greift auf die globalen Variablen price und discount zu.
}

// Funktion mit Parametern
function logCalculatedPrice(discount, price) {
  console.log((price - discount) * 1.19);
  // Parameter ersetzen die Werte innerhalb der Funktion. Wir können unterschiedliche Preise/Rabatte übergeben.
}

// Erklärung: "Hoisting"
// "Hoisting" bedeutet, dass JavaScript Funktionsdeklarationen
// und Variablendeklarationen beim Laden des Scripts an den Anfang "hochzieht".
// Deshalb kann man Funktionen aufrufen, bevor sie im Code stehen.
// Bei Variablen mit let/const funktioniert das nicht – diese müssen zuerst deklariert werden.

// Funktionen mit "return"
// Die Funktion gibt immer das zurück was in "return steht"
function logCalculatedPriceWithReturn(discount, price) {
  console.log((price - discount) * 1.19);
  return 5; // Nach return ist die Funktion beendet/abgebrochen
}

console.log(logCalculatedPrice);
