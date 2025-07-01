let theSong = document.getElementById("song");
let logo = document.getElementById("logo");

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