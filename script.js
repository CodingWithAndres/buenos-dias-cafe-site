const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function updateServiceStatus() {
  const statusText = document.getElementById("status-text");
  const statusLink = document.getElementById("status-link");

  if (!statusText || !statusLink) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  const isDayMenuTime = currentTime >= 7 && currentTime < 14;
  const isNightMenuTime =
    currentTime >= 17 &&
    currentTime < 22 &&
    (day === 0 || day === 4 || day === 5 || day === 6); // Sun, Thu, Fri, Sat

  if (isDayMenuTime) {
    statusText.textContent =
      "We’re serving the day menu right now. Stop by for coffee, breakfast, and pastries.";
    statusLink.textContent = "View Day Menu";
    statusLink.href = "day-menu.html";
  } else if (isNightMenuTime) {
    statusText.textContent =
      "We’re serving the night menu right now. Join us for dinner and a warmer evening atmosphere.";
    statusLink.textContent = "View Night Menu";
    statusLink.href = "night-menu.html";
  } else {
    statusText.textContent =
      "We’re currently closed, but you can still explore the menu and plan your visit.";
    statusLink.textContent = "Plan Your Visit";
    statusLink.href = "contact.html";
  }
}

updateServiceStatus();