// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

// add event listener
$("h1").click(function () {
    $("h1").css("color", "purple");
    $("h1").addClass("big-title");
})

// using JS
/*
for(var i=0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "Red"; 
    })
}
*/

$("button").click(function () {
    $("h1").css("color", "orange");
})