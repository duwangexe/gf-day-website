document.addEventListener("DOMContentLoaded", () => {
  const hoverSound = document.getElementById("hover-sound");

  const hoverElements = document.querySelectorAll('.play-hover-sound');

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0; 
      hoverSound.play();
    });
  });
});