// script.js (updated for dark mode toggle)

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save theme
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Update Lottie
  updateLottieForTheme();
});
}
const lottie = document.getElementById("hello-lottie");

function updateLottieForTheme() {
  const isDark = document.body.classList.contains("dark-mode");
  if (lottie) {
    lottie.load(isDark ? "./assets/Hello_dark.json" : "./assets/Hello.json");
  }
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateLottieForTheme();
});
// Existing toggleMenu function if it exists
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
