// Mit "document" sprechen wir die DOM an also in dem Fall das HTML
// nach dem "." führen wir auf diesem Element eine Funktion aus

let title = document.getElementById("website_title").innerHTML;

console.log(title.innerHTML);

title.innerHTML = "neuer Titel";
