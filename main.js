let myDocument = document.documentElement;
let btn =document.getElementById("btn");
let button1 =document.querySelector(".button1");
let button2 =document.querySelector(".button2");
let button3 =document.querySelector(".button3");
let button4 =document.querySelector(".button4");
let button5 =document.querySelector(".button5");
let button6 =document.querySelector(".button6");
let hide = document.querySelector(".hide");
let container3 = document.querySelector(".container3");
let container2 = document.querySelector(".container2");

let aboutUs = document.querySelector(".aboutUs");
let isShowAboutUs = true;
let contact = document.querySelector(".contact");
let isShowContact = true;
let engine = document.querySelector(".engine");
let isShowEngine = true;
let unity = document.querySelector(".unity");
let isShowUnity = true;
let websites = document.querySelector(".websites");
let isShowWebsites = true;
let plumber = document.querySelector(".plumber");
let isShowPlumber = true;





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
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 500); // Change image every 2 seconds
}



function showAboutUs(){
    if(isShowAboutUs){
        container3.style.display = "none";
        aboutUs.style.display ="flex";
        aboutUs.style.position = "absolute";
        
        isShowAboutUs = false;
    }
}
function closeAboutUs(){
    if(closeAboutUs){
        aboutUs.style.display ="none";
        container3.style.display = "flex";
        isShowAboutUs = true;
    }
}



function showContact(){
if(isShowContact){
    
    container2.style.display = "none";
    contact.style.display ="flex";
    contact.style.position = "absolute";
    isShowContact = false;
}
    
}
function closeContact(){
    if(closeContact){
        container2.style.display = "flex";
        contact.style.display ="none";
        isShowContact = true;
    }
}
function showEngine(){
    if(isShowEngine){
        engine.style.display ="flex";
        engine.style.position = "absolute";
        isShowEngine = false;
    }
}
function closeEngine(){
    if(closeEngine){
        engine.style.display ="none";
        isShowEngine = true;
    }
}
function showUnity(){
    if(isShowUnity){
        unity.style.display ="flex";
        unity.style.position = "absolute";
        isShowUnity = false;
    }
}
function closeUnity(){
    if(closeUnity){
        unity.style.display ="none";
        isShowUnity = true;
    }
}
function showWebsites(){
    if(isShowWebsites){
        websites.style.display ="flex";
        websites.style.position = "absolute";
        isShowWebsites = false;
    }
}
function closeWebsites(){
    if(closeWebsites){
        websites.style.display ="none";
        isShowWebsites = true;
    }
}
function showPlumber(){
    if(isShowPlumber){
        plumber.style.display ="flex";
        plumber.style.position = "absolute";
    }
}
function closePlumber(){
    if(closePlumber){
        plumber.style.display ="none";
        isShowPlumber = true;
    }
}
function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}

btn.addEventListener("click",()=>{
    if(btn.textContent == "Vstopi" ){

        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
       else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();
        }
        
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen();
        }



        
        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
        btn.textContent = "Izhod";
        hide.style.display = "none";
    }
    else{
            if(document.exitFullscreen){
                document.exitFullscreen();
            }
            else if(document.msexitFullscreen){
                document.msexitFullscreen();
            }
            else if(document.mozexitFullscreen){
                document.mozexitFullscreen();
            }
            else if(document.webkitexitFullscreen){
                document.webkitexitFullscreen();
            }




            
            button1.style.display="none";
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
            btn.textContent = "Vstopi";
            hide.style.display = "block";
    }
})
