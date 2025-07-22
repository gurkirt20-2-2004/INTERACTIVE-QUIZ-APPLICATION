const quizData = {
  javascript: [
    {
      question: "What is the correct syntax for referring to an external JavaScript file?",
      options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>"],
      answer: 0,
      explanation: "Use the 'src' attribute to reference an external JavaScript file."
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Number", "String", "Object", "Float"],
      answer: 3,
      explanation: "JavaScript has 'Number', 'String', and 'Object' types, but not a 'Float' type."
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0,
      explanation: "The push() method adds one or more elements to the end of an array."
    },
    {
      question: "What is the output of: console.log(typeof null);",
      options: ["null", "object", "undefined", "boolean"],
      answer: 1,
      explanation: "typeof null returns 'object', which is a known JavaScript quirk."
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "all of the above"],
      answer: 3,
      explanation: "In modern JavaScript, you can use 'var', 'let', or 'const' to declare variables."
    }
  ],
  html: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: 0,
      explanation: "HTML stands for Hyper Text Markup Language."
    },
    {
      question: "Which HTML tag is used for creating an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: 0,
      explanation: "Use the <ul> tag for unordered lists."
    },
    {
      question: "Which tag is used to insert an image?",
      options: ["<img>", "<image>", "<picture>", "<src>"],
      answer: 0,
      explanation: "The <img> tag is used to embed images in HTML."
    },
    {
      question: "Which attribute is used to provide a unique id for an HTML element?",
      options: ["class", "id", "name", "href"],
      answer: 1,
      explanation: "The 'id' attribute provides a unique identifier for an HTML element."
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: ["<a href='url'>link</a>", "<a link='url'>link</a>", "<a>href='url'</a>", "<a url='url'>link</a>"],
      answer: 0,
      explanation: "The correct syntax is <a href='url'>link</a>."
    }
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: 0,
      explanation: "CSS stands for Cascading Style Sheets."
    },
    {
      question: "Which property is used to change the background color of an element?",
      options: ["color", "background-color", "bgcolor", "background"],
      answer: 1,
      explanation: "Use the 'background-color' property to change the background color."
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "font-style", "text-style"],
      answer: 0,
      explanation: "The 'font-size' property controls the size of the text."
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: ["demo", "#demo", ".demo", "*demo"],
      answer: 1,
      explanation: "Use '#demo' to select an element with id 'demo'."
    },
    {
      question: "Which property is used to add space between the border and content of an element?",
      options: ["margin", "padding", "border", "spacing"],
      answer: 1,
      explanation: "The 'padding' property adds space inside the border."
    }
  ],
  general: [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: 1,
      explanation: "Mars is known as the Red Planet."
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: 2,
      explanation: "Leonardo da Vinci painted the Mona Lisa."
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2,
      explanation: "Paris is the capital of France."
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: 2,
      explanation: "Plants absorb carbon dioxide from the atmosphere."
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
      answer: 1,
      explanation: "The blue whale is the largest mammal."
    }
  ],
  science: [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "H2SO4"],
      answer: 0,
      explanation: "The chemical symbol for water is H2O."
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      answer: 1,
      explanation: "Mercury is the closest planet to the Sun."
    },
    {
      question: "What is the main gas in Earth's atmosphere?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: 2,
      explanation: "Nitrogen is the main gas in Earth's atmosphere."
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
      answer: 1,
      explanation: "Mitochondria are known as the powerhouse of the cell."
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
      answer: 1,
      explanation: "Hydrogen has the atomic number 1."
    }
  ],
  history: [
    {
      question: "Who was the first president of the United States?",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      answer: 1,
      explanation: "George Washington was the first president of the United States."
    },
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1947", "1950"],
      answer: 1,
      explanation: "World War II ended in 1945."
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
      answer: 0,
      explanation: "Amelia Earhart was the first woman to fly solo across the Atlantic."
    },
    {
      question: "Which ancient civilization built the pyramids?",
      options: ["Greeks", "Romans", "Egyptians", "Mayans"],
      answer: 2,
      explanation: "The Egyptians built the pyramids."
    },
    {
      question: "Who wrote the Declaration of Independence?",
      options: ["Benjamin Franklin", "Thomas Jefferson", "John Adams", "George Washington"],
      answer: 1,
      explanation: "Thomas Jefferson wrote the Declaration of Independence."
    }
  ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizResults = [];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');
const savedResults = document.getElementById('saved-results');
const aboutScreen = document.getElementById('about-screen');

const quizTitle = document.getElementById('quiz-title');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const viewAnswersBtn = document.getElementById('view-answers-btn');
const viewResultsBtn = document.getElementById('view-results-btn');
const backToResultsBtn = document.getElementById('back-to-results');
const resultsList = document.getElementById('results-list');
const reviewContainer = document.getElementById('review-container');
const backToHome = document.getElementById('back-to-home');
const backToHomeAbout = document.getElementById('back-to-home-about');
const navHome = document.getElementById('nav-home');
const navResults = document.getElementById('nav-results');
const navAbout = document.getElementById('nav-about');
const scoreDisplay = document.getElementById('score');
const celebrate = document.getElementById('celebrate');
const message = document.getElementById('message');

function loadSavedResults() {
  const saved = localStorage.getItem('quizResults');
  if (saved) {
    try {
      quizResults = JSON.parse(saved);
    } catch {
      quizResults = [];
    }
  } else {
    quizResults = [];
  }
}
loadSavedResults();

function setActiveNav(id) {
  [navHome, navResults, navAbout].forEach(nav => nav.classList.remove('active'));
  if (id) document.getElementById(id).classList.add('active');
}

function showScreen(screenId) {
  [startScreen, quizScreen, resultsScreen, reviewScreen, savedResults, aboutScreen].forEach(screen => {
    screen.classList.add('hide');
  });
  document.getElementById(screenId).classList.remove('hide');
  if (screenId === 'start-screen') setActiveNav('nav-home');
  else if (screenId === 'saved-results') setActiveNav('nav-results');
  else if (screenId === 'about-screen') setActiveNav('nav-about');
  else setActiveNav('');
}

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  quizTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Quiz`;
  showScreen('quiz-screen');
  questionContainer.classList.remove('hide');
  loadQuestion();
}

function loadQuestion() {
  const questions = quizData[currentCategory];
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = option;
    btn.value = index;
    btn.onclick = selectAnswer;
    optionsContainer.appendChild(btn);
  });
  updateProgress();
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = false;
  submitBtn.disabled = true;
  feedback.textContent = '';
  message.textContent = '';
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const answer = selectedBtn.value;
  const currentQuestion = quizData[currentCategory][currentQuestionIndex];
  userAnswers[currentQuestionIndex] = answer;
  if (answer == currentQuestion.answer) {
    selectedBtn.classList.add('correct');
    feedback.textContent = 'Correct!';
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
    feedback.textContent = 'Incorrect!';
  }
  Array.from(optionsContainer.children).forEach(btn => {
    btn.disabled = true;
  });
  submitBtn.disabled = false;
}

function updateProgress() {
  const questions = quizData[currentCategory];
  progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}

function nextQuestion() {
  const questions = quizData[currentCategory];
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    questionContainer.classList.add('hide');
    nextBtn.disabled = true;
    submitBtn.disabled = false;
    message.textContent = 'Quiz completed! Click Submit to see your results.';
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function skipQuestion() {
  userAnswers[currentQuestionIndex] = 'skipped';
  nextQuestion();
}

function submitQuiz() {
  const questions = quizData[currentCategory];
  const result = {
    category: currentCategory,
    score: score,
    total: questions.length,
    date: new Date().toLocaleString()
  };
  loadSavedResults();
  quizResults.push(result);
  localStorage.setItem('quizResults', JSON.stringify(quizResults));
  showScreen('results-screen');
  scoreDisplay.textContent = `You scored ${score} out of ${questions.length}!`;
  celebrate.textContent = score === questions.length ? '🎉 Perfect! 🎉' : '';
  message.textContent = '';
}

function displayResultsList() {
  loadSavedResults();
  resultsList.innerHTML = '';
  if (quizResults.length === 0) {
    resultsList.innerHTML = '<p>No results saved yet.</p>';
    return;
  }
  quizResults.forEach((result, index) => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.innerHTML = `
      <strong>${result.category.toUpperCase()}</strong>
      <span>Score: ${result.score}/${result.total}</span>
      <span>Date: ${result.date}</span>
    `;
    resultsList.appendChild(item);
  });
}

function reviewAnswers() {
  showScreen('review-screen');
  reviewContainer.innerHTML = '';
  const questions = quizData[currentCategory];
  questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'review-item';
    const userAnswer = userAnswers[idx];
    const correctOption = q.options[q.answer];
    item.innerHTML = `
      <h3>${idx + 1}. ${q.question}</h3>
      <p>Your answer: ${userAnswer === undefined || userAnswer === 'skipped' ? "Skipped" : q.options[userAnswer]}</p>
      <p class="correct-answer">Correct answer: ${correctOption}</p>
      <p class="explanation">${q.explanation}</p>
    `;
    reviewContainer.appendChild(item);
  });
}

function backToResults() {
  showScreen('results-screen');
}

function restartQuiz() {
  showScreen('start-screen');
}

// Event Listeners
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => startQuiz(btn.dataset.category));
});
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
skipBtn.addEventListener('click', skipQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);
viewAnswersBtn.addEventListener('click', reviewAnswers);
viewResultsBtn.addEventListener('click', () => {
  displayResultsList();
  showScreen('saved-results');
});
backToResultsBtn.addEventListener('click', backToResults);
backToHome.addEventListener('click', () => showScreen('start-screen'));
backToHomeAbout.addEventListener('click', () => showScreen('start-screen'));
navHome.addEventListener('click', () => showScreen('start-screen'));
navResults.addEventListener('click', () => {
  displayResultsList();
  showScreen('saved-results');
});
navAbout.addEventListener('click', () => showScreen('about-screen'));

// Initialize
showScreen('start-screen');
