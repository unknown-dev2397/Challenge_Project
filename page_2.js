import { jsQuestions } from "./js_questions.js";
const question = document.querySelector(".question h1");
const questionNum = document.querySelector(".question-num");
const nextBtn = document.querySelector(".nav a");
const choiceSec = document.querySelector(".choice-por");
const timer = document.querySelector(".timer");

let currentQuestionIndex = 0;
let timeLeft = 30;
const halftime = Math.floor(timeLeft / 2);
const sevfivper = Math.floor(timeLeft * 0.25);
const countdown = setInterval(() => {
  timeLeft--;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  console.log(halftime);
  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (timeLeft <= 0) {
    clearInterval(countdown);
  }

  if (timeLeft <= halftime) {
    document.body.style.backgroundColor = "#E4E5C7";
    timer.style.backgroundColor = "rgba(197, 177, 0, 0.65)";
    nextBtn.style.color = "#C58800";
  }
  if (timeLeft <= sevfivper) {
    document.body.style.backgroundColor = "rgba(219, 173, 173, 1)";
    timer.style.backgroundColor = "rgba(197, 12, 0, 0.65)";
    nextBtn.style.color = "rgba(197, 0, 0, 1)";
  }
}, 1000);
const updateQuestion = () => {
  const currentQuestion = jsQuestions[currentQuestionIndex];
  question.innerText = currentQuestion.question;
  choiceSec.innerHTML = "";
  currentQuestion.options.forEach((choice) => {
    questionNum.innerText = `${currentQuestionIndex + 1}/${jsQuestions.length}`;
    const option = document.createElement("div");
    option.innerText = choice;
    option.classList.add("container-inputs");
    choiceSec.append(option);
  });
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < jsQuestions.length) {
    currentQuestionIndex++;
    updateQuestion();
  }
});

updateQuestion();
