const title = document.getElementById("headerTitle");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y < 600) {
    title.textContent = "Andanza";
  } else if (y < 1400) {
    title.textContent = "Testimonios";
  } else if (y < 2200) {
    title.textContent = "Audiovisual";
  } else {
    title.textContent = "Tipografía";
  }
});