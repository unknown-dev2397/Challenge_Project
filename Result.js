import { jsQuestions } from "./js_questions.js";

const RetryBtn = document.querySelector(".btn");
const QuestionNum = document.querySelector(".graph-text");
const GreenText = document.querySelector(".green-arrow-text span");
const RedText = document.querySelector(".red-arrow-text span");
let greenGraph = document.querySelector(".graph .green");
let redGraph = document.querySelector(".graph .red");
let Qoute = document.querySelector(".quote");
let correctAnswr = JSON.parse(localStorage.getItem("correctAnswr")) || 0;
const lockedInAlien = new Audio("/music/100Score.mp3");
let Timer = 30;

RetryBtn.addEventListener("click", () => {
  localStorage.removeItem("correctAnswr");
  localStorage.setItem("Timer", JSON.stringify(Timer));
  localStorage.setItem("LastTimestamp", JSON.stringify(Date.now()));
  document.location.href = "Quiz.html";
});

QuestionNum.innerText = `${correctAnswr}/${jsQuestions.length}`;

if (greenGraph && redGraph && GreenText && RedText) {
  const progressPercentage = (correctAnswr / jsQuestions.length) * 100;
  const remainingPercentage = 100 - progressPercentage;

  greenGraph.style.width = `${progressPercentage}%`;
  redGraph.style.width = `${remainingPercentage}%`;
  GreenText.innerText = `${progressPercentage.toFixed(2)}%`;
  RedText.innerText = `${remainingPercentage.toFixed(2)}%`;

  if (Qoute) {
    if (progressPercentage <= 25) {
      Qoute.innerHTML =
        "Failure is not the opposite of success; it’s part of success.";
    } else if (progressPercentage > 25 && progressPercentage <= 50) {
      Qoute.innerHTML = "Your only limit is your mind";
    } else if (progressPercentage > 50 && progressPercentage <= 75) {
      Qoute.innerHTML = "Keep learning, you have a good score!";
    } else {
      lockedInAlien.play();
      Qoute.innerHTML = "You are locked In!";
    }
  }
}
