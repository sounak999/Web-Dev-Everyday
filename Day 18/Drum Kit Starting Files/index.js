var noOfDrumButtons = document.querySelectorAll("button").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  });
}

// document.querySelector("button").addEventListener("click", function ()
// {
//     alert("I got clicked");

//     // What to do when click detected
// })

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked");
// }
