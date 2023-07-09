var currentSlide=0;
var slides=document.querySelectorAll('.main img');
function showSlide(){
    slides.forEach(function(slide){
        slide.style.display='none';
    });
    slides[currentSlide].style.display='block';
}
function next() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide();
  }
  
  function previous() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide();
  }
  
  
  
  
  
  
  