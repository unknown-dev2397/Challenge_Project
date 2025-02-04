import { jsQuestions } from "./js_questions.js";

const question = document.querySelector(".question h1");
const questionNum = document.querySelector(".question-num");
const nextBtn = document.querySelector(".nav a");
const choiceSec = document.querySelector(".choice-por");
const timer = document.querySelector(".timer");

let currentQuestionIndex = JSON.parse(localStorage.getItem("QuestionNum")) || 0;
let timeLeft = 30;
let countdown;

const halftime = Math.floor(timeLeft / 2);
const sevfivper = Math.floor(timeLeft * 0.25);

const startTimer = () => {
  if (countdown) {
    clearInterval(countdown);
  }

  countdown = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
    }

    if (timeLeft === timeLeft) {
      document.body.style.backgroundColor = "rgba(204, 226, 194, 1)";
      timer.style.backgroundColor = "#02a409";
      nextBtn.style.color = "rgba(1, 171, 8, 1)";
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
};

const updateQuestion = () => {
  const currentQuestion = jsQuestions[currentQuestionIndex];
  question.innerText = currentQuestion.question;
  choiceSec.innerHTML = "";
  let isOptionSelected = false;

  currentQuestion.options.forEach((choice) => {
    questionNum.innerText = `${currentQuestionIndex + 1}/${jsQuestions.length}`;
    const option = document.createElement("div");
    option.innerText = choice;
    option.classList.add("container-inputs");
    choiceSec.append(option);

    option.addEventListener("click", () => {
      if (isOptionSelected) return;

      const allOptions = document.querySelectorAll(".container-inputs");
      allOptions.forEach((opt) => {
        opt.classList.remove("correct", "incorrect");
        opt.style.pointerEvents = "none";
      });

      if (option.innerText !== currentQuestion.answer) {
        option.classList.add("incorrect");
      }

      allOptions.forEach((opt) => {
        if (opt.innerText === currentQuestion.answer) {
          opt.classList.add("correct");
        }
      });

      isOptionSelected = true;

      setTimeout(() => {
        if (currentQuestionIndex < jsQuestions.length - 1) {
          currentQuestionIndex++;
          localStorage.setItem(
            "QuestionNum",
            JSON.stringify(currentQuestionIndex)
          );
          updateQuestion();
        }
      }, 500);
    });
  });

  timeLeft = timeLeft;
  startTimer();
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < jsQuestions.length - 1) {
    currentQuestionIndex++;
    localStorage.setItem("QuestionNum", currentQuestionIndex);
    if (currentQuestionIndex >= jsQuestions.length - 1) {
      localStorage.removeItem("QuestionNum");
      nextBtn.style.display = "none";
    }
    updateQuestion();
  }
});

startTimer();
updateQuestion();
