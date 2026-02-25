// Hier wird die Variable gesehen weil diese im "Global Scope" ist
let testScopeVar = "hello world";

function scopeTest() {
  let testScopeVar = "hello world";
  if (true) {
    console.log(testScopeVar);
  }
}

function scopeTest() {
  console.log(testScopeVar);
}

// console.log funktioniert ausserhalb des funktion blocks nicht
// weil es außerhalb der Funktion ein neuer Block ist
