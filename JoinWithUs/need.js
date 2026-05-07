const carouselTrack = document.getElementById("carouselTrack");
const allSlides = carouselTrack.querySelectorAll("img");

let currentSlideIndex = 0;
const totalSlidesCount = allSlides.length;

function moveToSlide(slideNumber) {
 
  carouselTrack.style.transform = `translateX(-${slideNumber * 100}%)`;
}

setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlidesCount;
  moveToSlide(currentSlideIndex);
}, 3000);
