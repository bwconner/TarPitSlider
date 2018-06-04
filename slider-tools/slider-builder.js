var inputSet = "<input class='input-image' placeholder='image src'/> <input class='input-title' placeholder='slide title'/> <input class='input-content' placeholder='slide content'/>"

function buildOutputField() {
	var output = "var tarPitSlider = [];";
	var slideNumber = 0;

	$('.input-wrapper').each(function () {
		var $this = $(this);
		console.log($this.children("input.input-image"));
		output += "tarPitSlider[" + slideNumber + "] = {'image':" + $this.children(".input-image")[0].value + ", 'title':" + $this.children(".input-title")[0].value + ", 'content': " + $this.children(".input-content")[0].value + "};"
		slideNumber++;
	});

	$(".slider-output").html(output);
	$(".slider-output").removeClass("hidden");
	$(".slider-output__title").removeClass("hidden");
}

function buildInputFields(numOfInput) {
	var inputFields = '', inputWrapper = '';

	while (numOfInput > 0) {
		//output number of slides
		inputWrapper = "<div class='input-wrapper'>";
		inputFields += inputWrapper + inputSet + "</div>";
		numOfInput--;
	}

	$(".input-fields").html(inputFields);
	$(".generate-output").removeClass("hidden");
}

function initSliderBuilder() {
	$(".number-of-slides").on("change", function() {
		buildInputFields(this.value);
	});

	$(".generate-output").on("click", function() {
		buildOutputField();
	});
}


$(document).ready(function() {
	initSliderBuilder();
});