const startDate = new Date("2023-04-08T19:45:00");

function updateTimer() {
  const now = new Date();
  let totalSeconds = Math.floor((now - startDate) / 1000);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const totalDays = Math.floor(totalSeconds / 86400);

  const totalMonths = Math.floor(totalDays / 28);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const remainingDaysAfterMonths = totalDays % 28;
  const weeks = Math.floor(remainingDaysAfterMonths / 7);
  const days = remainingDaysAfterMonths % 7;

  const timerElement = document.getElementById("timer");
  if (timerElement) {
    timerElement.innerHTML = `
      <div class="time-unit">
        ${years}<span class="time-label">Years</span>
      </div>
      <div class="time-unit">
        ${months}<span class="time-label">Months</span>
      </div>
      <div class="time-unit">
        ${weeks}<span class="time-label">Weeks</span>
      </div>
      <div class="time-unit">
        ${days}<span class="time-label">Days</span>
      </div>
      <div class="time-unit">
        ${hours}<span class="time-label">Hours</span>
      </div>
      <div class="time-unit">
        ${minutes}<span class="time-label">Minutes</span>
      </div>
      <div class="time-unit">
        ${seconds}<span class="time-label">Seconds</span>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateTimer();
  setInterval(updateTimer, 1000);
});

