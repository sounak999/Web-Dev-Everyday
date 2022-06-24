// $("input").keydown(function(event)
// {
//     console.log(event.key);
// })

/*
$("h1").css("color", "purple");
$("h1").addClass("big-title");

$(document).keydown(function (event) {
  $("h1").text(event.key);
});
*/

// $("button").on("click", function () {
//     $("h1").css("color", "red");
//     $("h1").toggle();
// })

$("button").on("click", function () {
  // $("h1").animate({opacity: 0.5});
  // $("h1").animate({margin: 200});
  $("h1").slideUp().slideDown().animate({opacity: 0.6});
})