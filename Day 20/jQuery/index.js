// $("h1").css("color", "red");

/*
console.log($("h1").css("color"));
$("h1").css("color", "green");
console.log($("h1").css("color"));
*/

$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");


// returns a boolean value
/*
console.log($("h1").hasClass("big-title"));
console.log($("h1").hasClass("margin-50"));
*/

// changing text and inner html
$("button").text("Alert bro!");
$("h1").html("<em>Sounak</em>");