//variable
let bom = document.querySelectorAll(".drum").length;


//methods
//click and sound
//detecting button press
    for(let i =0; i < bom ; i++) {
        document.querySelectorAll('.drum')[i].addEventListener("click", function () {
            this.style.color = "red";
            const buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
        });
    }
    //detecting keyboard press
    document.addEventListener("keydown", function (event) {
            makeSound(event.key); // key =  toets op toetsenbord
        buttonAnimation(event.key);// toets zorgt voor animatie trigger

        });

    function makeSound(key) { // wanneer er gedrukt word --> geluid
    switch(key){
        case "w":
            const audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "a":
            const audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            const audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;
        case "d":
            const audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play();
            break;
        case "j":
            const audio4 = new Audio("sounds/crash.mp3");
            audio4.play();
            break;
        case "k":
            const audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
            break;
        case "l":
            const audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
};
    function buttonAnimation(currentKey) {
       const activeButton = document.querySelector("." + currentKey);// ". + w = .W  dit is een klasse "
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
            }, 100);


    }

/*switch(buttonInnerHtml){
    case "w":
        const audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "a":
        const audio1 = new Audio("sounds/tom-2.mp3");
        audio1.play();
        break;
    case "s":
        const audio2 = new Audio("sounds/tom-3.mp3");
        audio2.play();
        break;
    case "d":
        const audio3 = new Audio("sounds/tom-4.mp3");
        audio3.play();
        break;
    case "j":
        const audio4 = new Audio("sounds/crash.mp3");
        audio4.play();
        break;
    case "k":
        const audio5 = new Audio("sounds/kick-bass.mp3");
        audio5.play();
        break;
    case "l":
        const audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        break;
    default:
        console.log(buttonInnerHtml);
}
*/

//let audio = new Audio("sounds/tom-1.mp3")
//audio.play()
/* ___Constructor_____
function Audio(filerLocation) {
        this.fileLocation = filerLocation;
        this.play= function() {}
}*/
