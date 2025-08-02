 document.addEventListener("DOMContentLoaded", () => {
      const hoverSeal = document.querySelector(".seal-hover");
      const originalSrc = hoverSeal.getAttribute("src");
      const hoverSrc = hoverSeal.getAttribute("data-hover");

      hoverSeal.addEventListener("mouseover", () => {
        hoverSeal.src = hoverSrc;
      });

      hoverSeal.addEventListener("mouseout", () => {
        hoverSeal.src = originalSrc;
      });
    });