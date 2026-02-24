/**
 * JavaScript: Coercion (implizit) vs. Conversion (explizit)
 */

// 1. Addition (+)

// Coercion (implizit)
const coercion1 = "5" + 2;
console.log("Coercion Addition:", coercion1); // "52"
// Implizit: Die Zahl 2 wird automatisch in einen String umgewandelt.

// Conversion (explizit)
const conversion1 = String(2);
const ergebnis1 = "5" + conversion1;
console.log("Conversion Addition:", ergebnis1); // "52"
// Explizit: Wir wandeln 2 selbst in einen String um.

// 2. Subtraktion (-)

// Coercion (implizit)
const coercion2 = "5" - 2;
console.log("Coercion Subtraktion:", coercion2); // 3
// Implizit: Der String "5" wird automatisch in eine Zahl umgewandelt.

// Conversion (explizit)
const conversion2 = Number("5");
const ergebnis2 = conversion2 - 2;
console.log("Conversion Subtraktion:", ergebnis2); // 3
// Explizit: Wir wandeln "5" selbst in eine Zahl um.

// 3. Loose Equality (==)

// Coercion (implizit)
const coercion3 = false == 0;
console.log("Coercion Equality:", coercion3); // true
// Implizit: false wird automatisch zu 0.

// Conversion (explizit)
const conversion3 = Number(false) === 0;
console.log("Conversion Equality:", conversion3); // true
// Explizit: Wir wandeln false selbst in eine Zahl um.

// 4. Logik (if)

// Coercion (implizit)
if (1) {
  console.log("Coercion Logik: läuft");
}
// Implizit: 1 wird automatisch als true interpretiert.

// Conversion (explizit)
if (Boolean(1)) {
  console.log("Conversion Logik: läuft");
}
// Explizit: Wir wandeln 1 selbst in einen Boolean um.
