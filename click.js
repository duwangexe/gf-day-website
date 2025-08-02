document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("click-sound");

  document.body.addEventListener("click", (e) => {
    if (!e.target.closest('audio')) {
      clickSound.currentTime = 0; 
      clickSound.play();
    }
  });
});