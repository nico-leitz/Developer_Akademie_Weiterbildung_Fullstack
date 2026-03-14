const questionCounter = document.getElementById("");

// Zugriff auf das Array:
// Fragen Objekt aufrufen: questions[0]
// Objekt-Eigenschaften aufrufen: questions[0]['right_answer']

let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wofür steht CSS?",
    answer_1: "Creative Style System",
    answer_2: "Cascading Style Sheets",
    answer_3: "Computer Style Syntax",
    answer_4: "Colorful Style Sheets",
    right_answer: 2,
  },
  {
    question: "Welche Sprache läuft im Browser?",
    answer_1: "Java",
    answer_2: "C++",
    answer_3: "Python",
    answer_4: "JavaScript",
    right_answer: 4,
  },
  {
    question: "Welches HTML-Tag erstellt einen Link?",
    answer_1: "<a>",
    answer_2: "<link>",
    answer_3: "<href>",
    answer_4: "<url>",
    right_answer: 1,
  },
  {
    question: "Welches Unternehmen hat JavaScript entwickelt?",
    answer_1: "Microsoft",
    answer_2: "Netscape",
    answer_3: "Google",
    answer_4: "Apple",
    right_answer: 2,
  },
];

function init() {}
