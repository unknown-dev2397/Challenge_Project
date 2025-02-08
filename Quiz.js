import { jsQuestions } from "./js_questions.js";

const question = document.querySelector(".question h1");
const questionNum = document.querySelector(".question-num");
const choiceSec = document.querySelector(".choice-por");
const timer = document.querySelector(".timer");
const speakerIco = document.querySelector(".speaker-svg svg");
const wrongSelecAud = new Audio("/music/lookatthisdude.mp3");
const correSelecAud = new Audio("/music/yesdaddy.mp3");

let currentQuestionIndex = JSON.parse(localStorage.getItem("QuestionNum")) || 0;
let correctAnswr = JSON.parse(localStorage.getItem("correctAnswr")) || 0;
let timeLeft = JSON.parse(localStorage.getItem("Timer")) || 30;
let countdown;

const updateBackgroundColor = () => {
  document.body.style.backgroundColor =
    timeLeft > 15 ? "rgba(204, 226, 194, 1)" :
      timeLeft > 7 ? "#E4E5C7" :
        "rgba(219, 173, 173, 1)";

  timer.style.backgroundColor =
    timeLeft > 15 ? "rgba(1, 171, 8, 1)" :
      timeLeft > 7 ? "rgba(197, 177, 0, 0.65)" :
        "rgba(197, 12, 0, 0.65)";

  if (timeLeft === 0) document.location.href = "Result.html";
};

// const startTimer = () => {
//   if (countdown) clearInterval(countdown);
//   countdown = setInterval(() => {
//     if (timeLeft <= 0) {
//       clearInterval(countdown);
//       document.location.href = "Result.html";
//       return;
//     }
//     timeLeft--;
//     timer.textContent = `00:${String(timeLeft).padStart(2, "0")}`;
//     updateBackgroundColor();
//     localStorage.setItem("Timer", JSON.stringify(timeLeft));
//   }, 1000);
// };

const updateQuestion = () => {
  if (currentQuestionIndex >= jsQuestions.length) {
    document.location.href = "Result.html";
    return;
  }

  const currentQuestion = jsQuestions[currentQuestionIndex];
  question.innerText = currentQuestion.question;
  questionNum.innerText = `${currentQuestionIndex + 1}/${jsQuestions.length}`;
  choiceSec.innerHTML = "";

  currentQuestion.options.forEach((choice) => {
    const option = document.createElement("div");
    option.innerText = choice;
    option.classList.add("container-inputs");
    choiceSec.append(option);

    option.addEventListener("click", () => {
      document.querySelectorAll(".container-inputs").forEach(opt => {
        opt.style.pointerEvents = "none";
      });

      if (choice !== currentQuestion.answer) {
        option.classList.add("incorrect");
        wrongSelecAud.play();
      } else {
        option.classList.add("correct");
        correSelecAud.play();
        correctAnswr++;
        localStorage.setItem("correctAnswr", JSON.stringify(correctAnswr));
      }

      document.querySelectorAll(".container-inputs").forEach(opt => {
        if (opt.innerText === currentQuestion.answer) opt.classList.add("correct");
      });

      if (currentQuestionIndex === jsQuestions.length - 1) {
        setTimeout(() => document.location.href = "Result.html", 1500);
      } else {
        setTimeout(() => {
          timeLeft = 30;
          updateQuestion();
        }, 1500);
      }

      if (currentQuestionIndex !== jsQuestions.length) {
        currentQuestionIndex++;
        localStorage.setItem("QuestionNum", JSON.stringify(currentQuestionIndex));
      }
    });
  });

  // startTimer();
};

updateBackgroundColor();
updateQuestion();
