





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 500); // Change image every 2 seconds
}

function showAboutUs(){
    if(isShowAboutUs){
        
        aboutUs.style.display ="flex";
        aboutUs.style.position = "absolute";
        isShowAboutUs = false;
    }
}
function closeAboutUs(){
    if(closeAboutUs){
        aboutUs.style.display ="none";
        isShowAboutUs = true;
    }
}


