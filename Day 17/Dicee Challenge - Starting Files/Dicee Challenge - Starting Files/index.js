var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceSrc = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Play 2 Wins🏆";
}
else {
    document.querySelector("h1").textContent = "Draw 😉";
}
