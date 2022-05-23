var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 
}

//for timer in about us content
// var slideIndex1 = 0;
// showSlides1();
// function showSlides1() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex1++;
//   if (slideIndex1 > slides.length) {slideIndex1 = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex1-1].style.display = "block";  
//   dots[slideIndex1-1].className += " active";
//   setTimeout(showSlides1, 2000); // Change image every 2 seconds
// }


// js for team slider
 var slide=1;
 showTeam(slide)
 function plusteam(n){
    showTeam(slide+=n)
}function currteam(n){
    showTeam(slide=n)
}


function showTeam(n) {
    var i;
    var slider = document.getElementsByClassName("team");
    if (n > slider.length) {slide = 1}    
    if (n < 1) {slide = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";  
    }
    slider[slide-1].style= "display: flex;flex-direction: row;    justify-content: space-evenly;    align-items: center;";
   
}


var slideIndex1= 0;
showSlider2();

function showSlider2() {
  var i;
  var slides = document.getElementsByClassName("team");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    

  slides[slideIndex1-1].style= "display: flex;flex-direction: row;    justify-content: space-evenly;    align-items: center;";
  setTimeout(showSlider2, 7000); // Change image every 2 seconds
}

