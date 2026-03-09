// global speichern

// notizen anzeigen lassen

let notes = ["banane", "rasen mähen"];

// wann werden die notes angezeigt

function renderNotes() {
  // -> ich muss definieren wo sie anzuzeigen sind
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = " " + notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate(note) {
  return `<p>+ ${note}</p>`;
}

// notizen hinzufügen

function addNote() {
  let userInputRef = document.getElementById("userInput");
  let userInput = userInputRef.value;
  notes.push(userInput);
  userInputRef.value = "";

  renderNotes();
}

// eingabe vom user defninieren

// eingabe auslesen

// eingabe speichern

// eingabe anzeigen lassen

// notizen löschen

// notizen archivieren
