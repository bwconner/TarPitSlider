function initSlider() {
	$(".slider-image").attr('src', tarPitSlider[0].image);
	$(".slider-title").html(tarPitSlider[0].title);
	$(".slider-content").html(tarPitSlider[0].content);
}

$(document).ready(function() {
	initSlider();
});