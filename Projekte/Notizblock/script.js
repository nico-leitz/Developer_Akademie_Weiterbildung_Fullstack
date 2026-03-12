let notesTitles = ["Ba", "Aufgabe", "Yippieehh", "Mega!"];
let notes = ["banane", "rasen mähen", "Lel", "Supaa!"];

let trashNotes = [];
let trashNotesTitle = [];

// Notizen anzeigen
function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

// Papierkorb anzeigen
function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

// HTML für normale Notizen
function getNoteTemplate(indexNote) {
  return `
    <p>- Title: ${notesTitles[indexNote]} -> ${notes[indexNote]}</p>
    <button onclick="noteToTrash(${indexNote})">X</button>
  `;
}

// HTML für Papierkorb-Notizen
function getTrashNoteTemplate(indexTrashNote) {
  return `
    <p>+ Title: ${trashNotesTitle[indexTrashNote]} -> ${trashNotes[indexTrashNote]}</p>
    <button onclick="deleteNoteForever(${indexTrashNote})">Delete Note (Forever)</button>
  `;
}

// Notiz hinzufügen
function addNote() {
  let userInputRef = document.getElementById("userInput");
  let userInput = userInputRef.value;

  if (userInput.trim() === "") return;

  notes.push(userInput);
  notesTitles.push(userInput);
  userInputRef.value = "";

  setToLocalStorage();
  renderNotes();
}

// Notiz in Papierkorb verschieben
function noteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);

  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitle.push(trashNoteTitle[0]);

  setToLocalStorage();
  renderNotes();
  renderTrashNotes();
}

// Notiz endgültig löschen
function deleteNoteForever(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNotesTitle.splice(indexTrashNote, 1);

  setToLocalStorage();
  renderTrashNotes();
}

// Alles im LocalStorage speichern
function setToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
  localStorage.setItem("trashNotesTitle", JSON.stringify(trashNotesTitle));
}

// Alles aus dem LocalStorage laden
function getFromLocalStorage() {
  let storedNotes = localStorage.getItem("notes");
  let storedTitles = localStorage.getItem("notesTitles");
  let storedTrashNotes = localStorage.getItem("trashNotes");
  let storedTrashTitles = localStorage.getItem("trashNotesTitle");

  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  }

  if (storedTitles) {
    notesTitles = JSON.parse(storedTitles);
  }

  if (storedTrashNotes) {
    trashNotes = JSON.parse(storedTrashNotes);
  }

  if (storedTrashTitles) {
    trashNotesTitle = JSON.parse(storedTrashTitles);
  }
}

// Initialisieren beim Laden der Seite
function init() {
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
}

window.onload = init;
