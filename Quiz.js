import { jsQuestions } from "./js_questions.js";

const question = document.querySelector(".question h1");
const questionNum = document.querySelector(".question-num");
const nextBtn = document.querySelector(".nav a");
const choiceSec = document.querySelector(".choice-por");
const timer = document.querySelector(".timer");
const speakerIco = document.querySelector(".speaker-svg svg");
const wrongSelecAud = new Audio("/music/lookatthisdude.mp3");
const correSelecAud = new Audio("/music/yesdaddy.mp3");

let currentQuestionIndex = JSON.parse(localStorage.getItem("QuestionNum")) || 0;
let correctAnswr = JSON.parse(localStorage.getItem("correctAnswr")) || 0;
let countdown;

let storedTimeLeft = JSON.parse(localStorage.getItem("Timer"));
let lastTimestamp = JSON.parse(localStorage.getItem("LastTimestamp"));
let originalTime = 30;

if (!storedTimeLeft || Date.now() - lastTimestamp > originalTime * 1000) {
  storedTimeLeft = 30;
  localStorage.setItem("Timer", JSON.stringify(storedTimeLeft));
  localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));
}

let timeLeft = storedTimeLeft;

localStorage.setItem("Timer", JSON.stringify(timeLeft));
localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));

const updateBackgroundColor = () => {
  if (timeLeft > 15) {
    document.body.style.backgroundColor = "rgba(204, 226, 194, 1)";
    timer.style.backgroundColor = "rgba(1, 171, 8, 1)";
    nextBtn.style.color = "rgba(1, 171, 8, 1)";
  } else if (timeLeft > 7) {
    document.body.style.backgroundColor = "#E4E5C7";
    timer.style.backgroundColor = "rgba(197, 177, 0, 0.65)";
    nextBtn.style.color = "#C58800";
  } else {
    document.body.style.backgroundColor = "rgba(219, 173, 173, 1)";
    timer.style.backgroundColor = "rgba(197, 12, 0, 0.65)";
    nextBtn.style.color = "rgba(197, 0, 0, 1)";
  }
};

const startTimer = () => {
  if (countdown) clearInterval(countdown);
  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      localStorage.removeItem("Timer");
      return;
    }

    timeLeft--;
    localStorage.setItem("Timer", JSON.stringify(timeLeft));
    localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));

    timer.textContent = `${String(Math.floor(timeLeft / 60)).padStart(
      2,
      "0"
    )}:${String(timeLeft % 60).padStart(2, "0")}`;
    updateBackgroundColor();
  }, 1000);
};

const updateQuestion = () => {
  if (currentQuestionIndex >= jsQuestions.length) {
    localStorage.removeItem("QuestionNum");
    clearInterval(countdown);
    setTimeout(() => {
      document.location.href = "page_3.html";
    }, 1000);
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
      isOptionSelected = true;

      const allOptions = document.querySelectorAll(".container-inputs");
      allOptions.forEach((opt) => {
        opt.classList.remove("correct", "incorrect");
        opt.style.pointerEvents = "none";
      });

      if (option.innerText !== currentQuestion.answer) {
        option.classList.add("incorrect");
        speakerIco.style.display = "block";
        wrongSelecAud.play();
        setTimeout(() => (speakerIco.style.display = "none"), 1700);
      } else {
        option.classList.add("correct");
        speakerIco.style.display = "block";
        correSelecAud.play();
        correctAnswr++;
        localStorage.setItem("correctAnswr", JSON.stringify(correctAnswr));
        setTimeout(() => (speakerIco.style.display = "none"), 1700);
      }

      allOptions.forEach((opt) => {
        if (opt.innerText === currentQuestion.answer) {
          opt.classList.add("correct");
        }
      });

      if (currentQuestionIndex === jsQuestions.length - 1) {
        localStorage.removeItem("QuestionNum");
        nextBtn.style.display = "block";
        clearInterval(countdown);
      }

      setTimeout(() => {
        if (currentQuestionIndex < jsQuestions.length - 1) {
          currentQuestionIndex++;
          localStorage.setItem(
            "QuestionNum",
            JSON.stringify(currentQuestionIndex)
          );
          timeLeft = 30;
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
  document.location.href = "Result.html";
});

updateBackgroundColor();
startTimer();
updateQuestion();
