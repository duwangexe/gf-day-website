document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const volumeSlider = document.getElementById("volumeControl");

  volumeSlider.addEventListener("input", () => {
    if (bgMusic) {
      bgMusic.volume = volumeSlider.value;
    }
  });

  
  if (bgMusic) {
    bgMusic.volume = volumeSlider.value;
  }
  });