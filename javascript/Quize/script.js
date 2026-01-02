let questions = [];
let current = 0;
let score = 0;
let selected = null;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const reviewEl = document.getElementById("review");
const scoreText = document.getElementById("scoreText");

questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2,
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: 2,
  },
  {
    question: "Which tag is used to include JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: 1,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: 2,
  },
  {
    question: "Inside which HTML element do we put CSS?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: 1,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "**", "##"],
    answer: 1,
  },
  {
    question: "Which method is used to fetch data?",
    options: ["get()", "fetch()", "pull()", "request()"],
    answer: 1,
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
];

loadQuestion();
function loadQuestion() {
  selected = null;
  optionsEl.innerHTML = "";

  const q = questions[current];
  questionEl.textContent = `${current + 1}. ${q.question}`;

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.textContent = opt;
    div.className =
      "p-3 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition";
    div.onclick = () => selectOption(idx, div);
    optionsEl.appendChild(div);
  });

  progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;
  updateNextButton();
}

function selectOption(index, element) {
  selected = index;
  document.querySelectorAll("#options div").forEach((opt) => {
    opt.classList.remove("bg-cyan-600");
    opt.classList.add("bg-slate-800");
  });
  element.classList.remove("bg-slate-800");
  element.classList.add("bg-cyan-600");
  updateNextButton();
}

function updateNextButton() {
  if (selected !== null) {
    nextBtn.classList.remove("bg-slate-700", "text-slate-500");
    nextBtn.classList.add("bg-cyan-600", "hover:bg-cyan-700");
  } else {
    nextBtn.classList.add("bg-slate-700", "text-slate-500");
    nextBtn.classList.remove("bg-cyan-600", "hover:bg-cyan-700");
  }
}

nextBtn.onclick = () => {
  if (selected === null) return;

  userAnswers.push(selected);

  if (selected === questions[current].answer) score++;

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  progressBar.style.width = "100%";
  scoreText.innerHTML = `You scored <span class="text-cyan-400">${score}</span> / ${questions.length}`;
}

function showReview() {
  resultEl.classList.add("hidden");
  reviewEl.classList.remove("hidden");
  reviewEl.innerHTML = "<h2 class='text-2xl font-bold mb-6'>Answer Review</h2>";

  let reviewHTML = "";
  questions.forEach((q, i) => {
    const correct = q.answer === userAnswers[i];
    reviewHTML += `
                    <div class="bg-slate-800 p-4 rounded-lg mb-4">
                        <p class="font-semibold mb-2">${i + 1}. ${
      q.question
    }</p>
                        <p class="text-sm ${
                          correct ? "text-emerald-400" : "text-red-400"
                        }">
                            Your Answer: ${q.options[userAnswers[i]]}
                        </p>
                        ${
                          !correct
                            ? `<p class="text-sm text-emerald-400">
                            Correct Answer: ${q.options[q.answer]}
                        </p>`
                            : ""
                        }
                    </div>
                `;
  });

  reviewHTML += `<button onclick="restartQuiz()" class="w-full py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition">Restart Quiz</button>`;
  reviewEl.innerHTML += reviewHTML;
}

function restartQuiz() {
  current = 0;
  score = 0;
  userAnswers = [];
  reviewEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  progressBar.style.width = "0%";
  loadQuestion();
}
