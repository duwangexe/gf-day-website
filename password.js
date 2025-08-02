const correctPassword = "2023-04-08";

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("errorMsg");

  if (input === correctPassword) {
    window.location.href = "entry.html";
  } else {
    error.textContent = " oh mein gott bruh 💔";
  }
}
