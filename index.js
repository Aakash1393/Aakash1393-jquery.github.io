
$(document).ready(() => {

$("#random").click(function()
{
$("p").toggle();

})



$("#both").click(function()
{
	$("h5").toggle();
	$("h6").toggle();

})

$(".header").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500);
});



$(".clickable").click(function () {

    $clickable = $(this);
    //getting the next element
    $text = $clickable.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $text.slideToggle(500);
});

})








