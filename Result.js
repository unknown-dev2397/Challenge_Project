const RetryBtn = document.querySelector(".btn");
const QuestionNum = document.querySelector(".graph-text");
const GreenText = document.querySelector(".green-arrow-text span");
const RedText = document.querySelector(".red-arrow-text span");
let greenGraph = document.querySelector(".graph .green");
let redGraph = document.querySelector(".graph .red");
let GraphParent = document.querySelector(".parent-container");
let Qoute = document.querySelector(".quote");
let Timer = 30;
let correctAnswr = JSON.parse(localStorage.getItem("correctAnswr")) || 0;
let currentQuestionIndex = JSON.parse(localStorage.getItem("QuestionNum")) || 0;

const lockedInAlien = new Audio("/music/100Score.mp3");

RetryBtn.addEventListener("click", () => {
  localStorage.removeItem("correctAnswr");
  localStorage.removeItem("QuestionNum");
  localStorage.setItem("Timer", JSON.stringify(Timer));
  localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));
  document.location.href = "Quiz.html";
});

if (currentQuestionIndex > 0) {
  QuestionNum.innerText = `${correctAnswr}/${currentQuestionIndex}`;

  const progressPercentage =
    currentQuestionIndex > 0 ? (correctAnswr / currentQuestionIndex) * 100 : 0;
  const remainingPercentage = 100 - progressPercentage;

  greenGraph.style.width = `${progressPercentage}%`;
  redGraph.style.width = `${remainingPercentage}%`;
  GreenText.innerText = `${progressPercentage ? progressPercentage.toFixed(2) : 0}%`;
  RedText.innerText = `${remainingPercentage ? remainingPercentage.toFixed(2) : 0}%`;

  if (Qoute) {
    if (progressPercentage <= 25) {
      Qoute.innerHTML =
        "Failure is not the opposite of success; it’s part of success.";
    } else if (progressPercentage > 25 && progressPercentage <= 50) {
      Qoute.innerHTML = "Your only limit is your mind";
    } else if (progressPercentage > 50 && progressPercentage <= 85) {
      Qoute.innerHTML = "Keep learning, you have a good score!";
    } else if (progressPercentage >= 85) {
      try {
        lockedInAlien.play();
      } catch (err) {
        console.error("Error playing media:", err);
      }
      Qoute.innerHTML = "You are locked In!";
    }
  }
} else {
  GraphParent.style.display = "none";
  Qoute.innerHTML = "Answer one question to see the result.";
}
