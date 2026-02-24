// Mit "document" sprechen wir die DOM an also in dem Fall das HTML
// nach dem "." führen wir auf diesem Element eine Funktion aus

// .getElementById + innerHTML
let title = document.getElementById("website_title").innerHTML;

console.log(title.innerHTML);

title.innerHTML = "neuer Titel";

// .innerHTML vs. .innerText
document.getElementById("test_div").innerHTML = "<p>Test</p>";
document.getElementById("test_div").innerText = "Test2";

// -> .innerHTML =
// -> .innerText =

// Aufgabe
// Wir fügen dem <div>-Element ein <button>-Element mit "id" und textContent "hinzu"
document.getElementById("aufgabe_div").innerHTML =
  "<button id='btn'>Klick mich</button>";

// .classList mit "add", "remove" und "toggle"
document.getElementById("test_div").classList.add("green_bg");
document.getElementById("test_div").classList.remove("red_bg");
document.getElementById("test_div").classList.toggle("");

// Element muss vorher kein class="" haben
// .toggle ist eine Mischung zwischen "add" und "remove"
// .toggle erkennt ob der Status "Aus" oder "An" ist.

// .setAttribute und .value
document.getElementById("test_input").setAttribute("type", "text");
document.getElementById("test_input").setAttribute("value", 123);

// Wo ist der Unterschied
// Mit .value kann man z.B. den "value" eines Input-Felds aus -> Nimmt den Wert!
document.getElementById("test_input").value = 412;

//onclick-Events
function toggleDNone() {
  document.getElementById("our_p_tag").classList.toggle("d_none");
}

function logger() {
  console.log(123456789);
}

// onload-Event
function blueBackground() {
  document.querySelector("body").classList.add("blueBackground");
}

// eventListener
document.getElementById("our_p_tag").addEventListener("click", logger());
