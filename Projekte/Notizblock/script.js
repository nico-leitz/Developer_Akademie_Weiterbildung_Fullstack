// global speichern

// notizen anzeigen lassen

let notesTitles = ["Ba", "Aufgabe", "Yippieehh", "Mega!"];
let notes = ["banane", "rasen mähen", "Lel", "Supaa!"];

let trashNotes = [];
let trashNotesTitle = [];

// wann werden die notes angezeigt

function renderNotes() {
  // -> ich muss definieren wo sie anzuzeigen sind
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

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

function getNoteTemplate(indexNote) {
  return `<p>- Title: ${notesTitles[indexNote]} -> ${notes[indexNote]}</p> <button onclick="noteToTrash(${indexNote})">X</button>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ Title: ${trashNotesTitle[indexTrashNote]} -> ${trashNotes[indexTrashNote]}</p> <button onclick="deleteNoteForever(${indexTrashNote})">Delete Note (Forever)</button>`;
}

// notizen hinzufügen

function addNote() {
  let userInputRef = document.getElementById("userInput");
  let userInput = userInputRef.value;
  notes.push(userInput);
  userInputRef.value = "";

  renderNotes();
}

// notizen löschen
function noteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitle.push(trashNoteTitle[0]);
  renderNotes();
  renderTrashNotes();
}

function deleteNoteForever(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  renderTrashNotes();
}

// eingabe vom user defninieren

// eingabe auslesen

// eingabe speichern

// eingabe anzeigen lassen

// notizen archivieren
