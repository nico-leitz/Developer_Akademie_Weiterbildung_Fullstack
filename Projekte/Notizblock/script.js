// global speichern

// notizen anzeigen lassen

let notes = ["banane", "rasen mähen"];

// wann werden die notes angezeigt

function renderNotes() {
  // -> ich muss definieren wo sie anzuzeigen sind
  let contentRef = document.getElementById("content");

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = " " + notes[indexNote];
    contentRef.innerHTML += notes;
  }
}

// notizen hinzufügen

// notizen löschen

// notizen archivieren
