// Logische Operatoren

let myCondition = !false;
// "!" negiert einen Boolean (macht true zu false und umgekehrt)

let and = false && true;
// && (UND) ist nur true, wenn beide Werte true sind

let or = false || true;
// || (ODER) ist true, wenn mindestens ein Wert true ist

console.log(myCondition); // true
console.log(and); // false
console.log(or); // true

// Vergleichsoperatoren

myCondition = 45 == "45";
// == vergleicht Werte und wandelt bei Bedarf die Typen automatisch um (Coercion)
// Ergebnis: true

myCondition = 45 === 45;
// === vergleicht Wert UND Typ
// Ergebnis: true

myCondition = 45 === "45";
// Unterschiedlicher Typ (Number vs. String)
// Ergebnis: false

myCondition = 45 > 12;
// Größer als → true

myCondition = 45 < 12;
// Kleiner als → false

myCondition = 45 >= 12;
// Größer oder gleich → true

myCondition = 45 <= 12;
// Kleiner oder gleich → false

myCondition = 45 != 12;
// != prüft auf Ungleichheit und wandelt Typen automatisch um
// Ergebnis: true

myCondition = 45 !== 12;
// !== prüft auf Ungleichheit OHNE Typumwandlung
// Ergebnis: true

myCondition = 45 !== "12";
// Unterschiedlicher Typ (Number vs. String)
// Ergebnis: true

// If, Else if und Else

// if → läuft nur, wenn Bedingung true ist
// else if → wird geprüft, wenn if false war
// else → läuft, wenn alles andere false war

// Beispiel mit true:

if (true) {
  console.log("if (true) → Dieser Teil läuft immer!");
} else if (false) {
  console.log("Dieser Teil läuft nie.");
} else {
  console.log("Dieser Teil läuft nie.");
}

// Beispiel mit false:

if (false) {
  console.log("if (false) → Dieser Teil läuft nie.");
} else if (false) {
  console.log("Dieser Teil läuft auch nie.");
} else {
  console.log(
    "else → Dieser Teil läuft, weil alle vorherigen Bedingungen false waren.",
  );
}
