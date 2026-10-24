for(var i = 0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleclick);
    function handleclick(){
        var buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);
        buttonAnimation(innerHTML);
    }
}
document.addEventListener("keypress" , function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})
function makesound(key){
    switch(key){
        case"w":
            var Tom1 = new Audio("tom-1.mp3");
            Tom1.play();
            break;
        case"a":
            var Tom2 = new Audio("tom-2.mp3");
            Tom2.play();
            break;
        case"s":
            var Tom3 = new Audio("tom-3.mp3");
            Tom3.play();
            break;
        case"d":
            var Tom4 = new Audio("tom-4.mp3");
            Tom4.play();
            break;
        case"j":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case"k":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
        case"l":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        default:console.log(key);    
    }
}
function buttonAnimation(currentkey){
    var active_button = document.querySelector("." + currentkey);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100)
}
