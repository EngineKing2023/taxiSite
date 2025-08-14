let theSong = document.getElementById("song");
let logo = document.getElementById("logo");
let myDocument = document.documentElement;
let btn =document.getElementById("btn");
let button1 =document.querySelector(".button1");
let close =document.querySelector(".close");
let aboutUs = document.querySelector(".aboutUs");
let isShowAboutUs = true;





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


button1.addEventListener("click",()=>{
    if(button1.textContent == "About us"){

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



        
        button1.style.display="none";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
    }
    
            
    
    
})

close.addEventListener("click",()=>{
    if(close.textContent == "Close"){if(document.exitFullscreen){
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




           
            button1.style.display="block";
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        }

    })
logo.onclick= function(){
    
    if(theSong.paused){
        
        theSong.play();
        logo.src = "images/POUS.png"
    }
    else{
        theSong.pause();
        logo.src= "images/PLY.png";

    }
}