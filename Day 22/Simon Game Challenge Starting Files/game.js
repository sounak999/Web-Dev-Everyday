// our available colors
var buttonColors = ["red", "blue", "green", "yellow"];


// computer generated pattern
var gamePattern = [];
// user given pattern
var userClickedPattern = [];


// bool variable to check if the game has already started or not
var started = false;
var level = 0;


// press any key to start the game
$(document).keydown(function() {
    // this block mark the start of the game
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})


// user pattern gets filled up as we press our buttons
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    checkAnswer(userClickedPattern.length-1);
});


// answer checking function
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }
        
    }
    else {
        console.log("wrong");
    }
}

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);    
}