var num = document.querySelectorAll(".drum").length;
for(var i=0; i<num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    })
}

addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "b":
            var bird = new Audio('./sounds/bird.wav');
            bird.play();
            break;
        
        case "c":
            var cat = new Audio('./sounds/cat.wav');
            cat.play();
            break;
        
        case "d":
            var dog = new Audio('./sounds/dog.wav');
            dog.play();
            break;

        case "h":
            var horse = new Audio('./sounds/horse.wav');
            horse.play();
            break;
    
        case "l":
            var lion = new Audio('./sounds/lion.wav');
            lion.play();
            break;

        case "m":
            var monkey = new Audio('./sounds/monkey.wav');
            monkey.play();
            break;

        case "r":
            var rooster = new Audio('./sounds/rooster.wav');
            rooster.play();
            break;
        
        default:
            break;
    }
}

function addAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}