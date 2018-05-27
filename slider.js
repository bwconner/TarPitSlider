function updateSlideContent(slideNumber) {
	$(".slider-image").attr("src", tarPitSlider[slideNumber].image);
	$(".slider-title").html(tarPitSlider[slideNumber].title);
	$(".slider-content").html(tarPitSlider[slideNumber].content);
}

function sliderClick(direction) {
	var newSlide;
	var currentSlide = parseInt($(".slider-wrapper").attr("data-current-slide"));
	var totalSlides = parseInt($(".slider-wrapper").attr("data-total-slides"));

	if (direction === "prev") {
		newSlide = (currentSlide - 1);
		if (newSlide < 0) {
			newSlide = totalSlides - 1;
		}
	} else if (direction === "next") {
		newSlide = (currentSlide + 1) % totalSlides;
	}

	$(".slider-wrapper").attr("data-current-slide", newSlide)
	updateSlideContent(newSlide);
}

function initSlider() {
	updateSlideContent(0);
	$(".slider-prev").on("click", function() {
		sliderClick("prev");
	});
	$(".slider-next").on("click", function() {
		sliderClick("next");
	});
}

$(document).ready(function() {
	initSlider();
});