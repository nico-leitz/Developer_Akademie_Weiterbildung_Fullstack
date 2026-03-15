const questionCounter = document.getElementById("questionCounter");
const lastQuestionNumber = document.getElementById("lastQuestionNumber");
const questionText = document.getElementById("questionText");
const answer1 = document.getElementById("answer_1");
const answer2 = document.getElementById("answer_2");
const answer3 = document.getElementById("answer_3");
const answer4 = document.getElementById("answer_4");

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
  {
    question: "Welches HTML-Tag wird für Bilder verwendet?",
    answer_1: "<image>",
    answer_2: "<img>",
    answer_3: "<picture>",
    answer_4: "<src>",
    right_answer: 2,
  },
  {
    question: "Welche CSS-Eigenschaft ändert die Textfarbe?",
    answer_1: "font-color",
    answer_2: "text-color",
    answer_3: "color",
    answer_4: "font-style",
    right_answer: 3,
  },
  {
    question: "Welches Symbol wird für Kommentare in JavaScript verwendet?",
    answer_1: "//",
    answer_2: "<!-- -->",
    answer_3: "#",
    answer_4: "**",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  lastQuestionNumber.textContent = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  let question = questions[currentQuestion];

  questionText.textContent = question.question;
  answer1.textContent = question.answer_1;
  answer2.textContent = question.answer_2;
  answer3.textContent = question.answer_3;
  answer4.textContent = question.answer_4;
}

function selectAnswer(selection) {
  console.log("Selected answer is:", selection);
}
