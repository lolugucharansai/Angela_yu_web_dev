var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var op = this.innerHTML;
        makesound(op);
        
    });
}
document.addEventListener("keydown" , function(event){
    makesound(event.key);
});
function makesound(p){
    var audio;
        switch(p) {
            case 'w':
                audio = new Audio('sounds/tom-1.mp3');

                break;
            case 's':
                audio = new Audio('sounds/tom-2.mp3');
                break;
            case 'a':
                audio = new Audio('sounds/tom-3.mp3');
                break;
            case 'd':
                audio = new Audio('sounds/tom-4.mp3');
                break;
            case 'k':
                audio = new Audio('sounds/snare.mp3');
                break;
            case 'j':
                audio = new Audio('sounds/crash.mp3');
                break;
            case 'l':
                audio = new Audio('sounds/kick-bass.mp3');
                break;
            default:
                console.log(op);
        }
        if (audio) {
            audio.play();
            buttonanimation(p);
        }

}

function buttonanimation(press){
    var button = document.querySelector("." + press);
    button.classList.add("pressed");
 
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100); // adjust delay as needed
 }