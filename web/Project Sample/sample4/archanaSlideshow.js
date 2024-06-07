// yo variables ho
let slideIndex = 1;
let slides = document.getElementsByClassName("slide");

showSlide(slideIndex);

// Change slide on Prev/Next button click
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Show the slide corresponding to slideIndex
function showSlide(n) {
  // Reset slideIndex if it goes out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Show the active slide
  slides[slideIndex - 1].classList.add("active");
}
