let count = 0;

function init() {
  debuggerOutput("A");
  debuggerOutput("A");
  testOne();
  debuggerOutput("A");
  debuggerOutput("A");
}

function testOne() {
  debuggerOutput("B");
  debuggerOutput("B");
  testTwo();
  debuggerOutput("B");
  debuggerOutput("B");
}
function testTwo() {
  debuggerOutput("C");
  debuggerOutput("C");
  debuggerOutput("C");
}

// function init() {
//   testOne();
//   debuggerOutput("A");
//   testOne();
//   testTwo();
//   testOne();
// }

// function testOne() {
//   debuggerOutput("testOne");
// }
// function testTwo() {
//   debuggerOutput("testTwo");
//   testOne();
// }

// function init() {
//   testOne();
//   debuggerOutput("init");
//   testTwo();
// }

// function testOne() {
//   debuggerOutput("testOne");
// }
// function testTwo() {
//   debuggerOutput(text);
//   testOne();
// }

function debuggerOutput(text) {
  count++;
  let debuggerLogRef = document.getElementById("debugger_log");
  debuggerLogRef.innerHTML += " " + text + count;
}

// Im Browser findet man unter den Dev-Tools unter "Sources" die verlinkten JS-Datein

// Im Browser findet man unter den Dev-Tools unter "Sources" die verlinkten JS-Datein

// Mit einem Breakpoint können wir in der Console (unter Source) einen Punkt festlegen, bis wohin der Code durchlaufen soll
// Mit ->. kommen wir immer eine Zeile weiter, im "Console" Tab sehen wir den Value jeder Zeile als ausgabe.
// Drücken wir auf "Play", wird der Vorgang wieder bis zu unserem vorher debuggtem code neu durchgeführt (wird dann wieder zum Pause knopf)
