import { jsQuestions } from "./js_questions.js";

const question = document.querySelector(".question h1");
const questionNum = document.querySelector(".question-num");
const nextBtn = document.querySelector(".nav a");
const choiceSec = document.querySelector(".choice-por");
const timer = document.querySelector(".timer");
const speakerIco = document.querySelector(".speaker-svg svg");
const wrongSelecAud = new Audio("/music/look-at-this-dude.mp3");
const correSelecAud = new Audio("/music/yes-daddy_CKEAffI.mp3");

let currentQuestionIndex = JSON.parse(localStorage.getItem("QuestionNum")) || 0;
let storedTimeLeft = JSON.parse(localStorage.getItem("Timer"));
let lastTimestamp = JSON.parse(localStorage.getItem("LastTimestamp"));
let countdown;

let timeLeft;

if (storedTimeLeft && lastTimestamp) {
  const elapsedTime = Math.floor((Date.now() - lastTimestamp) / 1000);
  timeLeft = Math.max(storedTimeLeft - elapsedTime, 0);
} else {
  timeLeft = 20;
}

const halftime = Math.floor(timeLeft / 2);
const sevfivper = Math.floor(timeLeft * 0.25);

const startTimer = () => {
  if (countdown) clearInterval(countdown);

  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      localStorage.removeItem("QuestionNum");
      localStorage.removeItem("Timer");
      nextBtn.style.display = "block";
      return;
    }

    timeLeft--;
    localStorage.setItem("Timer", JSON.stringify(timeLeft));
    localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    if (timeLeft > halftime) {
      document.body.style.backgroundColor = "rgba(204, 226, 194, 1)";
      timer.style.backgroundColor = "#02a409";
      nextBtn.style.color = "rgba(1, 171, 8, 1)";
    } else if (timeLeft <= halftime && timeLeft > sevfivper) {
      document.body.style.backgroundColor = "#E4E5C7";
      timer.style.backgroundColor = "rgba(197, 177, 0, 0.65)";
      nextBtn.style.color = "#C58800";
    } else {
      document.body.style.backgroundColor = "rgba(219, 173, 173, 1)";
      timer.style.backgroundColor = "rgba(197, 12, 0, 0.65)";
      nextBtn.style.color = "rgba(197, 0, 0, 1)";
    }
  }, 1000);
};

const updateQuestion = () => {
  if (currentQuestionIndex >= jsQuestions.length) {
    localStorage.removeItem("QuestionNum");
    nextBtn.style.display = "none";
    return;
  }

  const currentQuestion = jsQuestions[currentQuestionIndex];
  question.innerText = currentQuestion.question;
  questionNum.innerText = `${currentQuestionIndex + 1}/${jsQuestions.length}`;
  choiceSec.innerHTML = "";
  let isOptionSelected = false;

  currentQuestion.options.forEach((choice) => {
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
        speakerIco.style.display = "block";
        wrongSelecAud.play();

        setTimeout(() => {
          speakerIco.style.display = "none";
        }, 1700);
      }

      if (option.innerText === currentQuestion.answer) {
        speakerIco.style.display = "block";
        correSelecAud.play();
        setTimeout(() => {
          speakerIco.style.display = "none";
        }, 1700);
      }

      allOptions.forEach((opt) => {
        if (opt.innerText === currentQuestion.answer) {
          opt.classList.add("correct");
        }
      });

      isOptionSelected = true;
      if (currentQuestionIndex === jsQuestions.length - 1) {
        localStorage.removeItem("QuestionNum");
        nextBtn.style.display = "block";
      }
      setTimeout(() => {
        if (currentQuestionIndex < jsQuestions.length - 1) {
          nextBtn.style.display = "none";
          currentQuestionIndex++;
          localStorage.setItem(
            "QuestionNum",
            JSON.stringify(currentQuestionIndex)
          );
          timeLeft = 20;
          localStorage.setItem("Timer", JSON.stringify(timeLeft));
          localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));
          updateQuestion();
        }
      }, 1500);
    });
  });

  startTimer();
};

nextBtn.addEventListener("click", () => {
  document.location.href = "page_3.html";
});

startTimer();
updateQuestion();
