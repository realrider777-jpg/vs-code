
//  Slide  Animation //

const strip = document.getElementById('strip');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  const delay = 4000;
  function nextSlide() {
    index++;    
    if (index >= slides.length) {
      index = 0;
    }
    strip.style.transform = `translateX(-${index * 100}%)`;
  }
  setInterval(nextSlide, delay);


  