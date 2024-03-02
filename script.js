const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const startButton = document.getElementById("start-quiz");
const questionElement = document.getElementById("question");
const option1Element = document.getElementById("option1Text");
const option2Element = document.getElementById("option2Text");
const option3Element = document.getElementById("option3Text");
const option4Element = document.getElementById("option4Text");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("scoreResult");
const restartButton = document.getElementById("restart");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
}

function checkAnswer() {
  const correctAnswer = "4";
  const selectedOption = document.querySelector("input[name='option']:checked");
  if (!selectedOption) {
    feedbackElement.textContent = "Please Select an Option!";
    return;
  }
  const userAnswer = selectedOption.nextElementSibling.textContent;
  if (userAnswer === correctAnswer) {
    score++;
    feedbackElement.textContent = "Correct!";
  } else {
    feedbackElement.textContent =
      "Incorrect ! The correct answer is :" + correctAnswer;
  }
  displayResult();
}

function displayResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreElement.textContent = score + " out of 1";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  startButton.style.display = "block";
  quizContainer.style.display = "none";
  resultContainer.style.display = "none";
  feedbackElement.textContent = "";
}
