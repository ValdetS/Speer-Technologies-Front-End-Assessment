//Create a variable to store all the slide show images
var images = [
    'images/hero_image.png',
    'images/hero_image_2.png',
    'images/hero_image_3.png'
];
//starting point for our slideshow counter
var active = 0;
//tells where the images should show
var image = document.getElementById('slideshow');

var slideshowBtn1 = document.getElementById('btn-1');
var slideshowBtn2 = document.getElementById('btn-2');
var slideshowBtn3 = document.getElementById('btn-3');

//actual slideshow function
function nextSlide() {
    active = active + 1;
    if (active >= images.length) {
        active = 0;
    }

    image.src = images[active];
    console.log(images[active]);

    if (images[active] == 'images/hero_image.png') {
        slideshowBtn1.style.backgroundColor = '#FFFFFF';
        slideshowBtn2.style.backgroundColor = 'transpaerent';
        slideshowBtn3.style.backgroundColor = 'transparent';
    }
    if (images[active] == 'images/hero_image_2.png') {
        slideshowBtn2.style.backgroundColor = '#FFFFFF';
        slideshowBtn1.style.backgroundColor = 'transparent';
        slideshowBtn3.style.backgroundColor = 'transparent';

    }
    if (images[active] == 'images/hero_image_3.png') {
        slideshowBtn3.style.backgroundColor = '#FFFFFF';
        slideshowBtn1.style.backgroundColor = 'transparent';
        slideshowBtn2.style.backgroundColor = 'transparent';
    }

}

//sets the rate at which the photos cycle through at
setInterval(nextSlide, 10000);


function changeSlide(n) {
    image.src = images[n];
    console.log(n);

    if (n == 0) {
        slideshowBtn1.style.backgroundColor = "#FFFFFF";
        slideshowBtn2.style.backgroundColor = 'transparent';
        slideshowBtn3.style.backgroundColor = 'transparent';
    }
    if (n == 1) {
        slideshowBtn2.style.backgroundColor = "#FFFFFF";
        slideshowBtn1.style.backgroundColor = 'transparent';
        slideshowBtn3.style.backgroundColor = 'transparent';
    }
    if (n == 2) {
        slideshowBtn3.style.backgroundColor = "#FFFFFF";
        slideshowBtn2.style.backgroundColor = 'transparent';
        slideshowBtn1.style.backgroundColor = 'transparent';
    }
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