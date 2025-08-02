document.querySelectorAll(".start-music-button").forEach(button => {
  button.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    if (music) {
      music.play();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".start-music-button").forEach(button => {
    button.addEventListener("click", () => {
      const music = document.getElementById("bg-music");
      if (music) {
        music.play().catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      }
    });
  });
});
