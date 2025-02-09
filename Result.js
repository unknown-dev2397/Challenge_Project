const retryBtn = document.querySelector(".btn");
const questionNum = document.querySelector(".graph-text");
const greenText = document.querySelector(".green-arrow-text span");
const redText = document.querySelector(".red-arrow-text span");
const greenGraph = document.querySelector(".graph .green");
const redGraph = document.querySelector(".graph .red");
const quote = document.querySelector(".quote");

const correctAnswr = JSON.parse(localStorage.getItem("correctAnswr")) || 0;
const currentQuestionIndex =
  JSON.parse(localStorage.getItem("QuestionNum")) || 0;
const lockedInAlien = new Audio("/music/100Score.mp3");

retryBtn.addEventListener("click", () => {
  localStorage.clear(); // Clear all stored data
  localStorage.setItem("Timer", "30"); // Reset timer
  document.location.href = "Quiz.html";
});

if (currentQuestionIndex > 0) {
  const progressPercentage = (correctAnswr / currentQuestionIndex) * 100 || 0;
  const remainingPercentage = 100 - progressPercentage;

  questionNum.innerText = `${correctAnswr}/${currentQuestionIndex}`;
  greenGraph.style.width = `${progressPercentage}%`;
  redGraph.style.width = `${remainingPercentage}%`;
  greenText.innerText = `${progressPercentage.toFixed(2)}%`;
  redText.innerText = `${remainingPercentage.toFixed(2)}%`;

  quote.innerText =
    progressPercentage >= 85
      ? (lockedInAlien.play().catch(() => {}), "You are locked In!")
      : progressPercentage > 50
      ? "Keep learning, you have a good score!"
      : progressPercentage > 25
      ? "Your only limit is your mind"
      : "Failure is not the opposite of success; it’s part of success.";
} else {
  document.querySelector(".parent-container").style.display = "none";
  quote.innerText = "Answer one question to see the result.";
}
